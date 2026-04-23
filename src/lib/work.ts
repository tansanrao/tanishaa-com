import { getImage } from 'astro:assets';
import { getCollection, type CollectionEntry } from 'astro:content';
import { unified } from 'unified';
import rehypeStringify from 'rehype-stringify';
import remarkGfm from 'remark-gfm';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';

type WorkEntry = CollectionEntry<'work'>;
type WorkImage = WorkEntry['data']['listingImage']['src'];
type WorkMediaEntry = WorkEntry['data']['mainGallery'][number];
type ViewerTransform = Awaited<ReturnType<typeof getImage>>;

export interface WorkMedia {
  image: WorkImage;
  alt: string;
  caption?: string;
  viewerSrc: string;
  viewerWidth: number;
  viewerHeight: number;
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

const toViewerDimensions = (viewer: ViewerTransform) => ({
  viewerWidth: Number(viewer.attributes.width ?? 0),
  viewerHeight: Number(viewer.attributes.height ?? 0),
});

const toMedia = async (item: WorkMediaEntry): Promise<WorkMedia> => {
  const viewer = await getImage({
    src: item.src,
    format: 'webp',
    width: Math.min(item.src.width, 1600),
    quality: 'high',
  });

  return {
    image: item.src,
    alt: item.alt,
    caption: item.caption,
    viewerSrc: viewer.src,
    ...toViewerDimensions(viewer),
  };
};

const toListingMedia = async (item: WorkEntry['data']['listingImage']): Promise<WorkMedia> => {
  const viewer = await getImage({
    src: item.src,
    format: 'webp',
    width: Math.min(item.src.width, 1600),
    quality: 'high',
  });

  return {
    image: item.src,
  alt: item.alt,
    viewerSrc: viewer.src,
    ...toViewerDimensions(viewer),
  };
};

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
  const [overviewHtml, processHtml, listingImage, mainGallery, processGallery] = await Promise.all([
    renderMarkdown(sections.overview),
    renderMarkdown(sections.process),
    toListingMedia(entry.data.listingImage),
    Promise.all(entry.data.mainGallery.map(toMedia)),
    Promise.all(entry.data.processGallery.map(toMedia)),
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
    listingImage,
    mainGallery,
    processGallery,
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
