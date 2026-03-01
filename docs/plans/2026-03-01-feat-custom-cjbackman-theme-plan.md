---
title: "feat: Build custom cjbackman Hugo theme"
type: feat
date: 2026-03-01
brainstorm: docs/brainstorms/2026-03-01-custom-theme-brainstorm.md
---

# feat: Build Custom cjbackman Hugo Theme

## Overview

Replace the third-party `mini` Git submodule with a fully custom Hugo theme named `cjbackman`. The aesthetic is minimalist — white background, monospace fonts throughout, single column, minimal chrome. The theme is built on the scaffold that `hugo new theme cjbackman` generated (currently misplaced at `content/themes/cjbackman/`; must be moved to `themes/cjbackman/`).

All functional features from the current site are preserved: Mermaid diagrams, MathJax v4, tags taxonomy, Nifties section, and custom navigation paths.

## Aesthetic Specification

| Property | Value |
|---|---|
| Background | `#fff` |
| Text | `#111` |
| Links | `#00e` (classic browser blue) |
| Font | `ui-monospace, Menlo, Consolas, monospace` |
| Max content width | `680px` centered |
| Header | Site name as link + 3 horizontal nav links |
| Hero/bio block | Site name `<h1>` + one-line tagline |
| Footer | Plain-text social links + copyright |
| Pagination | `← older` / `newer →` plain text links |
| Dark mode | Not in scope |

## Pre-Flight: Upgrade Hugo in CI

**Do this before moving a single file.** The scaffold declares `min = '0.146.0'` in `hugo.toml`. CI currently installs Hugo 0.140.2. The `_partials/` directory convention requires Hugo 0.146+. At 0.140.2, partials resolve to nothing with no error.

- [ ] Update `.github/workflows/hugo.yaml`: set `HUGO_VERSION: 0.146.0` (or higher)
- [ ] Verify local Hugo version is also 0.146+: `hugo version`

## Phase 1: Relocate the Scaffold

The scaffold was generated from inside `content/`, landing at the wrong path. Do Phase 1 before running `hugo server` — until the move is done, the demo posts inside `content/themes/cjbackman/content/` will appear as real site content.

### Tasks

- [ ] Move `content/themes/cjbackman/` → `themes/cjbackman/` at the repo root
- [ ] Delete the scaffold's demo content from inside the moved theme:
  - `themes/cjbackman/content/` (entire directory — demo posts, not real content)
- [ ] Update `themes/cjbackman/hugo.toml`: set min Hugo version to `0.146.0`
- [ ] Verify structure after move (see below)

### Expected structure after Phase 1

```
themes/cjbackman/
├── hugo.toml
├── archetypes/
│   └── default.md
├── assets/
│   └── css/
│       └── main.css          ← JS pipeline deleted (see Phase 3)
├── layouts/
│   ├── baseof.html
│   ├── home.html
│   ├── page.html             ← single content template
│   ├── section.html
│   ├── taxonomy.html
│   ├── term.html
│   ├── _default/
│   │   └── _markup/          ← render hooks
│   └── _partials/
│       ├── head.html
│       ├── head/
│       │   └── css.html      ← js.html deleted
│       ├── header.html
│       ├── footer.html
│       ├── menu.html
│       └── terms.html
└── static/
    └── favicon.ico
```

## Phase 2: Core Layouts

All templates use Hugo 0.146+ flat layout convention (`_partials/` with underscore). The scaffold has stubs — replace their bodies.

### `layouts/baseof.html` — Base shell

Keep as-is from scaffold. No changes needed.

```html
<!DOCTYPE html>
<html lang="{{ site.Language.LanguageCode }}" dir="{{ or site.Language.LanguageDirection `ltr` }}">
<head>
  {{ partial "head.html" . }}
</head>
<body>
  <header>
    {{ partial "header.html" . }}
  </header>
  <main>
    {{ block "main" . }}{{ end }}
  </main>
  <footer>
    {{ partial "footer.html" . }}
  </footer>
</body>
</html>
```

### `layouts/home.html` — Homepage

Shows bio block then paginated post listing. Uses explicit section filter to avoid showing Nifties and About pages in the post list.

```html
{{ define "main" }}
  <section class="bio">
    <h1>{{ site.Title }}</h1>
    {{ with site.Params.bio }}<p>{{ . }}</p>{{ end }}
  </section>

  <section class="posts">
    {{ $posts := where site.RegularPages "Section" "on" }}
    {{ $paginator := .Paginate $posts }}
    {{ range $paginator.Pages }}
      <article>
        <h2><a href="{{ .RelPermalink }}">{{ .LinkTitle }}</a></h2>
        <time datetime="{{ .Date | time.Format "2006-01-02" }}">{{ .Date | time.Format "January 2, 2006" }}</time>
        {{ with .Summary }}<p>{{ . }}</p>{{ end }}
      </article>
    {{ end }}
  </section>

  <nav class="pagination">
    {{ with $paginator.Next }}<a href="{{ .URL }}">← older</a>{{ end }}
    {{ with $paginator.Prev }}<a href="{{ .URL }}">newer →</a>{{ end }}
  </nav>
{{ end }}
```

Note: `.Paginator.Next` goes to higher page numbers = older posts (newest-first sort). `.Paginator.Prev` = newer posts.

### `layouts/page.html` — Single post/page

Renders title, date, content, tags. Injects Mermaid ESM if the page uses Mermaid code blocks.

```html
{{ define "main" }}
  <article>
    <h1>{{ .Title }}</h1>
    <time datetime="{{ .Date | time.Format "2006-01-02" }}">{{ .Date | time.Format "January 2, 2006" }}</time>
    {{ .Content }}
    {{ partial "terms.html" (dict "taxonomy" "tags" "page" .) }}
  </article>

  {{ if .Page.Store.Get "hasMermaid" }}
  <script type="module">
    import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.esm.min.mjs';
    mermaid.initialize({ startOnLoad: true });
  </script>
  {{ end }}
{{ end }}
```

### `layouts/section.html` — Section archive (`/on`)

Groups posts by year. Explicit `.archive` class to scope CSS without bleeding onto other `<section>` elements.

```html
{{ define "main" }}
  <h1>{{ .Title }}</h1>
  <section class="archive">
    {{ range .Pages.GroupByYear }}
      <h2>{{ .Key }}</h2>
      <ul>
        {{ range .Pages }}
          <li>
            <time datetime="{{ .Date | time.Format "2006-01-02" }}">{{ .Date | time.Format "Jan 02" }}</time>
            <a href="{{ .RelPermalink }}">{{ .LinkTitle }}</a>
          </li>
        {{ end }}
      </ul>
    {{ end }}
  </section>
{{ end }}
```

### `layouts/taxonomy.html` — Tags cloud

Lists all tags with post counts. Use `len .Pages` (not `.Count` which doesn't exist).

```html
{{ define "main" }}
  <h1>{{ .Title }}</h1>
  <ul class="tags">
    {{ range .Pages }}
      <li><a href="{{ .RelPermalink }}">{{ .LinkTitle }} ({{ len .Pages }})</a></li>
    {{ end }}
  </ul>
{{ end }}
```

### `layouts/term.html` — Individual tag page

Lists all posts for a given tag.

```html
{{ define "main" }}
  <h1>{{ .Title }}</h1>
  <ul>
    {{ range .Pages }}
      <li>
        <time datetime="{{ .Date | time.Format "2006-01-02" }}">{{ .Date | time.Format "Jan 02, 2006" }}</time>
        <a href="{{ .RelPermalink }}">{{ .LinkTitle }}</a>
      </li>
    {{ end }}
  </ul>
{{ end }}
```

## Phase 3: Partials

### `layouts/_partials/head.html`

Adds description meta, conditional MathJax (always on per config), `customCSS` support. **MathJax inline config MUST come before the async loader script.** JS pipeline deleted — no `head/js.html`.

```html
<meta charset="utf-8">
<meta name="viewport" content="width=device-width">
<meta name="description" content="{{ with .Description }}{{ . }}{{ else }}{{ site.Params.description }}{{ end }}">
<title>{{ if .IsHome }}{{ site.Title }}{{ else }}{{ printf "%s | %s" .Title site.Title }}{{ end }}</title>
{{ partialCached "head/css.html" . "global" }}
{{ range site.Params.customCSS }}
  <link rel="stylesheet" href="{{ . | relURL }}">
{{ end }}
{{ if site.Params.math }}
<script>
  MathJax = {
    tex: {
      displayMath: [['\\[', '\\]'], ['$$', '$$']],
      inlineMath: [['\\(', '\\)']]
    },
    loader: { load: ['ui/safe'] },
  };
</script>
<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@4/tex-mml-chtml.js"></script>
{{ end }}
```

Note `partialCached` uses `"global"` as the cache key (not `.`) so Hugo caches the CSS output once for all pages.

No `math.html` partial — MathJax is inlined directly here to avoid a single-use partial.

### `layouts/_partials/head/css.html`

Keep exactly as generated by the scaffold (Hugo Pipes with fingerprinting in prod).

### `layouts/_partials/head/js.html`

**Delete this file.** The site has no JavaScript of its own. The JS build pipeline serves a `console.log`. Also delete `assets/js/main.js`.

### `layouts/_partials/header.html`

Site name as a link + 3 nav links. Use `relURL` for all paths. Labels from `site.Params` for consistency with `config.yml`.

```html
<nav>
  <a href="{{ "/" | relURL }}" class="site-title">{{ site.Title }}</a>
  <span class="nav-links">
    <a href="{{ "/on" | relURL }}">{{ site.Params.archive | default "Notes" }}</a>
    <a href="{{ "/nifties" | relURL }}">{{ site.Params.nifties | default "Nifties" }}</a>
    <a href="{{ "/is-a-technologist" | relURL }}">{{ site.Params.about | default "About" }}</a>
  </span>
</nav>
```

### `layouts/_partials/footer.html`

Plain-text social links + copyright. `now.Year` evaluates at build time.

```html
<p class="social">
  {{ with site.Params.social.email }}<a href="{{ . }}">email</a>{{ end }}
  {{ with site.Params.social.linkedin }}<a href="{{ . }}">linkedin</a>{{ end }}
</p>
<p class="copyright">© {{ now.Year }} {{ site.Params.author }}</p>
```

### `layouts/_partials/terms.html` — Tag list on posts

Keep as-is from scaffold.

### `layouts/_partials/menu.html`

Keep as-is from scaffold (used by baseof, rendered if menus are configured).

## Phase 4: Render Hooks

Live in `themes/cjbackman/layouts/_default/_markup/`.

### `layouts/_default/_markup/render-codeblock-mermaid.html`

Port from `layouts/_default/_markup/render-codeblock-mermaid.html` (repo root — that file gets deleted in Phase 6).

```html
<pre class="mermaid">
  {{- .Inner | safeHTML }}
</pre>
{{ .Page.Store.Set "hasMermaid" true }}
```

### `layouts/_default/_markup/render-link.html`

External links open in new tab.

```html
<a href="{{ .Destination | safeURL }}"{{ with .Title }} title="{{ . }}"{{ end }}
  {{- if strings.HasPrefix .Destination "http" }} target="_blank" rel="noopener noreferrer"{{ end }}>
  {{- .Text | safeHTML -}}
</a>
```

No `render-image.html` — a bare `img` CSS rule handles responsive images without the need for a wrapper class.

## Phase 5: CSS

Replace `themes/cjbackman/assets/css/main.css` entirely. No design token comment block (it's a 100-line file — values are self-evident in context). Scoped `.archive` class to avoid selector bleed from bare `section`.

```css
*, *::before, *::after { box-sizing: border-box; }

body {
  font-family: ui-monospace, Menlo, Consolas, monospace;
  font-size: 15px;
  line-height: 1.65;
  color: #111;
  background: #fff;
  max-width: 680px;
  margin: 0 auto;
  padding: 1.5rem 1rem;
}

a { color: #00e; text-decoration: none; }
a:hover { text-decoration: underline; }

/* Header */
header nav {
  display: flex;
  align-items: baseline;
  gap: 1.5rem;
  margin-bottom: 2rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #ddd;
}
.site-title { color: #111; font-weight: bold; margin-right: auto; }
.nav-links a { color: #555; font-size: 0.9em; }
.nav-links a + a { margin-left: 1rem; }

/* Bio block (homepage) */
.bio { margin-bottom: 2rem; }
.bio h1 { font-size: 1.3rem; margin: 0 0 0.25rem; }
.bio p { color: #555; margin: 0; }

/* Post listing (homepage) */
.posts article { margin-bottom: 2rem; }
.posts h2 { font-size: 1rem; margin: 0 0 0.2rem; }
.posts time { font-size: 0.85em; color: #666; display: block; }
.posts p { margin: 0.4rem 0 0; }

/* Single post */
article > h1 { font-size: 1.4rem; margin-bottom: 0.2rem; }
article > time { font-size: 0.85em; color: #666; display: block; margin-bottom: 1.5rem; }

/* Headings in content */
h1, h2, h3, h4 { font-family: inherit; line-height: 1.3; }
h2 { font-size: 1.15rem; margin-top: 2rem; }
h3 { font-size: 1rem; margin-top: 1.5rem; }

/* Prose */
p { margin: 1em 0; }
blockquote {
  margin: 1em 0;
  padding-left: 1em;
  border-left: 3px solid #ddd;
  color: #555;
}
hr { border: none; border-top: 1px solid #ddd; margin: 2rem 0; }

/* Images */
img { max-width: 100%; height: auto; display: block; }

/* Code */
pre, code { font-family: inherit; font-size: 0.92em; }
code { background: #f5f5f5; padding: 0.1em 0.3em; border-radius: 2px; }
pre {
  background: #f5f5f5;
  padding: 1em;
  overflow-x: auto;
  border-radius: 2px;
  margin: 1.2em 0;
}
pre code { background: none; padding: 0; }

/* Tables */
table { width: 100%; border-collapse: collapse; margin: 1.5em 0; font-size: 0.9em; }
th, td { text-align: left; padding: 0.4em 0.8em; border: 1px solid #ddd; }
th { background: #f5f5f5; }

/* Mermaid */
.mermaid { margin: 1.5em 0; }

/* Tags on posts */
.terms { margin-top: 2rem; font-size: 0.85em; color: #666; }
.terms a { color: #555; }

/* Section archive */
.archive h2 { margin-top: 2rem; font-size: 1rem; color: #666; }
.archive ul { list-style: none; padding: 0; }
.archive li { display: flex; gap: 1em; margin-bottom: 0.4rem; }
.archive li time { color: #888; flex-shrink: 0; }

/* Tags cloud */
.tags { list-style: none; padding: 0; }
.tags li { margin-bottom: 0.3rem; }

/* Pagination */
.pagination { display: flex; justify-content: space-between; margin-top: 2rem; font-size: 0.9em; }

/* Footer */
footer {
  margin-top: 3rem;
  padding-top: 1rem;
  border-top: 1px solid #ddd;
  font-size: 0.85em;
  color: #666;
}
.social { margin-bottom: 0.25rem; }
.social a { color: #555; margin-right: 0.75rem; }
.copyright { margin: 0; }
```

## Phase 6: Switch Theme and Clean Up

### Tasks

- [ ] Update `config.yml`: change `theme: mini` → `theme: cjbackman`
- [ ] Remove `themes/mini` submodule:
  - `git submodule deinit themes/mini`
  - `git rm themes/mini`
  - Remove `[submodule "themes/mini"]` block from `.gitmodules`
- [ ] Delete `themes/LoveIt` if present (inert, leftover from previous experiment)
- [ ] Delete `assets/css/_override.scss` (SCSS variables for LoveIt; inert)
- [ ] Delete these files from the project-level `layouts/` (now absorbed into the theme):
  - `layouts/partials/navigation.html`
  - `layouts/partials/profile.html`
  - `layouts/partials/math.html`
  - `layouts/partials/svgs/` (entire directory)
  - `layouts/_default/single.html`
  - `layouts/_default/_markup/render-codeblock-mermaid.html` ← don't forget this one
- [ ] Keep `static/css/custom.css` — still loaded via `params.customCSS` for Nifties card grid
- [ ] Verify `layouts/` is empty (or contains only intended overrides)
- [ ] Run `hugo server -D` and verify all pages
- [ ] Run `hugo --gc --minify` and confirm clean production build

## Acceptance Criteria

- [ ] CI build passes on Hugo 0.146.x
- [ ] `hugo server -D` runs without errors
- [ ] Homepage shows site name + bio tagline + paginated post list (posts only — no Nifties/About)
- [ ] Single post pages show title, date, content, and tags
- [ ] `/on` section shows posts grouped by year
- [ ] `/tags` taxonomy page lists all tags with counts
- [ ] `/nifties` page renders with card grid — raw HTML is not escaped (`goldmark.renderer.unsafe: true` still in config.yml)
- [ ] `/is-a-technologist` about page renders correctly
- [ ] Mermaid diagrams render in posts that use ` ```mermaid ` fences
- [ ] MathJax renders math (`\( E = mc^2 \)` and `\[ E = mc^2 \]`)
- [ ] External links open in new tab
- [ ] Pagination `← older` / `newer →` works correctly (direction: older = further back in time)
- [ ] Tags link to their term pages from individual posts
- [ ] Production build (`hugo --gc --minify`) succeeds
- [ ] `mini` submodule fully removed — `.gitmodules` is clean
- [ ] All fonts are monospace in the rendered page
- [ ] `layouts/` directory is clean — no leftover overrides shadowing the theme

## References

### Internal

- `layouts/partials/navigation.html` — current nav paths to port
- `layouts/partials/math.html` — MathJax config to port (fix script order when porting)
- `layouts/_default/single.html` — Mermaid injection pattern to port
- `layouts/_default/_markup/render-codeblock-mermaid.html` — render hook to port then delete
- `static/css/custom.css` — Nifties card grid (keep, load via `customCSS`)
- `config.yml` — `params.math`, `params.social`, `params.archive`, `params.nifties`, `params.about`

### External

- Hugo template lookup order: https://gohugo.io/templates/lookup-order/
- Hugo render hooks: https://gohugo.io/render-hooks/
- Hugo Pipes (CSS fingerprinting): https://gohugo.io/hugo-pipes/
- MathJax v4 configuration: inline config before async loader (MathJax docs pattern)
