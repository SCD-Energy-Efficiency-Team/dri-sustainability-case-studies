---
# ─────────────────────────────────────────────────────────────────────────────
# Copy this file to content/case-studies/your-article-name.md and edit it.
# The filename becomes the web address. E.g. my-article.md becomes case-studies/my-article,
# so use lowercase words separated by hyphens.
# The submission is checked for required fields when submitting a pull request
# so if something is wrong the CI will tell you where.
# ─────────────────────────────────────────────────────────────────────────────

# 8–100 characters 
title: "Reflections on a Ground-Up Sustainability Strategy for the STFC Scientific Computing Department"

# 40–300 characters
description: "This discusses the ground-up sustainability strategy in the STFC Scientific Computing department, including how it was developed, and reflections on what worked and what didn't."

# Roles this is written for. Valid values:
#   software-engineer, hpc-facilitator, data-scientist, project-manager,
#   compute-user, devops-engineer, security-engineer
roles:
  - project-manager

# Topic tags, lowercase-kebab-case. Check /tags for existing ones first.
tags:
  - strategy
  - project-management
  - emissions-monitoring
  - sustainability-standards
  - department
  - user-education

# Your GitHub handle. For co-authors use a list:
#   author:
#     - "@one"
#     - "@two"
author: 
  - "@toastisme"
  - "@jess-farmer"


# Optional: your institution or facility.
organisation: "STFC, SCD"

# Publication date, YYYY-MM-DD.
date: 2026-09-29

# Optional: set when you substantively revise the article later.
# updated: 2026-06-01

# Set true if this cites specific tool versions etc.
# Shows readers a "last checked" banner.
timeSensitive: false

# External sources
sources: 
  - title: "Enabling Organisational Change Through Ground-Up Initiatives: A Case Study from the STFC Scientific Computing Department"
    url: "https://arxiv.org/abs/2608.23374"
# sources:
#   - title: "Name of the thing you cited"
#     url: "https://example.org/page"

# Set true to keep this out of the published site while you draft.
draft: true
draftId: "b62g7tdz8b"
---

<!--
Write the body below in Markdown. No need to repeat the title as an `# H1` etc.,
the site renders it from the frontmatter. 

The headings below are just suggestions
-->

## Context

The STFC Scientific Computing Department (SCD) has several hundred staff involved in maintaining infrastructure used by us and external users (HPC, cloud), maintaining software with thousands of users, and carrying out research.

STFC is a council within UKRI. Both have broad sustainability strategies for aligning to Net Zero targets. UKRI also published a [scoping report](10.5281/zenodo.8199983), outlining ~180 recommendations for DRI. Although useful as guides, these strategies can be too general to apply concrete ideas at the department level.

SCD has had an Energy Efficiency Team (EET) since 2022, operating as a voluntary group to encourage different aspects of sustainable computing. In 2025 we proposed an overall sustainability strategy across themes of emissions monitoring, user education, best practice, common sustainability standards, and providing long-term support to sustainability projects, and obtained funding to achieve this. This article sets out how we went about this and what might be useful to other departments.


## What We Did

In 2025, we presented a case to the department for a long-term strategy and the need for financial backing. Our approach was to use the broad principles of the UKRI and STFC strategies, identify what was in and out of scope, and create a record of all past and current sustainability work in the department. From this, we came up with four general themes:

### Emissions Monitoring Across SCD Services (Our HPC and Cloud Systems)
Users should be able to measure their carbon emissions on all of our services to understand the environmental cost of their work. SCD has graduate and apprentice schemes that run 6-month projects. As the department Energy Efficiency Team, we designed and supervised projects to achieve this. For our HPC systems, @GeorgeRoe developed [GUILT](https://github.com/SCD-Energy-Efficiency-Team/guilt), a Rust-based command line tool for calculating the carbon emissions of SLURM jobs. @jamesravindran built on this by [analysing the potential benefits of implementing green scheduling](https://github.com/SCD-Energy-Efficiency-Team/carbon-scheduling-lotus) on our HPC services, concluding it is worth implementing on some but not others, based on utilisation levels. For our cloud services, @Dronesat developed [a prototype dashboard](https://github.com/SCD-Energy-Efficiency-Team/stfc-cloud-energy-analysis), enabling users to calculate the carbon emissions of their virtual machines using different models. Methods for displaying this to users on platforms that sit on top of our cloud services were then implemented by @prodmodfour. 

By enabling measuring emissions in this way, we can start to think about the potential benefits of behavioural change on our services (e.g., if everyone used a green scheduling queue for our HPC clusters). @04Rex is developing a visualisation tool ([SCOPE](https://github.com/SCD-Energy-Efficiency-Team/scope)) to show the carbon mix of our department, pulling together data from tools like these, technical reports, travel data, and more. We should then be able to assess the relative impact of, say, all staff taking one fewer flight per year, versus something like updating the cooling systems of our infrastructure, to see where we could be having the greatest impact for the smallest cost.

### The Energy Efficiency Team as a Support Hub
In our department, sustainability projects were often carried out in isolation, or in a group and not maintained as staff moved on to other projects. One of our goals was to take long-term ownership of these projects to ensure that work wasn't lost or duplicated and to increase its impact. Developing a dynamic database of projects on Jira was the main way we did this. But we also tried to create a network for those working on sustainability projects by co-supervising sustainability work with weekly meetings, organising workshops to bring current projects together and publicise them more widely, and we created a Sustainability Spotlight Series, publishing articles championing those working in this area. The Energy Efficiency Team also publishes general articles on sustainability themes, with specifics relevant for our department.

### Embedding Sustainability in User Education and Best Practice
Our initial approach to embedding sustainability training for users and staff has been to understand current perceptions of sustainability and to develop training material targeted at measuring carbon emissions. We have developed surveys for staff to identify current knowledge gaps in things like green software engineering and emissions monitoring, which can then feed into future training material. On the training side of things, we obtained a [NetDrive](https://uknetdrive.org/) grant in collaboration with the [STFC Hartree Centre](https://www.hartree.stfc.ac.uk/) to develop training material on emissions monitoring for different roles across DRI (this website forms part of it!).

### Establishing Common Sustainability Standards
Our department is split across themes and groups, with some dedicated to research and developing software, and some maintaining key services. This makes it difficult to develop sustainability standards to capture these different roles. Thankfully, [Green DiSC](https://software.ac.uk/GreenDiSC) provides a series of accreditation criteria for computing research groups, central themes, and computing infrastructure teams. We now have several groups bronze accredited using this scheme, along with the Energy Efficiency Team as a central theme. As part of this work, we developed a Jira board to track the progress of different groups, as well as providing a list of resources on our Sharepoint pages showing successful applications and common resources that can be adapted. By completing the certification for the Energy Efficiency Team, we found this removed a lot of the work required for individual groups, reducing the effort for them to apply.


## What Didn't Work

A key difficulty we found was trying to make an impact with minimal time and funding. The 6-month rotations that our department runs were vital for getting concrete work finished, as this enabled dedicated staff time on a clear goal. Although a few of us have some time allocated for this work, much of the Energy Efficiency Team is still on a voluntary basis. Because of this, engagement can change over time, making it difficult to maintain momentum. One approach we took to this was to divide the strategy up into sub-teams, assigning responsibility for each of the four themes. This was successful in improving engagement in some cases, but also resulted in more meetings that took up a lot of the already limited staff time. Another approach we took was to assign sustainability representatives to each department group/theme, again establishing a clear role of responsibility. However, we did not have a clear plan of what the representatives were meant to achieve initially, and so momentum here also stalled. In general, it is very difficult to achieve wider engagement beyond individual events, as there are not enough incentives for staff to dedicate time to this kind of work.

## What We'd Do Differently

We tried to make our strategy as logical as possible, in the context of the UKRI and STFC strategies. However, this was still done with many unknowns about how our carbon emissions were distributed, and where we could have the biggest impact. Ideally, emissions monitoring work across services should have been a priority to complete first, followed by the SCOPE tool that will enable us to identify where to place our efforts. This would have given us greater evidence to argue why this work is valuable, perhaps facilitating greater engagement and making it easier to get funding.

