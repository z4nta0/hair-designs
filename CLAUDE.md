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
Built 2026-10-12 (`90d30fb`).
- Every field and the submit button sit in a `<fieldset disabled>`, faded
  to 0.6 opacity, and the form never submits (no Netlify Forms).
- The fieldset ignores the pointer, so a wrapper around it catches hover and
  taps reliably in every engine and shows a not-allowed cursor. Hovering
  with a mouse or tapping opens a tooltip at that point: "The form is
  disabled at this time. Please call us at 417-988-6239. We apologize for
  any inconvenience.", with the number as a `tel:` link. It closes when the
  mouse leaves, on a tap outside the form, or on Escape, and a press on the
  tooltip itself doesn't move it, so its link can be tapped.
- The wrapper is one Tab stop (`role='group'`, labeled "Contact form, turned
  off", with a rose focus ring). Focusing it opens the tooltip at the form's
  top edge, and the next Tab reaches its phone link. On blur it waits a frame
  and closes only if focus settled outside the wrapper, which also survives
  the test suite blurring and refocusing each stop.
- Screen readers hear the same message from a visually hidden note tied to
  the wrapper through `aria-describedby`.
- Known quirk: Tab past the tooltip's link, the page's last stop, sends
  Firefox's focus to its own toolbar without a blur the page can see, so the
  tooltip stays up until focus or the pointer returns.
- Copy elsewhere that invites a message (the contact quote, the form's
  heading) is reworded to point to a call instead in step 7.

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
   - **Accessibility pass: done 2026-10-12**, before the directory move, so
     steps 5 and 6 run against a clean scan. It brought forward the phone
     menu, reduced motion, and the disabled form from step 8, as described
     under "### Accessibility pass".
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
   layout above in its own commit. The accessibility pass's colors fold
   into the tokens then: `--rose-dk` (`#c7745f`, large rose text on light
   backgrounds) and the darkened `--warm-gray` (`#716c67`) become role
   colors, and the script taglines' literal 25.572px is already the font
   size scale's `--fon-siz-p03`, so they take that step without moving.
7. **Copy**: every em dash reworded (the service select's placeholder, the
   contact quote, and its sign-off), and the message wording above.
8. **New features**: the 404 page, SEO and local SEO, the social preview
   card and favicon set (the current `favicon.svg` predates the new logo),
   and interaction feedback. The phone menu, reduced motion, and the
   disabled contact form were done early, in the accessibility pass.
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
visit (the home page at 390px and 1,440px, and the phone menu open at 390px;
the 404 page joins once it exists) are listed in
`tests/support/states.ts`, whose `opeStaFun` waits for the fonts, the images,
and the hero's entrance fade before anything is checked. Unlike
seal-and-shield's, it has no scroll pass, since nothing on this site waits to
be scrolled into view. The interaction and SEO suites arrive in step 8 with
the features they check.
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
    step 6, after checking the flake is gone. Until then, refresh Firefox's
    baselines with a single worker (`npx playwright test --config
    tests/playwright.config.ts --project rendering-firefox --workers=1
    --update-snapshots`), since a baseline captured under parallel load can
    bake the odd rendering in and then fail every run.
- `npm run test:responsive`: measures the home page at 15 widths from 320 to
  1,920px (a pixel either side of the 600px and 900px breakpoints and of
  `index.css`'s 1,024px root font size switch included), and the open phone
  menu at every one of those up to 900px, failing on sideways
  scrolling, an unclipped element past either edge, text spilling its box, or
  two reachable controls overlapping.
- `npm test` runs every suite.

### Accessibility pass
Done 2026-10-12, one commit per problem. The first run, before anything
moved, had 45 failing tests, the same in all three engines; every suite now
passes (126 tests) in all three.
- **React warning** (`d597e06`): the service select's placeholder option
  set `selected`; the select now takes `defaultValue=''`.
- **Reduced motion** (`0450421`): the hero's entrance fade, the smooth
  section scrolling, and every hover transition get a reduced-motion
  variant. This also cleared the desktop form-focus failures, which were the
  test catching the fields' rose focus border mid-transition.
- **Phone layout** (`f5bafdb`): the 900px and 600px media queries targeted
  class names from an earlier mockup (`.heroStripe`, `.heroLeft`,
  `.contactGrid`, `.formRow`, `.navLinks`), so nothing stacked on phones and
  the page scrolled sideways by up to 298px. They now target the real
  classes; the 600px section padding applies to the Services, About, and
  Contact sections only, since the hero keeps its own bar clearance.
- **Phone menu** (`b34d98f`): at 900px and narrower (the bar's links stop
  fitting at about 700 to 750px, and 900px is the next breakpoint up) a menu
  button replaces the links and opens a panel below the bar, eased in with
  opacity and transform, inert while closed, closing when a link is chosen.
  Its visibility turns on at once when opening, so a quick Tab reaches its
  links, and turns off only after the fade when closing.
- **Bar clearance** (`d338c2c`): `html` gets a `scroll-padding-top` of 71px
  (the bar's 68px plus its 3px border), so section links and keyboard focus
  stop below the fixed bar instead of under it.
- **Disabled form** (`90d30fb`): see "## Contact form". Disabled fields
  leave the Tab order, which removed their missing-focus failures.
- **Contrast** (`e19478f`): only two colors failed. The warm gray
  (`#7a7570`, 4.01:1 on cream) darkened to `#716c67` (4.58:1). Rose text on
  the cream and ivory backgrounds (`#d4806a`, about 2.6:1) now uses
  `--rose-dk` (`#c7745f`, 3.04:1), which is enough for large text, and the
  four script taglines grew from 1.1rem to 25.572px (the scale's `p03`) so
  they count as large text, the user's choice over keeping their size in a
  darker `#a75743`. The brand rose stays on borders, rules, and buttons.
- **Checked by hand**: axe can't measure text over the contact section's
  striped navy, so it lists those items as needing review. Measured against
  both stripes (and the quote box's 6% white overlay), the lowest is 5.30:1
  (the quote's sign-off), so all pass.
