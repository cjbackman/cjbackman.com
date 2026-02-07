+++
title = 'Retro: Implementing continuous delivery'
date = 2025-10-25T11:09:44+02:00
draft = false
tags = ['Engineering', 'Productivity']
summary = 'Learnings from implementing continuous delivery.'
+++

Continuous delivery is, in my opinion, the superior way to build and ship software. Since I've been part of a few different journeys to continuous delivery, I'll use this article to capture my learnings.

## Problem

Before discussing the learnings, let's have a quick look at the typical issues that organizations following GitFlow and similar approaches usually experience:

- It takes ages to get stuff to production.
- Poor quality resulting in frequent incidents, bugs, and customer dissatisfaction.
- Big and thus risky release batches (since changes accumulate faster than the process can deliver).
- A lot of time wasted resolving merge conflicts.
- The release process has multiple unnecessary steps that add friction without increasing release confidence.
- The process for hotfixes is convoluted and fragile.
- All issues above are exacerbated the more collaborators you have working on the same codebase.

Transitioning to continuous delivery mitigates the issues above and increases deployment frequency, reduces change failure rate, and improves developer experiences.

## Learnings

- Expect resistance and skepticism, but dare to keep your conviction. I've never seen anyone who transitioned to continuous delivery and wasn't excited about the way of working.

- Don't underestimate the size of the investment. It requires time to build automation, develop new behaviors, and foster a new culture. Therefore, you need to get strong buy-in from senior leadership to ensure the teams will get adequate support and air cover.

- Continuous delivery means a lot of things to a lot of people. Create a crisp definition and ways to assess progress. [This is the best definition of continuous delivery](https://minimumcd.org/) that I've come across. That website is generally awesome, as it also contains actionable advice on how to undertake the journey.

- Start small with a pilot team and let the engineers on the team communicate the success. Make sure you have some (doesn't have to be a full-blown metrics program) data in place beforehand to quantify the impact.

- There are a ton of Engineering Intelligence tools out there that can measure software delivery performance, but you don't necessarily need that to establish a baseline. Dumping all data from your version control system into a database will get you 90%+ of the data you need.

- Encourage teams to take risks and dare to deploy every commit. This is a major shift for those who are used to working with long-lived feature branches, development and main, but it's also the quickest way for people to see and experience the value. It's not as risky as it sounds because each deployment is so tiny, and it will accelerate the right behaviors to be developed.

- Invest in ephemeral environments. They unlock ample value and quickly set teams off toward continuous integration.

## Self-Assessment Maturity Model

Below is a table I've used (created together with ChatGPT) to enable teams to self-assess and set goals on their journey to continuous delivery. Simply add columns for current and target maturity.

| Practice | What good looks like | Typical issues | Possible indicators |
|---|---|---|---|
| Continuous Integration | • Trunk-based development: all work integrates into trunk.<br>• Each developer integrates work to trunk at least daily.<br>• Automated testing before merge to trunk.<br>• Work is tested with other work automatically on merge.<br>• All feature work stops when the build is red (“stop-the-line culture”).<br>• New work does not break delivered work. | • Long-lived branches that diverge from main.<br>• Manual merges and integration conflicts.<br>• CI only runs nightly or per PR, not per commit.<br>• Broken build tolerated for days.<br>• Flaky or slow test suites discourage frequent integration.<br>• No clear ownership of build health. | • Average branch lifetime (<2 days)<br>• Build success rate (%)<br>• Mean time to fix broken build<br>• % of commits passing all tests<br>• Time from commit → green build |
| Only Path to Any Environment | • All deployments must go through a single automated pipeline – one path for all environments.<br>• No manual deployments bypassing the pipeline; the pipeline verdict controls deployability. | • Manual hotfixes or SSH deploys to staging/prod.<br>• Multiple deployment scripts or ad-hoc Jenkins jobs.<br>• QA or staging deploys done manually.<br>• Pipeline drift between services or teams. | • % of deployments through pipeline<br>• # of manual production interventions<br>• Audit logs: pipeline vs manual deploys |
| Deterministic Pipeline | • Pipeline produces consistent, repeatable results for same inputs.<br>• Pass = deployable, fail = fix.<br>• No manual changes between stages.<br>• All inputs version-controlled.<br>• Flaky tests fixed immediately; dependencies locked. | • Pipeline occasionally “just fails” → reruns instead of investigation.<br>• Environment-specific config differences.<br>• Manual approvals without clear criteria.<br>• Non-versioned test data or secrets.<br>• Flaky test culture tolerated. | • Pipeline pass rate on first run<br>• Flaky test rate<br>• % builds requiring manual approval<br>• Avg retries per commit |
| Definition of Deployable | • Automated quality gates enforced (lint, security, compliance).<br>• Artifacts always meet the deployable definition. | • No shared agreement on “deployable”.<br>• Manual QA sign-off required.<br>• Late manual security checks.<br>• Quality gates vary by team.<br>• Failed tests ignored. | • % builds passing quality gates<br>• % deploys blocked by failed checks<br>• % tests automated |
| Immutable Artifact | • Build once, deploy same artifact everywhere.<br>• No manual changes.<br>• Everything version-controlled. | • Rebuilds per environment (“build in prod”).<br>• Manual hotfixes on servers.<br>• Snowflake builds.<br>• Env-specific variants.<br>• Inconsistent versioning. | • Artifact reuse ratio<br>• # of manual rebuilds<br>• % configs version-controlled |
| Prod-Like Test Environment | • Test env closely matches production.<br>• Realistic testing before prod. | • Environment drift.<br>• Missing / stale data.<br>• Scale/performance gaps.<br>• “Works in staging, fails in prod”. | • Environment drift score<br>• % prod incidents not reproducible in staging<br>• Deployment success staging→prod |
| Rollback On-Demand | • Fast, automated rollback paths.<br>• Rollback supported in pipeline. | • Manual rollback steps.<br>• Rollback untested.<br>• Irreversible DB migrations.<br>• Rollback causes downtime.<br>• Not integrated into pipeline. | • Mean time to rollback<br>• # rollback tests per month<br>• % deploys with automated rollback<br>• Deployment recovery time |
| Application Configuration | • Config separated from code.<br>• Config versioned.<br>• Changes flow via pipeline. | • Manual prod edits.<br>• Secrets not automated.<br>• Env-specific settings not tracked.<br>• Config drift → “works on my machine”. | • % configs version-controlled<br>• # manual config edits in prod<br>• Config rollback success rate |
| Trunk-Based Development | • All changes integrated to trunk.<br>• Short-lived branches.<br>• Avoid merge hell. | • Branches live for weeks.<br>• Merges painful and delayed.<br>• Manual QA gating.<br>• Parallel branch drift.<br>• Fear of merging due to instability. | • Median branch lifetime<br>• Merge frequency per developer<br>• % commits merged conflict-free |
