// src/content/config.ts (or content.config.ts)
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  schema: ({ image }) => z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    author: z.string(),
    image: z.object({
      url: image(),
      alt: z.string(),
    }),
    tags: z.array(z.string()),
  }),
});

export const collections = { blog };