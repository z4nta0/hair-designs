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
   anything moves. Done 2026-10-12, as described under "## Test suites",
   with the failures they found in the existing site listed there.
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

## Test suites
Added 2026-10-12, adapted from seal-and-shield's. Playwright suites live in
`tests/`, one project per suite and engine in `tests/playwright.config.ts`,
which starts its own dev server on port 5191 (never the usual 5173) and stops
it afterwards. Every suite runs in Chromium, Firefox, and WebKit. Results,
screenshots, and traces go to `tests/output/` (git-ignored); `npx playwright
show-report tests/output/report` opens the HTML report. The states the suites
visit (the home page at 390px and 1,440px for now; the 404 page and the phone
menu join once they exist) are listed in `tests/support/states.ts`, whose
`opeStaFun` waits for the fonts, the images, and the hero's entrance fade
before anything is checked. Unlike seal-and-shield's, it has no scroll pass,
since nothing on this site waits to be scrolled into view. The interaction and
SEO suites arrive in step 8 with the features they check.
- `npm run test:accessibility`: the pre-commit accessibility scan. axe-core
  checks each state against WCAG 2.2 A and AA plus best practices
  (`axe.spec.ts`), and scripted checks (`scripted.spec.ts`) cover link and
  button names, a Tab walk (order, traps, focus on screen, uncovered, and
  visible), reflow at 320px, and motion under reduced motion. axe's "needs
  review" results are printed and attached to the report rather than failing
  the run.
- `npm run test:rendering`: compares a full-page screenshot of every state
  with its baseline in `tests/rendering/baselines/`, with zero tolerance (no
  pixel may differ, and the per-pixel color threshold is 0 too). The footer's
  copyright line is masked, found through the `footer` element, since today's
  footer sits inside `main` and isn't the `contentinfo` landmark yet. After an
  intended visual change, refresh with `npm run test:rendering --
  --update-snapshots` and commit the baselines with it. Baselines are captured
  on Linux.
  - **Temporary Firefox retry**: under three parallel workers, Firefox draws a
    few dozen pixels of the Google-hosted Playfair Display headings ("Perms &
    Texture", "Town") differently about one run in four, while six runs with a
    single worker all passed. Firefox's rendering tests get one retry, so a
    real change still fails twice. Remove it once the fonts are self-hosted in
    step 6, after checking the flake is gone.
- `npm run test:responsive`: measures the home page at 15 widths from 320 to
  1,920px (a pixel either side of the 600px and 900px breakpoints and of
  `index.css`'s 1,024px root font size switch included), failing on sideways
  scrolling, an unclipped element past either edge, text spilling its box, or
  two reachable controls overlapping.
- `npm test` runs every suite.

### Failures found in the existing site
The first run, before anything moved, had 45 failing tests, the same in all
three engines, all left for the steps that fix them:
- **Contrast** (axe, both widths): about 40 text elements across every
  section fall short of 4.5:1: the bar's title and links, the hero's tagline,
  italic "Designs", subheading, names, and description, the service cards'
  text, the About heading, names, and paragraphs, the contact section's
  heading, tagline, labels, hours, phone link, and quote, and the form's
  labels and submit button.
- **Form focus** (Tab walk, both widths): the contact form's six fields show
  no visible focus indicator. They become disabled in step 8, which takes
  them out of the Tab order.
- **No phone layout for the nav**: the page scrolls sideways at every width
  up to 601px (298px too wide at 320px, 17px at 601px), failing reflow and
  the responsive suite, and on phones the Tab walk finds the Contact link off
  screen and the contact section's phone link hidden under the fixed bar. The
  phone menu in step 8 fixes these.
- **Reduced motion**: the hero's `fadeUp` entrance still plays.
- **React warning**: the service select sets `selected` on its placeholder
  option, which React asks to replace with the select's `defaultValue`. It
  shows in the dev server's console during every run.
