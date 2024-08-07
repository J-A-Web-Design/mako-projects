import { astroImageTools } from "astro-imagetools";
import { defineConfig } from 'astro/config';
import bookshop from '@bookshop/astro-bookshop';
import tailwind from "@astrojs/tailwind";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: 
  [
    astroImageTools,
    bookshop(), 
    tailwind(), 
    sitemap()
  ]
});