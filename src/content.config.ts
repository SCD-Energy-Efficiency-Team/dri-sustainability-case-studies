import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { ROLE_IDS } from './lib/taxonomy';

/**
 * Frontmatter schema for contributed articles.
 *
 * This is the contract enforced on every pull request: `npm run build` fails
 * with a file-and-field-specific error if an article does not match, so CI
 * catches malformed submissions before review.
 *
 */

const KEBAB = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

const tag = z
  .string()
  .regex(
    KEBAB,
    'Tags must be lowercase kebab-case (letters, digits and single hyphens), ' +
      'e.g. "gpu-profiling" rather than "GPU Profiling".',
  );

const caseStudies = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './content/case-studies' }),
  schema: z
    .strictObject({
      title: z.string().min(8).max(100),

      /** One or two sentences, shown on cards and in search results. */
      description: z.string().min(40).max(300),

      roles: z
        .array(z.enum(ROLE_IDS))
        .min(1, 'List at least one target role.')
        .max(4, 'Pick the 1–4 roles this is aimed at.'),

      tags: z.array(tag).min(1, 'Add at least one tag.').max(8),

      /** GitHub handle(s), with the leading @. */
      author: z
        .union([z.string(), z.array(z.string()).min(1)])
        .transform((a) => [a].flat()),

      /** Organisation or facility the author writes from. Optional. */
      organisation: z.string().optional(),

      date: z.coerce.date(),

      /** Set when an article is substantively revised. */
      updated: z.coerce.date().optional(),

      /**
       * Set true when the content is expected to date (e.g. a specific
       * tool version, a policy under consultation). Renders a warning banner
       * so readers know to check if still useful.
       */
      timeSensitive: z.boolean().default(false),

      /** External sources cited */
      sources: z.array(z.strictObject({ title: z.string(), url: z.url() })).default([]),

      /** Set true to keep an in-progress article out of the published site. */
      draft: z.boolean().default(false),

      /**
       * Random string appended to a draft's web address 
       * ignored once the article is published.
       */
      draftId: z
        .string()
        .regex(
          /^[a-z0-9]{6,16}$/,
          'draftId must be 6 to 16 lowercase letters and digits, e.g. "q7v2m9xk". ' +
            'Run `npm run draft:id` to generate one, or just type some random characters.',
        )
        .optional(),
    })
    .refine((d) => !d.updated || d.updated >= d.date, {
      message: '`updated` cannot be earlier than `date`.',
      path: ['updated'],
    })
    .refine((d) => !d.draft || d.draftId, {
      message:
        'A draft needs a `draftId`: a random string that is added to its web address ' +
        'Run `npm run draft:id` to generate ' +
        'one, or type 6 to 16 random lowercase letters and digits.',
      path: ['draftId'],
    }),
});

export const collections = { 'case-studies': caseStudies };
