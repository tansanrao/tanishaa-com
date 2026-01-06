/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        paper: '#F6F2E7',
        ink: '#1B1A1C',
        accent: '#DA3832',
      },
    },
  },
  plugins: [],
};

