---
# ─────────────────────────────────────────────────────────────────────────────
# Copy this file to content/case-studies/your-article-name.md and edit it.
# The filename becomes the web address. E.g. my-article.md becomes case-studies/my-article,
# so use lowercase words separated by hyphens.
# The submission is checked for required fields when submitting a pull request
# so if something is wrong the CI will tell you where.
# ─────────────────────────────────────────────────────────────────────────────

# 8–100 characters 
title: "A short, concrete title"

# 40–300 characters
description: "What you did, and what a reader will be able to do after reading it."

# Roles this is written for. Valid values:
#   software-engineer, hpc-facilitator, data-scientist, project-manager,
#   compute-user, devops-engineer, security-engineer
roles:
  - software-engineer

# Topic tags, lowercase-kebab-case. Check /tags for existing ones first.
tags:
  - example-tag

# Your GitHub handle. For co-authors use a list:
#   author:
#     - "@one"
#     - "@two"
author: "@your-handle"

# Optional: your institution or facility.
organisation: ""

# Publication date, YYYY-MM-DD.
date: 2026-01-01

# Optional: set when you substantively revise the article later.
# updated: 2026-06-01

# Set true if this cites specific tool versions etc.
# Shows readers a "last checked" banner.
timeSensitive: false

# External sources
sources: []
# sources:
#   - title: "Name of the thing you cited"
#     url: "https://example.org/page"

# Set true while you are still working on this. The article is then left out
# of the home page, browse, role/tag pages and the feed, but it still gets its
# own web address you can send round for comments.
draft: false

# Only needed while draft is true. Random characters added to the draft's web
# address. Run `npm run draft:id`
# to generate one, or type 6-16 random lowercase letters and digits.
# Unlisted is not private, so don't put anything confidential.
# draftId: "q7v2m9xk"
---

<!--
Write the body below in Markdown. No need to repeat the title as an `# H1` etc.,
the site renders it from the frontmatter. 

The headings below are just suggestions
-->

## Context

E.g. what your setup is, and what problem you were trying to address.

## What we did

What change was made, the result, the cost of doing it etc.

## What didn't work

Approaches you tried and abandoned, and why. 

## What we'd do differently

Advice for someone starting from where you started.
