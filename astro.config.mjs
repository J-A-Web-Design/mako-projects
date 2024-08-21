import { defineConfig } from 'astro/config';
import bookshop from '@bookshop/astro-bookshop';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://makoprojects.ca',

<<<<<<< HEAD
  integrations: [tailwind(), sitemap(), bookshop()]
});
=======
  integrations: [tailwind(), bookshop(), robotsTxt({
    sitemap: false,
  })]
});
>>>>>>> 9893e4f840016b7761bf28f4499442275ce76ea9
