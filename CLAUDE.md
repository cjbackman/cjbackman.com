# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Personal blog and notes site ([cjbackman.com](https://cjbackman.com)) built with Hugo and deployed to GitHub Pages. See `AGENTS.md` for full project details.

## Commands

```sh
# Local dev server with drafts visible
hugo server -D

# Production build
hugo --gc --minify
```

Hugo must be version 0.140.2+ (extended) with Dart Sass.

## Content

- Posts live in `content/on/` with kebab-case filenames
- URLs render as `/on/<filename>/`
- All posts use TOML frontmatter (`+++` delimiters):

```toml
+++
title = 'Article Title'
date = 2026-01-10T16:03:14+01:00
tags = ['Tag1', 'Tag2']
summary = 'Brief description for listings.'
draft = false
+++
```

- To scaffold a new post: `hugo new on/my-post-title.md`
- Per-article images go in `static/<article-name>/`

## Architecture

- `config.yml` — site config (theme, permalinks, markup, params)
- `layouts/` — Hugo template overrides (do not touch `themes/`)
- `themes/mini/` — git submodule; never edit directly
- `assets/css/` — SCSS/CSS stylesheets
- `static/` — static assets served at root

## Deployment

Push to `gh-pages` branch triggers `.github/workflows/hugo.yaml` → GitHub Pages. There is no separate main branch.

## Git Conventions

Commit prefixes: `feat:` (new content/features), `chore:` (maintenance), `fix:` (corrections). Push directly to `gh-pages` — no PR workflow.

## Special Features

- **Mermaid diagrams**: fenced code blocks with ` ```mermaid `
- **Math**: MathJax enabled (`math: true` in config)
- **Raw HTML**: `<sub>`, `<sup>`, `<kbd>`, `<mark>` work in markdown
- **Table of contents**: auto-generated from H2–H3 headings
