


// #region Imports

import type { Page } from '@playwright/test'; // What: Page. Why: Opening a state drives a Playwright page. How: This types opeStaFun's page parameter.

// #endregion Imports



/**
 * states.ts = States
 *
 * @summary
 * The page states the accessibility and rendering suites visit, and the
 * helper that opens one; the responsive suite opens its own widths through
 * the same helper. A state is a page at a width, sometimes with something
 * opened on it; for now that's the home page at a phone width and a desktop
 * width, with the 404 page and the phone menu joining once they exist.
 * opeStaFun sizes the viewport, loads the page, waits for the fonts and
 * images, runs the state's own action if it has one, and then waits for the
 * page to stay still so nothing is measured mid-fade. Adapted from
 * seal-and-shield's own states, minus its scroll pass, since this site has
 * no content that waits to be scrolled into view.
 *
 * Sections:
 *  - Types
 *  - Constants
 *  - Helpers
 *  - Exports
 *
 * @author z4nta0 <https://github.com/z4nta0>
 *
*/



// #region Types

type StaRcdTyp = { // What: State Record Type. Why: Every check reads the same description of a state. How: This names a state, its path, its viewport, and an optional action that opens something on it.


	actFun? : ( curPagObj : Page ) => Promise< void >, // What: Action Function. Why: Some states need something opened after the page loads. How: This runs against the loaded page, e.g. clicking a menu toggle.
	heiNum  : number,                                  // What: Height Number. Why: The viewport's height decides what's on screen. How: This is the viewport height in CSS pixels.
	ideStr  : string,                                  // What: Identifier String. Why: Each test names the state it checks. How: This becomes part of the test title.
	patStr  : string,                                  // What: Path String. Why: Each state opens one route. How: This is the path loaded from the dev server.
	widNum  : number                                   // What: Width Number. Why: Layouts change with width. How: This is the viewport width in CSS pixels.


};

// #endregion Types



// #region Constants

/**
 * STA_RCD_ARR = State Record Array
 *
 * @summary
 * Every state the checks visit: the home page at a phone width (390px) and a
 * desktop width (1,440px). Every row shares the {@link StaRcdTyp} shape, so
 * its fields carry no comments of their own:
 * - `actFun` (Function): Action Function, run after the page loads to open
 *   something on it, such as a menu. No row has one yet.
 * - `heiNum` (Number): Height Number, the viewport height in CSS pixels.
 * - `ideStr` (String): Identifier String, the state's name in test titles.
 * - `patStr` (String): Path String, the route loaded from the dev server.
 * - `widNum` (Number): Width Number, the viewport width in CSS pixels.
 *
 * @author z4nta0 <https://github.com/z4nta0>
 *
*/

const STA_RCD_ARR : StaRcdTyp[] = [ // What: State Record Array. Why: Every check walks the same list of states, so a new state is added in one place. How: Each row names a state, its path, and its viewport.


	{ heiNum : 900, ideStr : 'home-desktop', patStr : '/', widNum : 1440 }, // What: Home Desktop State. Why: Most visitors on a computer land here. How: This loads the home page at 1,440px.
	{ heiNum : 844, ideStr : 'home-phone',   patStr : '/', widNum : 390  }  // What: Home Phone State. Why: The phone layout stacks every section. How: This loads the home page at 390px.


];

// #endregion Constants



// #region Helpers

// #region waiSetFun

/**
 * waiSetFun = Wait Settled Function
 *
 * @summary
 * Waits until the page has stayed still for half a second: no animation or
 * transition running except ones that repeat forever, which never finish and
 * so are skipped (the reduced motion check is what catches one that
 * shouldn't be playing). A single still moment isn't enough, since one
 * animation can start just as another ends, such as the hero's two halves
 * fading in on staggered delays, so the page has to read as still on five
 * checks in a row, 100ms apart. It fails after 5 seconds rather than
 * hanging.
 *
 * @author z4nta0 <https://github.com/z4nta0>
 *
 * @param curPagObj - Current Page Object: The page to wait on.
 *
 * @returns A promise that settles once the page has stopped moving, with no
 *          value.
 *
 * @example
 * ```ts
 * waiSetFun(page) // => Promise<void>
 * ```
 *
*/

async function waiSetFun ( curPagObj : Page ) : Promise< void > {


	const deaTimNum = Date.now() + 5000; // What: Deadline Time Number. Why: A page that never settles should fail rather than hang the run. How: This marks 5 seconds from now.

	let quiCouNum = 0; // What: Quiet Count Number. Why: The page has to stay still across several checks in a row. How: This counts consecutive still checks, starting from none.


	while ( quiCouNum < 5 ) { // What: Settle Check Loop. Why: The page counts as settled only after five still checks in a row. How: This keeps checking until the count reaches five.


		if ( Date.now() > deaTimNum ) throw new Error( 'The page was still animating after 5 seconds.' ); // What: Deadline Guard. Why: A page that keeps moving would otherwise loop forever. How: This fails the check once the deadline passes.



		const stiPagBoo = await curPagObj.evaluate( () => document.getAnimations().every( ( aniCurObj ) => aniCurObj.playState !== 'running' || aniCurObj.effect?.getComputedTiming().iterations === Infinity ) ); // What: Still Page Boolean. Why: Each check asks whether anything that ends is still moving. How: This is true when every running animation or transition is one that repeats forever.

		quiCouNum = stiPagBoo ? quiCouNum + 1 : 0; // What: Quiet Count Update. Why: Any movement restarts the count, so the page has to stay still the whole half second. How: This adds one for a still check and resets to zero otherwise.

		await curPagObj.waitForTimeout( 100 ); // What: Check Pause Wait. Why: The checks have to span time to prove the page stays still. How: This waits 100ms before the next one.


	}


}

// #endregion waiSetFun



// #region opeStaFun

/**
 * opeStaFun = Open State Function
 *
 * @summary
 * Opens one state on a page and waits until it's settled: sizes the
 * viewport, loads the path, waits for the web fonts and for every image to
 * decode, runs the state's action if it has one, then waits until the page
 * stays still ({@link waiSetFun}), so a check never measures a heading
 * halfway through its entrance fade or a menu halfway open.
 *
 * @author z4nta0 <https://github.com/z4nta0>
 *
 * @param curPagObj - Current Page Object: The page to open the state on.
 * @param staRcdObj - State Record Object: {@link StaRcdTyp}
 *
 * @returns A promise that settles once the state is open and settled, with no
 *          value.
 *
 * @example
 * ```ts
 * opeStaFun(page, staRcdObj) // => Promise<void>
 * ```
 *
*/

async function opeStaFun ( curPagObj : Page, staRcdObj : StaRcdTyp ) : Promise< void > {


	await curPagObj.setViewportSize( { height : staRcdObj.heiNum, width : staRcdObj.widNum } ); // What: Viewport Size Call. Why: The state's layout depends on its width. How: This sizes the page before it loads, so breakpoints apply from the first paint.

	await curPagObj.goto( staRcdObj.patStr ); // What: Page Load Call. Why: Each state starts from a fresh load of its route. How: This opens the path on the suite's dev server.

	await curPagObj.evaluate( () => document.fonts.ready ); // What: Fonts Ready Wait. Why: Text measured before its web font loads would have the wrong size and wrapping. How: This waits until every font face has loaded.

	await curPagObj.evaluate( () => Promise.all( Array.from( document.images, ( imaCurEle ) => imaCurEle.decode() ) ) ); // What: Images Decoded Wait. Why: A check shouldn't measure or capture the page before its images are drawn. How: This waits until every image on the page has finished decoding.



	if ( staRcdObj.actFun ) await staRcdObj.actFun( curPagObj ); // What: State Action Call. Why: Some states need something opened first. How: This runs the state's action, if it has one.



	await waiSetFun( curPagObj ); // What: Settled Page Wait. Why: A check should see the page at rest, not mid-fade. How: This waits until the page stays still for half a second.


}

// #endregion opeStaFun

// #endregion Helpers



// #region Exports

export { opeStaFun, STA_RCD_ARR, type StaRcdTyp }; // What: Named Exports. Why: The accessibility, rendering, and responsive specs share these states and their opener. How: This exports the state list, its type, and the helper that opens one.

// #endregion Exports


