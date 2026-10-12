


// #region Imports

import { expect } from '@playwright/test'; // What: Expect. Why: Each check passes only when the menu behaves as it should. How: This asserts on the menu's state, the page's inert parts, and focus.
import { test   } from '@playwright/test'; // What: Test. Why: Each way of using the menu is its own test. How: This declares them.


import type { Page } from '@playwright/test'; // What: Page. Why: The helpers drive a Playwright page. How: This types their page parameter.

// #endregion Imports



/**
 * menu.spec.ts = Menu Spec
 *
 * @summary
 * Checks the phone menu's layer behavior in whichever engine the project
 * runs. While the menu is open, the page behind it is dimmed by a scrim and
 * inert, so keyboard and screen reader users stay in the bar, and the menu
 * offers its four section links, a Call button, and the salon's Facebook
 * page. The usual ways out each close it and give the page back: tapping
 * the scrim, pressing Escape, which also returns focus to the toggle,
 * choosing a section link or the bar's brand, which also scroll to their
 * sections, and widening the screen past the phone layout, which hides the
 * toggle. Adapted from the-bernie-bears' own menu spec.
 *
 * Sections:
 *  - Helpers
 *  - Module Init
 *
 * @author z4nta0 <https://github.com/z4nta0>
 *
*/



// #region Helpers

// #region menOpeFun

/**
 * menOpeFun = Menu Open Function
 *
 * @summary
 * Loads the home page at a phone's width, opens the menu with its toggle,
 * and checks the open state every test starts from: the toggle reports it
 * open, and the page's main content and footer are inert.
 *
 * @author z4nta0 <https://github.com/z4nta0>
 *
 * @param curPagObj - Current Page Object: The page to open the menu on.
 *
 * @returns A promise that settles once the menu is open and checked, with
 *          no value.
 *
 * @example
 * ```ts
 * menOpeFun(page) // => Promise<void>
 * ```
 *
*/

async function menOpeFun ( curPagObj : Page ) : Promise< void > {


	await curPagObj.setViewportSize( { height : 844, width : 390 } ); // What: Phone Viewport Call. Why: The menu exists only at a phone's width. How: This sizes the page before it loads.

	await curPagObj.goto( '/' ); // What: Home Page Navigation. Why: The home page is long enough for the scrim to cover real content. How: This loads it.

	await curPagObj.getByRole( 'button', { name : 'Toggle menu' } ).click(); // What: Menu Toggle Click. Why: Every check starts with the menu open. How: This opens it.

	await expect( curPagObj.getByRole( 'button', { name : 'Toggle menu' } ) ).toHaveAttribute( 'aria-expanded', 'true' ); // What: Open State Assertion. Why: The toggle has to report the menu open. How: This checks its aria-expanded.

	await expect( curPagObj.locator( 'main[inert], footer[inert]' ) ).toHaveCount( 2 ); // What: Inert Page Assertion. Why: Content under the scrim shouldn't take focus or be read. How: This checks the main content and the footer are both inert.


}

// #endregion menOpeFun



// #region cloCheFun

/**
 * cloCheFun = Close Check Function
 *
 * @summary
 * Checks the closed state every way out has to leave: the toggle reports
 * the menu closed, and nothing on the page is inert any more.
 *
 * @author z4nta0 <https://github.com/z4nta0>
 *
 * @param curPagObj - Current Page Object: The page whose menu should be
 *                    closed.
 *
 * @returns A promise that settles once the closed state is checked, with no
 *          value.
 *
 * @example
 * ```ts
 * cloCheFun(page) // => Promise<void>
 * ```
 *
*/

async function cloCheFun ( curPagObj : Page ) : Promise< void > {


	await expect( curPagObj.locator( '[aria-label="Toggle menu"]' ) ).toHaveAttribute( 'aria-expanded', 'false' ); // What: Closed State Assertion. Why: The way out should close the menu. How: This checks the toggle reports it closed, found by its label rather than its role, since a widened screen hides it.

	await expect( curPagObj.locator( 'main[inert], footer[inert]' ) ).toHaveCount( 0 ); // What: Page Restored Assertion. Why: The page has to be usable again. How: This checks neither the main content nor the footer is inert.


}

// #endregion cloCheFun

// #endregion Helpers



// #region Module Init

test.use( { reducedMotion : 'reduce' } ); // What: Reduced Motion Use. Why: The menu's fade and the page's smooth scrolling would otherwise still be running when the checks read them. How: This makes every page in this file match prefers-reduced-motion: reduce.



test( 'the open menu offers the sections, a call, and Facebook over a dimmed page', async ( { page : curPagObj } ) => { // What: Open Menu Test. Why: The menu should stand apart from the page and offer every way onward. How: This opens it and checks its links, its extras, and the scrim under a tap below it.


	await menOpeFun( curPagObj ); // What: Menu Open Call. Why: The checks need the menu open. How: This opens and checks it.


	const menNavObj = curPagObj.getByRole( 'banner' ); // What: Menu Bar Object. Why: The menu's rows live in the bar, apart from the inert page. How: This finds the banner landmark.


	for ( const linNamStr of [ 'Home', 'Services', 'About', 'Contact' ] ) await expect( menNavObj.getByRole( 'link', { exact : true, name : linNamStr } ).last() ).toBeVisible(); // What: Section Links Assertion. Why: Each section should be one tap away. How: This checks each section's menu link is showing, the last match being the menu's own copy of the bar's link.



	await expect( menNavObj.getByRole( 'link', { name : 'Call 417-988-6239' } ) ).toHaveAttribute( 'href', 'tel:+1-417-988-6239' ); // What: Call Button Assertion. Why: A call is how the salon books. How: This checks the Call button dials the salon.

	await expect( menNavObj.getByRole( 'link', { name : 'Find us on Facebook' } ) ).toHaveAttribute( 'target', '_blank' ); // What: Facebook Link Assertion. Why: The salon's Facebook page should open beside the site. How: This checks the link opens in a new tab.

	expect( await curPagObj.evaluate( () => { const tapEle = document.elementFromPoint( 200, 800 ); return !!tapEle?.matches( '[data-mobile-menu-open]' ) && !tapEle.closest( 'header' ); } ) ).toBe( true ); // What: Scrim On Top Assertion. Why: A tap on the page below the menu has to land on the scrim, not the page. How: This checks the element under a point below the panel is the open scrim, outside the bar.


} );



test( 'tapping the scrim closes the menu', async ( { page : curPagObj } ) => { // What: Scrim Close Test. Why: A tap anywhere on the dimmed page should close the menu. How: This taps below the panel and checks the menu closes and the page comes back.


	await menOpeFun( curPagObj ); // What: Menu Open Call. Why: The check needs the menu open. How: This opens and checks it.

	await curPagObj.mouse.click( 200, 800 ); // What: Scrim Tap Call. Why: The scrim covers the page below the panel. How: This taps it.

	await cloCheFun( curPagObj ); // What: Closed Check Call. Why: The tap should close the menu and give the page back. How: This checks both.


} );



test( 'Escape closes the menu and returns focus to the toggle', async ( { page : curPagObj } ) => { // What: Escape Close Test. Why: Escape is the expected way out of a layer over the page, and focus shouldn't be left in a closed menu. How: This presses Escape and checks the menu closes and focus lands on the toggle.


	await menOpeFun( curPagObj ); // What: Menu Open Call. Why: The check needs the menu open. How: This opens and checks it.

	await curPagObj.keyboard.press( 'Escape' ); // What: Escape Press Call. Why: The keyboard way out is checked. How: This presses Escape.

	await cloCheFun( curPagObj ); // What: Closed Check Call. Why: Escape should close the menu and give the page back. How: This checks both.

	await expect( curPagObj.getByRole( 'button', { name : 'Toggle menu' } ) ).toBeFocused(); // What: Focus Return Assertion. Why: The visitor should be back where they opened the menu. How: This checks the toggle has focus.


} );



test( 'choosing a section closes the menu on the way there', async ( { page : curPagObj } ) => { // What: Link Close Test. Why: A chosen section should come into view with the menu out of the way. How: This taps the menu's Contact link and checks the menu closes, the section sits below the bar, and the address stays clean.


	await menOpeFun( curPagObj ); // What: Menu Open Call. Why: The check needs the menu open. How: This opens and checks it.

	await curPagObj.getByRole( 'banner' ).getByRole( 'link', { exact : true, name : 'Contact' } ).last().click(); // What: Contact Tap Call. Why: A section link is the menu's main use. How: This taps the menu's Contact link.

	await cloCheFun( curPagObj ); // What: Closed Check Call. Why: The tap should close the menu and give the page back. How: This checks both.

	await expect.poll( () => curPagObj.evaluate( () => Math.round( document.getElementById( 'contact' )!.getBoundingClientRect().top ) ) ).toBeLessThan( 66 ); // What: Section Arrival Assertion. Why: The Contact section should come to the top of the screen, just below the bar, which WebKit once overshot by about 29px. How: This waits for its top to sit at the bar's height and border, about 63px, from the viewport's top. // What: Non-Null Note. Why: getElementById can return null. How: The home page always renders the Contact section.

	expect( curPagObj.url() ).not.toContain( '#' ); // What: Clean Address Assertion. Why: Section links leave no hash in the address. How: This checks the URL carries none.


} );



test( 'tapping the brand closes the menu', async ( { page : curPagObj } ) => { // What: Brand Close Test. Why: The brand stays tappable above the open menu, and the page it scrolls to shouldn't be left inert behind a menu still open. How: This taps the bar's brand and checks the menu closes and the page is back at its top.


	await menOpeFun( curPagObj ); // What: Menu Open Call. Why: The check needs the menu open. How: This opens and checks it.

	await curPagObj.getByRole( 'banner' ).getByRole( 'link', { name : 'Hair Designs' } ).first().click(); // What: Brand Tap Call. Why: The brand is the way back to the top from the open menu. How: This taps the bar's brand link.

	await cloCheFun( curPagObj ); // What: Closed Check Call. Why: The tap should close the menu and give the page back. How: This checks both.

	await expect.poll( () => curPagObj.evaluate( () => window.scrollY ) ).toBe( 0 ); // What: Top Arrival Assertion. Why: The brand leads to the top of the home page. How: This waits for the page to sit at its top.


} );



test( 'widening the screen closes the menu', async ( { page : curPagObj } ) => { // What: Resize Close Test. Why: Past the phone layout the toggle disappears, which would leave the page inert with no way to close the menu. How: This widens the screen and checks the page comes back.


	await menOpeFun( curPagObj ); // What: Menu Open Call. Why: The check needs the menu open. How: This opens and checks it.

	await curPagObj.setViewportSize( { height : 900, width : 1024 } ); // What: Wide Viewport Call. Why: A tablet turned sideways, or a widened window, passes the phone layout. How: This resizes the page past the 900px breakpoint.

	await cloCheFun( curPagObj ); // What: Closed Check Call. Why: Widening should close the menu and give the page back. How: This checks both.


} );

// #endregion Module Init


