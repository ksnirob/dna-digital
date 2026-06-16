import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://dna-digital.vercel.app',
  integrations: [tailwind()],
});
