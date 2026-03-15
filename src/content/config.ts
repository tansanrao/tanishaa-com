import { defineCollection, z } from 'astro:content';

const work = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    year: z.string(),
    medium: z.string(),
    publication: z.string().optional(),
    order: z.number(),
    indexSummary: z.string(),
    detailSummary: z.string(),
    coverImage: z.string(),
    gallery: z.array(
      z.object({
        src: z.string(),
        alt: z.string(),
        caption: z.string().optional(),
      })
    ),
    processGallery: z
      .array(
        z.object({
          src: z.string(),
          alt: z.string(),
          caption: z.string().optional(),
        })
      )
      .optional(),
  }),
});

export const collections = { work };
