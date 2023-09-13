import { z, defineCollection } from "astro:content";

const projectsCollection = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    image: z.string(),
  }),
});

export const collections = {
  projects: projectsCollection,
};
