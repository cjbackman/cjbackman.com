+++
title = 'Engineering Principles'
date = 2025-02-16T13:15:35+01:00
draft = true
tags = ['Culture', 'Engineering Principles']
summary = 'My thoughts on the principles that underpin great engineering culture.'
+++

> Excellence is never an accident. It is always the result of high intention, sincere effort, and intelligent execution; it represents the wise choice of many alternatives - choice, not chance, determines your destiny.
>
> -- Aristotle

A common question for any engineering leader is what great engineering culture looks like. It's a great question, albeit not easy, but I wanted to write down my answer to that question. I expect this to change continuously as I learn and get new perspectives.

Process is important, but it's also an implementation detail. It's great talent guided by principles that drives excellence.

# Principles

**We are empowered engineers.**

Marty Cagan talks about empowered engineers as [the most important thing](https://www.svpg.com/the-most-important-thing/) for a successful product team and I wholeheartedly agree. The best engineers are those that deeply care about the user and the strategic context within which they operate. Armed with care and context, engineers leverage their craftsmanship to solve problems worth solving and generate impact.

For a deep dive into what behaviors to look for in an engineer, I recommend [Addy Osmani's book Leading Effective Engineering Teams](https://leet.addy.ie/).

**We build it, we own it.**

Coined by [Alex Ewerlöf](https://blog.alexewerlof.com/p/you-build-it-you-own-it), as an evolution of Werner Vogel's (CTO of Amazon) quote _you build it, you run it_. We own the work work end-to-end, including testing, the delivery pipeline, and product ownership. If our software doesn't meet [the expectations](https://blog.alexewerlof.com/p/sla), i.e., there is an incident, it's our top priority to fix it.

This is sometimes called shifting left, and must be done mindfully to not explode the cognitive load of the engineers. Depending on the context, shifting left must be accompanied by effective platform engineering, intentional investment in upskilling, and careful staffing.

**Quality and time are constants, scope is variable.**

This is a powerful mindset that's obvious among many engineers, but I've also seen when it's not and what an unlock it can be once people get behind it. There is a common notion in engineering that deadlines are stupid, estimation is impossible, and therefore everyone should accept things will take the time it takes. I exaggerate a bit, but I'm sure some can relate.

It's unfortunate that we, as an industry, have managed to create such a strong coupling between estimates and time. Estimation is not all evil, but endless discussions around improving estimations are. Time, however, is a powerful constraint ([Parkinson's law](https://en.wikipedia.org/wiki/Parkinson%27s_law) is real), and we can leverage it by changing our planning from being based on how long we think some thing will take, to how much time we're willing to invest (also, see [appetite from Shape Up](https://basecamp.com/shapeup/1.2-chapter-03)).

There are of course nuances to this but when this mindset is fully embraced, it provides a simple decision-making framework that empowers teams and enables them to move with high urgency.

**Software engineering is a socio-technical endeavor.**

Software engineering is built by groups of people (for now). How those people work together is of utmost importance. Subscribing to this principle means you must think about team topology (remember [Conway's law](https://en.wikipedia.org/wiki/Conway%27s_law)) and knowledge silos, promote [Architectural Decision Record](https://adr.github.io/) (ADRs), pair and mob programming, do hackathons, ensure a [sustainable pace]([Developer experience](http://www.extremeprogramming.org/rules/overtime.html), make sure engineers regularly talk to users, and practice [radical candor](https://www.goodreads.com/book/show/29939161-radical-candor). And, don't forget to have a bit fun.

**Improvement is the goal.**

> The best teams are those that achieve elite improvement, not necessarily elite performance.
>
> -- [2024 DORA Report](https://dora.dev/research/2024/dora-report/)

Software engineering, technology, and business are always evolving. There is no final destination. What truly matters is how quickly we learn, as a collective. [Continuous delivery](https://minimumcd.org/) is the way to ship. Retrospectives and post-mortems are musts.

**Waste is the enemy.**

We must be obsessed about reducing [waste](https://en.wikipedia.org/wiki/Lean_software_development), otherwise it will kill us. Adopt an [SRE mindset](https://sre.google/books/) and invest in [developer experience](https://queue.acm.org/detail.cfm?id=3595878).

**Data is a first class citizen.**

Data is part of the definition of done. Invest in instrumentation, data models and contract. Dogfood teams with data to build analytics and improve the product. Make operations an input to design using observability.

**Choose good design over bad design.**

> The alternative to good design is always bad design. There is no such thing as no design.
>
> -- Adam Judge

Design is a non-negotiable and it comes from good habits. Good design is primarily about making do what its supposed to do while ensuring it's easy to change. Change is inevitable and a key cost driver in software engineering. Practice continuous refactoring, [tidying](https://www.oreilly.com/library/view/tidy-first/9781098151232/), applying [the boy scout rule](https://deviq.com/principles/boy-scout-rule), [test-driven development](https://en.wikipedia.org/wiki/Test-driven_development) (TDD), and [domain-driven design](https://en.wikipedia.org/wiki/Domain-driven_design) (DDD).
