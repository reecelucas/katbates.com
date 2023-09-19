import { z, defineCollection } from "astro:content";

const imageSchema = z.object({
  src: z.string(),
  height: z.number(),
  width: z.number(),
});

const projectsCollection = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    link: z.string(),
    tags: z.array(z.string()),
    images: z.object({
      small: imageSchema,
      large: imageSchema,
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
