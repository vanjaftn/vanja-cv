# Vanja — CV

A simple, monochrome CV site built with Next.js (App Router), React 19, and Tailwind CSS v4.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Editing your content

All CV content lives in a single typed file:

- `src/data/cv.ts`

Edit:

- Name, role, location, contact info, and social links
- About paragraph
- Experience entries (period, role, company, highlights)
- Education entry, including the list of college projects with GitHub links
- Skills (languages and technical)
- The two featured projects (most important — set `url` to your live site)

## Replacing the PDF CV

A placeholder PDF lives at `public/cv.pdf`. Just replace that file with your real CV (keep the same filename), or change `pdfUrl` in `src/data/cv.ts`.

## Project screenshots

Each featured project has a slideshow. The placeholder mockups live in `public/projects/`:

- `project-one-1.svg`, `project-one-2.svg`, `project-one-3.svg`
- `project-two-1.svg`, `project-two-2.svg`, `project-two-3.svg`

To use real screenshots:

1. Drop your images (PNG, JPG, WebP, or SVG) into `public/projects/`.
2. Update the `images` array of each project in `src/data/cv.ts` — set the `src` to the new file path (e.g. `/projects/my-shot.png`) and update the `alt` text.

You can have any number of slides per project; the slideshow adapts automatically. The placeholder mockups can be regenerated with `python3 scripts/gen-mockups.py` if you want to tweak them before swapping in the real thing.

## Deploy

This is a standard Next.js app — deploy on Vercel, Netlify, or any Node host:

```bash
npm run build
npm start
```
