import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

export const ROOT = path.resolve(new URL('..', import.meta.url).pathname);
export const SOURCE_ROOT = path.join(ROOT, 'src', 'content', 'work');
export const PUBLIC_ROOT = path.join(ROOT, 'public');
export const DIST_ROOT = path.join(ROOT, 'dist');
export const TEN_MB = 10 * 1024 * 1024;
export const RASTER_EXTENSIONS = new Set(['.jpg', '.jpeg', '.png', '.webp', '.avif', '.gif']);

export const formatBytes = (bytes) => {
  if (bytes >= 1024 * 1024) {
    return `${(bytes / 1024 / 1024).toFixed(2)} MB`;
  }

  if (bytes >= 1024) {
    return `${Math.round(bytes / 1024)} KB`;
  }

  return `${bytes} B`;
};

export const isRasterImage = (filePath) => RASTER_EXTENSIONS.has(path.extname(filePath).toLowerCase());

export const walk = async (directoryPath) => {
  const entries = await fs.readdir(directoryPath, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const entryPath = path.join(directoryPath, entry.name);

      if (entry.isDirectory()) {
        return walk(entryPath);
      }

      return [entryPath];
    })
  );

  return files.flat();
};

export const getImageDimensions = async (filePath) => {
  try {
    const metadata = await sharp(filePath).metadata();
    return {
      width: metadata.width ?? 0,
      height: metadata.height ?? 0,
    };
  } catch {
    return {
      width: 0,
      height: 0,
    };
  }
};

export const collectRasterFiles = async (directoryPath) => {
  const files = await walk(directoryPath);
  const rasters = files.filter(isRasterImage);

  return Promise.all(
    rasters.map(async (filePath) => {
      const stats = await fs.stat(filePath);
      const { width, height } = await getImageDimensions(filePath);

      return {
        path: filePath,
        relativePath: path.relative(ROOT, filePath),
        size: stats.size,
        width,
        height,
      };
    })
  );
};

export const summarizeByProject = (files, basePath) => {
  const buckets = new Map();

  for (const file of files) {
    const relative = path.relative(basePath, file.path);
    const [projectName] = relative.split(path.sep);
    const bucket = buckets.get(projectName) ?? { projectName, count: 0, size: 0, overLimit: 0 };

    bucket.count += 1;
    bucket.size += file.size;
    if (file.size > TEN_MB) {
      bucket.overLimit += 1;
    }

    buckets.set(projectName, bucket);
  }

  return Array.from(buckets.values()).sort((left, right) => right.size - left.size);
};

export const getTopOffenders = (files, limit = 10) =>
  [...files].sort((left, right) => right.size - left.size).slice(0, limit);
