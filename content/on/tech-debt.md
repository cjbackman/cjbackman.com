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

There has surely been enough written about [tech debt over the years](https://devopedia.org/technical-debt), including [Martin Fowler's famous quadrant](https://martinfowler.com/bliki/TechnicalDebtQuadrant.html), but I wanted to write this post to understand my own thinking on the topic better, as well as contextualize all tech debt articles I've collected over time.

Generally, I've come to dislike the term. Not because I don't think it's important to be on top of your tech debt. Tech debt is risk, and you should deal with it according to your risk appetite. Ignore it completely and it will [become a bottleneck](https://martinfowler.com/articles/bottlenecks-of-scaleups/01-tech-debt.html) sooner or later.

The reason I've come to dislike it stems from how I've seen it being used by engineering organizations in the places where I've worked. I've seen countless situations where tech teams, in meetings with stakeholders, blame most of their issues on tech debt, and all they need is time to fix it. That kind of viewpoint does not sit right with me, for several reasons.

The first reason is communication. There is a sentiment in the engineering community that the tech debt metaphor is great for communication. I think it's because debt is a financial term and business speaks finance. Thus, we can translate this technical challenge into something everyone can understand. However, my experience is that business does not understand the term because it's too vague. The metaphor is understandable on a high-level, but not in any way that can help guide decision-making.

Secondly, in my experience, the assumptions underlying the ask are somewhat delusional. We need to accept that incurring some tech debt is inevitable and that condition will never go away. It's not possible to create a perfect design upfront, because the real learning starts after we ship. Moreover, the idea that tech debt is the one finite thing that we can simply fix and be done with if we had some time is wrong. A business will never stop, the engineering organization needs to continuously delivery value, so we must face reality and stop hoping for a grand halt where we can fix all our tech debt. It's a pipe dream.

Thirdly, this highlights a mindset that lacks ownership. Tech debt is created by the engineering organization, and its the only group that can fix it. It's not business role to fix tech debt, and even if they wanted to, they don't have the expertise. It's engineering's responsibility to care for the quality of the code.

All that being said, tech debt is risk and we must manage our risk. How can we do it?

# Communication: Name it

I've used the term frequently in past, and sometimes I still do, but what was helpful for me was to reflect on how all the tech debt discussions I heard and participated in must be perceived by others. For example, from [the perspective of a product manager](https://betterprogramming.pub/why-creating-tech-debt-is-a-necessary-evil-7fb215b88c45) or a business stakeholders. If we as engineers barely understand each other because [we use the term differently](https://cutlefish.substack.com/p/tbm-267-debt-and-bridge-building), how can we expect anyone non-technical to understand?

That's when it dawned on me that while the term is common, it's also so broad that it has lost all its meaning. It's become a general-purpose black box for all engineering work where it's hard to articulate the value. Therefore, instead of [extending the metaphor](https://www.maxcountryman.com/articles/a-framework-for-prioritizing-tech-debt), I think it's better to [stop saying tech debt](https://stackoverflow.blog/2023/12/27/stop-saying-technical-debt/), and try to be as concrete as possible when [describing the engineering work](https://www.honeycomb.io/blog/anything-but-tech-debt) that needs to be done. Strive for describing the work using language that align with the business impact, like reducing risk, ensuring business continuity, improving incremental revenue and shortening time-to-value.
That will create an explicit language less prone to misunderstandings and abstract discussions, enabling a team to align it with the product roadmap.

# Value: Align it

Tech debt should not be treated differently from any other work done by the product team. It should end up on the roadmap the same way as all other items, by focusing on the value delivered by paying down the debt.

In my experience, a common argument is that tech debt is too hard to measure but I don't think that's accurate. I agree it's not always possible to measure the impact of the tech debt with product metrics, however, if complemented with [Service Level Objectives](https://sre.google/sre-book/table-of-contents/), [DORA](https://www.amazon.com/Accelerate-Software-Performing-Technology-Organizations/dp/1942788339), [CodeScene](https://codescene.com/), and other emerging [Engineering Intelligence Platforms](https://www.gartner.com/doc/reprints?id=1-2H8F437D&ct=240409&st=sb&li_fat_id=9447a770-118b-4c3d-a8dd-f37764de7555), there will be sufficient data to properly quantify the value and align it with business objectives. [Tech debt reduction can be costly](https://lethain.com/migrations/), so it's in our best interest to ensure we have a crisp understanding of the business value. Please note, if you're not clear on what you're business objectives are, that's the first problem to solve.

One common approach is to spend time discussing [taxonomies of tech debt](https://ieeexplore.ieee.org/document/10109339) to use as tags in the issue tracking system and subsequently leverage [the number tech debt issues](https://jacobian.org/2023/dec/20/tech-debt/) as means to monitor. I've tried this and found it a waste of time. I understand the rationale, you need to measure any problem you wish to improve. But it's the wrong way of measuring, as the correlation between number of issues with a tech debt tag and business impact is low in my experience. This practice only adds to bloating the backlog. Don't treat tech debt as something special. Measure it with the tools and practices mentioned above instead.

Another common approach is to define a [static allocation to tech debt](https://blog.alexewerlof.com/p/tech-debt-day). I would be reluctant to introduce that as a policy for an entire organization, because it's blunt and risks creating the wrong incentives. However, I'm a big fan of teams fully owning the quality of their code and having the autonomy to decide what payment plan works best for them. I've also heard suggestions of allocating entire teams to tackling tech debt, there are [multiple reasons why this is a bad idea](https://www.mironov.com/team-configs/), primarily because it will kill the morale of whoever is on the tech debt team and remove ownership of quality from the other teams.

Don't treat tech debt differently. Through effective communication and a focus on value we can [get the tech debt onto the roadmap](https://www.infoq.com/articles/getting-tech-debt-on-roadmap/). An even easier approach is to prevent incurring tech debt in the first place.

# Habits: Prevent it

Build the right habits. Upfront design is impossible. Time to 'fix' everything will never happen.

Ownership mindset. Think like an investor. That is why external agencies are problematic.

Cost of software - italian dude?

- https://www.eferro.net/2021/02/basal-cost-of-software.html

Typically people emphasize and try to optimize and shorten the time before a feature is released . Don't get me wrong, releasing early and often is incredibly valuable, but because it saves the company from its competition. It's valuable because it accelerates learning.

Track allocation and other metrics as KPIs, but focus on establishing the right habits and mindset instead.

- https://chelseatroy.com/2021/10/29/a-rubric-for-evaluating-team-members-contributions-to-a-maintainable-code-base/
- https://gist.github.com/wojteklu/73c6914cc446146b8b533c0988cf8d29
- https://minimumcd.org/
- https://refactoring.com/catalog/
- https://www.codesimplicity.com/book/
- https://www.tokyodev.com/articles/all-code-is-technical-debt
- Tidy First?

# Conclusions

Tech debt is inevitable as long as you write code, and tech debt is risk that you must manage. Drop the illusion that tech debt is a well understood term. Instead name the engineering work for what it is, find methods to align it with the product roadmap that works for your team and organization, and start working on developing the mindset and habits that promotes higher quality from the start.
