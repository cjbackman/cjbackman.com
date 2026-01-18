+++
title = 'Retro: AI in the SDLC'
date = 2026-01-10T16:03:14+01:00
tags = ['AI', 'Strategy']
summary = 'Learnings from driving AI adoption in the software development lifecycle.'
draft = false
+++

I've been part of driving AI adoption in the SDLC in various shapes and forms, and here are some unpolished notes with my learnings so far. Not all measures below were implemented at the same place, so this is a collection of experiences across multiple organzations. Looking at [DORA 2025](https://services.google.com/fh/files/misc/2025_state_of_ai_assisted_software_development.pdf) and the [METR study](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/) these experiences are not unique.

## What was typically done

- Allocated a fixed budget and enabled a number of tools, including Lovable, Claude Code, Cursor, Github Copilot, and ChatGPT.
- Set clear expectation that everyone, including leadership, should experiment with and advocate for AI. Not experimenting was not an option.
- The strategies were usually implemented in phases. Focusing initially on accelerating learning through experimentation and knowledge sharing, then driving adoption of what worked, to finally scale improvements across the SDLC.
- Established a metrics program upfront combining quantitative delivery metrics (e.g., DORA, PR throughput) with qualitative developer feedback collected with regular surveys.
- Having some lightweight governance structure where progress were reviewed by exec leadership on a regular basis.
- Continuous communcation of progress, general updates and survey insights in org-wide forums.
- Established community structures such as an AI guild with recurring meetings focused on knowledge sharing, discussing challenges, defining guardrails, and running retrospectives on AI usage. Typically accompanied by 15-minute knowledge-sharing talks where anyone could present experiments and learnings.

## What worked well

- The most successful approach I saw, in terms of adoption (<30% to 90% DAU in a month), was focused on enabling teams with tools, training, community structures, and mandating experimentation and knowledge sharing rather than specific outcomes or use cases.
- The biggest impact in terms of speed that I've seen comes from shortened discovery cycles and improved alignment by leveraging LLMs for prototyping. Many designers and PMs shifted from writing PRDs to building high fidelity prototypes. Most tools had good enough support for injecting design system instructions.
- While quality of AI generated code is a legitimate concern, I've also seen quality improve by pairing paired AI and a code quality tool like CodeScene. The tool provide actionable context on a file-level and can easily be fed into an LLM to generate a PR for a quality improvement.
- Another quick win was to enable AI-assisted code reviews. It efficiently caught simpler bugs (e.g., typos), which was appreciated by engineers as they felt they could focus on more complex aspects of the reviews like business logic.
- Close collaboration between the AI guild and platform teams ensured we had guardrails and automation from the start (e.g., having pipelines for automatically deploying prototypes on internal infrastructure with security best practices baked in from the get go).
- Community structures (AI guild, lightning talks, retros) created consistent knowledge sharing and cross-team learning, and was generally much appreciated.
- Transparency through overcommunicating progress, updates and survey results helped maintain momentum and trust in the strategy.
- Collecting qualitative and not only quantitative data proved helpful, to have a short feedback loop of the developer experience.
- Industry standard best practices like continuous delivery, working in small batches, and good documentation greatly benefits AI effectiveness.

## What I would do differently

- Be faster in creating a clear policy around allowed tools and usage. There’s a lot of uncertainty regarding what’s allowed, so an unclear policy really hampers adoption.
- Wouldn't focus too much on speed metrics. Even with high adoption and measurable quality improvements, the impact on speed (e.g., deployment frequency, PR throughput) didn't materialize. Not terribly suprising given other constraints in the SDLC, like slow reviews and lack of full CI/CD maturity.
- Invest more in formal training. The learning curve is steeper than expected. Most people are eager to explore in my experience but there is a clear need for upskilling.
- Creating explicit space and time for people to experiment.
