import { z, defineCollection } from "astro:content";

const projectsCollection = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    link: z.string(),
    tags: z.array(z.string()),
    image: z.object({
      src: z.string(),
      height: z.number(),
      width: z.number(),
      lazy: z.boolean().optional(),
    }),
    theme: z.object({
      backgroundColor: z.string().length(7).startsWith("#"), // Colour hex, E.g. #6c29f5
      highContrast: z.boolean().optional(),
    }),
  }),
});

export const collections = {
  projects: projectsCollection,
};
