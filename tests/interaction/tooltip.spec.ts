


// #region Imports

import { cliBloFun   } from '../support/feedback.ts'; // What: Click Block Function. Why: Pressing the tooltip's phone link mid-check shouldn't start a call. How: This cancels every click in the page.
import { CON_PRO_ARR } from '../support/feedback.ts'; // What: Control Property Array. Why: The phone link's hover and press looks are compared over the same properties as every control's. How: This lists them.
import { expect      } from '@playwright/test';       // What: Expect. Why: Each check passes only when the tooltip opens and goes as it should. How: This asserts on what each check reads, such as the tooltip's presence.
import { FOC_PRO_ARR } from '../support/feedback.ts'; // What: Focus Property Array. Why: The phone link's focus look is compared over the control properties and the ring's outline. How: This lists them.
import { movProFun   } from '../support/feedback.ts'; // What: Moving Problems Function. Why: Under reduced motion the phone link's changes have to switch rather than ease. How: This turns two snapshots into a problem for each eased change.
import { SET_WAI_NUM } from '../support/feedback.ts'; // What: Settle Wait Number. Why: Each look of the phone link is read once its transition has finished. How: This is the pause before each read.
import { snaEleFun   } from '../support/feedback.ts'; // What: Snapshot Element Function. Why: Each look of the phone link is recorded with whether each part of it would ease. How: This runs inside the page to read it.
import { snaProFun   } from '../support/feedback.ts'; // What: Snap Problems Function. Why: The phone link's changes have to ease rather than snap. How: This turns two snapshots into a problem for each snapped change.
import { test        } from '@playwright/test';       // What: Test. Why: Each way of opening and closing the tooltip, and each probe of its link, is its own test. How: This declares them.
import { valSigFun   } from '../support/feedback.ts'; // What: Value Signature Function. Why: Two looks of the phone link are told apart by their values alone. How: This joins a snapshot's values into one string.


import type { Locator } from '@playwright/test'; // What: Locator. Why: The helpers hand back and drive the form wrapper. How: This types the wrapper they return and take.
import type { Page    } from '@playwright/test'; // What: Page. Why: The helpers that drive the page from the test take a Playwright page, while the watcher that runs inside it takes none. How: This types the driving helpers' page parameters.

// #endregion Imports



/**
 * tooltip.spec.ts = Tooltip Spec
 *
 * @summary
 * Checks the turned-off contact form's tooltip in whichever engine the project
 * runs. Hovering the form opens it with its fade in, and moving away fades it
 * out, marked as leaving while it goes, before it's removed once the fade has
 * played. Focusing the form opens it too, and Escape closes it however it
 * opened, handing focus back to the form from its phone link. Under reduced
 * motion the tooltip opens without a fade, and its closing fade is cut to
 * almost nothing, but the tooltip still has to leave, since its removal waits
 * on the fade's end. The tooltip's phone link, which the feedback spec never
 * reaches since the tooltip is closed in every state it visits, is probed here
 * the same way, its hover, press, and focus each having to show and ease, or
 * under reduced motion show at once, through the shared helpers in
 * tests/support/feedback.ts.
 *
 * Sections:
 *  - Types
 *  - Constants
 *  - Helpers
 *  - Module Init
 *
 * @author z4nta0 <https://github.com/z4nta0>
 *
*/



// #region Types

type AniRecTyp = { // What: Animation Record Type. Why: Each animation the tooltip opens with is checked by its name and its length. How: This holds one animation's duration and name.


	durNum : number, // What: Duration Number. Why: Under reduced motion nothing should play as the tooltip opens. How: This holds the animation's duration in milliseconds, or 0 when it has none.
	namStr : string  // What: Name String. Why: The opening fade is found by its keyframes. How: This holds a CSS animation's keyframes name, which Vite keeps inside the hashed name, or '' for any other animation.


};

// #endregion Types



// #region Constants

const TIP_LIN_STR = '417-988-6239';       // What: Tip Link String. Why: The tooltip is found by its phone link, the only link inside the form, since the form's hidden legend repeats the tooltip's message. How: This is the link's name.
const TIP_DES_STR = `a "${ TIP_LIN_STR }"`; // What: Tip Description String. Why: A problem should name the link the way the feedback spec names every control. How: This joins its tag with its name, and follows the name it reads.

// #endregion Constants



// #region Helpers

// #region aniWatFun

/**
 * aniWatFun = Animation Watch Function
 *
 * @summary
 * Runs inside the page and starts watching for the tooltip, returning at once
 * with a pending result: the moment the tooltip is added to the page, it reads
 * the animations the tooltip has then, before any of them can finish, and
 * stops watching. The result is wrapped in an object, so Playwright hands back
 * a handle to it rather than waiting on it. Passed to Playwright's
 * evaluateHandle, so it can't read anything from this file.
 *
 * @author z4nta0 <https://github.com/z4nta0>
 *
 * @param void - This function takes no parameters.
 *
 * @returns An object holding a promise that resolves with one record per
 *          animation the tooltip opens with.
 *
 * @example
 * ```ts
 * page.evaluateHandle(aniWatFun) // => JSHandle<{ aniRecPro }>
 * ```
 *
*/

function aniWatFun () : { aniRecPro : Promise< AniRecTyp[] > } {


	const aniRecPro = new Promise< AniRecTyp[] >( ( resValFun ) => { // What: Animation Record Promise. Why: The tooltip appears some time after the hover, and its fade can end before the test reads it. How: This resolves with the tooltip's animations as soon as it appears.


		const mutObsObj = new MutationObserver( () => { // What: Mutation Observer Object. Why: React adds the tooltip to the page once it opens. How: This looks for it after each change to the page.


			const tipCurEle = document.querySelector( '[class*="forTipDiv"]' ); // What: Tip Current Element. Why: The tooltip's animations are read from the tooltip itself. How: This finds it by its CSS module class, whose name Vite keeps inside the hashed class.


			if ( !tipCurEle ) return; // What: Missing Tip Guard. Why: Other changes to the page come before the tooltip. How: This waits for the next change until the tooltip is there.



			mutObsObj.disconnect(); // What: Observer Disconnect Call. Why: Only the tooltip's first moment is read. How: This stops watching the page.

			resValFun( tipCurEle.getAnimations().map( ( aniCurObj ) => ( { // What: Animation Record Resolve Call. Why: The animations are read before any can finish. How: This resolves with a record of each animation the tooltip has, which reading them makes the page create.


				durNum : Number( aniCurObj.effect?.getTiming().duration ) || 0,           // What: Duration Number. Why: A fade cut to almost nothing still plays. How: This reads the animation's duration in milliseconds, or 0 when it has none.
				namStr : aniCurObj instanceof CSSAnimation ? aniCurObj.animationName : '' // What: Name String. Why: The opening fade is told apart by its keyframes. How: This reads a CSS animation's keyframes name, or '' for any other animation.


			} ) ) );


		} );


		mutObsObj.observe( document.body, { childList : true, subtree : true } ); // What: Page Observe Call. Why: The tooltip is added somewhere inside the page. How: This watches every element added anywhere in the body.


	} );



	return { aniRecPro }; // What: Animation Watch Return. Why: Playwright would wait on a bare promise before the hover could open the tooltip. How: This wraps the pending result in an object.


}

// #endregion aniWatFun



// #region aniOpeFun

/**
 * aniOpeFun = Animation Open Function
 *
 * @summary
 * Opens the tooltip by hovering the form and returns the animations the
 * tooltip has at the moment it's added to the page. The watcher inside the
 * page ({@link aniWatFun}) is started before the hover, so a fade that ends
 * quickly is never missed.
 *
 * @author z4nta0 <https://github.com/z4nta0>
 *
 * @param curPagObj - Current Page Object: The page the form is on.
 * @param forWraObj - Form Wrapper Object: The form's wrapper, with the tooltip
 *                    closed.
 *
 * @returns A promise that resolves with one record per animation the tooltip
 *          opens with.
 *
 * @example
 * ```ts
 * aniOpeFun(page, forWraObj) // => [ { durNum : 209.1, namStr : '...' } ]
 * ```
 *
*/

async function aniOpeFun ( curPagObj : Page, forWraObj : Locator ) : Promise< AniRecTyp[] > {


	const watHanObj = await curPagObj.evaluateHandle( aniWatFun ); // What: Watch Handle Object. Why: The watcher has to be in place before the hover opens the tooltip. How: This starts it inside the page and keeps a handle to its pending result.


	await forWraObj.hover(); // What: Form Hover Call. Why: A mouse over the form opens the tooltip. How: This moves the pointer onto the wrapper.



	return watHanObj.evaluate( ( watCurObj ) => watCurObj.aniRecPro ); // What: Animation Record Return. Why: The test checks what the tooltip opened with. How: This waits on the watcher's result inside the page and hands it back.


}

// #endregion aniOpeFun



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



// #region telProFun

/**
 * telProFun = Telephone Problems Function
 *
 * @summary
 * Probes the tooltip's phone link the way the feedback spec probes every
 * control, since that spec never reaches it: the tooltip is closed in every
 * state it visits. The tooltip is opened by hovering the form, and from then
 * on the pointer moves only within the form, so it stays open. The link is
 * read at rest with the pointer on the form below the tooltip, again while
 * hovered, and again while the mouse button is held on it. The form's wrapper
 * is then focused, which leaves the link unfocused while focus stays in the
 * form, and the link is read once more while focused the way a keyboard
 * focuses it, every look read once its transition has settled. A link that
 * looks the same at rest and hovered, hovered and pressed, or unfocused and
 * focused is a problem, and so is the tooltip closing along the way. Normally
 * every probed property that changes has to be eased by a transition ({@link
 * snaProFun}), the focus ring's outline included; under reduced motion none
 * of them may ease ({@link movProFun}), and every one of the link's own
 * transition durations must be zero. The caller blocks real clicks first, so
 * releasing the mouse never starts a call.
 *
 * @author z4nta0 <https://github.com/z4nta0>
 *
 * @param curPagObj - Current Page Object: The page the form is on.
 * @param forWraObj - Form Wrapper Object: The form's wrapper, with the tooltip
 *                    closed.
 * @param redMotBoo - Reduced Motion Boolean: Whether the page is emulating
 *                    reduced motion.
 *
 * @returns A promise that resolves with every feedback problem found.
 * @see {@link proLisArr}
 *
 * @example
 * ```ts
 * telProFun(page, forWraObj, false) // => [] when the link responds
 * ```
 *
*/

async function telProFun ( curPagObj : Page, forWraObj : Locator, redMotBoo : boolean ) : Promise< string[] > {


	const proLisArr : string[] = []; // What: Problem List Array. Why: Every problem should be reported, not just the first. How: This collects them.



	await forWraObj.hover(); // What: Form Hover Call. Why: A mouse over the form opens the tooltip, and the pointer's resting spot below it is where the link is read at rest. How: This moves the pointer onto the wrapper's middle.


	const telHanObj = await forWraObj.getByRole( 'link', { name : TIP_LIN_STR } ).elementHandle(); // What: Telephone Handle Object. Why: A handle keeps pointing at the link, so a tooltip that closed mid-probe is caught rather than waited for. How: This waits for the link to appear and takes a handle to it.


	await curPagObj.waitForTimeout( SET_WAI_NUM ); // What: Rest Settle Wait. Why: The tooltip's fade in has to finish first. How: This pauses for the settle time.


	const resSnaArr = await telHanObj.evaluate( snaEleFun, CON_PRO_ARR ); // What: Rest Snapshot Array. Why: The resting look is what hover is compared with. How: This records the link.


	await telHanObj.hover(); // What: Link Hover Call. Why: Hover feedback is the first thing checked. How: This moves the pointer onto the link, which stays inside the form, so the tooltip stays open.

	await curPagObj.waitForTimeout( SET_WAI_NUM ); // What: Hover Settle Wait. Why: The hover look is read once it has eased in. How: This pauses for the settle time.


	const hovSnaArr = await telHanObj.evaluate( snaEleFun, CON_PRO_ARR ); // What: Hover Snapshot Array. Why: The hovered look is compared with rest and with pressed. How: This records it.


	await curPagObj.mouse.down(); // What: Mouse Down Call. Why: A press shows while the button is held, and the form leaves the tooltip where it is for a press on it. How: This holds the mouse button down on the link.

	await curPagObj.waitForTimeout( SET_WAI_NUM ); // What: Press Settle Wait. Why: The pressed look is read once it has eased in. How: This pauses for the settle time.


	const preSnaArr = await telHanObj.evaluate( snaEleFun, CON_PRO_ARR );                                            // What: Press Snapshot Array. Why: The pressed look is compared with hovered. How: This records it.
	const traDurStr = await telHanObj.evaluate( ( telCurEle ) => getComputedStyle( telCurEle ).transitionDuration ); // What: Transition Duration String. Why: Reduced motion should leave nothing moving. How: This reads the link's transition durations.


	await curPagObj.mouse.up(); // What: Mouse Up Call. Why: The press has to end before the focus is read. How: This releases the button, whose click the caller has blocked.

	await forWraObj.hover(); // What: Pointer Back Call. Why: The focus look is compared with no hover on the link, while the pointer stays on the form. How: This moves the pointer back to the wrapper's middle.

	await forWraObj.focus(); // What: Wrapper Focus Call. Why: The link has to be unfocused for the first focus read, yet focus leaving the form would close the tooltip. How: This moves focus to the wrapper, which only moves the tooltip to the form's top edge.

	await curPagObj.waitForTimeout( SET_WAI_NUM ); // What: Blur Settle Wait. Why: The unfocused look is read once the hover and any focus from the press have faded. How: This pauses for the settle time.


	const bluSnaArr = await telHanObj.evaluate( snaEleFun, FOC_PRO_ARR ); // What: Blur Snapshot Array. Why: The unfocused look is what focus is compared with. How: This records the link, outline included.


	await telHanObj.evaluate( ( telCurEle ) => { if ( telCurEle instanceof HTMLElement ) telCurEle.focus( { focusVisible : true } ); } ); // What: Keyboard Focus Call. Why: The focus ring shows only for keyboard focus, and a script's focus draws it in every engine only when it asks to show the ring. How: This focuses the link with focusVisible set.

	await curPagObj.waitForTimeout( SET_WAI_NUM ); // What: Focus Settle Wait. Why: The focused look is read once it has eased in. How: This pauses for the settle time.


	const focSnaArr = await telHanObj.evaluate( snaEleFun, FOC_PRO_ARR ); // What: Focus Snapshot Array. Why: The focused look is compared with unfocused. How: This records it.
	const tipOpeBoo = await telHanObj.isVisible();                        // What: Tip Open Boolean. Why: Every look has to have been read with the tooltip open. How: This is true while the link is still shown.


	if ( !tipOpeBoo ) proLisArr.push( 'the tooltip closes before the probe ends' ); // What: Tooltip Open Check. Why: A tooltip that closed mid-probe would leave the later reads meaningless. How: This records it.



	if ( valSigFun( resSnaArr ) === valSigFun( hovSnaArr ) ) proLisArr.push( `${ TIP_DES_STR } looks the same hovered` ); // What: Hover Check. Why: A hovered link has to respond. How: This records one that doesn't change.



	if ( valSigFun( hovSnaArr ) === valSigFun( preSnaArr ) ) proLisArr.push( `${ TIP_DES_STR } looks the same pressed` ); // What: Press Check. Why: A press has to register before the call starts. How: This records one that doesn't change.



	if ( valSigFun( bluSnaArr ) === valSigFun( focSnaArr ) ) proLisArr.push( `${ TIP_DES_STR } looks the same focused` ); // What: Focus Check. Why: A focused link has to show where focus is. How: This records one whose look and ring don't change.



	if ( redMotBoo && !/^0s(, 0s)*$/.test( traDurStr ) ) proLisArr.push( `${ TIP_DES_STR } still transitions under reduced motion (${ traDurStr })` ); // What: Reduced Motion Duration Check. Why: Asking for less motion should stop every transition. How: This records a link with any duration above zero.



	if ( redMotBoo ) proLisArr.push( ...movProFun( resSnaArr, hovSnaArr, CON_PRO_ARR, TIP_DES_STR, 'when hovered' ), ...movProFun( hovSnaArr, preSnaArr, CON_PRO_ARR, TIP_DES_STR, 'when pressed' ), ...movProFun( bluSnaArr, focSnaArr, FOC_PRO_ARR, TIP_DES_STR, 'when focused' ) ); // What: Reduced Motion Change Check. Why: Under reduced motion every change should switch at once. How: This records each property that changes while a transition still eases it.

	else proLisArr.push( ...snaProFun( resSnaArr, hovSnaArr, CON_PRO_ARR, TIP_DES_STR, 'when hovered' ), ...snaProFun( hovSnaArr, preSnaArr, CON_PRO_ARR, TIP_DES_STR, 'when pressed' ), ...snaProFun( bluSnaArr, focSnaArr, FOC_PRO_ARR, TIP_DES_STR, 'when focused' ) ); // What: Snapped Change Check. Why: Every probed property a hover, press, or focus changes should ease rather than snap, the focus ring included. How: This records each one that changes without a transition.



	return proLisArr; // What: Problem List Return. Why: The test prints whatever was found. How: This hands back every problem collected.


}

// #endregion telProFun

// #endregion Helpers



// #region Module Init

test( 'the tooltip fades out before it goes', async ( { page : curPagObj } ) => { // What: Fade Out Test. Why: The tooltip should leave the way it came, rather than vanish. How: This hovers the form, moves away, and checks the tooltip is marked as leaving and plays its fade out before it's removed.


	const forWraObj = await forOpeFun( curPagObj ); // What: Form Wrapper Object. Why: The pointer opens the tooltip from the wrapper. How: This loads the page and finds it.


	await forWraObj.hover(); // What: Form Hover Call. Why: A mouse over the form opens the tooltip. How: This moves the pointer onto the wrapper.

	await expect( forWraObj.getByRole( 'link', { name : TIP_LIN_STR } ) ).toBeVisible(); // What: Open Assertion. Why: Hovering should open the tooltip. How: This checks its message shows.

	await curPagObj.mouse.move( 0, 0 ); // What: Pointer Away Call. Why: Leaving the form closes the tooltip. How: This moves the pointer to the page's corner.

	await expect( curPagObj.locator( '[data-tooltip-close-active]' ) ).toHaveCount( 1 ); // What: Leaving Assertion. Why: The tooltip should fade rather than vanish. How: This checks it's still there, marked as leaving.


	const cloNamArr = await curPagObj.locator( '[data-tooltip-close-active]' ).evaluate( ( tipCurEle ) => tipCurEle.getAnimations().map( ( aniCurObj ) => aniCurObj instanceof CSSAnimation ? aniCurObj.animationName : '' ) ); // What: Closing Name Array. Why: Being marked as leaving proves nothing about the fade it plays. How: This reads the keyframes name of each CSS animation the leaving tooltip runs, or '' for any other animation, right after the mark appears and well inside the fade's 209ms.


	expect( cloNamArr ).toContainEqual( expect.stringContaining( 'forTipDivCloseFadeOut' ) ); // What: Close Fade Assertion. Why: The tooltip should leave on its own fade out. How: This checks one animation is the forTipDivCloseFadeOut keyframes, by the name Vite keeps inside the hashed one.

	await expect( forWraObj.getByRole( 'link', { name : TIP_LIN_STR } ) ).toHaveCount( 0 ); // What: Gone Assertion. Why: The tooltip should leave once its fade has played. How: This waits for it to be removed.


} );



test( 'Escape closes the tooltip that focusing the form opened', async ( { page : curPagObj } ) => { // What: Escape Close Test. Why: A keyboard visitor needs the same message and the usual way to dismiss it. How: This focuses the form, checks the tooltip opens, presses Escape, and checks it goes.


	const forWraObj = await forOpeFun( curPagObj ); // What: Form Wrapper Object. Why: The keyboard opens the tooltip from the wrapper. How: This loads the page and finds it.


	await forWraObj.focus(); // What: Form Focus Call. Why: Focusing the form opens the tooltip at its top edge. How: This focuses the wrapper.

	await expect( forWraObj.getByRole( 'link', { name : TIP_LIN_STR } ) ).toBeVisible(); // What: Open Assertion. Why: Focusing should open the tooltip. How: This checks its message shows.

	await curPagObj.keyboard.press( 'Escape' ); // What: Escape Press Call. Why: Escape is the expected way to dismiss a tooltip. How: This presses it.

	await expect( forWraObj.getByRole( 'link', { name : TIP_LIN_STR } ) ).toHaveCount( 0 ); // What: Gone Assertion. Why: Escape should close the tooltip. How: This waits for it to be removed.


} );



test( "Escape on the tooltip's phone link closes it and hands focus back to the form", async ( { page : curPagObj } ) => { // What: Link Escape Test. Why: The phone link goes with the tooltip, and a keyboard visitor on it shouldn't be dropped to the page's start. How: This focuses the form, Tabs to the link, presses Escape, and checks the tooltip goes, focus is back on the wrapper, and the tooltip stays closed.


	const forWraObj = await forOpeFun( curPagObj ); // What: Form Wrapper Object. Why: The keyboard opens the tooltip from the wrapper. How: This loads the page and finds it.


	await forWraObj.focus(); // What: Form Focus Call. Why: Focusing the form opens the tooltip at its top edge. How: This focuses the wrapper.

	await curPagObj.keyboard.press( 'Tab' ); // What: Link Tab Press. Why: The phone link is the next stop after the wrapper. How: This moves focus onto it.

	await expect( forWraObj.getByRole( 'link', { name : TIP_LIN_STR } ) ).toBeFocused(); // What: Link Focus Assertion. Why: Escape has to be pressed from the link for the check to mean anything. How: This checks the link has focus.

	await curPagObj.keyboard.press( 'Escape' ); // What: Escape Press Call. Why: Escape is the expected way to dismiss a tooltip. How: This presses it.

	await expect( forWraObj.getByRole( 'link', { name : TIP_LIN_STR } ) ).toHaveCount( 0 ); // What: Gone Assertion. Why: Escape should close the tooltip. How: This waits for it to be removed.
	await expect( forWraObj ).toBeFocused();                                                // What: Focus Return Assertion. Why: Focus should stay on the form rather than fall to the page. How: This checks the wrapper has it.

	await curPagObj.waitForTimeout( 500 ); // What: Reopen Wait. Why: A tooltip reopened by the hand-back would show up after its own fade. How: This waits past the fade before looking again.

	await expect( forWraObj.getByRole( 'link', { name : TIP_LIN_STR } ) ).toHaveCount( 0 ); // What: Still Closed Assertion. Why: Handing focus back mustn't reopen the tooltip Escape closed. How: This checks it's still gone.


} );



test( 'Escape closes the tooltip that hovering the form opened', async ( { page : curPagObj } ) => { // What: Hover Escape Test. Why: Content shown on hover has to be dismissable without moving the pointer, and a hover never puts focus in the form. How: This hovers the form, checks the tooltip opens, presses Escape with the pointer still on the form, and checks it goes.


	const forWraObj = await forOpeFun( curPagObj ); // What: Form Wrapper Object. Why: The mouse opens the tooltip over the wrapper. How: This loads the page and finds it.


	await forWraObj.hover(); // What: Form Hover Call. Why: A mouse entering the form opens the tooltip. How: This moves the pointer onto the wrapper.

	await expect( forWraObj.getByRole( 'link', { name : TIP_LIN_STR } ) ).toBeVisible(); // What: Open Assertion. Why: Hovering should open the tooltip. How: This checks its phone link shows.

	await curPagObj.keyboard.press( 'Escape' ); // What: Escape Press Call. Why: Escape is the expected way to dismiss a tooltip. How: This presses it, with the pointer left where it is.

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



test( 'the tooltip fades in when it opens', async ( { page : curPagObj } ) => { // What: Fade In Test. Why: The tooltip should arrive gently rather than snap into place. How: This hovers the form and checks the tooltip opens with its open fade playing.


	const forWraObj = await forOpeFun( curPagObj );            // What: Form Wrapper Object. Why: The pointer opens the tooltip from the wrapper. How: This loads the page and finds it.
	const aniRecArr = await aniOpeFun( curPagObj, forWraObj ); // What: Animation Record Array. Why: The fade is read the moment the tooltip appears. How: This hovers the form and records the tooltip's animations then.


	expect( aniRecArr.map( ( aniRecObj ) => aniRecObj.namStr ) ).toEqual( [ expect.stringContaining( 'forTipDivOpenFadeIn' ) ] ); // What: Open Fade Assertion. Why: The tooltip should open with its one fade in and nothing else. How: This checks the only animation is the forTipDivOpenFadeIn keyframes, by the name Vite keeps inside the hashed one.


} );



test( 'the tooltip opens without a fade under reduced motion', async ( { page : curPagObj } ) => { // What: Reduced Motion Open Test. Why: Someone who asked for less motion should see the tooltip simply appear. How: This hovers the form with reduced motion on and checks the tooltip opens with no animation.


	await curPagObj.emulateMedia( { reducedMotion : 'reduce' } ); // What: Reduced Motion Emulation. Why: The motionless opening is what's checked. How: This makes the page match prefers-reduced-motion: reduce.


	const forWraObj = await forOpeFun( curPagObj );            // What: Form Wrapper Object. Why: The pointer opens the tooltip from the wrapper. How: This loads the page and finds it.
	const aniRecArr = await aniOpeFun( curPagObj, forWraObj ); // What: Animation Record Array. Why: Any animation is read the moment the tooltip appears. How: This hovers the form and records the tooltip's animations then.


	expect( aniRecArr ).toEqual( [] ); // What: No Animation Assertion. Why: The stylesheet turns the open fade off under reduced motion. How: This checks the tooltip opens with no animation at all.


} );



test( "the tooltip's phone link gives hover, press, and focus feedback", async ( { page : curPagObj } ) => { // What: Phone Link Feedback Test. Why: Every interaction should visibly register, the link the tooltip offers included. How: This opens the tooltip, blocks clicks, probes its phone link, and checks it finds no problems.


	const forWraObj = await forOpeFun( curPagObj ); // What: Form Wrapper Object. Why: The tooltip is opened from the wrapper. How: This loads the page and finds it.


	await curPagObj.evaluate( cliBloFun ); // What: Click Block Call. Why: Pressing the link shouldn't start a call. How: This cancels every click from here on.


	const proLisArr = await telProFun( curPagObj, forWraObj, false ); // What: Problem List Array. Why: The link passes only when its hover, press, and focus show and ease. How: This probes it and gathers its problems.


	expect( proLisArr ).toEqual( [] ); // What: No Feedback Problems Assertion. Why: The link passes only when the probe finds nothing. How: This compares the problems with an empty list, so a failure prints each one.


} );



test( "the tooltip's phone link keeps feedback without motion under reduced motion", async ( { page : curPagObj } ) => { // What: Reduced Motion Phone Link Feedback Test. Why: Visitors who ask for less motion still need to see their actions register. How: This probes the tooltip's phone link with reduced motion on and checks it finds no problems.


	await curPagObj.emulateMedia( { reducedMotion : 'reduce' } ); // What: Reduced Motion Emulation. Why: The preference has to be set before the page loads. How: This makes the page match prefers-reduced-motion: reduce.


	const forWraObj = await forOpeFun( curPagObj ); // What: Form Wrapper Object. Why: The tooltip is opened from the wrapper. How: This loads the page and finds it.


	await curPagObj.evaluate( cliBloFun ); // What: Click Block Call. Why: Pressing the link shouldn't start a call. How: This cancels every click from here on.


	const proLisArr = await telProFun( curPagObj, forWraObj, true ); // What: Problem List Array. Why: The link has to respond without moving. How: This probes it and gathers its problems.


	expect( proLisArr ).toEqual( [] ); // What: No Reduced Motion Problems Assertion. Why: The probe has to find the link's feedback without motion. How: This compares the problems with an empty list, so a failure prints each one.


} );

// #endregion Module Init


