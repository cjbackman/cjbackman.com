---
name: cjbackman.com
description: Personal notes site — engineering and leadership writing in a working notebook.
colors:
  ink: "#111111"
  paper: "#ffffff"
  link-blue: "#0000ee"
  hover-blue: "#5badf0"
  rule-line: "#dddddd"
  margin-gray: "#555555"
  meta-gray: "#666666"
  archive-gray: "#888888"
  card-edge: "#eeeeee"
  card-tint: "#f8f8f8"
  code-tint: "#f5f5f5"
typography:
  body:
    fontFamily: "ui-monospace, Menlo, Consolas, monospace"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "normal"
  headline:
    fontFamily: "ui-monospace, Menlo, Consolas, monospace"
    fontSize: "1.4rem"
    fontWeight: 700
    lineHeight: 1.3
  title:
    fontFamily: "ui-monospace, Menlo, Consolas, monospace"
    fontSize: "1.15rem"
    fontWeight: 700
    lineHeight: 1.3
  label:
    fontFamily: "ui-monospace, Menlo, Consolas, monospace"
    fontSize: "0.85em"
    fontWeight: 400
    lineHeight: 1.4
rounded:
  none: "0"
  hairline: "2px"
  card: "4px"
spacing:
  xs: "0.4rem"
  sm: "1rem"
  md: "1.5rem"
  lg: "2rem"
  xl: "3rem"
components:
  link:
    textColor: "{colors.link-blue}"
  nav-link:
    textColor: "{colors.margin-gray}"
  card:
    backgroundColor: "{colors.card-tint}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "1.2rem 1.4rem"
  card-hover:
    backgroundColor: "{colors.card-tint}"
    textColor: "{colors.ink}"
  code-inline:
    backgroundColor: "{colors.code-tint}"
    textColor: "{colors.ink}"
    rounded: "{rounded.hairline}"
    padding: "0.1em 0.3em"
  pre-block:
    backgroundColor: "{colors.code-tint}"
    textColor: "{colors.ink}"
    rounded: "{rounded.hairline}"
    padding: "1em"
---

# Design System: cjbackman.com

## 1. Overview

**Creative North Star: "The Working Notebook"**

A site that reads like an engineer's notebook left open on the desk. The default state is plain text on paper: monospace, single column, generous line-height, the only color reserved for links. The chrome — header, footer, dividers — is hairline-thin gray that frames the writing without competing with it. Nothing on the page is performing.

The system is deliberately the opposite of SaaS marketing. There are no hero sections, no metrics, no gradients, no illustrations, no card grids of features, no CTAs. Where most "personal sites" reach for editorial polish or Dribbble whimsy, this one stays in the lineage of the early-internet academic homepage and the developer's `~/notes` directory. Plain over polished is not a starting point to be embellished — it is the finished aesthetic.

The voice the design carries is *dry-witted, honest, thoughtful*. The first impression is *quiet confidence*: a reader should feel they've stumbled into someone's working notebook, not a landing page.

**Key Characteristics:**
- Single 680px column, monospace throughout, near-zero ornament.
- One accent color (link blue), used only for actual links.
- Borders, never shadows. Flat by default.
- Type hierarchy from weight + scale (≥1.15× steps), not from color or decoration.
- Motion limited to 0.2s ease state transitions.

## 2. Colors

The palette is paper, ink, one classic link blue, and a small ladder of grays. Every neutral leans cool-but-near-zero-chroma. Saturation only appears on links and on the card-hover edge.

### Primary

- **Link Blue** (`#0000ee`): Reserved for inline links in body copy. The unmodified default browser blue, used as a deliberate posture — these are links and they look like links. Visited state inherits browser default.

### Secondary

- **Hover Blue** (`#5badf0`): A lighter, friendlier blue used only for the card border on hover. Signals affordance on the homepage post listings without raising the volume of the rest of the page.

### Neutral

- **Ink** (`#111111`): Primary body text and the site title. Near-black, never `#000`.
- **Paper** (`#ffffff`): Page background.
- **Margin Gray** (`#555555`): Nav links, blockquote text, card body text, footer social links — the secondary voice that lives "in the margin" of the writing.
- **Meta Gray** (`#666666`): Article time stamps, post-listing time, footer text, tags. Quieter than margin gray; clearly metadata, not voice.
- **Archive Gray** (`#888888`): Archive list time stamps. The quietest tier — far enough back to read as scaffolding.
- **Rule Line** (`#dddddd`): Hairline borders on header, footer, blockquote, hr, table cells, code blocks. The structural skeleton of every divider on the site.
- **Card Edge** (`#eeeeee`): Default border on the homepage cards. One step lighter than rule-line so cards read as containers within the page rather than dividers across it.
- **Card Tint** (`#f8f8f8`): Card background. A whisper of off-white — present, but barely.
- **Code Tint** (`#f5f5f5`): Inline code and pre-block backgrounds, table header background. The "code highlight" tone, used consistently wherever code or tabular structure appears.

### Named Rules

**The One Color Rule.** The link blue is the only saturated color on the page. Any future accent — for callouts, badges, "new" markers, charts — must justify why it isn't being expressed in weight, scale, or gray.

**The No Pure Black, No Pure White Rule.** Body text is `#111111`, not `#000000`. The page is `#ffffff` by intent (paper), but every surface tinted off-white must lean cool-neutral, never warm. No `#fafafa` warm grays.

**The Visited Link Rule.** Visited links use the browser default. They are intentionally a different color from unvisited links. Do not override `:visited`.

## 3. Typography

**Display Font:** None.
**Body Font:** `ui-monospace, Menlo, Consolas, monospace`
**Label/Mono Font:** Same — the body font is the mono font is the only font.

**Character:** A single monospace stack carries the entire site. The system platform-monospace fallback chain (`ui-monospace`) means the page renders in San Francisco Mono on macOS, Cascadia/Consolas on Windows, DejaVu Sans Mono on Linux — each operating system's best monospace, never a webfont, never a download. The typographic personality is *the writer's terminal*: no ligatures, no italic flourishes, no display weight. Hierarchy comes from scale and weight contrast alone.

### Hierarchy

- **Headline** (700 weight, 1.4rem, line-height 1.3): Single-post page H1. Used once per page. Followed immediately by a date stamp in meta gray.
- **Title** (700 weight, 1.15rem, line-height 1.3): H2 in body content. The primary structural break inside an article.
- **Subtitle** (700 weight, 1rem, line-height 1.3): H3 in body content; also the homepage post-listing H2 link. Same weight as Title; the size step is the differentiator.
- **Body** (400 weight, 15px, line-height 1.65): Default running text. Line length is implicitly capped by the 680px container — roughly 70-80 characters of monospace, comfortably inside the 65-75ch read-zone.
- **Label** (400 weight, 0.85em, line-height 1.4): Time stamps, footer copyright, archive-list metadata. Sits in meta gray or archive gray.

### Named Rules

**The One Family Rule.** The body font, code font, and heading font are the same monospace stack. Do not introduce a serif or proportional sans for any reason — including "for variety in headlines". The mono-everywhere posture is the design.

**The Scale-and-Weight Rule.** Hierarchy is built from scale steps (≥1.15×) and weight contrast (400 vs 700) only. Do not introduce italic, uppercase, letter-spacing, or color to make a heading "feel different".

**The Code-Looks-Like-Body Rule.** Inline code and `<pre>` blocks use the body font at 0.92em with the code tint background. Code is not visually exotic on this site — it's prose's neighbor.

## 4. Elevation

The system has no shadows. Depth and structure are conveyed through hairline borders (`#dddddd` rule lines, `#eeeeee` card edges), tonal layering (card tint, code tint as off-white surfaces), and whitespace. The page is flat by intent — shadows would import a depth-theatre this register explicitly rejects.

### Named Rules

**The Flat Rule.** No `box-shadow` anywhere. None for cards at rest, none on hover, none for code blocks, none on the focus ring. Focus is communicated via outline, not shadow. Hover is communicated via border color shift, not lift.

**The Hairline Rule.** Every divider on the site is `1px solid #dddddd` (rule lines) or `1px solid #eeeeee` (card edges). Never thicker. Never a colored stripe. A `border-left: 3px solid <accent>` on a callout would violate the rule.

## 5. Components

The component vocabulary is small. Most pages are running prose; the chrome around it is the entirety of the system.

### Links
- **Style:** body color `#0000ee`, no underline at rest, underline on hover.
- **Visited:** browser default (intentionally retained).
- **Behavior:** instant — no transition, no animation. A link looks and acts like a link.

### Navigation
- **Style:** flex row, baseline-aligned, separated by 1.5rem gaps. Site title left, nav links right.
- **Typography:** site title in ink at body weight 700 ("CJ Backman" / "Hej, I'm CJ."). Nav links in margin gray at 0.9em.
- **Active/hover:** underline on hover. No active-state highlight; the page's own H1 communicates location.
- **Mobile:** wraps to two rows under 480px — title takes a full row, links wrap below it.

### Post listing (homepage)
- **Style:** `<article>` blocks stacked vertically, 2rem of separation between them.
- **Title:** H2 link at 1rem, body weight, ink color (link inherits via the title link only).
- **Time:** small block under the title, 0.85em, meta gray.
- **Summary:** body paragraph, top margin 0.4rem.
- **No card chrome.** Each post in the homepage feed is a paragraph cluster with a title, a date, and a summary — not a boxed unit.

### Single post
- **Title:** H1 at 1.4rem, body weight 700, ink. Sits 1.5rem below the nav.
- **Time:** 0.85em meta gray block immediately under the title.
- **Body:** running prose, with H2 (title scale) starting fresh sections at 2rem top margin and H3 (subtitle scale) at 1.5rem.
- **Tags:** end of article, 0.85em meta gray.

### Cards (homepage post-listing variant in custom.css)
- **Corner Style:** 4px radius — gently rounded, never pill, never sharp.
- **Background:** card tint (`#f8f8f8`).
- **Border:** 1px solid card edge (`#eeeeee`); border color transitions to hover blue (`#5badf0`) on hover over 0.2s ease.
- **Shadow Strategy:** none.
- **Internal Padding:** 1.2rem 1.4rem (1rem 1.1rem under 700px).
- **Children:** H3 title at 1.05rem (no top margin, 0.4rem bottom), then a paragraph in margin gray at 0.92rem.

### Blockquote
- **Border:** 1em-padded `border-left: 3px solid #dddddd`. This is the **one sanctioned exception** to the "no colored side stripes" ban — the stripe is the rule-line gray, structural, not an accent.
- **Color:** margin gray (`#555555`), italics inherited from default browser styling.

### Code (inline + pre)
- **Inline:** body font at 0.92em, background code tint, padding 0.1em 0.3em, border-radius hairline (2px).
- **Pre block:** body font at 0.92em, background code tint, padding 1em, border-radius hairline (2px), `overflow-x: auto`.
- **Highlighting:** Hugo-rendered, "emacs" theme. Do not introduce a second highlight theme.

### Tables
- **Style:** full-width, collapsed borders, all cells `1px solid #dddddd`.
- **Header:** background code tint (`#f5f5f5`), left-aligned text.
- **Padding:** 0.4em 0.8em.
- **Font size:** 0.9em — tables read smaller than body to fit columnar density.

### Mermaid diagrams
- **Margin:** 1.5em top and bottom.
- **Theme:** Mermaid default. No custom theming.

### Footer
- **Border:** `1px solid #dddddd` at top, 1rem of padding above the content, 3rem of margin separating it from the article.
- **Typography:** 0.85em, meta gray.
- **Social row:** inline, 0.75rem gap between links, margin-gray text.

## 6. Do's and Don'ts

### Do:
- **Do** keep the column at 680px and the body font monospace. Both are load-bearing for the "working notebook" voice.
- **Do** reserve `#0000ee` for actual links and only for actual links. The "one color" posture only works if it's enforced.
- **Do** build hierarchy from scale + weight (≥1.15× steps, 400 vs 700). Anything that needs more visual weight needs better writing, not a second color.
- **Do** use hairline borders (`#dddddd` for structure, `#eeeeee` for card edges) wherever a divider is needed. Borders, never shadows.
- **Do** use the existing meta-gray ladder (`#555` → `#666` → `#888`) for secondary, tertiary, and quietest text. Don't invent new gray tones.
- **Do** keep code and prose in the same font. Code blocks are not visually exotic on this site.
- **Do** ship features as progressive enhancements (Mermaid, MathJax). Reading the site without JS must work.

### Don't:
- **Don't** introduce a second font family — no serif display, no proportional sans, no webfont download. The mono-everywhere stack is the design.
- **Don't** add hero sections, hero-metric blocks, or three-column feature grids — these are the SaaS-marketing cliches PRODUCT.md explicitly rejects.
- **Don't** use gradient text, gradient backgrounds, gradient buttons, or `background-clip: text`. Anywhere.
- **Don't** add glassmorphism, drop shadows, blurs, or any depth-theatre effect. Flat is the rule.
- **Don't** add stock illustrations, AI-generated header art, or abstract tech imagery to posts or the homepage.
- **Don't** add newsletter modals, exit-intent popups, sticky CTAs, or "subscribe" call-outs of any kind.
- **Don't** add a dark-mode toggle as a personality move. If dark mode ever ships, it must be triggered by `prefers-color-scheme` only and look like the same notebook under different lighting.
- **Don't** override `:visited` link color. The two-tone link state is intentional.
- **Don't** use `border-left: <Npx> solid <color>` greater than 1px as a colored accent on cards or callouts — except the existing blockquote, which uses rule-line gray and is sanctioned.
- **Don't** add bounce, elastic, or scroll-driven motion. Transitions cap at 0.2s ease for state changes.
- **Don't** use em dashes in copy on this site (or `--`). Use commas, colons, semicolons, periods, parentheses.
- **Don't** introduce conversion-optimized verbs ("Unlock", "Supercharge", "Transform"). The site does not sell.
