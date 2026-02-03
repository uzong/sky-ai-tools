import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const tools = await getCollection('tools');
  const articles = await getCollection('articles');

  const items = [
    ...tools.map((tool) => ({
      title: tool.data.name,
      pubDate: new Date(),
      description: tool.data.description,
      link: `/tools/${tool.slug}/`,
    })),
    ...articles.map((article) => ({
      title: article.data.title,
      pubDate: article.data.date,
      description: article.data.summary,
      link: `/articles/${article.slug}/`,
    })),
  ].sort((a, b) => b.pubDate.getTime() - a.pubDate.getTime());

  return rss({
    title: 'Sky-AI-tools | 最全 AI 工具导航',
    description: '追踪全球 AI 工具动态',
    site: 'https://sky-ai-tools.github.io',
    items: items,
  });
}
