import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://sammydeveille.github.io',
  base: '/about',
  output: 'static',
  integrations: [sitemap()],
});
