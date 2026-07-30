// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  redirects: {
    '/work': '/work/graphic-design',
    '/work/studio': '/work/graphic-design',
    '/work/studio/pachisi-reimagined': '/work/graphic-design/pachisi-reimagined',
    '/work/studio/ensemble-arts': '/work/graphic-design/ensemble-arts',
    '/work/studio/book-covers': '/work/graphic-design/book-covers',
    '/work/studio/letters-to-a-young-poet': '/work/graphic-design/letters-to-a-young-poet',
    '/work/studio/the-wagner': '/work/graphic-design/the-wagner',
    '/work/studio/mount-cuba-center': '/work/graphic-design/mount-cuba-center',
    '/work/independent': '/work/other',
    '/work/independent/reconstructed-sleeve-top': '/work/other/reconstructed-sleeve-top',
    '/work/independent/ashtray-storage-box': '/work/other/ashtray-storage-box',
    '/work/independent/pasta-shaping-board': '/work/other/pasta-shaping-board',
  },
  image: {
    layout: 'constrained',
    responsiveStyles: true,
  },
  vite: {
    plugins: [tailwindcss()]
  }
});
