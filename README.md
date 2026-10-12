# Hair Designs

The website for Hair Designs, a hair salon in Carson's Corner, Missouri, run by licensed cosmetologists Juli Wilkerson and Keeli Bryan. It's built and maintained by [techgeek.support](https://techgeek.support/).

Live at [hairdesigns.hair](https://hairdesigns.hair/).

## Stack

- **Vite 8** dev server / bundler
- **React 19** + **TypeScript**
- **React Router** (a single home page today, with a 404 page to come)
- **ESLint** with typescript-eslint, and **Playwright** with axe-core for the test suites
- Deployed on **Netlify**, which serves `index.html` for every path so the router can handle it

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
npm run test:rendering      # full-page screenshots of each page state against approved baselines
npm run test:responsive     # the page from 320 to 1,920px: no sideways scroll, spill, or overlap
```

Each suite runs in Chromium, Firefox, and WebKit against its own dev server on port 5191, so a dev server already running on 5173 is left alone. Reports land in `tests/output/` (git-ignored); `npx playwright show-report tests/output/report` opens the HTML report. The rendering suite's approved screenshots live in `tests/rendering/baselines/` and match to the pixel, so after a change meant to alter how the page looks, review the diff in the report, then run `npm run test:rendering -- --update-snapshots` and commit the new baselines with the change. The baselines were captured on Linux, so on macOS or Windows refresh them locally before relying on the comparison. If a browser is missing, `npx playwright install chromium firefox webkit` installs all three.

## Build

```bash
npm run build
npm run preview
```

## Contact form

The salon doesn't take messages through the site, so the contact form is being turned off while keeping its design: its fields won't accept input, and touching them will explain that the form is disabled and give the phone number instead.

## Status

The project is partway through a cleanup that brings it in line with the builder's coding rules and adds the 404 page, SEO, social previews, and test suites. `CLAUDE.md` holds the plan and its progress.
