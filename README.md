# Nirmit Kumar — Portfolio

A dark, minimal, recruiter-friendly portfolio built with React, TypeScript,
Vite, Tailwind CSS, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

## Content policy

All content lives in `src/data/content.ts` — a single source of truth
sourced directly from the resume information provided. Nothing on the
site invents companies, employment, statistics, testimonials, or GitHub/
LeetCode numbers.

The **Problem Solving** section fetches live, public data from the GitHub
API (`api.github.com/users/Nirmit982` — no auth required) for repo and
follower counts. If that request fails, it falls back to plain "View
GitHub" / "View LeetCode" links rather than guessing a number. LeetCode
has no stable public API, so it always links out directly.

The **Contact** form has no backend. Submitting it opens a pre-filled
`mailto:` link rather than pretending to send the message somewhere —
this is stated in the UI as well.

## Structure

```
src/
├── components/     one component per section (Hero, Skills, CareerPilotProject, …)
├── data/content.ts single source of truth for all resume-derived content
├── hooks/          useScrollProgress
├── lib/            small class-name helper (cn)
└── types/          shared TypeScript interfaces
```

## Design

- Dark charcoal background, single restrained accent (warm amber/copper)
- Sora for display type, Inter for body, JetBrains Mono for code-style labels and data
- Signature feature: **Engineering Journey** — an interactive 6-stage
  process walkthrough (Understand → Design → Build → Test → Deploy →
  Improve) instead of a plain skills list
- Respects `prefers-reduced-motion`; the site is fully legible with
  animations disabled

## To customize later

- Add a real résumé PDF and point the "View Resume" / navbar "Resume"
  buttons at it (currently both link to the Contact section)
- Add a live URL or GitHub link for CareerPilot once one exists
