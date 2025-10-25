+++
title = 'Release value early and often'
date = 2025-10-25T11:09:44+02:00
draft = true
tags = ['Technical Excellence', 'Productivity']
summary = 'Learnings from leading an organization to continuous delivery.'
+++


```mermaid
---
title: Software delivery as a system
---
flowchart LR
    inflow1@{ shape: cloud , label: " "}
    -->|Coding rate| nc((New commits))
    -->|Code review rate| rc((Reviewed commits))
    -->|Deployment rate| dc((Deployed commits))
    -->|Incident rate| in((Incidents))
    -->|Recovery rate| revc((Reverted commits))
    -->|Debug rate| nc
```

_Figure 1. Software delivery as a system (source: [Lethain](https://lethain.com/systems-thinking/))._