# MTE 2026 Digital Yearbook

An animated, shareable yearbook website for UNIBEN Mechatronics Engineering, Class of 2026.
It is also full-stack learning practice, so the code must be readable and explainable.
Deadline: deployed before Christmas 2026. Print comes after launch.

## Read these first
- `docs/BRIEF.pdf`: the full spec (the single source of truth).
- `docs/DECISIONS.md`: decisions made after the brief was written. Where it differs from the brief, DECISIONS wins.
- `docs/SECTIONS.md`: the build plan, one section at a time, with "done when" checks.
- `reference/template.html`: the look (layout, colour, type, spacing). Rebuild it as components; never copy its placeholder data.
- `reference/circuit-timeline.html`: the approved timeline animation. Port it, don't redesign it.

## Stack
- Frontend: React + Vite, plain CSS / CSS modules, GSAP + ScrollTrigger for scroll animation.
- Backend: Node + Express, REST JSON API.
- Database: PostgreSQL.
- Images: Cloudinary (or R2), thumbnails made with sharp, EXIF stripped.
- Face pipeline: Python, offline, in `/pipeline`.
- Hosting: frontend on Vercel/Netlify, backend on Render/Railway.

## Commands
First time: `npm install` in both `client/` and `server/`, and copy each `.env.example` to `.env`.
- Frontend dev: `cd client && npm run dev` (http://localhost:5173)
- Backend dev: `cd server && npm run dev` (http://localhost:4000, restarts on save)
- Frontend build / lint: `cd client && npm run build` / `npm run lint`
- Seed database: `...` (section 2)

## Code style
- Simple, readable code over clever code.
- Comments on non-obvious logic only.
- Design tokens live in one file (`client/src/styles/tokens.css`). No hard-coded colours in components.
- Every animation must respect reduced motion. Sound is off by default and only starts after a tap.
- Secrets live in `.env` (git-ignored). Never commit photos.

## How to work with me
- Plan first and wait for my OK before writing code.
- One section or one feature at a time. Run the app and check your own work before saying it's done.
- Explain a new concept briefly the first time it appears.
- For backend work, show me the request flow: route → controller → query → response.
- Sometimes give me a small piece to write myself, then review it.
- Commit after each working slice with a clear message.

## Current status
- Current section: 1 (skeleton and first deploy). Built and checked locally on branch `section-1-skeleton`; deploy to Render + Vercel still to do.
- Next: section 2 (database and seed data)
