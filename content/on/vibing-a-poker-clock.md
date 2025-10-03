+++
title = 'Vibing a poker clock'
date = 2025-03-16T19:23:04+01:00
tags = ['Vibe Coding', 'AI']
summary = 'Impressions from vibing a poker clock.'
draft = false
+++

Every Christmas day we're a group of friends that get together and play poker, and every year I search the internet for a free, online poker clock. I always find something but it's never exactly what I want, so building one has been on my personal backlog for a while.

A poker clock is a simple web app, so I figured it's a good use case to experiment with vibe coding. I spent about one Sunday on the task, and used [Lovable](https://lovable.dev/) for most parts, and [ChatGPT](https://chatgpt.com/) for a few details. You can see [a demo of the app here](https://poker-clock.cjbackman.com).

I used [this awesome workflow](https://harper.blog/2025/02/16/my-llm-codegen-workflow-atm/) from Harper Reed and [ChatGPT](https://chatgpt.com/) to hash out a [Poker Clock Specification](/on/vibing-a-poker-clock/#poker-clock-specification). You can find the spec at the end of this page.

## Impressions

Disclaimer: This was my first attempt at vibe coding and building a product with Lovable, so I'm fully aware I've much to learn and that I'm only using a fraction of the product. Overall, I've mixed feelings.

First of all, it's nothing less than mindblowing how quickly Lovable spits out a decent prototype. I loved how quickly I could go from from 0 to 1. If I had started this project from scratch there would definitely have been some back and forth between analysis paralysis and scope creep before I'd have something concrete to present. With Lovable I had something to iterate on after 1 minute, or 15 minutes if you include the [spec](/on/vibing-a-poker-clock/#poker-clock-specification) generation. This ultrashort feedback loop enables a blazing speed of iteration. That excited me and made me eager to continue.

[![first_version.png](/vibing-a-poker-clock/first_version.png)](/vibing-a-poker-clock/start.png)

_Figure 1. First version after prompting Lovable with the [spec](/on/vibing-a-poker-clock/#poker-clock-specification)._

There were a few bugs in the first version, but generally I was impressed.

My initial excitement dropped after a while though, as the AI kept getting stuck. I deliberately tried to solve bugs with Lovable but for some I got frustrated and solved it in the code instead. It was a weird feeling when I went into the code because a part of me felt like I'd built this product from scratch, but at the same time I had no clue about the code and the design decisions made.

Unfortunately, that made me care less about the code. I caught myself being lazy and not making an honest attempt to understand the code. Just the bare minimum to fix the bugs. I didn't like that feeling of caring less. Additionally, the entire exercise felt transactional, and the lack of deep thinking kept me from entering flow state. Yes, sure, a poker clock is not the most exciting engineering problem out there, but normally I still enjoy the tinkering around simpler problems too. Vibe coding simply felt less fun.

While not being as fun as a building from scratch I do believe this way of building offers a great way to practice an important skill, namely how to debug, understand and confidently make changes to a code base you didn't write.

In summary, my first impressions of vibe coding is that it's great to hit the ground running and for practicing effective ways to approach a new code base. However, it was less fun and I think it's more important than ever to complement with building software from scratch. To learn the foundations and improve as a craftsperson.

It's undoubtedly a critical skill to master to stay relevant, and I'll keep experimenting trying to hone my skills. But I wouldn't want to get too comfortable and outsource my thinking.

## Poker Clock Specification

This specification was generated from a discussion with [ChatGPT](https://chatgpt.com/) following [this workflow](https://harper.blog/2025/02/16/my-llm-codegen-workflow-atm/).

### Overview

The Poker Clock web application is a real-time dashboard designed for use during the user's yearly poker tournament. It is aimed at providing a seamless experience for both poker players and the tournament organizer. The app will be hosted on GitHub Pages, written in TypeScript, and well-tested.

### Personas

1. **Poker Player** (Single Device Access)

   - Views current blinds, time remaining until next blind, next blinds.
   - Views prize money distribution for 1st, 2nd, and 3rd place.
   - Views total prize pool amount.
   - Views number of buy-ins and rebuys, with ability to add/remove them via simple buttons.
   - Controls timer (Start, Pause, Resume) via buttons on the main screen.
   - Interacts with a responsive grid layout displayed on a big screen.

2. **Tournament Organizer** (Settings Management)

   - Sets the value of each buy-in and re-buy.
   - Adds/removes buy-ins and rebuys directly from the player's view screen.
   - Adds/removes blind rounds, sets small and big blinds for each round, and defines round durations.
   - Defines prize distribution for 1st, 2nd, and 3rd place (percentage-based or fixed amounts).
   - Accesses a collapsible settings panel that can be toggled on/off from the player's view.

### Technical Requirements

- **Technology Stack**: TypeScript, React, Tailwind CSS.
- **Hosting**: GitHub Pages.
- **Testing**: Comprehensive unit and integration tests.
- **Storage**: No storage required. All configurations are set during runtime.
- **Predefined Blind Structures**: Slow, Regular, Turbo (configurable in code).

### User Interface Design

- **Responsive Grid Layout**:
  - Central Area: Timer & Current Blinds (large and prominent).
  - Next Blinds: Displayed close to the Timer & Current Blinds.
  - Side Areas: Prize pool (left), Buy-ins & Rebuys (right).
  - Top Area: Editable Tournament Title.
  - Bottom Area: Timer Controls (Start, Pause, Resume).
- **Visual Style**: Poker & Christmas-themed design.
- **Alerts**: Classic poker-related audio alerts and flashing visual effects when a new blind level starts. Alerts automatically fade after a few seconds.

### Data Handling

- **Prize Pool Calculation**:
  - Automatically updates whenever buy-ins and rebuys are added or removed.
  - Both percentage-based and fixed-amount prize distributions are supported.
- **Blind Level Transitions**:
  - Automatically advance to the next blind level when the current one ends.
  - Audio and visual alerts triggered on transitions.
- **Real-Time Display**:
  - Immediate reflection of changes on the player’s view screen (e.g., adding/removing buy-ins or rebuys).

### Error Handling

- No warnings or validation required for prize distribution not adding up correctly.
- User interactions (like adding/removing buy-ins) are simple button clicks with instant UI updates.

### Testing Plan

- **Unit Tests**:
  - Timer logic (start, pause, resume, automatic transitions).
  - Blind structure handling (including predefined templates).
  - Prize pool calculation (for both percentage-based and fixed-amount distributions).
  - Audio and visual alert triggers.
- **Integration Tests**:
  - Settings panel interactions.
  - Adding/removing buy-ins and rebuys.
  - Visual responsiveness across different screen sizes.
- **UI Tests**:
  - Manual visual inspection for theme and layout consistency.

### Additional Notes

- The code will use common poker terminology where applicable.
- The application will not include user authentication or data persistence.
- All settings and configurations are meant to be adjusted during the runtime of a single tournament session.
