# First Fire

A single-screen facilitation guide for running one first campfire — a Pretzl object for the Leadership Literacy Programme.

## What this is

First Fire's only job is the cold start: getting a warm person and four cold people from nothing to their first campfire. A warm person pulls four cold people around one rough draft and they carve it together, in the open, then push it into the async channels where the hive actually lives.

The object is a facilitation spine, not a solo tool. The AI generates a rough skill live from the room's own answer to what it keeps redoing by hand. The group carves it together in passes. Someone tests it on real work right there. Then each person names where they'll carry it next.

The hive emerges on its own once people are working in the open. First Fire does not build the hive — it lights the first fire.

**The draft block in the middle of the page is the hero object.** The facilitator pastes the prompt into a shared chat in front of the room. The AI interviews the group, generates one rough draft skill. Everything else on the page is the structure for what happens next.

## The thesis (read before changing anything)

AI adoption spreads when one person hands another person something that works and says *"use this, break it."* That handoff only sticks when the thing was made in the open, with hands on it, not consumed alone. The campfire is the making. The hive is what forms after.

The site must *be* that facilitation, not a presentation about it. When in doubt, **remove, don't add.**

## Deliberately cut — do not reintroduce

- **The fire imagery** — particle canvas, emoji, flicker animation, ember/flame gradient. One red mark (the short bar on the hero divider) is the only ignition gesture that stays.
- **Any ledger, dashboard, or tracking.** The hive emerges on its own. We do not build apparatus to watch it.
- **Any form or builder UI.** The model does the making. We do not rebuild a builder.
- **The solo prompt.** The old version sent one person into a private chat to build a skill alone. That made output easy and learning solitary — the exact failure the campfire model exists to prevent.
- **The multi-screen walkthrough.** One screen, four beats, in order.

## What must stay

- **The four beats, in order:** Center a Draft → Carve It → Run It → Carry It.
- **The draft block as visual hero.** It is load-bearing and carefully tuned. The prompt is pointed at a group, not an individual. Key lines: *"Interview the room, one question at a time"* (anti-lecture), *"Write it rough — the room is going to carve it"* (sets up Beat 2), *"Then stop."* (hands control back to the humans).
- **The carve structure** — three questions in order: what's wrong, what's missing, what should it never do. A few lines of facilitation, not a form. Quiet voices first.
- **The handoff line at the end of Beat 4:** *"Use this. Break it. Tell me what you find."* This is the seam where synchronous becomes async. It is the most important line on the page.
- **The five-word arc**, seen once: Spark / Practice / Discovery / Application / Fluency. First Fire is the Spark beat. A glance, not a journey.
- **The name** First Fire.

## Design tokens (single source of truth — in `:root`)

```
--ink     #15151B   Pretzl Primary Black
--surface #1E1B24   the lifted draft block
--paper   #F9F9FF   Pretzl Primary Off-White
--muted   #8A8592   labels, facilitation notes
--faint   #28242F   hairlines, borders
--signal  #FF3333   Pretzl Primary Red — the ONE accent
```

One accent only. Spend boldness on the draft block and the carry line; keep everything else quiet. Type: Hanken Grotesk (display/labels — closest Google Fonts match to Neue Haas Grotesk Display) + Spectral (the draft prompt and reading prose).

The Pretzl orb (red, base64 embedded) sits centered at 90vh, 0.15 opacity, as a brand mark behind all content.

## Quality floor

Responsive to mobile, visible keyboard focus, `prefers-reduced-motion` respected. Already in place — do not regress.

## Structure

Single self-contained file: `index.html`. No build step, no dependencies beyond the Google Fonts link. Markup, CSS, and one small copy-to-clipboard script are all inline. `middleware.js` handles Vercel Edge Middleware basic auth (credentials set via `AUTH_USER` / `AUTH_PASS` env vars in Vercel).

## Run

```zsh
open index.html
# or, for live refresh:
python3 -m http.server 8000   # then localhost:8000
```

## Deploy

Static. `index.html` at root deploys as-is to Vercel. Connected to GitHub at `alexgronke-1/first-fire` — every push to `main` auto-deploys.
