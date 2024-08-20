import { defineConfig } from 'astro/config';
import bookshop from '@bookshop/astro-bookshop';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  site: 'https://makoprojects.ca',

  integrations: [tailwind(), sitemap(), bookshop(), robotsTxt({
    sitemap: false,
  })]
});