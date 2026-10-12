


// #region Imports

import { expect } from '@playwright/test'; // What: Expect. Why: Each check passes only when the tooltip opens and goes as it should. How: This asserts on the tooltip's presence and its leaving state.
import { test   } from '@playwright/test'; // What: Test. Why: Each way of opening and closing the tooltip is its own test. How: This declares them.


import type { Locator } from '@playwright/test'; // What: Locator. Why: The helper hands back the form wrapper. How: This types its return value.
import type { Page    } from '@playwright/test'; // What: Page. Why: The helper drives a Playwright page. How: This types its page parameter.

// #endregion Imports



/**
 * tooltip.spec.ts = Tooltip Spec
 *
 * @summary
 * Checks the turned-off contact form's tooltip in whichever engine the
 * project runs. Hovering the form opens it, and moving away fades it out,
 * marked as leaving while it goes, before it's removed once the fade has
 * played. Focusing the form from the keyboard opens it too, and Escape
 * closes it. Under reduced motion the fade is cut to almost nothing, but the
 * tooltip still has to leave, since its removal waits on the fade's end.
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

const TIP_LIN_STR = '417-988-6239'; // What: Tip Link String. Why: The tooltip is found by its phone link, the only link inside the form, since the form's hidden legend repeats the tooltip's message. How: This is the link's name.

// #endregion Constants



// #region Helpers

// #region forOpeFun

/**
 * forOpeFun = Form Open Function
 *
 * @summary
 * Loads the home page at a desktop width, scrolls the turned-off form into
 * view, and returns its wrapper, the one element that catches the pointer
 * and the keyboard for the form.
 *
 * @author z4nta0 <https://github.com/z4nta0>
 *
 * @param curPagObj - Current Page Object: The page to open the form on.
 *
 * @returns The form wrapper's locator.
 * @see {@link forWraObj}
 *
 * @example
 * ```ts
 * forOpeFun(page) // => Locator
 * ```
 *
*/

async function forOpeFun ( curPagObj : Page ) : Promise< Locator > {


	await curPagObj.setViewportSize( { height : 900, width : 1440 } ); // What: Desktop Viewport Call. Why: A mouse hovering the form is a desktop visit. How: This sizes the page before it loads.

	await curPagObj.goto( '/' ); // What: Home Page Navigation. Why: The form sits in the home page's Contact section. How: This loads it.


	const forWraObj = curPagObj.getByRole( 'group', { name : 'Contact form, turned off' } ); // What: Form Wrapper Object. Why: The wrapper catches the pointer and the keyboard for the turned-off form. How: This finds it by its name.


	await forWraObj.scrollIntoViewIfNeeded(); // What: Form Scroll Call. Why: The form has to be on screen to hover. How: This scrolls it into view.



	return forWraObj; // What: Form Wrapper Return. Why: Each test opens the tooltip from the wrapper. How: This hands it back.


}

// #endregion forOpeFun

// #endregion Helpers



// #region Module Init

test( 'the tooltip fades out before it goes', async ( { page : curPagObj } ) => { // What: Fade Out Test. Why: The tooltip should leave the way it came, rather than vanish. How: This hovers the form, moves away, and checks the tooltip is marked as leaving before it's removed.


	const forWraObj = await forOpeFun( curPagObj ); // What: Form Wrapper Object. Why: The pointer opens the tooltip from the wrapper. How: This loads the page and finds it.


	await forWraObj.hover(); // What: Form Hover Call. Why: A mouse over the form opens the tooltip. How: This moves the pointer onto the wrapper.

	await expect( forWraObj.getByRole( 'link', { name : TIP_LIN_STR } ) ).toBeVisible(); // What: Open Assertion. Why: Hovering should open the tooltip. How: This checks its message shows.

	await curPagObj.mouse.move( 0, 0 ); // What: Pointer Away Call. Why: Leaving the form closes the tooltip. How: This moves the pointer to the page's corner.

	await expect( curPagObj.locator( '[data-tooltip-close-active]' ) ).toHaveCount( 1 ); // What: Leaving Assertion. Why: The tooltip should fade rather than vanish. How: This checks it's still there, marked as leaving.

	await expect( forWraObj.getByRole( 'link', { name : TIP_LIN_STR } ) ).toHaveCount( 0 ); // What: Gone Assertion. Why: The tooltip should leave once its fade has played. How: This waits for it to be removed.


} );



test( 'Escape closes the tooltip the keyboard opened', async ( { page : curPagObj } ) => { // What: Escape Close Test. Why: A keyboard visitor needs the same message and the usual way to dismiss it. How: This focuses the form, checks the tooltip opens, presses Escape, and checks it goes.


	const forWraObj = await forOpeFun( curPagObj ); // What: Form Wrapper Object. Why: The keyboard opens the tooltip from the wrapper. How: This loads the page and finds it.


	await forWraObj.focus(); // What: Form Focus Call. Why: Focusing the form opens the tooltip at its top edge. How: This focuses the wrapper.

	await expect( forWraObj.getByRole( 'link', { name : TIP_LIN_STR } ) ).toBeVisible(); // What: Open Assertion. Why: Focusing should open the tooltip. How: This checks its message shows.

	await curPagObj.keyboard.press( 'Escape' ); // What: Escape Press Call. Why: Escape is the expected way to dismiss a tooltip. How: This presses it.

	await expect( forWraObj.getByRole( 'link', { name : TIP_LIN_STR } ) ).toHaveCount( 0 ); // What: Gone Assertion. Why: Escape should close the tooltip. How: This waits for it to be removed.


} );



test( 'the tooltip still goes under reduced motion', async ( { page : curPagObj } ) => { // What: Reduced Motion Close Test. Why: The tooltip's removal waits on its fade ending, which a turned-off animation would never do. How: This hovers and leaves the form with reduced motion on and checks the tooltip goes.


	await curPagObj.emulateMedia( { reducedMotion : 'reduce' } ); // What: Reduced Motion Emulation. Why: The shortened fade is what's checked. How: This makes the page match prefers-reduced-motion: reduce.


	const forWraObj = await forOpeFun( curPagObj ); // What: Form Wrapper Object. Why: The pointer opens the tooltip from the wrapper. How: This loads the page and finds it.


	await forWraObj.hover(); // What: Form Hover Call. Why: A mouse over the form opens the tooltip. How: This moves the pointer onto the wrapper.

	await expect( forWraObj.getByRole( 'link', { name : TIP_LIN_STR } ) ).toBeVisible(); // What: Open Assertion. Why: Hovering should open the tooltip. How: This checks its message shows.

	await curPagObj.mouse.move( 0, 0 ); // What: Pointer Away Call. Why: Leaving the form closes the tooltip. How: This moves the pointer to the page's corner.

	await expect( forWraObj.getByRole( 'link', { name : TIP_LIN_STR } ) ).toHaveCount( 0 ); // What: Gone Assertion. Why: The tooltip has to leave even with its fade cut short. How: This waits for it to be removed.


} );

// #endregion Module Init


