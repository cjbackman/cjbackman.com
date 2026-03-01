---
title: Hugo Custom Theme — Build Gotchas and API Fixes
date: 2026-03-01
tags: [hugo, theme, css, templates, cdn]
category: build-errors
module: hugo-theme
symptoms:
  - ".Pages.GroupByYear: can't evaluate field GroupByYear in type page.Pages"
  - "Homepage shows non-post pages (Nifties, About)"
  - "Tags CSS not applied on post pages"
  - "MathJax loads but equations don't render"
  - "partialCached returns stale output for different pages"
---

# Hugo Custom Theme — Build Gotchas and API Fixes

## Problem Summary

When building a fully custom Hugo theme from `hugo new theme`, several non-obvious gotchas surface across template API changes, CDN loading, scaffold cleanup, and Hugo version requirements.

## Symptoms

- `ERROR: can't evaluate field GroupByYear in type page.Pages` when building section archive
- Homepage lists non-post content (Nifties, static pages appear in post feed)
- Post tags render as unstyled HTML (CSS class mismatch in scaffold)
- MathJax config inline script ordering breaks math rendering
- `partialCached` produces different CSS output per page instead of one shared version

## Root Causes and Fixes

### 1. `.Pages.GroupByYear` removed in Hugo 0.154+

**Symptom:** `can't evaluate field GroupByYear in type page.Pages`

**Root cause:** Hugo's `GroupByYear` method was removed or broken in newer versions. The `page.Pages` type no longer exposes it.

**Fix:**
```go
{{/* Wrong */}}
{{ range .Pages.GroupByYear }}

{{/* Correct */}}
{{ range .Pages.GroupByDate "2006" }}
```

`GroupByDate` takes a Go time format string. `"2006"` groups by year. The `.Key` variable inside the range is the formatted date string.

### 2. Hugo 0.146+ required for `_partials/` convention

**Symptom:** Theme partials not found; Hugo falls back to blank layout.

**Root cause:** The flat layout convention (`layouts/_partials/` with underscore prefix, page-kind templates at `layouts/home.html` instead of `layouts/_default/home.html`) requires Hugo 0.146+.

**Fix:** Declare minimum version in `themes/<name>/hugo.toml`:
```toml
[module]
  [module.hugoVersion]
    extended = false
    min = '0.146.0'
```

Update CI accordingly (e.g., GitHub Actions `HUGO_VERSION` env var).

### 3. `partialCached` — use `"global"` not `.` as cache key

**Symptom:** CSS fingerprint partial outputs different content per page, or caches incorrectly.

**Root cause:** Passing `.` (the current page) as the `partialCached` cache key creates a unique cache entry per page. For partials that produce identical output regardless of page context (like a CSS `<link>` tag), this defeats caching.

**Fix:**
```go
{{/* Wrong — creates N cache entries for N pages */}}
{{ partialCached "head/css.html" . . }}

{{/* Correct — one cache entry shared across all pages */}}
{{ partialCached "head/css.html" . "global" }}
```

The third argument is the cache key. Use `"global"` for page-independent partials.

### 4. Homepage `site.RegularPages` includes non-post content

**Symptom:** Nifties page and About page appear in the post feed on the homepage.

**Root cause:** `site.RegularPages` returns all regular pages across all sections. A personal site with `/nifties/` and `/is-a-technologist/` sections will have those pages included.

**Fix:**
```go
{{/* Wrong */}}
{{ $posts := site.RegularPages }}

{{/* Correct — filter to the posts section */}}
{{ $posts := where site.RegularPages "Section" "on" }}
```

Replace `"on"` with whatever your posts section slug is.

### 5. MathJax v4 — inline config must come before the async loader

**Symptom:** MathJax loads but equations don't render; `MathJax is not defined` errors.

**Root cause:** If the async loader script executes before the inline `MathJax = { ... }` config object is defined, MathJax uses its built-in defaults and ignores the config.

**Fix:** Always put the config `<script>` block before the loader `<script>` tag:
```html
<!-- Config first -->
<script>
  MathJax = {
    tex: {
      displayMath: [['\\[', '\\]'], ['$$', '$$']],
      inlineMath: [['\\(', '\\)']]
    },
    loader: { load: ['ui/safe'] },
  };
</script>
<!-- Loader second (async) -->
<script id="MathJax-script" async
  src="https://cdn.jsdelivr.net/npm/mathjax@4/tex-mml-chtml.js">
</script>
```

### 6. `hugo new theme` scaffold — dead files to delete

**Symptom:** Unused 51-line `menu.html` partial clutters the theme; `favicon.ico` inside the theme shadows the project's own favicon silently.

**Root cause:** `hugo new theme` generates a full scaffold including:
- `layouts/_partials/menu.html` — complex recursive menu walker; not wired to any layout by default
- `archetypes/default.md` — project-level archetypes take precedence anyway
- `static/favicon.ico` — project `static/` overrides theme `static/`; this is never served

**Fix:** Delete these after running `hugo new theme`:
```bash
rm themes/<name>/layouts/_partials/menu.html
rm themes/<name>/archetypes/default.md
rm themes/<name>/static/favicon.ico
```

### 7. `terms.html` scaffold missing CSS class

**Symptom:** Tags on post pages render as unstyled HTML; `.terms` CSS rules have no effect.

**Root cause:** The scaffold-generated `terms.html` renders the outer wrapper as `<div>` with no class attribute. Any `.terms { ... }` CSS rule you write never matches.

**Fix:** Add `class="terms"` to the outer div in `layouts/_partials/terms.html`:
```go
{{/* Scaffold default — CSS never matches */}}
<div>
  <div>{{ $label }}:</div>
  ...
</div>

{{/* Fixed */}}
<div class="terms">
  <div>{{ $label }}:</div>
  ...
</div>
```

### 8. Pin Mermaid CDN version for cache reliability

**Symptom:** Mermaid diagrams sometimes fail after library updates; CDN response has short cache TTL.

**Root cause:** Loading from an unversioned CDN URL (`npm/mermaid/dist/...`) resolves to latest. jsDelivr sets a short TTL on unversioned URLs. A major version bump can silently break diagram syntax.

**Fix:** Pin to a major version:
```js
// Wrong — unversioned, short cache TTL, can break on major release
import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.esm.min.mjs';

// Correct — pinned to major version, long cache TTL
import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.esm.min.mjs';
```

## Prevention Checklist

When building a custom Hugo theme:

- [ ] Run `hugo new theme` from the **repo root**, not from inside `content/`
- [ ] Declare `min = '0.146.0'` in `hugo.toml` if using `_partials/` convention
- [ ] Delete scaffold files: `menu.html`, `archetypes/default.md`, `static/favicon.ico`
- [ ] Add `class="terms"` to the outer div in `terms.html`
- [ ] Use `GroupByDate "2006"` not `GroupByYear` for year grouping
- [ ] Use `"global"` cache key in `partialCached` for page-independent partials
- [ ] Put MathJax config `<script>` before loader `<script>`
- [ ] Pin CDN URLs to major versions (e.g., `mermaid@11`)
- [ ] Filter homepage to your posts section: `where site.RegularPages "Section" "on"`

## References

- Hugo layout lookup order (0.146+): https://gohugo.io/templates/lookup-order/
- Hugo `GroupByDate`: https://gohugo.io/methods/pages/groupbydate/
- `partialCached`: https://gohugo.io/functions/partials/includecached/
- MathJax v4 configuration: https://docs.mathjax.org/en/latest/web/configuration.html
- Mermaid ESM: https://mermaid.js.org/config/usage.html
