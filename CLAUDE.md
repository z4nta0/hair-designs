# Project CLAUDE.md: hair-designs

A website for Hair Designs, a real hair salon in Carson's Corner, Missouri,
run by licensed cosmetologists Juli Wilkerson and Keeli Bryan (React, Vite,
React Router, deployed on Netlify at https://hairdesigns.hair/). Every rule
in the user-level CLAUDE.md applies here; this file records only what's
specific to this project.

## Kind of site
Decided 2026-10-12. A real local business, so under the user-level "## SEO"
rule it gets the local SEO treatment (`LocalBusiness` structured data as
`HairSalon`, one consistent name, address, and phone, and the town in the
title, description, and headings where it reads naturally), not the demo
treatment. The `author` meta names the business itself.
- **Business details**, as the page shows them today: Hair Designs, 24579
  State Hwy 254, Carson's Corner, MO 65668, phone 417-988-6239, by
  appointment only (so the structured data carries no opening hours).
- **Facebook**: https://www.facebook.com/hairdesignscosmetology, which joins
  the structured data as `sameAs`. There's no X account, so no
  `twitter:site`.
- **Service area** (decided 2026-10-12): Hickory County, Missouri, plus the
  towns the user named from the map around Carson's Corner: Hermitage (the
  nearest larger town and the county seat), Pittsburg, Galmey, Wheatland,
  Nemo, Preston, Cross Timbers, Elkton, and Urbana. The user described it as
  "Hickory County and surrounding counties", but structured data names real
  places, so the surrounding counties are covered by the towns rather than
  listed as a vague region.
- **Off-site work for the business** (to hand over once the SEO pass is
  done): a Google Business Profile with the street address, Google Search
  Console with the sitemap submitted, Bing Webmaster Tools, and listings
  (Apple Business Connect, Bing Places, Yelp, the Facebook page's own
  details) with the identical name, address, and phone, plus Google reviews.

## Contact form
Decided 2026-10-12. The salon doesn't want to answer messages, so the
contact form stays on the page, looking as designed, but is turned off.
- Every field and the submit button sit in a `<fieldset disabled>`, styled
  as disabled, and the form never submits (no Netlify Forms).
- Hovering or tapping anywhere on the fields shows a tooltip: "The form is
  disabled at this time. Please call us at 417-988-6239. We apologize for
  any inconvenience.", with the number as a `tel:` link. A wrapper catches
  the pointer, since browsers don't reliably send mouse events from
  disabled controls, and the behavior is checked in all three engines.
- Keyboard and screen reader users, whom Tab never brings to a disabled
  field, get the same message as a note tied to the form through
  `aria-describedby`.
- Copy elsewhere that invites a message (the contact quote, the form's
  heading) is reworded to point to a call instead.

## Horizontal layout
Decided 2026-10-12: the horizontal rhythm, the way reese-roofing and
seal-and-shield use it. Layout values (the page gutter, margins, padding,
column gaps, and image sizes) are each a `clamp()` of a `--hor-rhy-*` step
between two `--spa-hor-*` steps, and everything inside a component stays on
fixed rem steps. It lands in a commit of its own, so it can be reverted if
it doesn't suit this design.

## Scroll position
Decided 2026-10-12: the 404 page makes this a two-route site, but it's
expected to fit one screen without scrolling, so `useScrTopFun` is left out
for now. Revisit once the 404 page is built; if it scrolls, add the hook.

## Cleanup plan
Decided 2026-10-12, on the `cleanup-code` branch. Each step is committed
once it's verified, and every step from 4 on keeps the test suites passing
with unchanged screenshots unless the step is meant to change the page.
1. **Project setup**: this file, the unused template assets removed
   (`f8d37f9`), and the README rewritten. Done 2026-10-12.
2. **Dependency upgrades**, one at a time with a build check after each:
   `react-router-dom` 7 to `react-router` 8, then TypeScript 6.0. The JSON
   config files are reformatted to the JSON rules. Done 2026-10-12: React
   19.3 first (React Router 8 needs 19.2.7 or newer), `npm audit fix`
   clearing 14 advisories (mostly the Vite 8.0 dev server, now 8.3.4),
   React Router 8.4 (checked rendering in all three engines), TypeScript
   6.0.3 with typescript-eslint 8.71.1 (whose peer range accepts it), and
   the JSON configs formatted. React Router 8 needs Node 22.22 or newer;
   Netlify builds with Node 24.x.
3. **ESLint**: `eslint.config.ts` from ease-my-life's, replacing the
   template's `eslint.config.js`. Done 2026-10-12: seal-and-shield's copy
   of it, unchanged, with `eslint-plugin-react` and `jiti` added and the
   template's `@eslint/js`, `globals`, and `eslint-plugin-react-refresh`
   removed. `tsconfig.node.json` type checks the config too, and `npm run
   typecheck` runs `tsc -b`. The existing code lints clean, and a probe
   file proved `react/jsx-no-undef` and the typescript-eslint rules fire.
4. **Playwright and axe** in all three engines, adapted from
   seal-and-shield's suites, with baseline screenshots taken before
   anything moves.
5. **Directory structure**, matching seal-and-shield's: `app.tsx`,
   `pages/home/` (hero, services, about, contact, `home.tsx`),
   `pages/not-found/`, `ui/` (nav, footer), `styles/` (`fonts.css`,
   `styles.css`), `assets/`, and Netlify's `_headers` and `_redirects` in
   `public/` replacing `netlify.toml`. The footer moves out of the home page
   into `ui/footer.tsx`.
6. **Formatting, naming, and comment passes, CSS modules, and design
   tokens**, one file per commit. The earlier hand formatting is replaced
   wherever it differs from the rules: per-declaration CSS comments,
   `══ Start/End ══` banners, `< tag >` spacing, JSX stored in a variable
   before it's returned, and `return void 0`. Section ids become the
   readable navigation targets `home`, `services`, `about`, and `contact`.
   The Vite template's `index.css` and `AppRooCom.module.css` go, the
   global rules hiding in `HomPagCom.module.css` (`:root`, the reset,
   `body`) move to `styles.css`, and Lato, Playfair Display, and Dancing
   Script become self-hosted. Then the design tokens, and the horizontal
   layout above in its own commit.
7. **Copy**: every em dash reworded (the service select's placeholder, the
   contact quote, and its sign-off), and the message wording above.
8. **New features**: a phone menu for the nav, the 404 page, SEO and local
   SEO, the social preview card and favicon set (the current `favicon.svg`
   predates the new logo), interaction feedback, reduced motion, and the
   disabled contact form above.
9. **Wrap-up**: every suite passing in every engine, this file and the
   README updated, and the user's live checks of the deploy (the preview
   card through a checker such as opengraph.xyz).
