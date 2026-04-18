import { getCollection, type CollectionEntry } from 'astro:content';
import { unified } from 'unified';
import rehypeStringify from 'rehype-stringify';
import remarkGfm from 'remark-gfm';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';

type WorkEntry = CollectionEntry<'work'>;
type ImageLike = string | { src: string };

export interface WorkMedia {
  src: string;
  alt: string;
  caption?: string;
}

export interface WorkProject {
  id: string;
  title: string;
  order: number;
  year: string;
  medium?: string;
  publication?: string;
  indexSummary: string;
  detailSummary: string;
  listingImage: WorkMedia;
  mainGallery: WorkMedia[];
  processGallery: WorkMedia[];
  overviewHtml: string;
  processHtml: string;
}

const markdownProcessor = unified().use(remarkParse).use(remarkGfm).use(remarkRehype).use(rehypeStringify);

const toImageSrc = (value: ImageLike) => (typeof value === 'string' ? value : value.src);

const toMedia = (item: { src: ImageLike; alt: string; caption?: string }): WorkMedia => ({
  src: toImageSrc(item.src),
  alt: item.alt,
  caption: item.caption,
});

const splitMarkdownSections = (body: string) => {
  const normalized = body.replace(/\r\n/g, '\n').trim();
  if (!normalized) {
    return { overview: '', process: '' };
  }

  const sections = {
    overview: [] as string[],
    process: [] as string[],
  };

  let sawHeading = false;
  let activeSection: 'overview' | 'process' = 'overview';

  for (const line of normalized.split('\n')) {
    const match = line.match(/^##\s+(.*)$/);
    if (match) {
      const heading = match[1]?.trim().toLowerCase();
      if (heading === 'overview' || heading === 'process') {
        sawHeading = true;
        activeSection = heading;
        continue;
      }
    }

    sections[activeSection].push(line);
  }

  if (!sawHeading) {
    return { overview: normalized, process: '' };
  }

  return {
    overview: sections.overview.join('\n').trim(),
    process: sections.process.join('\n').trim(),
  };
};

const renderMarkdown = async (markdown: string) => {
  if (!markdown.trim()) {
    return '';
  }

  const file = await markdownProcessor.process(markdown);
  return String(file);
};

const normalizeWorkEntry = async (entry: WorkEntry): Promise<WorkProject> => {
  const sections = splitMarkdownSections(entry.body ?? '');
  const [overviewHtml, processHtml] = await Promise.all([
    renderMarkdown(sections.overview),
    renderMarkdown(sections.process),
  ]);

  return {
    id: entry.id,
    title: entry.data.title,
    order: entry.data.order,
    year: entry.data.year,
    medium: entry.data.medium,
    publication: entry.data.publication,
    indexSummary: entry.data.indexSummary,
    detailSummary: entry.data.detailSummary,
    listingImage: toMedia(entry.data.listingImage),
    mainGallery: entry.data.mainGallery.map(toMedia),
    processGallery: entry.data.processGallery.map(toMedia),
    overviewHtml,
    processHtml,
  };
};

export const getWorkProjects = async () => {
  const entries = await getCollection('work');
  const projects = await Promise.all(entries.map(normalizeWorkEntry));
  return projects.sort((left, right) => left.order - right.order);
};

export const getWorkProject = async (id: string) => {
  const entries = await getCollection('work', (entry) => entry.id === id);
  const [entry] = entries;
  return entry ? normalizeWorkEntry(entry) : undefined;
};
