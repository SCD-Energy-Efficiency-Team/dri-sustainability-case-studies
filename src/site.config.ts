/**
 * Central site configuration.
 */

export const GITHUB_OWNER = 'SCD-Energy-Efficiency-Team';

export const GITHUB_REPO = 'dri-sustainability-case-studies';

export const REPO_URL = `https://github.com/${GITHUB_OWNER}/${GITHUB_REPO}`;

export const SITE = {
  title: 'Community Knowledge Base for Sustainable Computing',
  tagline: 'Case studies in sustainable digital research infrastructure',
  description:
    'A community knowledge base of how people are actually tackling sustainability ' +
    'in digital research infrastructure, written by software engineers, HPC ' +
    'facilitators, data scientists project managers and more.',
  url: `https://${GITHUB_OWNER.toLowerCase()}.github.io`,
  base: `/${GITHUB_REPO}`,
  locale: 'en-GB',
} as const;

export const GISCUS = {
  repo: `${GITHUB_OWNER}/${GITHUB_REPO}` as `${string}/${string}`,
  repoId: "R_kgDOUwWlrg", 
  category: 'Case study discussion',
  categoryId: "DIC_kwDOUwWlrs4DGlpi",
  mapping: 'pathname',
  reactionsEnabled: '1',
  inputPosition: 'top',
  lang: 'en',
} as const;

export const isGiscusConfigured = () =>
  GISCUS.repoId.length > 0 && GISCUS.categoryId.length > 0;
