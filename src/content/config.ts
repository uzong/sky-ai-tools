import { defineCollection, z } from 'astro:content';

const toolsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    logo: z.string(),
    category: z.array(z.string()),
    description: z.string(),
    highlights: z.array(z.string()),
    pricing: z.array(z.string()),
    use_cases: z.array(z.string()),
    official_url: z.string(),
    docs_url: z.string().optional(),
    tags: z.array(z.string()),
    language_support: z.array(z.string()).default(['zh-CN']),
    is_hot: z.boolean().default(false),
    is_new: z.boolean().default(false),
    status: z.enum(['verified', 'pending']).default('verified'),
  }),
});

const articlesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    type: z.enum(['weekly-news', 'quality-article']),
    tags: z.array(z.string()),
    summary: z.string(),
  }),
});

export const collections = {
  'tools': toolsCollection,
  'articles': articlesCollection,
};
