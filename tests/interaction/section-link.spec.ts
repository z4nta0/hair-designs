


// #region Imports

import { expect } from '@playwright/test'; // What: Expect. Why: Each check passes only when the page ends up where it should. How: This asserts on positions, addresses, and the menu's state.
import { test   } from '@playwright/test'; // What: Test. Why: Each section link behavior is its own test. How: This declares them.


import type { Locator } from '@playwright/test'; // What: Locator. Why: The new tab checks hand a link's click its options. How: This types those options from the click method's own parameter.
import type { Page    } from '@playwright/test'; // What: Page. Why: The helpers drive a Playwright page. How: This types their page parameters.

// #endregion Imports



/**
 * section-link.spec.ts = Section Link Spec
 *
 * @summary
 * Checks the site's section links in whichever engine the project runs. A
 * plain click on a bar link or a section button lands its section just below
 * the fixed bar without ever putting a hash in the address. A Ctrl, Cmd, or
 * middle click on any section link opens the section in a new tab instead,
 * which lands on it and clears its hash, while the page clicked from stays
 * put, and a new tab opened from the phone menu closes the menu. From the 404
 * page, a bar link reaches its section on the home page, and "Back Home"
 * reaches its top. On every page the first Tab lands on the skip link, on
 * screen, and following it moves focus to the main content without a hash.
 * Pages open under reduced motion, so scrolling jumps straight to its target
 * and each position can be read at once, except in the checks of the smooth
 * scroll, an arrival from the 404 page, and the skip link's slide, which turn
 * motion back on.
 *
 * Sections:
 *  - Constants
 *  - Helpers
 *  - Module Init
 *
 * @author z4nta0 <https://github.com/z4nta0>
 *
*/



// #region Constants

const BUT_LIN_ARR = [ [ 'Our Services', 'services' ], [ 'Get in Touch', 'contact' ], [ 'Reach Out', 'contact' ] ];      // What: Button Link Array. Why: The hero's two buttons and the About section's button each lead to a section. How: Each row pairs a button's label with its section's ID.
const DES_VIE_OBJ = { height : 900, width : 1440 };                                                                     // What: Desktop Viewport Object. Why: The bar's own links show only above 900px wide. How: This is the desktop size the bar link checks use.
const NAV_LIN_ARR = [ [ 'Home', 'home' ], [ 'Services', 'services' ], [ 'About', 'about' ], [ 'Contact', 'contact' ] ]; // What: Navigation Link Array. Why: Each of the bar's links leads to its own section. How: Each row pairs a link's label with its section's ID.
const PHO_VIE_OBJ = { height : 844, width : 390 };                                                                      // What: Phone Viewport Object. Why: The phone menu exists only at 900px wide and below. How: This is the phone size the menu check uses.

const CLI_KIN_ARR : Array< [ string, Parameters< Locator[ 'click' ] >[ 0 ] ] > = [ [ 'Ctrl or Cmd', { modifiers : [ 'ControlOrMeta' ] } ], [ 'middle', { button : 'middle' } ] ]; // What: Click Kind Array. Why: Both ways of asking for a new tab have to keep working. How: Each row pairs a name for the test title with the click options that make that kind of click.



const NEW_TAB_ARR : Array< [ string, string, string, string ] > = [ // What: New Tab Array. Why: Every section link has to open its section in a new tab on a modified click. How: Each row names where the link sits (the bar, the phone menu, or the page's own content), the path it's clicked on, its label, and its section's ID.


	...NAV_LIN_ARR.map( ( [ linLabStr, secIdeStr ] ) : [ string, string, string, string ] => [ 'bar', '/', linLabStr, secIdeStr ] ),  // What: Bar Link Rows. Why: Each of the bar's links opens its own section. How: This makes a home page bar row for each.
	...NAV_LIN_ARR.map( ( [ linLabStr, secIdeStr ] ) : [ string, string, string, string ] => [ 'menu', '/', linLabStr, secIdeStr ] ), // What: Menu Link Rows. Why: The phone menu's copies of the bar's links open their sections too. How: This makes a home page menu row for each.
	...BUT_LIN_ARR.map( ( [ butLabStr, secIdeStr ] ) : [ string, string, string, string ] => [ 'page', '/', butLabStr, secIdeStr ] ), // What: Button Link Rows. Why: The hero's and About section's buttons open their sections too. How: This makes a home page content row for each.

	[ 'bar',  '/',             'Hair Designs', 'home'  ], // What: Brand Row. Why: The bar's brand is a section link to the page's top. How: This clicks it on the home page.
	[ 'bar',  '/no-such-page', 'About',        'about' ], // What: Not Found Bar Row. Why: From the 404 page, a bar link's new tab opens the home page's section. How: This clicks the bar's About link there.
	[ 'page', '/no-such-page', 'Back Home',    'home'  ]  // What: Not Found Back Home Row. Why: The 404 page's main way onward opens the home page's top in a new tab too. How: This clicks "Back Home" there.


];

// #endregion Constants



// #region Helpers

// #region opeRouFun

/**
 * opeRouFun = Open Route Function
 *
 * @summary
 * Opens one route at one viewport size, ready to be used: it turns on reduced
 * motion so in-page scrolling jumps rather than glides, sizes the viewport,
 * counts every hashchange event the page fires, so a check can tell that no
 * plain jump to a section ever put a hash in the address, loads the path, and
 * waits for the web fonts, so positions read afterwards are final.
 *
 * @author z4nta0 <https://github.com/z4nta0>
 *
 * @param curPagObj - Current Page Object: The page to open the route on.
 * @param rouPatStr - Route Path String: The route to load.
 * @param vieSizObj - Viewport Size Object: {@link DES_VIE_OBJ} or
 *                    {@link PHO_VIE_OBJ}.
 *
 * @returns A promise that settles once the route is loaded and its fonts are
 *          ready, with no value.
 *
 * @example
 * ```ts
 * opeRouFun(page, '/', DES_VIE_OBJ) // => Promise<void>
 * ```
 *
*/

async function opeRouFun ( curPagObj : Page, rouPatStr : string, vieSizObj : { height : number, width : number } ) : Promise< void > {


	await curPagObj.emulateMedia( { reducedMotion : 'reduce' } ); // What: Reduced Motion Emulation. Why: Scrolling should land at once, so its target can be read right away. How: This makes the page match prefers-reduced-motion, which turns smooth scrolling off.

	await curPagObj.setViewportSize( vieSizObj ); // What: Viewport Size Call. Why: The bar's links and the phone menu depend on the width. How: This sizes the page before it loads.


	await curPagObj.addInitScript( () => { // What: Hash Change Counter. Why: A plain jump that put a hash in the address would see the home page clear it again, so the address alone couldn't show it happened. How: This counts every hashchange event on the window, from the first script that runs.


		Reflect.set( window, '__hasChaNum', 0 ); // What: Hash Change Number Set. Why: The count starts at zero on every load. How: This puts the counter on the window, where a check reads it.

		window.addEventListener( 'hashchange', () => Reflect.set( window, '__hasChaNum', Number( Reflect.get( window, '__hasChaNum' ) ) + 1 ) ); // What: Hash Change Listener. Why: Each jump has to be counted. How: This adds one to the counter whenever the hash changes.


	} );


	await curPagObj.goto( rouPatStr ); // What: Route Load Call. Why: Each check starts from a fresh load. How: This opens the path on the suite's dev server.

	await curPagObj.evaluate( () => document.fonts.ready ); // What: Fonts Ready Wait. Why: Positions measured before the fonts load would shift. How: This waits until the fonts the page uses have loaded.


}

// #endregion opeRouFun



// #region secGapFun

/**
 * secGapFun = Section Gap Function
 *
 * @summary
 * Reads how far a section's top edge sits from where a jump to it should
 * leave it, in pixels: just below the fixed bar, at the root's scroll
 * padding, unless the page can't scroll far enough, as for a section at the
 * very top. Zero means the section landed there, to the nearest pixel.
 *
 * @author z4nta0 <https://github.com/z4nta0>
 *
 * @param curPagObj - Current Page Object: The page holding the section.
 * @param secIdeStr - Section Identifier String: The section's ID.
 *
 * @returns A promise that resolves with the gap in pixels, positive when
 *          the section sits too low.
 *
 * @example
 * ```ts
 * secGapFun(page, 'about') // => 0
 * ```
 *
*/

async function secGapFun ( curPagObj : Page, secIdeStr : string ) : Promise< number > {


	return curPagObj.evaluate( ( tarIdeStr ) => { // What: Gap Measure Return. Why: The section's position is read in the page. How: This works out where the section should land and returns how far it is from there.


		const docRooEle = document.documentElement;                                                     // What: Document Root Element. Why: The scroll padding and the scroll range belong to the root. How: This reads it.
		const secTopNum = document.getElementById( tarIdeStr )!.getBoundingClientRect().top;            // What: Section Top Number. Why: The section's position on screen is what's checked. How: This reads its top edge from the viewport's top. // What: Non-Null Note. Why: getElementById can return null. How: Every ID the checks pass is a section the page renders.
		const maxScrNum = docRooEle.scrollHeight - docRooEle.clientHeight;                              // What: Maximum Scroll Number. Why: A jump can't scroll past the page's end. How: This is the furthest the page can scroll.
		const padTopNum = parseFloat( getComputedStyle( docRooEle ).scrollPaddingTop );                 // What: Padding Top Number. Why: A jump stops below the bar by the root's scroll padding. How: This reads it in pixels.
		const tarScrNum = Math.min( maxScrNum, Math.max( 0, secTopNum + window.scrollY - padTopNum ) ); // What: Target Scroll Number. Why: The page scrolls as far toward the section as it can. How: This clamps the ideal scroll to the page's range.



		return Math.round( secTopNum - ( secTopNum + window.scrollY - tarScrNum ) ); // What: Gap Return. Why: The caller compares the section with its landing spot. How: This subtracts the landing spot's top from the section's.


	}, secIdeStr ); // What: Measuring Argument. Why: The page can't read this function's parameters. How: This hands the section's ID into the page.


}

// #endregion secGapFun

// #endregion Helpers



// #region Module Init

for ( const [ linLabStr, secIdeStr ] of NAV_LIN_ARR ) { // What: Bar Link Loop. Why: Each of the bar's links leads to its own section. How: This declares one test per row of NAV_LIN_ARR.


	test( `the bar's ${ linLabStr } link scrolls to its section`, async ( { page : curPagObj } ) => { // What: Bar Link Test. Why: A section link has to take the visitor to its section without a hash. How: This scrolls partway down, clicks the link, and checks the section's position, the address, and that no hashchange fired.


		await opeRouFun( curPagObj, '/', DES_VIE_OBJ ); // What: Home Open Call. Why: The bar's own links show above 900px wide. How: This opens the home page at desktop size.

		await curPagObj.evaluate( () => window.scrollTo( 0, 1500 ) ); // What: Partway Scroll Call. Why: Starting partway down shows the Home link really moves the page. How: This scrolls 1,500px down.

		await curPagObj.getByRole( 'banner' ).getByRole( 'link', { exact : true, name : linLabStr } ).first().click(); // What: Bar Link Click Call. Why: This is the action under test. How: This clicks the bar's link by its label, the first match being the bar's own row rather than the menu's copy.

		await expect.poll( async () => Math.abs( await secGapFun( curPagObj, secIdeStr ) ) ).toBeLessThan( 1 ); // What: Section Position Assertion. Why: The section should land just below the bar. How: This waits until its top sits less than a pixel from where the jump should leave it.
		await expect( curPagObj ).toHaveURL( /\/$/ );                                                           // What: Clean Address Assertion. Why: The address bar should stay free of hashes. How: This checks the URL still ends at the root.

		expect( await curPagObj.evaluate( () => Reflect.get( window, '__hasChaNum' ) ) ).toBe( 0 ); // What: No Hash Jump Assertion. Why: A plain jump would have put a hash in the address before the home page cleared it. How: This checks the page never fired a hashchange event.


	} );


}



for ( const [ butLabStr, secIdeStr ] of BUT_LIN_ARR ) { // What: Button Link Loop. Why: Each section button leads to its own section. How: This declares one test per row of BUT_LIN_ARR.


	test( `the ${ butLabStr } button scrolls to its section`, async ( { page : curPagObj } ) => { // What: Button Link Test. Why: A section button has to take the visitor to its section without a hash. How: This clicks the button and checks the section's position, the address, and that no hashchange fired.


		await opeRouFun( curPagObj, '/', DES_VIE_OBJ ); // What: Home Open Call. Why: The buttons sit on the home page. How: This opens it at desktop size.

		await curPagObj.getByRole( 'link', { exact : true, name : butLabStr } ).click(); // What: Button Click Call. Why: This is the action under test. How: This clicks the button by its label.

		await expect.poll( async () => Math.abs( await secGapFun( curPagObj, secIdeStr ) ) ).toBeLessThan( 1 ); // What: Section Position Assertion. Why: The section should land just below the bar. How: This waits until its top sits less than a pixel from where the jump should leave it.
		await expect( curPagObj ).toHaveURL( /\/$/ );                                                           // What: Clean Address Assertion. Why: The address bar should stay free of hashes. How: This checks the URL still ends at the root.

		expect( await curPagObj.evaluate( () => Reflect.get( window, '__hasChaNum' ) ) ).toBe( 0 ); // What: No Hash Jump Assertion. Why: A plain jump would have put a hash in the address before the home page cleared it. How: This checks the page never fired a hashchange event.


	} );


}



for ( const [ cliKinStr, cliOptObj ] of CLI_KIN_ARR ) { // What: Modified Click Loop. Why: Each way of asking for a new tab gets its own checks. How: This declares one test per row of NEW_TAB_ARR for each row of CLI_KIN_ARR.


	for ( const [ plaKinStr, rouPatStr, linLabStr, secIdeStr ] of NEW_TAB_ARR ) { // What: New Tab Link Loop. Why: Every section link has to open its section in a new tab. How: This declares one test per row of NEW_TAB_ARR.


		test( `a ${ cliKinStr } click on the ${ plaKinStr } link "${ linLabStr }" on ${ rouPatStr } opens its section in a new tab`, async ( { page : curPagObj } ) => { // What: New Tab Test. Why: A visitor opening a section in a new tab should land on it there, while the page they clicked from stays put and any menu the link was in closes. How: This makes the click, then checks the new tab's section and address and the original page's address, scroll, and menu.


			const menLinBoo = plaKinStr === 'menu'; // What: Menu Link Boolean. Why: Only a menu link needs a phone's width and the menu opened first. How: This is true for a menu row.


			await opeRouFun( curPagObj, rouPatStr, menLinBoo ? PHO_VIE_OBJ : DES_VIE_OBJ ); // What: Page Open Call. Why: The bar's own links show above 900px wide, and the menu only at 900px and below. How: This opens the row's path at the size its place needs.


			if ( menLinBoo ) await curPagObj.getByRole( 'button', { name : 'Toggle menu' } ).click(); // What: Menu Open Guard. Why: A menu link is clickable only with the menu open. How: For a menu row, this opens it.



			const barLinObj = curPagObj.getByRole( 'banner' ).getByRole( 'link', { exact : true, name : linLabStr } );                                                                         // What: Bar Link Object. Why: The bar holds both its own links and the menu's copies. How: This finds every bar link with the row's label.
			const linCurObj = plaKinStr === 'page' ? curPagObj.getByRole( 'main' ).getByRole( 'link', { exact : true, name : linLabStr } ) : menLinBoo ? barLinObj.last() : barLinObj.first(); // What: Link Current Object. Why: Each place finds its link its own way. How: This takes a content link from the main element, the menu's copy as the bar's last match, and the bar's own link as its first.


			await linCurObj.scrollIntoViewIfNeeded(); // What: Link Scroll Call. Why: The page's scroll before the click has to be read after any scroll the click itself would make to reach the link. How: This brings the link into view first.


			const oriScrNum = await curPagObj.evaluate( () => window.scrollY ); // What: Original Scroll Number. Why: The page clicked from should stay where it was. How: This reads its scroll just before the click.
			const oriUrlStr = curPagObj.url();                                  // What: Original URL String. Why: The page clicked from shouldn't navigate. How: This reads its address just before the click.
			const newTabPro = curPagObj.context().waitForEvent( 'page' );       // What: New Tab Promise. Why: The click opens its page in a new tab. How: This waits for the browser context to report a new page, set up before the click so it can't be missed.


			await linCurObj.click( cliOptObj ); // What: Modified Click Call. Why: This is the action under test. How: This clicks the link the way the loop's row says.


			const newTabObj = await newTabPro; // What: New Tab Object. Why: The section should open in the new tab. How: This is the page the click opened.


			await expect( newTabObj.locator( `#${ secIdeStr }` ) ).toBeVisible();                                   // What: Section Render Wait. Why: The new tab loads the page from scratch, so the section has to exist before it's measured. How: This waits until the row's section is on the page.
			await expect.poll( async () => Math.abs( await secGapFun( newTabObj, secIdeStr ) ) ).toBeLessThan( 1 ); // What: New Tab Position Assertion. Why: The new tab should land on the section. How: This waits until the section sits less than a pixel from just below the bar.
			await expect( newTabObj ).toHaveURL( /\/$/ );                                                           // What: New Tab Address Assertion. Why: The new tab's hash should be cleared once used. How: This checks its URL ends at the root.

			if ( menLinBoo ) await expect( curPagObj.getByRole( 'button', { name : 'Toggle menu' } ) ).toHaveAttribute( 'aria-expanded', 'false' ); // What: Menu Closed Guard. Why: Choosing a link should close the menu, wherever the link opens. How: For a menu row, this checks the toggle reports the menu closed.



			expect( curPagObj.url() ).toBe( oriUrlStr );                                  // What: Original Address Assertion. Why: The page clicked from shouldn't navigate. How: This checks its address is unchanged.
			expect( await curPagObj.evaluate( () => window.scrollY ) ).toBe( oriScrNum ); // What: Original Scroll Assertion. Why: The page clicked from should stay where it was. How: This checks its scroll is unchanged.


		} );


	}


}



for ( const [ linLabStr, secIdeStr ] of NAV_LIN_ARR ) { // What: Not Found Bar Link Loop. Why: Each of the bar's links on the 404 page leads to its own section on the home page. How: This declares one test per row of NAV_LIN_ARR.


	test( `the 404 page's ${ linLabStr } link reaches its section on the home page`, async ( { page : curPagObj } ) => { // What: Not Found Section Link Test. Why: A section link away from the home page has to navigate there and land on its section. How: This opens an unknown address, clicks the bar's link, and checks the home page's section lands below the bar with a clean address.


		await opeRouFun( curPagObj, '/no-such-page', DES_VIE_OBJ ); // What: Not Found Open Call. Why: The 404 page answers every unknown address. How: This opens one at desktop size.

		await curPagObj.getByRole( 'banner' ).getByRole( 'link', { exact : true, name : linLabStr } ).first().click(); // What: Bar Link Click Call. Why: This is the action under test. How: This clicks the bar's link by its label, the first match being the bar's own row rather than the menu's copy.

		await expect( curPagObj.locator( `#${ secIdeStr }` ) ).toBeVisible();                                   // What: Home Render Wait. Why: The click navigates to the home page, whose section has to exist before it's measured. How: This waits until the row's section is on the page.
		await expect.poll( async () => Math.abs( await secGapFun( curPagObj, secIdeStr ) ) ).toBeLessThan( 1 ); // What: Section Position Assertion. Why: The home page's section should land just below the bar. How: This waits until it sits where the jump should leave it.
		await expect( curPagObj ).toHaveURL( /\/$/ );                                                           // What: Clean Address Assertion. Why: The hash used to reach the section should be cleared once used. How: This checks the URL ends at the root.


	} );


}



test( "the 404 page's \"Back Home\" button reaches the home page's top", async ( { page : curPagObj } ) => { // What: Not Found Back Home Test. Why: The 404 page's main way onward has to land the visitor on the home page's top without a hash. How: This opens an unknown address, clicks "Back Home", and checks the home page's Home section lands below the bar with a clean address.


	await opeRouFun( curPagObj, '/no-such-page', DES_VIE_OBJ ); // What: Not Found Open Call. Why: The 404 page answers every unknown address. How: This opens one at desktop size.

	await curPagObj.getByRole( 'link', { exact : true, name : 'Back Home' } ).click(); // What: Back Home Click Call. Why: This is the action under test. How: This clicks the 404 page's Back Home button by its name.

	await expect( curPagObj.locator( '#home' ) ).toBeVisible();                                          // What: Home Render Wait. Why: The click navigates to the home page, whose section has to exist before it's measured. How: This waits until the Home section is on the page.
	await expect.poll( async () => Math.abs( await secGapFun( curPagObj, 'home' ) ) ).toBeLessThan( 1 ); // What: Section Position Assertion. Why: The home page's Home section should land where a jump to it should leave it. How: This waits until it sits less than a pixel from there.
	await expect( curPagObj ).toHaveURL( /\/$/ );                                                        // What: Clean Address Assertion. Why: The hash used to reach the section should be cleared once used. How: This checks the URL ends at the root.


} );



test( 'with motion on, a bar link glides to its section and lands below the bar', async ( { page : curPagObj } ) => { // What: Smooth Bar Link Test. Why: Most visitors see the smooth scroll, which the reduced-motion tests never run. How: This turns motion on, records the page's scroll positions, clicks the bar's Contact link from the top, and checks the section lands below the bar with a clean address after passing through a position between the start and the end.


	await opeRouFun( curPagObj, '/', DES_VIE_OBJ ); // What: Home Open Call. Why: The bar's own links show above 900px wide. How: This opens the home page at desktop size.

	await curPagObj.emulateMedia( { reducedMotion : 'no-preference' } ); // What: Motion On Emulation. Why: The helper turns reduced motion on, and the smooth scroll only runs without it. How: This drops the preference, which the page applies at once.


	await curPagObj.evaluate( () => { // What: Scroll Recorder Setup. Why: A jump and a glide can land in the same place, so only the positions in between tell them apart. How: This records the page's scroll position on every scroll event.


		Reflect.set( window, '__scrPosArr', [] ); // What: Scroll Position Array Set. Why: The record starts empty for this click. How: This puts the list on the window, where the check reads it.

		window.addEventListener( 'scroll', () => ( Reflect.get( window, '__scrPosArr' ) as number[] ).push( window.scrollY ) ); // What: Scroll Position Listener. Why: Each step of the scroll has to be seen. How: This adds the page's scroll position to the list on every scroll event. // What: Type Assertion Note. Why: Reflect.get reads the window's property as any. How: The line above set it to an array of numbers.


	} );


	await curPagObj.getByRole( 'banner' ).getByRole( 'link', { exact : true, name : 'Contact' } ).first().click(); // What: Bar Link Click Call. Why: This is the action under test, from the page's top, so the glide covers most of the page. How: This clicks the bar's Contact link.

	await expect.poll( async () => Math.abs( await secGapFun( curPagObj, 'contact' ) ) ).toBeLessThan( 1 ); // What: Section Position Assertion. Why: The section should land just below the bar once the glide ends. How: This waits until its top sits less than a pixel from where the scroll should leave it.
	await expect( curPagObj ).toHaveURL( /\/$/ );                                                           // What: Clean Address Assertion. Why: The address bar should stay free of hashes. How: This checks the URL still ends at the root.


	const scrPosArr = await curPagObj.evaluate( () => Reflect.get( window, '__scrPosArr' ) as number[] ); // What: Scroll Position Array. Why: The check reads the positions the page passed through. How: This reads the recorded list. // What: Type Assertion Note. Why: Reflect.get reads the window's property as any. How: The recorder set it to an array of numbers.
	const endScrNum = await curPagObj.evaluate( () => window.scrollY );                                   // What: End Scroll Number. Why: A position counts as partway only if it falls short of where the scroll ended. How: This reads the final scroll.


	expect( scrPosArr.some( ( scrPosNum ) => scrPosNum > 0 && scrPosNum < endScrNum - 1 ) ).toBe( true ); // What: Glide Assertion. Why: A smooth scroll passes through the page on its way, while a jump goes straight there. How: This checks some recorded position sits between the top and more than a pixel short of the end.


} );



test( "with motion on, the 404 page's bar link reaches its section on the home page", async ( { page : curPagObj } ) => { // What: Smooth Not Found Link Test. Why: A section link away from the home page has to land its section with motion on too, where the arrival jumps rather than glides. How: This turns motion on, clicks the bar's About link on an unknown address, and checks the home page's About section lands below the bar with a clean address.


	await opeRouFun( curPagObj, '/no-such-page', DES_VIE_OBJ ); // What: Not Found Open Call. Why: The 404 page answers every unknown address. How: This opens one at desktop size.

	await curPagObj.emulateMedia( { reducedMotion : 'no-preference' } ); // What: Motion On Emulation. Why: The helper turns reduced motion on, and this check is about the page with motion on. How: This drops the preference, which the page applies at once.

	await curPagObj.getByRole( 'banner' ).getByRole( 'link', { exact : true, name : 'About' } ).first().click(); // What: Bar Link Click Call. Why: This is the action under test. How: This clicks the bar's About link.

	await expect( curPagObj.locator( '#about' ) ).toBeVisible();                                          // What: Home Render Wait. Why: The click navigates to the home page, whose section has to exist before it's measured. How: This waits until the About section is on the page.
	await expect.poll( async () => Math.abs( await secGapFun( curPagObj, 'about' ) ) ).toBeLessThan( 1 ); // What: Section Position Assertion. Why: The home page's About section should land just below the bar. How: This waits until it sits where the arrival should leave it.
	await expect( curPagObj ).toHaveURL( /\/$/ );                                                         // What: Clean Address Assertion. Why: The hash used to reach the section should be cleared once used. How: This checks the URL ends at the root.


} );



for ( const [ rouPatStr, vieSizObj ] of [ [ '/', DES_VIE_OBJ ], [ '/', PHO_VIE_OBJ ], [ '/no-such-page', DES_VIE_OBJ ], [ '/no-such-page', PHO_VIE_OBJ ] ] as const ) { // What: Skip Link Loop. Why: Every page, at both widths, has to open with the skip link. How: This declares one test per page and viewport pair. // What: Type Assertion Note. Why: Without it each pair widens to a mixed array, so the path and the viewport lose their own types. How: as const keeps each pair a tuple, its first slot a path string and its second a viewport size.


	test( `the skip link is the first stop on ${ rouPatStr } at ${ vieSizObj.width }px and jumps to the main content`, async ( { page : curPagObj } ) => { // What: Skip Link Test. Why: A keyboard user should reach the page's content without Tabbing through the bar. How: This presses Tab once, checks the skip link took focus on screen, clicks it, and checks focus moved to the main element with the address unchanged.


		await opeRouFun( curPagObj, rouPatStr, vieSizObj ); // What: Page Open Call. Why: Each page and width gets its own check. How: This opens the page at the loop's size.

		await curPagObj.keyboard.press( 'Tab' ); // What: First Tab Press. Why: The skip link has to be the first stop. How: This moves focus from the page to its first focusable element.


		const skiLinObj = curPagObj.getByRole( 'link', { name : 'Skip to main content' } ); // What: Skip Link Object. Why: The checks read the link by its name. How: This finds it.


		await expect( skiLinObj ).toBeFocused();    // What: First Stop Assertion. Why: The skip link has to come before the bar's links. How: This checks the first Tab landed on it.
		await expect( skiLinObj ).toBeInViewport(); // What: On Screen Assertion. Why: A focused skip link has to show, not stay above the screen. How: This checks it slid into view.

		expect( await skiLinObj.evaluate( ( ancCurEle ) => ancCurEle.getBoundingClientRect().top >= 0 ) ).toBe( true ); // What: Top Edge Assertion. Why: The whole link should be visible, not just its lower edge. How: This checks its top sits inside the viewport.

		await skiLinObj.click(); // What: Skip Click Call. Why: Following the link is the action under test. How: This clicks it.

		await expect( curPagObj.locator( 'main' ) ).toBeFocused(); // What: Main Focus Assertion. Why: Focus should land past the bar, so the next Tab continues into the content. How: This checks the main element has focus.

		expect( curPagObj.url() ).not.toContain( '#' ); // What: Clean Address Assertion. Why: The jump should leave no hash in the address. How: This checks the URL carries none.


	} );


}



test( 'with motion on, the skip link slides into view and ends fully on screen', async ( { page : curPagObj } ) => { // What: Skip Link Slide Test. Why: The skip link moves only with motion on, so its landing has to be checked once its slide finishes, not just under reduced motion. How: This turns motion back on, presses Tab, checks the link's slide is running, waits for it to finish, and checks the whole link is on screen.


	await opeRouFun( curPagObj, '/', DES_VIE_OBJ ); // What: Page Open Call. Why: The home page opens with the skip link like every page. How: This opens it at the desktop size.

	await curPagObj.emulateMedia( { reducedMotion : 'no-preference' } ); // What: Motion On Emulation. Why: The helper turns reduced motion on, and the slide only runs without it. How: This drops the preference, which the page applies at once.

	await curPagObj.keyboard.press( 'Tab' ); // What: First Tab Press. Why: Focusing the skip link is what starts its slide. How: This moves focus to the page's first focusable element.


	const skiLinObj = curPagObj.getByRole( 'link', { name : 'Skip to main content' } ); // What: Skip Link Object. Why: The checks read the link by its name. How: This finds it.


	await expect( skiLinObj ).toBeFocused(); // What: First Stop Assertion. Why: The slide belongs to the focused skip link. How: This checks the first Tab landed on it.

	expect( await skiLinObj.evaluate( ( ancCurEle ) => ancCurEle.getAnimations().some( ( aniCurObj ) => ( aniCurObj as CSSTransition ).transitionProperty === 'transform' ) ) ).toBe( true ); // What: Slide Running Assertion. Why: A check after the slide only means something if the link really slides with motion on. How: This checks a transform transition is running on the link. // What: Type Assertion Note. Why: getAnimations returns plain animations, which carry no transition property. How: A CSS transition on the link is a CSSTransition, and anything else reads undefined and fails the match.

	await skiLinObj.evaluate( ( ancCurEle ) => Promise.all( ancCurEle.getAnimations().map( ( aniCurObj ) => aniCurObj.finished ) ) ); // What: Slide Finish Wait. Why: The link's position counts only where it lands. How: This waits for every animation on the link to finish.

	await expect( skiLinObj ).toBeInViewport( { ratio : 1 } ); // What: Fully On Screen Assertion. Why: Once its slide ends, the whole link should show. How: This checks every part of it sits inside the viewport.


} );

// #endregion Module Init


