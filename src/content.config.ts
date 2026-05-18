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
      caption: z.string().optional(),
    });

    const videoMedia = z.object({
      type: z.literal('video'),
      src: z.string(),
      poster: image().optional(),
      alt: z.string(),
    });

    return z
    .object({
      title: z.string(),
      category: z.enum(['studio', 'independent']).default('studio'),
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
    .superRefine((data, ctx) => {
      if (data.category !== 'independent') {
        return;
      }

      data.mainGallery.forEach((item, index) => {
        if (item.type === 'image' && !item.caption?.trim()) {
          ctx.addIssue({
            code: 'custom',
            path: ['mainGallery', index, 'caption'],
            message: 'Independent work gallery images require captions.',
          });
        }
      });
    });
  },
});

export const collections = { work };
