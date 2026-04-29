# Product

## Register

brand

## Users

Engineering managers, senior ICs, and people who already know CJ professionally — past colleagues, hiring conversations, peers comparing notes. They land here because they want a sense of how CJ thinks, not because they're shopping for a service. The site is read in a browser tab between other things, often skim-first then read-deep on one piece if the writing earns it.

## Product Purpose

A personal site that does two jobs at once:

1. **Credible portfolio** — when someone needs to vouch for or evaluate CJ as an engineering leader, this is the artifact that proves how he thinks about engineering, leadership, and craft.
2. **Thinking-out-loud notebook** — a place to publish working notes on engineering and leadership without performing for an audience. Posts are observations and positions, not articles-for-the-algorithm.

Success looks like a reader bookmarking one post, sending one post to a colleague, or ending the visit with a sharper read on CJ than they started with — never with a feeling that they were marketed to.

## Brand Personality

**Dry-witted, honest, thoughtful.**

- *Dry-witted* — humor exists, but it's underplayed; never quippy, never emoji-led, never headline-funny. The kind of dry where the joke is in word choice or omission.
- *Honest* — opinions are stated as opinions, mistakes are stated as mistakes, uncertainty is stated as uncertainty. No hedging that pretends to be balance.
- *Thoughtful* — claims are reasoned, not asserted. The reader feels someone weighed this before publishing.

The emotional read on first impression is **quiet confidence** — content speaks, design gets out of the way. Nothing on this site should look like it's trying.

## Anti-references

**SaaS marketing in any form.** Specifically reject:

- Hero sections with a punchy headline and supporting subheadline
- "Hero metric" templates (big number + small label + supporting stats)
- Three-column feature grids with icon + heading + body
- Gradient text, gradient CTAs, gradient anything decorative
- Glassmorphism, drop shadows used for depth theatre
- Stock illustrations, AI-generated header art, abstract tech imagery
- Conversion-optimized copy ("Unlock", "Supercharge", "Transform your...")
- Newsletter signup modals, exit-intent popups, sticky CTAs
- Dark mode toggle as a personality move

Adjacent things to avoid: Medium/Substack polish (rounded cards, big author photos, paywall vibes), Dribbble whimsy (over-animated hover states, decorative typography flourishes), brutalist showpiece (intentional ugliness as a flex).

## Design Principles

1. **The writing is the product; design gets out of the way.** Layout, color, and motion exist to remove friction from reading, not to add personality. If a design choice doesn't serve the prose, it's wrong here.

2. **Plain over polished.** Monospace, narrow column, near-zero decoration is the aesthetic — not a starting point to be embellished. Resist the urge to "improve" by adding shadows, gradients, illustrations, or animation.

3. **Anti-marketing posture.** The site should never read as if it's trying to convert, impress, or sell. No hero sections, no metrics, no CTAs. A reader should feel they've stumbled into someone's working notebook, not a landing page.

4. **Show, don't tell.** Credibility comes from the posts existing and being good, not from "About" pages, testimonials, or self-description. Bio is one line; everything else is the writing.

5. **Honest defaults.** Semantic HTML, keyboard-navigable, screen-reader-sensible, prefers-reduced-motion respected — because that's the bar a thoughtful person ships at, not because it's a feature.

## Accessibility & Inclusion

Sensible defaults, applied consistently:

- WCAG AA contrast as the floor, not the ceiling
- Semantic HTML (proper headings, landmarks, lists, blockquotes — not `<div>` soup)
- Full keyboard navigation with visible focus indicators
- Respect `prefers-reduced-motion`
- Alt text on every content image
- Works without JavaScript for reading the site (Mermaid and MathJax are progressive enhancements)
- Body text not below 15px; line length capped around 65–75ch
