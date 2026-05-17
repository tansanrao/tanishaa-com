import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const work = defineCollection({
  loader: glob({ pattern: '**/index.md', base: './src/content/work' }),
  schema: ({ image }) => {
    const imageMedia = z.object({
      type: z.literal('image').default('image'),
      src: image(),
      alt: z.string(),
    });

    const videoMedia = z.object({
      type: z.literal('video'),
      src: z.string(),
      poster: image().optional(),
      alt: z.string(),
    });

    return (
    z.object({
      title: z.string(),
      year: z.string(),
      medium: z.string().optional(),
      order: z.number(),
      indexSummary: z.string(),
      detailSummary: z.string(),
      listingImage: z.object({
        src: image(),
        alt: z.string(),
      }),
      mainGallery: z
        .array(
          z.union([imageMedia, videoMedia])
        )
        .min(1),
      processGallery: z
        .array(
          imageMedia
        )
        .default([]),
    })
    );
  },
});

export const collections = { work };
