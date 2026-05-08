+++
title = 'The Future Org'
date = 2026-05-03T08:41:47+02:00
draft = false
tags = ['AI', 'Leadership', 'Engineering']
summary = 'Teams getting bigger, organisations getting smaller. What that asks of engineers and leaders.'
+++

Teams are getting bigger. Organisations are getting smaller.

That's the bet, and we can see it in the most forward-leaning AI-native companies. [Cursor hit $100M ARR with around 20 people](https://www.linkedin.com/posts/miriamdong_ai-just-broke-saas-rip-the-first-1-activity-7301224634476023808-K4Zx). [Midjourney is doing $200M+ with roughly 40](https://byteiota.com/tiny-teams-revolution-11-person-midjourney-hits-200m/). [Mercor is generating around $4.5M per employee](https://andrew.ooo/posts/mercor-45m-revenue-per-employee-ai-training/). Atlassian, at a similar ARR milestone, had hundreds of people on payroll. The bar for revenue per employee has shifted by an order of magnitude.

There's not too much evidence of established organisation compressing yet. Yes, there are layoffs but they seem more related to financial necessity than anything else. The proof points are all greenfield, AI-native companies built lean from day one. My bet is we'll see more of them, and that some incumbents will figure out the compression. It's also possible none of them stay this lean as they scale. We don't know yet. But the form is plausible enough to think through now.

## Why bigger teams, not smaller

The opposite forecast is also live. Solo founders ship full products, [Pieter Levels](https://levels.io/) operates several at once, and "$1M ARR with one person" is a real pattern. I don't think more complex products will collapse into single-digit work forces though. There is still a specialisation of judgement and resilience needed. Even when execution collapses into agents, distinct judgement is still needed for product, design, infrastructure, and go-to-market. Agents don't replace that yet. And one-person companies break the moment the founder burns out or loses interest. A team of fifteen with strong relationships absorbs that.

The interesting consequence is that the team becomes synonymous with the organisation. Where before you'd have a 100-person org wrapped around a product, you now have one team that *is* the product organisation. Lean, flat, with most ICs reporting into one or a few leaders.

As for software architecture, I found [Neal Ford's comment on the alphalist podcast interesting](https://alphalist.com/podcast/136-136-ai-writes-code-who-architects-the-consequences-with-neal-ford-software-architect-author): there's a new *-ility* emerging in software architecture, *ephemerality*. Technical decisions now have to consider how ephemeral the product or architecture is. The same applies to organisational structure. Teams form, ship, dissolve, reform around the next bet.

## What it asks of engineers

[The craft is evolving](https://www.chrismdp.com/coding-with-ai/) towards [harness engineering](https://openai.com/index/harness-engineering/): figuring out how to tame agents and channel their hyper-productivity into business outcomes that hold up short and long term. Platform engineering becomes as focused on enabling agents as it is on enabling humans, and luckily there's a big overlap. Good documentation, well-defined APIs and CLIs serve both.

As engineers ship more, the bottleneck moves out of coding and into review, design, and product decisions.

The traits that mattered for highly effective engineers haven't changed: technical judgement, systems thinking, agency, ownership, business sense, customer obsession. What's changed is the gap between those who have them and those who don't. It's widening fast.

For product and design, the shift is sharper. They get closer to engineering by [building to learn](https://www.svpg.com/build-to-learn-vs-build-to-earn/) without engineering involvement. They also need judgement on where *not* to be involved. Being part of every deliverable was the norm. Today it's the fastest way to become the bottleneck.

## Juniors

This is where I'd push back on the simplest version of the lean-team thesis. Cursor doesn't hire juniors. Midjourney doesn't either. If the future org is purely senior, you're choosing not to grow the next generation of seniors. That's a five-year problem you create today.

So I don't think juniors are going away. But onboarding and training need a serious upgrade. The good news: every junior can now pair with an AI senior. The hard part: how do you make sure the junior develops judgement instead of outsourcing thinking to the model? Nobody has solved this yet.

The flip side is that juniors are freer to adopt new tools and aren't held back by preconceptions some seniors carry. I think the organisations that solve hiring, onboarding, and training of juniors in the age of AI will turn it into a real competitive advantage.

## What it asks of leaders

If the team is the organisation, the role of the leader matters more, not less.

Spans of control will grow, supported by tooling that automates the most time-consuming parts of the manager job: reviewing work to give feedback, staying on top of deliverables to manage risk, surfacing growth opportunities.

Concretely: tools like [Mesmer](https://mesmer.co/) plugged into your VCS, issue tracking, and meeting notes, continuously farming for feedback opportunities, growth areas, and at-risk deliverables. The manager gets curated signal instead of digging.

Classical responsibilities don't go away. They get harder. Hiring, onboarding, training juniors, and managing [(new) debt](https://rdel.substack.com/p/rdel-137-what-kinds-of-new-debt-are) all need rethinking in the age of AI-driven product development.

## Project Aristotle in the new context

[Google's Project Aristotle](https://www.nytimes.com/2016/02/28/magazine/what-google-learned-from-its-quest-to-build-the-perfect-team.html) found that high-performing teams share five attributes: psychological safety, dependability, structure and clarity, meaning, and impact. I think all five still matter. They reshape differently.

**Psychological safety** was always an organisational attribute, not a team one. It starts at the top. How leadership manages risk and shows up during failure sets the tone. Radical candor was important before, and stays important.

The new stressor is automation and data collection. The same tooling that enables larger spans creates a surveillance risk. Whether ICs see the data as valuable or as controlling will determine whether psychological safety holds. That's why mature leaders matter more than ever: leaders who can use the data to grow people and hold them to account, without slipping into control, blame, and micromanagement. That move backfires fast with the kind of senior people I've described. It takes grown-up leaders who can manage their own insecurities.

**Dependability** is where the human element becomes load-bearing. With output increasingly mediated by agents, attribution gets harder. Trust can no longer rest on "did this person ship what they said they'd ship" alone. It rests on the quality of the relationships in a fluid organisation: people pairing, sharing frequently, knowing each other well enough to know what each is good for. The more ephemeral the structure, the more dependability lives in the human relationships rather than the org chart.

**Structure and clarity** is the dimension I'd double down on. With roles, responsibilities, and entire organisational structures in flux, the leader's job is to create clarity and reduce entropy. Inspiring mission, clear goals, tight community. A **human harness** in parallel to the harness engineering the team is doing on the technical side.

**Meaning** doesn't shift much, but **impact** amplifies. Engineers become supercharged. Time to impact shrinks. The blast radius gets larger, for better and worse. That changes how risk is held and how decisions are made.

## So who leads well in this org?

The leader of one of these teams has to be technically strong enough to get close to the technology, make architectual calls and lead ICs directly. They have to create clarity in conditions that resist it. They have to build human trust in fluid teams where the org chart gives them less to lean on. And they have to do all of it across a larger span, with help from tooling that's still maturing.

The conditions that made the old leadership job tolerable (slow pace, durable teams, narrower spans, less data) are gone. The new job is harder.
