import { getCollection, type CollectionEntry } from 'astro:content';

export type Article = CollectionEntry<'case-studies'>;

/**
 * All published articles, newest first.
 *
 * Drafts are excluded from production builds but kept in `astro dev` so that
 * an author can preview their own work in progress.
 *
 */
export async function getArticles(): Promise<Article[]> {
  const articles = await getCollection(
    'case-studies',
    ({ data }) => import.meta.env.DEV || !data.draft,
  );
  return articles.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

/**
 * Every article including drafts, newest first.
 * Draft pages are unlisted but not private (anyone with the full link can read it)
 */
export async function getAllArticles(): Promise<Article[]> {
  const articles = await getCollection('case-studies');
  return articles.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

/** Count occurrences of each value across articles, most frequent first. */
export function tally<T extends string>(
  articles: Article[],
  pick: (a: Article) => readonly T[],
): { value: T; count: number }[] {
  const counts = new Map<T, number>();
  for (const article of articles) {
    for (const value of pick(article)) {
      counts.set(value, (counts.get(value) ?? 0) + 1);
    }
  }
  return [...counts]
    .map(([value, count]) => ({ value, count }))
    .sort((a, b) => b.count - a.count || a.value.localeCompare(b.value));
}

/** "1 article" / "3 articles" — avoids the "1 articles" seen on count labels. */
export function plural(count: number, singular: string, pluralForm = `${singular}s`): string {
  return `${count} ${count === 1 ? singular : pluralForm}`;
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });
}
