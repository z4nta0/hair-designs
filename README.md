# Hair Designs

The website for Hair Designs, a hair salon in Carson's Corner, Missouri, run by licensed cosmetologists Juli Wilkerson and Keeli Bryan. It's built and maintained by [techgeek.support](https://techgeek.support/).

Live at [hairdesigns.hair](https://hairdesigns.hair/).

## Stack

- **Vite 8** dev server / bundler
- **React 19** + **TypeScript**
- **React Router** (a single home page today, with a 404 page to come)
- **ESLint** with typescript-eslint
- Deployed on **Netlify**, which serves `index.html` for every path so the router can handle it

## Getting started

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

## Checks

```bash
npm run lint   # ESLint across the repo
```

## Build

```bash
npm run build
npm run preview
```

## Contact form

The salon doesn't take messages through the site, so the contact form is being turned off while keeping its design: its fields won't accept input, and touching them will explain that the form is disabled and give the phone number instead.

## Status

The project is partway through a cleanup that brings it in line with the builder's coding rules and adds the 404 page, SEO, social previews, and test suites. `CLAUDE.md` holds the plan and its progress.
