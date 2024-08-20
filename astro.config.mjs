import { defineConfig } from 'astro/config';
import bookshop from '@bookshop/astro-bookshop';
import tailwind from "@astrojs/tailwind";

import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  site: 'https://makoprojects.ca',

  integrations: [tailwind(), bookshop(), robotsTxt({
    sitemap: false,
  })]
});
