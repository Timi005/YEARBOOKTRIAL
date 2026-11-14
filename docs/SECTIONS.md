# Build plan: one section at a time

Rules for every section:
- Start a fresh Claude Code session (`/clear`) and switch to plan mode.
- Paste the section's prompt. Read the plan, fix it, then approve.
- Test every "done when" item yourself before moving on.
- Commit, merge the branch, and update "Current status" in `CLAUDE.md`.

Dates are targets, counting back from Christmas. If a section runs late, use the cut list at the bottom.

---

## 0. Setup · Nov 14–15
**Goal:** the project folder, GitHub repo and accounts are ready.

You do this part yourself:
- Put this kit in a new folder and run `git init`. Create a GitHub repo and push.
- Add a few Piggyvest report screenshots to `reference/inspiration/`.
- Keep the photos in `data/photos/` (already git-ignored) and back them up elsewhere.
- Prepare: the class list with correct spellings, the event list with dates, superlatives results as CSV.
- Create accounts: Cloudinary (or R2), Vercel/Netlify, Render/Railway, and a Postgres host.
- Install Claude Code (follow docs.claude.com) and run `claude` in the folder.

**First prompt (no code yet):**
> Read CLAUDE.md, docs/BRIEF.pdf, docs/DECISIONS.md and docs/SECTIONS.md, then look at the two files in /reference. Don't write code yet. Summarise the project in 10 lines, list anything unclear or conflicting, and tell me what you need from me before section 1.

---

## 1. Skeleton and first deploy · Nov 16–19
**Goal:** an empty but real site is live on the internet.

**Done when:**
- `client/` (React + Vite) and `server/` (Express) both run locally with one command each.
- Design tokens from the template are in `client/src/styles/tokens.css`.
- Header, footer (with "Made with ❤️ by Timii") and empty pages for every route exist.
- Frontend and backend are deployed, and the live site calls a `/api/health` route successfully.

> Do section 1 from docs/SECTIONS.md. Scaffold client/ and server/, pull the design tokens out of reference/template.html, build the header, footer and empty routes, and deploy both. Explain each major file in two sentences. Fill in the Commands part of CLAUDE.md when done.

---

## 2. Database and seed data · Nov 20–22
**Goal:** real people, events and superlatives live in Postgres.

**Done when:**
- The tables from brief section 7 exist (via migrations).
- A seed script loads the class list, events (with stamp and note fields for the timeline) and superlatives CSV.
- `GET /api/people`, `/api/events`, `/api/superlatives` and `/api/stats` return real data.

> Do section 2 from docs/SECTIONS.md. Plan the schema from brief section 7 first, plus the timeline fields in DECISIONS.md. Show me the request flow for one route end to end.

---

## 3. Photo processing · Nov 23–25
**Goal:** every photo is optimised, safe and online.

**Done when:**
- A script in `/pipeline` resizes photos, makes thumbnails, strips EXIF (especially location) and uploads them.
- Photo rows are in the database with event links.
- `GET /api/photos?event=&page=` works with pagination.

> Do section 3 from docs/SECTIONS.md. Write the image script, show me how to run it on 5 photos first, then the full set.

---

## 4. Face grouping · Nov 26–Dec 1 (riskiest section)
**Goal:** name a face once, and all their photos are linked.

**Done when:**
- The Python script detects faces, clusters them, and outputs `clusters.json` plus face crops.
- A password-protected admin screen lets you name, merge and reject clusters.
- Naming a cluster fills `photo_people` for every photo in it.

> Do section 4 from docs/SECTIONS.md. Start with the Python script on 20 photos and show me the clusters before building the admin screen. Walk me through running it step by step.

**Fallback:** if it isn't working by Dec 1, build a quick manual tagging screen instead and move on.

---

## 5. People pages · Dec 2–3
**Goal:** the portraits directory and a page per person.

**Done when:**
- `/people` lists everyone, searchable and sortable.
- `/people/:slug` shows their portrait, quote, photos, events, award and "often photographed with".

> Do section 5 from docs/SECTIONS.md. Rebuild the people grid and profile card from the template as real pages.

---

## 6. Gallery and lightbox · Dec 4–5
**Goal:** browse every photo.

**Done when:**
- `/photos` shows a lazy-loaded grid, filterable by event and person.
- The lightbox opens with the thumbnail growing into the full photo, and supports swipe, arrow keys and Escape.

> Do section 6 from docs/SECTIONS.md, including the shared-element lightbox from DECISIONS.md.

---

## 7. Search · Dec 6–7
**Goal:** "person at event" and "person with person".

**Done when:**
- Picking up to two people and an event gives the right photos.
- The URL updates (`?person=&with=&event=`), and opening that URL shows the same results.

> Do section 7 from docs/SECTIONS.md. Explain the SQL for "both people in the photo" before writing it.

---

## 8. Landing page and circuit timeline · Dec 8–12
**Goal:** the showpiece home page.

**Done when:**
- Hero with polaroids that drop in and doodles that draw themselves.
- The circuit timeline matches `reference/circuit-timeline.html`, with milestones from `/api/events`.
- Counter, meet the class, and picture of the day use real data.
- Reduced motion works everywhere. Sound toggle works and is off by default.

> Do section 8 from docs/SECTIONS.md. Port reference/circuit-timeline.html into a React component without redesigning it. Keep all the behaviour listed in DECISIONS.md. Start with the hero, then the timeline.

---

## 9. Superlatives · Dec 13–14
**Goal:** the awards page.

**Done when:**
- `/awards` shows every category, winner and runner-up from the database.
- Cards flip to reveal the winner on scroll or tap.

> Do section 9 from docs/SECTIONS.md.

---

## 10. Drawing wall · Dec 15–19
**Goal:** classmates can sign the yearbook from their phones.

**Done when:**
- Pen, colour, size, eraser and undo work with finger and mouse. Rotating the phone keeps the drawing.
- Strokes save as vector paths and appear for other viewers (live if possible, on refresh at minimum).
- Rate limiting, an approval or profanity option, and an admin hide button.

> Do section 10 from docs/SECTIONS.md. Fix the canvas resize bug noted in DECISIONS.md. Start with saving and loading; add live sync last.

---

## 11. Launch · Dec 20–23
**Goal:** safe, fast and live.

**Done when:**
- Shared-password gate is on. "Request photo removal" and "Report a wrong tag" work.
- Phone check on a slow connection. Images are lazy-loaded and sized.
- Keyboard and screen-reader pass, alt text on every photo.
- Every acceptance criterion in brief section 12 passes.

> Do section 11 from docs/SECTIONS.md. Go through brief section 12 one item at a time and show me proof for each.

---

## After launch
- Print layout (brief 5.8)
- "Wrapped" story mode per person
- Wall-of-heads mural

## If time runs short, cut in this order
1. Sound
2. Live sync on the drawing wall (posting and refresh is enough)
3. Extra animations beyond the landing page
4. Awards flip (show the cards plainly)
