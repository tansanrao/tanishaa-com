import { PUBLIC_ROOT, DIST_ROOT, TEN_MB, collectRasterFiles, formatBytes } from './image-audit-utils.mjs';

const publicFiles = await collectRasterFiles(PUBLIC_ROOT);
const distFiles = await collectRasterFiles(DIST_ROOT);

const publicViolations = publicFiles.filter((file) => file.size > 0);
const distViolations = distFiles.filter((file) => file.size > TEN_MB);

if (!publicViolations.length && !distViolations.length) {
  console.log('Image checks passed: no raster images in public/ and no dist images over 10 MB.');
  process.exit(0);
}

if (publicViolations.length) {
  console.error('Raster images are not allowed in public/. Move them to src/ so Astro can optimize them.');
  for (const file of publicViolations) {
    console.error(`- ${file.relativePath} (${formatBytes(file.size)})`);
  }
}

if (distViolations.length) {
  console.error('Built raster images exceeded the 10 MB hard limit.');
  for (const file of distViolations) {
    const dimensions = file.width && file.height ? `, ${file.width}x${file.height}` : '';
    console.error(`- ${file.relativePath} (${formatBytes(file.size)}${dimensions})`);
  }
}

process.exit(1);
