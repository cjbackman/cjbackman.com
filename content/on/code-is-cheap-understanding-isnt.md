+++
title = "Code is cheap, understanding isn't"
date = 2026-11-01T20:26:12+01:00
draft = false
tags = ['AI', 'Leadership', 'Engineering']
summary = 'Cheap code exposes what code review hid. Whether teams build shared understanding or turn into solo acts is up to leadership.'
+++

With agents generating more and more of our code, engineers no longer write or review every line. The worry is that shared understanding of our systems erodes along with it, what's been called [cognitive debt](https://newsletter.getdx.com/p/cognitive-debt-the-hidden-risk-in). It's a real risk, but I think it's also an opportunity. Cognitive debt always existed in larger systems, and it showed up in outages when something broke that nobody understood anymore. When every line was written and reviewed by hand, the slow pace hid how much of it we were carrying.

## Code review was never the best knowledge channel

Slow code generation shaped our habits. Writing code was cumbersome, so we rushed to get to the point where we could start, and once it was done we rushed to get it out. Intent and verification got squeezed from both ends. Describing what a change should do, what must stay true and how to know it works was always the hard part that required deep thinking, and the incentives made it easy to skip.

Code review filled the gap, or at least we told ourselves it did. In my experience it was mostly a quality gate and a ritual. Reviews do transfer some knowledge, and [research on code review](https://a4al6a.substack.com/p/stop-using-pull-requests) suggests that's where most of their value lies, more than in catching bugs. But it's not the most effective way to build shared understanding. Pairing and mobbing are: context gets shared while decisions are being made rather than afterwards from a finished diff, the second person sees the reasoning and not just the result, and they share ownership instead of just approving. AI doesn't remove our knowledge channel so much as push us off a weak one.

Now that generating code is cheap, we can't afford to review all of it. That creates a few changes I welcome. We need delivery pipelines and practices robust enough that we actually trust them. We need to rethink code review, shift accountability to the author and drop human approvals for most changes. And engineers need to get good at expressing intent, invariants, what done looks like and how to verify that the behaviour is the expected one. That means connecting with business and customer problems and translating them into intent, specs and verification.

A risk-based policy should decide which changes still need a human reviewer, such as critical business logic or other risky changes. I'd start strict, requiring review for most changes, and let the team evolve the policy as bugs, incidents and review comments feed back into it. Over time you automate more and more, and that learning compounds.

## Small, not solo

I'm still a firm believer that small, high-trust, durable teams that build expertise and feel ownership of a domain are a superpower for productivity. Focused teams that pair or mob frequently build shared context and own outcomes end-to-end.

AI helps these teams stay small because it reduces the need for more people. As someone who has long held that additional capacity should primarily be seen as a burden and a last resort, I think that's great.

There's a cost, though. AI is hurting trust within teams, or as [Kent Beck](https://newsletter.kentbeck.com/p/trust-factory) puts it: *"We're accumulating code faster than we are accumulating trust."* To me, it's primarily an ownership problem: authors asking colleagues to review work they can't explain, which leads to frustration and annoyance.

I think this is solvable, and teams have a lot of control over it. Make the human directing the agent accountable for clearly describing intent and verification, and review those artefacts together, ideally in pairs or as a mob. The author has to show their thinking, which is exactly what was missing.

What makes a small team work is shared context, and you can't share context with yourself.

## The leadership test

A more concerning trend is the temptation for leaders to build an organisation of solo acts. A 20-person engineering org where everyone runs their own fleet of agents quickly turns into 20 knowledge silos, and risks feeling like 20 lonely engineers.

Every soloist is a single point of failure, so a vacation, a sick day or a resignation becomes a disruption. Fewer brains on each problem means fewer perspectives, more risk and worse decisions. And a lost sense of belonging erodes motivation and engagement, which over time hurts performance.

The trouble is that the soloist org will likely look better on a dashboard. PR throughput moves this quarter, while knowledge silos, bloat and quality decay show up later. As long as we look at PR throughput, leaders have few incentives to address the problem.

So cheap code is an opportunity, not a guarantee. My hypothesis is that teams who skip the hard work of intent, verification and shared context will end up with poor quality and a bloated product, and teams who do it right will see AI amplify and supercharge their performance. Which way it goes depends on leaders who dare to apply pairing and mobbing deliberately, trading some short-term throughput for teams that last.
