import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [react(), tailwind()],
  site: process.env.ASTRO_SITE || 'https://mivoraphoto.id',
  base: process.env.ASTRO_BASE || '/',
  output: 'static',
});
