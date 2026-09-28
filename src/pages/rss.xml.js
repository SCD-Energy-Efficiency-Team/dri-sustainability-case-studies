import rss from '@astrojs/rss';
import { getArticles } from '../lib/articles';
import { SITE } from '../site.config';

export async function GET(context) {
  const articles = await getArticles();
  return rss({
    title: SITE.title,
    description: SITE.description,
    site: context.site,
    items: articles.map((article) => ({
      title: article.data.title,
      description: article.data.description,
      pubDate: article.data.date,
      author: article.data.author.join(', '),
      categories: [article.data.type, ...article.data.tags],
      link: `/case-studies/${article.id}/`,
    })),
    trailingSlash: false,
  });
}
