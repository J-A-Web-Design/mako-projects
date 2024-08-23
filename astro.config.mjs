import { defineConfig } from 'astro/config';
import bookshop from '@bookshop/astro-bookshop';
import tailwind from "@astrojs/tailwind";
import partytown from '@astrojs/partytown';

// https://astro.build/config
export default defineConfig({
  site: 'https://makoprojects.ca',
  integrations: [
    tailwind(),
    bookshop(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ]
});


