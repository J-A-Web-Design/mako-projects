import { defineConfig } from 'astro/config';
import bookshop from '@bookshop/astro-bookshop';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://makoprojects.ca',
  integrations: [tailwind(), sitemap(), bookshop()]
});


