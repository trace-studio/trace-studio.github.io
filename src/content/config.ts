import { defineCollection, z } from "astro:content";

const games = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    slug: z.string().optional(),
    status: z.enum(["released", "in-progress", "planned"]),
    summary: z.string(),
    repoUrl: z.string().url().optional(),
    demoUrl: z.string().url().optional(),
    cover: z.string().optional(),
    tags: z.array(z.string()),
    components: z.array(
      z.enum(["engine", "heuristic", "rl", "llm", "web-demo", "report"])
    ),
    locale: z.string().default("en"),
    publishDate: z.coerce.date(),
    order: z.number().optional(),
  }),
});

const research = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    slug: z.string().optional(),
    game: z.string().optional(),
    summary: z.string(),
    authors: z.array(z.string()),
    publishDate: z.coerce.date(),
    tags: z.array(z.string()),
    cover: z.string().optional(),
    locale: z.string().default("en"),
    draft: z.boolean().default(false),
  }),
});

export const collections = { games, research };
