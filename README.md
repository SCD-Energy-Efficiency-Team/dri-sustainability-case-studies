# Community Knowledge Base for Sustainable Computing

A community knowledge base of how people are actually tackling sustainability
in digital research infrastructure (DRI), written by software engineers, HPC
facilitators, data scientists, project managers and more.

Trends in carbon emissions from digital research infrastructure (DRI) are a serious concern, and software engineers, computational scientists, HPC facilitators, project managers and more are now required to think about sustainability in this space.

Many pages now exist showing the huge landscape of resources available for this, but it's not always clear what is practically being done by people in roles similar to yours.

This is a knowledge database for people to share how they are tackling sustainability in their job within DRI.

This resource was created as part of the NetDRIVE Community Project EMIT, which is a collaboration between the Scientific Computing Department and the Hartree Centre at STFC to develop training resources for sustainability across DRI.

## How it works

- Articles live in `content/case-studies/` as Markdown with a YAML header.
- Comments on each article are GitHub Discussions

## Local development

Requires Node 22.12 or newer.

```bash
npm ci
npm run dev        # http://localhost:4321
npm run validate   # what CI runs: type check, schema validation, build, link check
```

## Repository layout

```
content/case-studies/   Articles (Markdown + YAML frontmatter) — contributions go here
templates/              Article template to copy
src/
  content.config.ts     Frontmatter schema 
  lib/taxonomy.ts       Roles 
  lib/articles.ts       Collection queries, sorting, tallies
  lib/url.ts            Base-path-aware internal link helper
  site.config.ts        Org, repo, Giscus and site metadata
  layouts/ components/ pages/ styles/
scripts/check-links.mjs Post-build internal link check
.github/                PR template, issue forms, CI and deploy workflows
```

## Adding a role

Roles are a fixed set, defined in [`src/lib/taxonomy.ts`](src/lib/taxonomy.ts).

## Licence

Articles are © their authors, published under
[CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).
Site code is [MIT](LICENSE) licensed.
