+++
title = 'Tech Debt'
date = 2025-01-12T13:43:48+01:00
tags = ['Tech Debt', 'Quality', 'Communication']
summary = "I've come to deeply dislike the term tech debt."
draft = true
+++

> The biggest risk is not taking any risk. In a world that is changing really quickly, the only strategy that is guaranteed to fail is not taking risks.
>
> -- Mark Zuckerberg

There has surely been enough written about tech debt over the years, but I wanted to write this post to understand my own thinking on the topic better, as well as contextualize all tech debt articles I've collected over the years.

Generally, I've come to dislike the term. Not because I don't think it's important to important to be on top of your tech debt. Tech debt is risk, and you should deal with it according to your risk appetite. Ignore it completely and it will [become a bottleneck](https://martinfowler.com/articles/bottlenecks-of-scaleups/01-tech-debt.html) sooner or later.

The reason I've come to dislike it is how I've seen it being used by engineering organizations in the places where I've worked. I've seen countless situations where tech teams, in meetings with stakeholders, blame most of their issues on tech debt, and all they need is time to fix it. That kind of viewpoint does not sit right with me, for several reasons.

The first reason is communication. There is a sentiment in the engineering community that the tech debt metaphor is great for communication. I think it's because debt is a financial term and business speaks finance. Thus, we can translate this technical challenge into something everyone can understand. However, my experience is that business does not understand the term because it's too vague. The metaphor is understandable on a high-level, but not in any way that can help guide decision-making.

Secondly, in my experience, the assumptions underlying the ask are somewhat delusional. We need to accept that incurring some tech debt is inevitable and that condition will never go away. It's not possible to create a perfect design upfront, because the real learning starts after we ship. Moreover, the idea that tech debt is the one finite thing that we can simply fix and be done with if we had some time is wrong. A business will never stop, the engineering organization needs to continuously delivery value, so face reality and stop hoping for a grand halt where you can fix all your tech debt. It's a pipe dream.

Thirdly, this also highlights a mindset that lacks ownership. Tech debt is created by the engineering organization, and its the only group that can fix it. It's not business role to fix tech debt, and even if they wanted to, they don't have the expertise. No one but engineering can fix tech debt.

All that being said, tech debt is risk and you must manage your risk. How can you do it?

# Name it

Meaningless term

- https://stackoverflow.blog/2023/12/27/stop-saying-technical-debt/
- https://www.honeycomb.io/blog/anything-but-tech-debt
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

- https://www.eferro.net/2021/02/basal-cost-of-software.html
- https://www.quora.com/What-are-some-good-ways-of-keeping-track-of-technical-debt
