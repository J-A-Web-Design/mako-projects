import { defineCollection, z } from "astro:content";

const pageSchema = z.object({
  title: z.string(),
  gallery_images: z.array(z.string()),
  about_us_images: z.array(
    z.object({
      src: z.string(),
      alt: z.string(),
    })
  ),
});

const pagesCollection = defineCollection({
  schema: pageSchema,
});

export const collections = {
  pages: pagesCollection,
};