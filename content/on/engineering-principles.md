+++
title = 'Engineering principles'
date = 2025-02-16T13:15:35+01:00
draft = false
tags = ['Culture', 'Engineering Principles', 'Technical Excellence']
summary = 'My thoughts on the principles that underpin great engineering culture.'
+++

> Excellence is never an accident. It is always the result of high intention, sincere effort, and intelligent execution; it represents the wise choice of many alternatives - choice, not chance, determines your destiny.
>
> -- Aristotle

A common question for any engineering leader is what great engineering culture looks like. It's an important question, albeit not an easy one. I wanted to write down my answer and I expect it to change continuously as I learn and gain new perspectives.

# Principles

Process is important, but it's an implementation detail. It's great talent guided by principles that drive excellence and impact.

## Give a damn

**Empowered engineers.**

Marty Cagan talks about empowered engineers as [the most important thing](https://www.svpg.com/the-most-important-thing/) for a successful product team, and I wholeheartedly agree. The best engineers are those who deeply care about the user and the strategic context within which they operate. Combining product sense, data, and empathy; engineers leverage their craftsmanship to solve problems worth solving and deliver real value.

For relevant references, explore [product engineers](https://www.hyperact.co.uk/blog/what-is-a-product-engineer), [product engineer manifesto](https://productengineer.org/), and [Addy Osmani's book _Leading Effective Engineering Teams_](https://leet.addy.ie/).

**You build it, you own it.**

Coined by [Alex Ewerlöf](https://blog.alexewerlof.com/p/you-build-it-you-own-it), as an evolution of Werner Vogels' (CTO of Amazon) quote _you build it, you run it_. The best teams own their work end-to-end, from ideation, to delivery, and impact. If the software doesn't meet [the expectations](https://blog.alexewerlof.com/p/sla), i.e., there is an incident, it's the team's top priority to fix it.

This is sometimes called shifting left and must be done mindfully to manage cognitive load. Depending on the context, shifting left must be accompanied by effective platform engineering, intentional investment in upskilling, and careful staffing.

## Get shit done

**Quality and time are constants, scope is variable.**

This is a powerful mindset that's embraced by many teams, but for those where it's not, this can be a massive unlock. There is a common notion in engineering that deadlines are stupid, estimation is impossible, and therefore everyone should accept that things will take the time they take. I exaggerate a bit, but I'm sure some can relate.

It's unfortunate that we, as an industry, have managed to create such a strong coupling between estimates and time. Estimation is not all evil, but endless discussions around improving estimations tend to be. Time, however, is a powerful constraint ([Parkinson's law](https://en.wikipedia.org/wiki/Parkinson%27s_law) is real), and we can leverage it by changing our planning from being based on how long we think something will take to how much time we're willing to invest (also, see [appetite from _Shape Up_](https://basecamp.com/shapeup/1.2-chapter-03)).

There are, of course, nuances to this, but when this mindset is fully embraced, it provides a simple decision-making framework that empowers teams and enables them to move with high urgency, without becoming defensive about timelines (which usually results in adding big buffers).

**Rapid improvement is the goal.**

> The best teams are those that achieve elite improvement, not necessarily elite performance.
>
> -- [2024 DORA Report](https://dora.dev/research/2024/dora-report/)

Software engineering, technology, and business are always evolving. There is no final destination. Excellence is determined by how quickly we learn. That's why [continuous delivery](https://minimumcd.org/) is the way to ship. Exploring trade-offs and making fast, pragmatic decisions are key. Retrospectives and post-mortems are musts. It's all about getting 1% better every day.

**Engineer the system for flow.**

Building and shipping software is collaborative, messy, and constantly evolving [system](https://www.goodreads.com/book/show/3828902-thinking-in-systems). Therefore, it's important to be obsessed with reducing [waste](https://en.wikipedia.org/wiki/Lean_software_development), otherwise, it slowly kills any system of execution. Set WIP limits, leverage [flow engineering](https://flowengineering.org/), foster a culture of [DevOps](https://en.wikipedia.org/wiki/DevOps), adopt an [SRE mindset](https://sre.google/books/) and invest in [developer experience](https://queue.acm.org/detail.cfm?id=3595878) to reduce friction and increase flow.

**Set the pace with cycles, not sprints.**

Acting with a sense of urgency and keeping momentum is essential. Doing it [sustainably](http://www.extremeprogramming.org/rules/overtime.html) is achieved with setting the right cycle. Having a steady n-week cycle gives a baseline from which an organization can continuously learn how to scope, shape, and ship. This will create a system where predictability improves consistently and trust with customers and stakeholders is kept high.

## Kill complexity before it kills you

**Choose good design over bad design.**

> The alternative to good design is always bad design. There is no such thing as no design.
>
> -- Adam Judge

Complexity is the enemey in software engineering, and effective design is the way to fight it. The best approach I've seen to good design comes from having the right habits. Good design is primarily about making software do what it's supposed to do while ensuring it's easy to change. This is important because change is inevitable and a key cost driver in software engineering.

Habits that help with this is continuous [refactoring](https://refactoring.guru/refactoring), looking for [red flags](https://www.goodreads.com/book/show/39996759-a-philosophy-of-software-design), [tidying](https://www.oreilly.com/library/view/tidy-first/9781098151232/), applying [the Boy Scout Rule](https://deviq.com/principles/boy-scout-rule), doing [test-driven development](https://en.wikipedia.org/wiki/Test-driven_development) (TDD), and [domain-driven design](https://en.wikipedia.org/wiki/Domain-driven_design) (DDD).

**Data and interfaces are first-class citizens.**

Data must be part of the definition of done. Invest in instrumentation, data models, and contracts. Dogfood teams with data to build analytics and improve the product. Make operations an input to design with observability. Data models and interfaces (e.g., APIs, event contracts, UIs) are [leverages points](https://lethain.com/managing-technical-quality/) for taming complexity and driving quality.

## Have some f*cking fun

**Software engineering is a socio-technical endeavour.**

Software engineering is technical but it's built by people. How those people work together is fundamental to the quality of the output and the wellbeing of the team members. Subscribing to this principle means embracing [team topologies](https://teamtopologies.com/) (remember [Conway's law](https://en.wikipedia.org/wiki/Conway%27s_law)), promote practices like [Architectural Decision Records](https://adr.github.io/) (ADRs), schedule blockers for pair and mob programming, do hackathons, make sure engineers regularly talk to users, and be [radically candid](https://www.goodreads.com/book/show/29939161-radical-candor).