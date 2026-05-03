# AGENTS.md

## Project Overview

Personal blog and notes site for cjbackman.com. Built with Hugo (static site generator) and deployed to GitHub Pages.

## Tech Stack

- **Static site generator**: Hugo 0.161.1 (extended, with Dart Sass). CI version pinned in `.github/workflows/hugo.yaml`.
- **Theme**: `cjbackman` (custom, vendored in-tree at `themes/cjbackman/`). Not a submodule.
- **Content format**: Markdown with TOML frontmatter
- **Deployment**: GitHub Actions → GitHub Pages
- **Domain**: cjbackman.com (configured via `CNAME`)

## Repository Structure

```
content/on/          # Blog posts (markdown)
content/             # Standalone pages (e.g. is-a-technologist.md)
layouts/             # Custom Hugo layout overrides
static/              # Static assets (images, favicons)
themes/cjbackman/    # Custom theme (vendored in-tree)
assets/css/          # SCSS/CSS stylesheets
archetypes/          # Content templates for `hugo new`
.githooks/           # Versioned git hooks (activated via core.hooksPath)
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

Hugo must be version 0.146.0+ (extended) — the theme declares this minimum. CI pins to 0.161.1; keep local close to that to avoid drift.

## Git Hooks

Versioned hooks live in `.githooks/`. Activate per-clone:

```sh
git config core.hooksPath .githooks
```

`pre-push` runs `hugo --gc --minify` and warns on Hugo version drift between local and CI. Bypass with `git push --no-verify` when needed.

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

- The theme `themes/cjbackman/` is custom and vendored — edit with care, but it is not a submodule.
- Do not change the branch name from `gh-pages`. Deployment depends on it.
- Do not add `public/` to version control. It is gitignored and generated at build time.
