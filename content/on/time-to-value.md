+++
title = 'Time-to-Value'
date = 2026-03-29T11:36:42+02:00
tags = ['Engineering', 'Leadership']
summary = 'Time-to-market is an incomplete measure.'
draft = false
math = true
+++

A question I keep running into when engineering organizations set their metrics is some version of: how do we improve time-to-market? It's a reasonable instinct. But I think it's often the wrong north star, and the organizations that use it uncritically pay a quiet price for it.

Time-to-market is an efficiency metric: it asks whether you're delivering output faster. That matters. But efficiency is only half of what matters. The other half is effectiveness: are you building the right things? Time-to-market, on its own, has no answer for that.

The frame I prefer is time-to-value. Not a metric you compute directly, but a way of naming what you're actually trying to optimize for. Conceptually:

$$
\text{Time-to-Value} = \frac{\Delta \text{time}}{\Delta \text{value}}
$$

There's no formula that collapses this into a single number. The point is that changing one word (market to value) shifts what technology is expected to be: not a delivery function, but a business partner that co-owns whether the things it builds actually create value.

That distinction matters because metrics encode expectations. When an organization measures technology on time-to-market, it signals that technology's job is execution. That signal shapes everything: who gets to define what's worth building, who's included in strategy conversations, how the technology team thinks about its own purpose. It's not that time-to-market creates this dynamic from scratch. It usually reflects an existing culture that already treats technology as a service function. But encoding it into a north star metric cements that culture. Marty Cagan has written clearly about how much the [role of technology](https://www.svpg.com/the-role-of-technology/) matters for organizational success. It's hard to play that role if you're measured as a cost center.

So how do you measure time-to-value? With multiple metrics, because value creation is too complex to capture in one. On the efficiency side, metrics like [DORA](https://dora.dev/guides/dora-metrics/) and [DX Core 4](https://getdx.com/research/measuring-developer-productivity-with-the-dx-core-4/) give you useful signal. Or frameworks that help you define your own metrics like [SPACE](https://spawn-queue.acm.org/doi/pdf/10.1145/3454122.3454124). (These are sometimes called productivity metrics, but that term is convoluted enough that I prefer to stick with efficiency and effectiveness.) On the effectiveness side, the right metrics are domain-specific: DAU for growth, retention for engagement, revenue, cost, whatever outcomes your organization is actually trying to move. Together, they start to answer the question time-to-market never could: are we creating value, not just shipping faster?

The deeper question of how you actually structure the organization to do both is a longer conversation. [The product operating model](https://www.svpg.com/the-product-operating-model-an-introduction/), [continuous delivery](https://minimumcd.org/), and investing in [developer (and agent) experience](https://queue.acm.org/detail.cfm?id=3595878) are where I'd start.

The shift from market to value is worth explaining to leadership and the team. The conversation it opens is usually one you need to have.
