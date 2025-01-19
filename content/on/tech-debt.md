+++
title = 'Tech Debt'
date = 2025-01-12T13:43:48+01:00
tags = ['Tech Debt', 'Software Design', 'Quality']
summary = "I've come to deeply dislike the term tech debt."
draft = true
+++

There has surely been enough written about tech debt over the years, but I wanted to write this post to understand my own thinking on the topic better, as well as contextualize all tech debt articles I've collected over the years.

Generally, I've come to dislike the term. Not because I don't think it's important to important to be on top of your tech debt. Tech debt is risk, and you should deal with it according to your risk appetite. Ignore it completely and it will [become a bottleneck](https://martinfowler.com/articles/bottlenecks-of-scaleups/01-tech-debt.html) sooner or later.

The reason I've come to dislike it is how I've seen it being used by engineering organizations in the places where I've worked. I've seen countless situations where tech teams, in meetings with stakeholders, blame most of their issues on tech debt, and all they need is some time to fix it. I dislike this

- The engineering community is proud of the great debt metaphor, because debt is a financial term and business speaks finance. My experience is that business does not understand the term because it's too vague.

- Incurring some tech debt is inevitable. It is not possible to create a perfect design upfront, because real learning only happens after we ship.

- You need to continuously deliver value, so stop hoping for a grand halt where you stop and fix all your tech debt. It's a pipe dream.

- Mindset. Tech debt is created by the engineering organization, and its the only group that can fix it. When engineers ask someone else to fix their debt, they are asking the wrong person. Business does not care and they will not fix it. They couldn't even if they wanted to.

So how can you deal with tech debt?

# Name it

Meaningless term

- https://stackoverflow.blog/2023/12/27/stop-saying-technical-debt/
- https://www.tokyodev.com/articles/all-code-is-technical-debt
- https://cutlefish.substack.com/p/tbm-267-debt-and-bridge-building

# Align it

Quantify and align it with the product roadmap and objectives

- https://jacobian.org/2023/dec/20/tech-debt/
- https://www.maxcountryman.com/articles/a-framework-for-prioritizing-tech-debt
- https://newsletter.getdx.com/p/measuring-and-managing-tech-debt
- https://www.infoq.com/articles/getting-tech-debt-on-roadmap/
- https://queue.acm.org/detail.cfm?ref=rss&id=3674114
- https://blog.alexewerlof.com/p/tech-debt-day

# Prevent it

Build the right habits. Upfront design is impossible. Time to 'fix' everything will never happen.

- https://gist.github.com/wojteklu/73c6914cc446146b8b533c0988cf8d29
- https://minimumcd.org/
- https://refactoring.com/catalog/
- http://martinsson-johan.blogspot.com/2022/11/breaking-out-of-legacy-with-3p.html
- Tidy First?
- https://www.codesimplicity.com/book/

# Anti patterns

- Tech debt team https://www.mironov.com/team-configs/
- Complex categorization https://ieeexplore.ieee.org/abstract/document/6974882
- Spend time defining https://ieeexplore.ieee.org/document/10109339

# Misc

Payment plans like 10% to tech debt are too blunt. Track allocation and other metrics as KPIs, but focus on establishing the right habits and mindset instead.

Ownership mindset. That is why external agencies are problematic.

- https://chelseatroy.com/2021/10/29/a-rubric-for-evaluating-team-members-contributions-to-a-maintainable-code-base/

Speed vs quality. There is a need to talk about time frames. You can be fast by cutting corners and I believe there are times when that is desirable, although those are rare. Over time you must aim for keeping quality stable and it will enable speed, like DORA research predicts.

Typically people emphasize and try to optimize and shorten the time before a feature is released . Don't get me wrong, releasing early and often is incredibly valuable, but because it saves the company from its competition. It's valuable because it accelerates learning.

Cost of software - italian dude?

- https://www.quora.com/What-are-some-good-ways-of-keeping-track-of-technical-debt
