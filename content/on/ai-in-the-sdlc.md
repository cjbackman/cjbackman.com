+++
title = 'AI in the SDLC'
date = 2025-12-07T16:03:14+01:00
tags = ['AI', 'Strategy']
summary = 'Learnings from driving AI adoption in the software development lifecycle.'
draft = true
+++

I've been part of driving AI adoption in the SDLC in various shapes and forms, and here are my learnings so far. Looking at [DORA 2025](https://services.google.com/fh/files/misc/2025_state_of_ai_assisted_software_development.pdf) and the [METR study](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/) these experiences are not unique.

## What we did

- Allocated a fixed budget and enabled a number of tools (Lovable, Claude Code, Cursor, Github Copilot, and ChatGPT) for the Technology department to use.
- Set clear expectation that everyone, including leadership, should experiment with and advocate for AI.
- Implemented the strategy in four phases: accelerate learning, drive adoption, improve speed of delivery, and deliver sustainable impact. 
- Established a metrics program combining quantitative delivery metrics (e.g., DORA, PR throughput) with qualitative developer feedback (a survey we ran regularly).
- Created a simple governance structure where tech leadership reviewed progress bi-weekly to decide whether to course correct. 
- Provided regular transparency and communication, including progress updates and survey insights in every Technology All-Hands.
- Created community structures; an AI guild with recurring meetings where people discussed challenges, defined guardrails, and conducted AI retros. Anything to foster continuous learning and improvement. We also ran 15-minute talks for anyone to share experiments and learnings. This was an effective way to enable AI champions to drive adoption.

## What worked well

- Overall, the approach received positive feedback. It was focused on enabling teams to figure out what works instead of mandating specific outcomes or use cases.
- Adoption was fast. We saw over 90% DAU within the first month.
- We managed to significantly shorten discovery cycles and improved alignment across product and design roles by leveraging Lovable. Designers and PMs shifted from writing PRDs to building high fidelity prototypes. Most tools have good support for injecting design system instructions.
- While quality of AI generated code is a legitimate concern, we had great success in improving quality when we paired AI and a code quality tool. We were using CodeScene (great tool) which provides actionable context to improve quality on a file level. It’s easy for the AI agent to act on this input. We saw improvements in code quality measured by Average Code Health.
- A quick win was to enable Github Copilot for AI-assisted code reviews. It efficiently caught simpler bugs (e.g., typos), which was much appreciated by engineers as they felt they could focus on more complex aspects of the reviews like business logic.
- Close collaboration between the AI guild and platform teams ensured we had guardrails and automation from the start (e.g., we created a pipeline for automatically deploying prototypes on our infrastructure with best practices baked in from the get go).
- Community structures (AI guild, lightning talks, retros) created consistent knowledge sharing and cross-team learning, and was generally appreciated by the teams.
- Transparency through All-Hands updates and surveys helped maintain momentum and trust in the strategy.
- We also had successful experiments when connecting agents to internal context (e.g., an MCP integration in our frontend enabled automation of simple web component generation, something that was normally a tedious task).
- Collecting qualitative and not only quantitative data proved helpful, to have a short feedback loop of the developer experience.
- Industry standard best practices like continuous delivery, working in small batches, and good documentation greatly benefits AI effectiveness. Hence, there is no real tradeoff between developer experience and effective AI usage. Win-win.

## What could have been improved

- We were a bit slow with creating a clear policy around allowed tools and usage. There’s a lot of uncertainty regarding what’s allowed, so an unclear policy really hampers adoption.
- While adoption was high and we saw measurable quality improvements, the impact on speed metrics (deployment frequency, PR throughput) were limited. My hypothesis is that other constraints in the SDLC reduced impact, like slow reviews and lack of full CI/CD maturity.
- The learning curve was steeper than we had expected. Most people were eager to explore but there was a clear ask for formal training. Right before I left I was looking into using, e.g., Skillerwhale for this.
- Additionally, we could have done better to create more explicit space and time for people to experiment. We tried to push the strategy “on top” of normal duties which again was an underestimation of how steep the learning curve is.
