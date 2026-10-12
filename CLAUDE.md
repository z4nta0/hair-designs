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
- **SEO pass** (done 2026-10-12): `index.html` carries the title "Hair
  Designs | Hair Salon in Carson's Corner, Missouri", the one description
  (120 characters, naming the services, both stylists, the town, and "By
  appointment only"), the `author` meta, and the canonical link, since the
  home page is the only indexed route. Its JSON-LD links a `HairSalon` (live
  address, phone, street address, service area, the six services as an
  offer catalog, and the Facebook page as `sameAs`, with no opening hours) to
  a `Person` for each stylist with the title "Licensed Cosmetologist", and
  to a `WebSite` it publishes. The service area is the one detail the page
  doesn't show; it's the user's own answer about who the salon serves, not a
  claim the page contradicts. `public/` gains `robots.txt` (every crawler
  allowed), `sitemap.xml` (the home page alone), and `_headers` (a strict
  Content-Security-Policy and the usual hardening headers, checked against
  the built site in all three engines; WebKit reports one harmless
  violation from its own styling of the form's select, which draws
  identically either way).
- **Social preview and icons** (done 2026-10-12): `public/og-image-2.png`, a
  1,200x630 PNG of about 53 KB, rendered from `design/og-image/card.html` by
  `npm run og-image`: the hero logo panel's navy stripes, the logo, "Hair
  Designs" in Playfair Display with Designs in light rose italic, "Juli
  Wilkerson & Keeli Bryan" signed in light rose script as in the hero, and
  "Carson's Corner, Missouri" in cream Lato at a literal 40px (no scale step
  lands within 10%), all inside the center 630px square, with the bar's rose
  line along the foot. The stylists' line was added at the user's request
  (their choice of two mockups), which took the logo down one rhythm step to
  about 183px; the first card was `og-image.png`, and the new name keeps apps
  from showing their cached copy of it. A PNG rather than a
  JPEG, since the card is flat stripes, line art, and text. `index.html`
  carries every Open Graph and Twitter tag (no `twitter:site`, since there's
  no X account), `theme-color` in the bar's navy, and the full icon set:
  `favicon.svg`, `favicon.ico`, PNGs at 16, 32, 192, and 512px, and a 180px
  `apple-touch-icon.png`. `npm run icons` (`design/icons/render.mts`)
  rebuilds all of them, `favicon.svg` included, from `src/assets/logo.svg`
  set on the bar's navy (read from `--bac-inv-col`): a rounded square for the
  favicons and a full square, the logo a little smaller, for iOS. The old
  hand-made `favicon.svg`, which predated the logo, is gone. Known limit: at
  16 and 32px the logo's thin arrows fade into the navy, leaving a faint X,
  since the logo's detail is finer than a tab icon can show; a simplified mark
  would fix it if the user ever wants one. The structured data names the
  512px icon as the salon's `logo` and the card as its `image`. After each
  deploy, the user checks the card in a preview checker such as
  opengraph.xyz.
- **Off-site work for the user, once the branch is deployed** (updated
  2026-10-12): add the site to Google Search Console and Bing Webmaster
  Tools and submit the sitemap, as on the user's other projects. The
  business listings (the Google Business Profile, Apple, Bing Places, Yelp)
  and reviews are already in the clients' hands, so they're not tracked here.

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
- Screen readers hear the same message from the fieldset's visually hidden
  `<legend>`, which names the fieldset and also describes the wrapper
  through `aria-describedby`. It's a legend rather than a plain hidden span
  (changed 2026-10-12 after the user's WAVE check) so the fieldset has the
  legend WAVE asks for, and it's set in navy, since WAVE measures clipped
  text and the inherited cream on the form's cream card read as 1:1.
- Known quirk: Tab past the tooltip's link, the page's last stop, sends
  Firefox's focus to its own toolbar without a blur the page can see, so the
  tooltip stays up until focus or the pointer returns.
- **Copy** (decided with the user 2026-10-12, step 7): the stylists' quote
  invites a call or a visit instead of a message ("We're your neighbors, so
  give us a call or stop by. We'd love to hear from you."), the form card
  keeps its "Send Us a Message" heading, since the card still reads as the
  designed contact form and the tooltip and legend explain it's off, and
  the quote's sign-off keeps its em dash under the user-level copy rules'
  attribution exception.

## Type scale
Decided 2026-10-12: the root is 68.75% (11px) on every viewport, as in the
user's other sites, and no font size changes by viewport (large headings
grow with `clamp()` instead). The Vite template had set the root to 18px,
16px below 1,024px; the old `rem` values were read at the browser's 16px
default when snapping to steps, matching how the sibling sites converted
theirs, so paragraphs sit at `--fon-siz-p01` (14.572px) and buttons and
labels at the 11px base. The user approved the before and after.

## Card grids
Decided 2026-10-12, as in the user's other sites (not in the user-level
rules): a grid of cards always has an equal number of cards in every row.
The six service cards go three columns above 900px, two from 600px to
900px, and one at 600px and narrower, never an `auto-fit` that leaves a
short last row.

## Horizontal layout
Decided 2026-10-12: the horizontal rhythm, the way reese-roofing and
seal-and-shield use it. Layout values (the page gutter, margins, padding,
column gaps, and image sizes) are each a `clamp()` of a `--hor-rhy-*` step
between two `--spa-hor-*` steps, and everything inside a component stays on
fixed rem steps. It lands in a commit of its own, so it can be reverted if
it doesn't suit this design.
- **Applied 2026-10-12 in one commit (`7fe5c6c`)**, so `git revert` restores
  the previous layout if the user's comparison with the live site says so:
  - **Fluid (horizontal rhythm)**: the gutter `--gut-sid-pad` (horizontal
    step 016 clamped between the p01 and p04 spacing steps, about 19.3px to
    44.9px, the same as reese-roofing and seal-and-shield) pads the sides of
    every section, the bar, the phone menu, the hero's details bar, and the
    footer, and feeds the content cap's `max()`. The hero panels' side
    padding and the Contact column gap take step 016 between p03 and p05,
    the About column gap step 017 between p04 and p06, the hero logo step
    021 between rhythm p09 and p10, and the About logo step 019 between
    rhythm p07 and p08.
  - **Fixed (rem steps)**: everything inside a component (cards, buttons,
    form fields, the tooltip, the menu's rows).
  - **Container queries**: a root `appRooDiv` in `app.tsx` is the `app`
    container, and the 600px and 900px queries measure it; only the
    reduced-motion queries stay `@media`. The phone and narrow overrides
    now set only top and bottom padding, leaving the sides to the fluid
    values.
- **Content cap** (decided 2026-10-12, ahead of the horizontal rhythm, after
  the compact type scale left the wide sections looking sparse): content
  stops at `--con-max-wid`, 1,920px over the square of the core design
  number (about 1,094px, the same as tonys-toppers; the other sibling sites
  use 1,920px over the first power, about 1,449px). The Services, About, and
  Contact sections, and the bar in a commit of its own (`28d1b0c`, easy to
  revert if it doesn't suit), set their side padding to the larger of 5% and
  half the space beyond the cap, so their backgrounds stay full width while
  their content centers. The hero stays full width, and the footer, which
  already centers its line, is unchanged.

## Scroll position
Decided 2026-10-12, confirmed by the user once the 404 page was built: the
404 page makes this a two-route site, but `useScrTopFun` is left out, an
exception to the user-level rule. The 404 page
fits one screen at every size checked except the smallest phone (320 by
568, about 140px of scroll), and every link on it (the bar's brand and
section links, the phone menu's, and its own Back Home button) goes through
`secCliFun` with a section hash, which the home page scrolls to on arrival.
So no navigation opens a page without a hash, the one case the hook covers.
the-bernie-bears' hook would also fight this site's hash clearing: the home
page clears the hash with a REPLACE that has no hash, which the hook would
answer by jumping back to the top. If a hashless link between pages is ever
added, the hook comes in with a guard that skips that hash-clearing
REPLACE.

## Directory structure
Decided 2026-10-12, matching seal-and-shield's adaptation of the user-level
"### Directory structure" layout to a website with routes rather than a web
app with tabs.
```
src/
  main.tsx               entry point
  app.tsx                root component, the router, the bar, the main
                         element with the routes, and the footer
  assets/                images used by 2 or more places (logo.svg)
  pages/
    home/                the home page (home.tsx) and its sections (hero,
                         services, about, contact)
  ui/                    components every page renders (nav, footer) and
                         section-link.ts
  styles/                global CSS only (fonts.css, styles.css)
  utils/                 app-agnostic helpers (motion.ts)
```
Outside `src/`: `tests/` holds the Playwright suites (see "## Test
suites"), and `public/_redirects` holds Netlify's single-page app fallback,
replacing the old `netlify.toml`.
- **`pages/` takes the place of `tabs/`.** Each route gets its own folder, and
  a component only that page uses lives in it. The 404 page is
  `pages/not-found/`.
- **Section links leave no hash in the address** (decided 2026-10-12, as in
  the user's other sites except reese-roofing). Every link to a home page
  section (the bar's links and brand, the phone menu, the hero's two
  buttons, and the About section's button) points at its real address
  (`/#about`), so a Ctrl, Cmd, Shift, Alt, or middle click opens it in a new
  tab, while a plain click goes through `ui/section-link.ts`'s `secCliFun`:
  it scrolls to the section in place (instantly under reduced motion,
  through `utils/motion.ts`'s `redMotFun`), or from any other page navigates
  home with the section's id as the hash. The home page jumps to a section
  named in the hash on arrival, from a shared address or another page, and
  clears it. Adapted from tonys-toppers' version, with `useSecCliFun` added
  so every link shares one click handler; the phone menu closes only when a
  click was handled. Checked in all three engines: every link lands 71px
  down, below the bar, with a clean address (a modified click opens a new tab
  in Chromium and Firefox; headless WebKit doesn't open tabs on modified
  clicks, so that case is unchecked there).
- **A page's main file is named after its folder** (`pages/home/home.tsx`),
  the same as seal-and-shield.
- **The bar and footer live in `ui/`** as `nav.tsx` and `footer.tsx`, since
  the 404 page will use them too. The footer now renders after `main`, so
  it's the page's `contentinfo` landmark.
- **Component names** follow the naming rules since the formatting pass:
  `AppRooCom`, `NavBarCom`, `SitFooCom`, `HomPagCom`, `HerSecCom`,
  `SerSecCom`, `AboSecCom`, and `ConSecCom`, each exported by name.
- **Every component has its own CSS module** (`hero.module.css`,
  `nav.module.css`, ...), read as `cssModObj` through camelCase keys only,
  and `styles/styles.css` holds just the color tokens and the base element
  rules, with `styles/fonts.css` declaring the self-hosted fonts.
  `main.tsx` imports both after the app, and nothing in them overlaps a
  module's rules, so their order doesn't change the page.
- **Element names the rules didn't list** (decided 2026-10-12 by the rules'
  own "expand a tag to its full name" instruction): `hr` (horizontal rule)
  takes `Hor`, `strong` takes `Str`, `fieldset` takes `Fie`, `legend` takes
  `Leg`, `circle` takes `Cir`, `line` takes `Lin`, and `rect` takes `Rec`.

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
   into `ui/footer.tsx`. Done 2026-10-12, as described under "## Directory
   structure", with `_headers` (security headers) left for the SEO step.
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
   - **Formatting and module passes: done 2026-10-12**, one file per commit
     with every suite passing and every screenshot unchanged: `styles.css`
     rewritten from the template (its leftover variables had collided with
     the site's own), `main.tsx` and `app.tsx`, self-hosted fonts (which
     ended the Firefox flake), `index.html`, `vite.config.ts` with its page
     minifier, `.gitignore`, the section ids, then the nav, footer, hero,
     Services, About, and Contact, each with its own module, and finally
     camelCase-only module keys. The design tokens and the horizontal
     layout come next.
7. **Copy**: every em dash reworded (the service select's placeholder, the
   contact quote, and its sign-off), and the message wording above. Done
   2026-10-12: the placeholder reads "Select a service", the quote is
   reworded without its dash or its invitation to message, and the
   sign-off's dash stays as a quote attribution, an exception added to the
   user-level copy rules at the user's request. The old favicon's SVG
   comment still holds one, left for the favicon's replacement in step 8.
8. **New features**: the 404 page, SEO and local SEO, the social preview
   card and favicon set (the current `favicon.svg` predates the new logo),
   and interaction feedback. The phone menu, reduced motion, and the
   disabled contact form were done early, in the accessibility pass.
   - **404 page** (done 2026-10-12): `pages/not-found/`, rendered by a
     catch-all route for every path no other route matches. In the salon's
     own style (a script eyebrow, "Page not found" with a rose italic accent,
     the short rose rule, and one line pointing back to Carson's Corner),
     with two ways onward: Back Home, through `secCliFun` to the home page's
     top, and a Call button, since the salon books by phone. Its own title is
     "Page Not Found | Hair Designs" and it carries `noindex`; it keeps
     `index.html`'s description. The app root became a column at least a
     screen tall whose main element grows, so the footer sits at the bottom
     of a short page and the message centers in the space between (the home
     page's screenshots were unchanged). The accessibility, rendering, and
     responsive suites cover it.
   - **Interaction feedback** (done 2026-10-12): every link and button now
     has a focus ring that eases in, a hover change, and a press.
     - **Focus ring**: `styles.css` gives every link and button a zero-width
       outline in `--foc-rin-col`, held 6.3px out, that grows to 2px and
       draws in to 2px on `:focus-visible` (the form wrapper does the same
       from 11px to its 6.3px), and every element with its own transition
       lists the outline properties. The ring color moved to the dark rose
       (`#c7745f`), the one shade clearing 3:1 on both the cream sections
       and the navy bands, where the main rose was 2.61:1 on cream.
     - **Hover and press**: buttons (the hero's, About's, the 404 page's,
       and the menu's Call button) lift on hover and press in to 0.97;
       text links (the bar's links and brand, the menu's rows and Facebook
       link, the Contact phone number, and the tooltip's link) shift color
       on hover and dim on press, the menu's rows also nudging a few pixels
       right; the menu toggle turns its lines rose and presses in.
     - **Tooltip**: it fades in on the decelerate easing and now fades out
       on the accelerate one before it's removed, marked by
       `data-tooltip-close-active` until its `animationend`, which reduced
       motion shortens to .01ms rather than turning off.
     - **Found along the way**, each its own commit: the bar's brand left
       the phone menu open, with the page behind it still inert, when
       tapped from the open menu; and WebKit resolved `rem` in the root's
       own `scroll-padding-top` against its 16px default, so every section
       link stopped about 29px short in Safari (the "30px short" WebKit
       quirk seen earlier). The root's scroll padding now multiplies the
       same rhythm steps by `1em`, which every engine reads as 11px.
   - **Phone menu extras and scrim** (done; asked for by the user
     2026-10-12, after the sibling sites' menus, and modeled on the-bernie-
     bears' and tonys-toppers'):
     - **Scrim**: the deepest navy (`--scr-mai-col`, `#1d2235`) at 0.570
       opacity covers the page while the menu is open, fading in on the
       decelerate easing and out on the accelerate one. It shares the bar's
       single layer and comes first in the page, so the bar paints over it.
     - **Ways out**: tapping the scrim, pressing Escape (which returns focus
       to the toggle), choosing a link, and widening the screen until the
       toggle is hidden all close it, and the bar's siblings (the main
       content and footer) are inert while it's open.
     - **Extras under the links**: a Call button for 417-988-6239 in navy
       on the light rose (6.37:1, since white on the main rose fails at
       2.96:1), then "Find us on Facebook" with the platform's mark, opening
       in a new tab. The user wanted both if they fit and looked good; they
       fit from 320px to 900px in all three engines.
     - **Motion**: every row fades and slides in one stagger step (about
       68ms) after the one before, off under reduced motion.
     - **Tests**: still to come, an interaction suite checking the open
       menu and each way out, as the-bernie-bears' `menu.spec.ts` does.
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
visit (the home page and the 404 page at 390px and 1,440px, and the phone
menu open at 390px) are listed in
`tests/support/states.ts`, whose `opeStaFun` waits for the fonts, the images,
and the hero's entrance fade before anything is checked. Unlike
seal-and-shield's, it has no scroll pass, since nothing on this site waits to
be scrolled into view.
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
  copyright line is masked. After an
  intended visual change, refresh with `npm run test:rendering --
  --update-snapshots` and commit the baselines with it. Baselines are captured
  on Linux.
  - **The Firefox font flake is gone**: while the fonts came from Google,
    Firefox drew a few dozen pixels of the Playfair Display headings
    differently about one run in four under three parallel workers, covered by
    a temporary retry. Self-hosting the fonts (`f22a2ba`) ended it: eight
    parallel runs with retries off all passed, so the retry was removed.
- `npm run test:responsive`: measures the home page and the 404 page at 15
  widths from 320 to 1,920px (a pixel either side of the 600px and 900px
  breakpoints and of `index.css`'s 1,024px root font size switch included), and
  the open phone menu at every one of those up to 900px, failing on sideways
  scrolling, an unclipped element past either edge, text spilling its box, or
  two reachable controls overlapping.
- `npm run test:seo`: the raw page, fetched without a browser, carries the
  full title and one description; the home page's title, description,
  author, canonical, and single h1; the structured data matched against the
  page's own text and links (phone, street address, stylists, services,
  Facebook, no hours); the 404 page's noindex, title, single description,
  and h1; and `robots.txt` and the sitemap. Adapted from tonys-toppers'.
- `npm run test:interaction`: `feedback.spec.ts`, adapted from
  tonys-toppers', hovers and presses every reachable link and button in each
  state (skipping disabled ones and anything inert), failing any that looks
  the same hovered as at rest or pressed as hovered, or whose transitions
  leave out the focus ring's outline; it checks the first Tab stop's ring
  eases in to 2px, and that under reduced motion every control still
  responds with nothing transitioning. `menu.spec.ts`, adapted from
  the-bernie-bears', checks the open menu (its links, Call button, Facebook
  link, and the scrim under a tap) and every way out: the scrim, Escape
  (focus back on the toggle), a section link (landing about 63px down, below
  the bar, with a clean address), the brand, and widening the screen.
  `tooltip.spec.ts` checks the form tooltip fades out before it's removed,
  closes on Escape after keyboard focus, and still goes under reduced motion.
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
- **WAVE** (the user's check, 2026-10-12): its one contrast error was the
  hidden form note's cream on cream, and its missing-legend alert was the
  disabled fieldset; both were fixed by making the note the fieldset's
  legend. Its "possible heading" alerts on the four script taglines and the
  two "Licensed Cosmetologists" captions are kept on purpose, as in the
  user's other projects: the taglines lead into real headings and the
  captions are captions, so making them headings would add false entries to
  the outline screen reader users navigate by.
- **Checked by hand**: axe can't measure text over the contact section's
  striped navy, so it lists those items as needing review. Measured against
  both stripes (and the quote box's 6% white overlay), the lowest is 5.30:1
  (the quote's sign-off), so all pass.
