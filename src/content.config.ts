import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const caseStudies = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './content/case-studies' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string().optional(),
    tech: z.array(z.string()).optional(),
    coverImage: z.string().optional(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string().optional(),
    tech: z.array(z.string()).optional(),
    coverImage: z.string().optional(),
    liveUrl: z.string().optional(),
    repoUrl: z.string().optional(),
  }),
});

export const collections = { caseStudies, projects };
