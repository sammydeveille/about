import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://sammydeveille.com',
  base: '/',
  output: 'static',
  integrations: [sitemap()],
});
