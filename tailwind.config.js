import { join } from 'path';

export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './pages/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          50: '#f2f7f4',
          100: '#eaf1e5',
          200: '#dce5d7',
          300: '#c3d6bd',
          400: '#91ad86',
          500: '#6b8a62',
          600: '#4a6345',
          700: '#263d2c',
          800: '#1a2a1f',
          900: '#0f150f',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        section: '6rem',
      },
    },
  },
  plugins: [],
};