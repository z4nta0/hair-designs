# Hair Designs

The website for Hair Designs, a hair salon in Carson's Corner, Missouri, run by licensed cosmetologists Juli Wilkerson and Keeli Bryan. It's built and maintained by [techgeek.support](https://techgeek.support/).

Live at [hairdesigns.hair](https://hairdesigns.hair/).

## Stack

- **Vite 8** dev server / bundler
- **React 19** + **TypeScript**
- **React Router** (the home page, and a 404 page for every other address)
- **ESLint** with typescript-eslint, and **Playwright** with axe-core for the test suites
- Deployed on **Netlify**, which serves `index.html` for every path (`public/_redirects`) so the router can handle it

## Getting started

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

## Checks

```bash
npm run lint       # ESLint across the repo
npm run typecheck  # TypeScript across src/, the configs, and tests/
```

## Tests

```bash
npm test                    # every suite
npm run test:accessibility  # axe-core plus scripted keyboard, naming, reflow, and motion checks
npm run test:interaction    # hover, press, and focus feedback on every control, the phone menu, and the form tooltip
npm run test:rendering      # full-page screenshots of each page state against approved baselines
npm run test:responsive     # both pages from 320 to 1,920px: no sideways scroll, spill, or overlap
npm run test:seo            # titles, descriptions, structured data, social tags, icons, robots.txt, and the sitemap
```

Each suite runs in Chromium, Firefox, and WebKit against its own dev server on port 5191, so a dev server already running on 5173 is left alone. Reports land in `tests/output/` (git-ignored); `npx playwright show-report tests/output/report` opens the HTML report. The rendering suite's approved screenshots live in `tests/rendering/baselines/` and match to the pixel, so after a change meant to alter how the page looks, review the diff in the report, then run `npm run test:rendering -- --update-snapshots` and commit the new baselines with the change. The baselines were captured on Linux, so on macOS or Windows refresh them locally before relying on the comparison. If a browser is missing, `npx playwright install chromium firefox webkit` installs all three.

## Icons and social preview

```bash
npm run icons     # rebuilds favicon.svg, favicon.ico, the PNG icons, and apple-touch-icon.png from src/assets/logo.svg
npm run og-image  # rebuilds the 1,200x630 social preview card from design/og-image/card.html
```

Both render through Playwright's Chromium and write into `public/`. Apps cache a shared link's preview for days or weeks, so when the card changes, give it a new filename in `design/og-image/render.mts` (it's `og-image-2.png` today) and update the tags in `index.html` and the SEO suite to match.

## Build

```bash
npm run build
npm run preview
```

## Project structure

```
src/
├── assets/        Images shared by 2+ places (logo.svg)
├── pages/
│   ├── home/      Home page and its sections (hero, services, about, contact), each with its own .module.css
│   └── not-found/ The 404 page
├── ui/            Components on every page (nav, footer), each with its own .module.css, and section-link.ts (section links that leave no hash in the address)
├── styles/        Global CSS (fonts.css for the self-hosted fonts, styles.css for the tokens and base elements)
├── utils/         motion.ts (the reduced-motion check) and rhythm.ts (the spacing and timing steps, for JavaScript)
├── app.tsx        Root component: the router, the bar, the routes, and the footer
└── main.tsx       Entry point
design/            The icon and social preview renderers, outside the served site
public/            Files served at fixed addresses: the icons, the social preview card, robots.txt, sitemap.xml, and Netlify's _headers and _redirects
tests/
├── accessibility/ axe-core scan and scripted checks
├── interaction/   control feedback, the phone menu, and the form tooltip
├── rendering/     screenshot comparisons and their baselines/
├── responsive/    layout checks across screen widths
├── seo/           search and social preview checks
├── support/       the page states the suites visit
└── playwright.config.ts
```

## Contact form

The salon doesn't take messages through the site, so the contact form is turned off while keeping its design: its fields don't accept input, and hovering, tapping, or tabbing to the form shows a tooltip explaining that it's disabled, with the phone number to call instead. The form never submits anywhere.

## Status

The cleanup that brought the project in line with the builder's coding rules is complete: the 404 page, SEO and local SEO, the social preview card and icons, interaction feedback, and the test suites are all in place. `CLAUDE.md` records the decisions behind them. After each deploy, check the shared-link preview in a checker such as [opengraph.xyz](https://www.opengraph.xyz/), which also refreshes a stale cached card.
