/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        butter: '#FFF3B0',
        cream: '#FFFDF5',
        sky: '#8ECAE6',
        poppy: '#E63946',
        ink: '#121212',
      },
      fontFamily: {
        display: ['Syne', 'Arial', 'sans-serif'],
        sans: ['Plus Jakarta Sans', 'Arial', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        print: '4px 4px 0 #121212',
      },
    },
  },
  plugins: [],
};
