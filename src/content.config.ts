import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const work = defineCollection({
  loader: glob({ pattern: '**/index.md', base: './src/content/work' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      year: z.string(),
      medium: z.string().optional(),
      publication: z.string().optional(),
      order: z.number(),
      indexSummary: z.string(),
      detailSummary: z.string(),
      listingImage: z.object({
        src: image(),
        alt: z.string(),
      }),
      mainGallery: z
        .array(
          z.object({
            src: image(),
            alt: z.string(),
            caption: z.string().optional(),
          })
        )
        .min(1),
      processGallery: z
        .array(
          z.object({
            src: image(),
            alt: z.string(),
            caption: z.string().optional(),
          })
        )
        .default([]),
    }),
});

export const collections = { work };
