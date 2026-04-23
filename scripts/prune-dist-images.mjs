import fs from 'node:fs/promises';
import path from 'node:path';
import { DIST_ROOT, RASTER_EXTENSIONS, ROOT, formatBytes, walk } from './image-audit-utils.mjs';

const TEXT_EXTENSIONS = new Set(['.html', '.css', '.js', '.json', '.xml', '.txt', '.webmanifest']);

const files = await walk(DIST_ROOT);
const textFiles = files.filter((filePath) => TEXT_EXTENSIONS.has(path.extname(filePath).toLowerCase()));
const rasterFiles = files.filter((filePath) => RASTER_EXTENSIONS.has(path.extname(filePath).toLowerCase()));

const texts = await Promise.all(textFiles.map((filePath) => fs.readFile(filePath, 'utf8')));

const toDistUrl = (filePath) =>
  `/${path.relative(DIST_ROOT, filePath).split(path.sep).map(encodeURIComponent).join('/')}`;

const deleted = [];

for (const filePath of rasterFiles) {
  const assetUrl = toDistUrl(filePath);
  const isReferenced = texts.some((content) => content.includes(assetUrl));

  if (isReferenced) {
    continue;
  }

  const stats = await fs.stat(filePath);
  await fs.unlink(filePath);
  deleted.push({
    relativePath: path.relative(ROOT, filePath),
    size: stats.size,
  });
}

if (!deleted.length) {
  console.log('Pruned dist assets: no unreferenced raster files found.');
  process.exit(0);
}

console.log('Pruned dist assets: removed unreferenced raster files.');
for (const file of deleted) {
  console.log(`- ${file.relativePath} (${formatBytes(file.size)})`);
}
