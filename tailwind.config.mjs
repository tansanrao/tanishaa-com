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
      fontFamily: {
        sans: ['"Schibsted Grotesk"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        accent: ['"Almarai"', 'sans-serif'],
        editorial: ['"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
      },
      keyframes: {
        ribReveal: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '12%': { opacity: '1', transform: 'translateY(0)' },
          '72%': { opacity: '1', transform: 'translateY(0)' },
          '100%': { opacity: '0', transform: 'translateY(-4px)' },
        },
      },
      animation: {
        'rib-reveal': 'ribReveal 5s ease-out forwards',
      },
    },
  },
  plugins: [],
};
