import { defineContentConfig, defineCollection, z } from "@nuxt/content";
import { asOgImageCollection } from "nuxt-og-image/content";

export default defineContentConfig({
  collections: {
    blog: defineCollection(
      asOgImageCollection({
        type: "page",
        source: "blog/*.md",
        schema: z.object({
          title: z.string(),
          description: z.string(),
          createdAt: z.date(),
          updatedAt: z.date(),
        }),
      }),
    ),
  },
});
