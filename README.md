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

## Deploy

This is a standard Next.js app — deploy on Vercel, Netlify, or any Node host:

```bash
npm run build
npm start
```
