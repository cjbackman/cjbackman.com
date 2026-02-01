# AGENTS.md

## Project Overview

Personal blog and notes site for cjbackman.com. Built with Hugo (static site generator) and deployed to GitHub Pages.

## Tech Stack

- **Static site generator**: Hugo 0.140.2 (extended, with Dart Sass)
- **Theme**: [mini](https://github.com/dustinmichels/hugo-theme-mini) (git submodule in `themes/mini/`)
- **Content format**: Markdown with TOML frontmatter
- **Deployment**: GitHub Actions → GitHub Pages
- **Domain**: cjbackman.com (configured via `CNAME`)

## Repository Structure

```
content/on/          # Blog posts (markdown)
content/             # Standalone pages (e.g. is-a-technologist.md)
layouts/             # Custom Hugo layout overrides
static/              # Static assets (images, favicons)
themes/              # Hugo themes (git submodules, do not edit directly)
assets/css/          # SCSS/CSS stylesheets
archetypes/          # Content templates for `hugo new`
.github/workflows/   # CI/CD pipeline
config.yml           # Hugo site configuration
```

## Content Conventions

### Frontmatter format (TOML)

All posts use TOML frontmatter delimited by `+++`:

```toml
+++
title = 'Article Title'
date = 2026-01-10T16:03:14+01:00
tags = ['Tag1', 'Tag2']
summary = 'Brief description for listings.'
draft = false
+++
```

- `title`: Article headline.
- `date`: ISO 8601 with timezone.
- `tags`: Array of category tags.
- `summary`: Short description shown in post listings.
- `draft`: Set to `true` to hide from production build.

### File naming

- Post filenames use **kebab-case**: `ai-in-the-sdlc.md`, `goals-2027.md`.
- All posts live in `content/on/`.
- URLs are generated as `/on/<filename>/` via the permalink pattern in `config.yml`.

### Images

- Per-article images go in `static/<article-name>/`.
- General images go in `static/images/`.

## Building and Previewing

```sh
# Local development server with drafts
hugo server -D

# Production build
hugo --gc --minify
```

Hugo must be version 0.140.2+ (extended) with Dart Sass installed.

## Deployment

Pushes to the `gh-pages` branch automatically trigger the GitHub Actions workflow (`.github/workflows/hugo.yaml`) which builds and deploys to GitHub Pages.

There is no separate main/master branch. `gh-pages` is the sole active branch.

## Git Conventions

- **Commit message prefixes**: `feat:` (new content/features), `chore:` (maintenance/updates), `fix:` (corrections).
- Commits go directly to `gh-pages` — no PR workflow.

## Key Files

| File | Purpose |
|------|---------|
| `config.yml` | Hugo site configuration (theme, params, permalinks, markup settings) |
| `archetypes/default.md` | Template for new posts (`hugo new`) |
| `layouts/partials/profile.html` | Site header/profile partial |
| `layouts/partials/navigation.html` | Top navigation partial |
| `layouts/_default/single.html` | Single post template |
| `layouts/_default/_markup/render-codeblock-mermaid.html` | Mermaid diagram rendering |
| `.github/workflows/hugo.yaml` | CI/CD build and deploy pipeline |

## Special Features

- **Mermaid diagrams**: Use fenced code blocks with language `mermaid` in markdown.
- **Math typesetting**: Enabled via MathJax (`math: true` in config).
- **Raw HTML in markdown**: Enabled (`goldmark.renderer.unsafe: true`) for `<sub>`, `<sup>`, `<kbd>`, `<mark>` tags.
- **Table of contents**: Auto-generated from H2–H3 headings (`showToc: true`).

## Things to Avoid

- Do not edit files inside `themes/` — these are git submodules.
- Do not change the branch name from `gh-pages` — deployment depends on it.
- Do not add `public/` to version control — it is gitignored and generated at build time.
