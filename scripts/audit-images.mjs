import {
  DIST_ROOT,
  PUBLIC_ROOT,
  ROOT,
  SOURCE_ROOT,
  TEN_MB,
  collectRasterFiles,
  formatBytes,
  getTopOffenders,
  summarizeByProject,
} from './image-audit-utils.mjs';

const printSection = (title) => {
  console.log(`\n${title}`);
};

const printTopOffenders = (files) => {
  for (const file of files) {
    const dimensions = file.width && file.height ? ` | ${file.width}x${file.height}` : '';
    const status = file.size > TEN_MB ? ' | over 10 MB' : '';
    console.log(`- ${file.relativePath} | ${formatBytes(file.size)}${dimensions}${status}`);
  }
};

const sourceFiles = await collectRasterFiles(SOURCE_ROOT);
const distFiles = await collectRasterFiles(DIST_ROOT).catch(() => []);
const publicFiles = await collectRasterFiles(PUBLIC_ROOT);

console.log(`Workspace: ${ROOT}`);

printSection('Tracked Source Images');
console.log(`- Count: ${sourceFiles.length}`);
console.log(`- Total: ${formatBytes(sourceFiles.reduce((sum, file) => sum + file.size, 0))}`);
console.log(`- Over 10 MB: ${sourceFiles.filter((file) => file.size > TEN_MB).length}`);

for (const project of summarizeByProject(sourceFiles, SOURCE_ROOT)) {
  console.log(`- ${project.projectName}: ${project.count} images, ${formatBytes(project.size)}, ${project.overLimit} over 10 MB`);
}

printSection('Top Source Offenders');
printTopOffenders(getTopOffenders(sourceFiles, 12));

printSection('Public Raster Images');
if (!publicFiles.length) {
  console.log('- None');
} else {
  printTopOffenders(publicFiles);
}

printSection('Built Dist Images');
if (!distFiles.length) {
  console.log('- dist/ not found. Run `npm run build` first.');
} else {
  console.log(`- Count: ${distFiles.length}`);
  console.log(`- Total: ${formatBytes(distFiles.reduce((sum, file) => sum + file.size, 0))}`);
  console.log(`- Over 10 MB: ${distFiles.filter((file) => file.size > TEN_MB).length}`);
  printSection('Top Dist Offenders');
  printTopOffenders(getTopOffenders(distFiles, 12));
}
