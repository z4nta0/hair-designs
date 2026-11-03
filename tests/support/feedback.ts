


/**
 * feedback.ts = Feedback
 *
 * @summary
 * The shared pieces of the interaction feedback probe, for the specs that
 * check a control's hover, press, and focus: the property lists and settle
 * wait a look is read with, the helpers that snapshot an element's look and
 * turn two snapshots into problems, and the click block that keeps a press
 * from acting mid-check. Each spec collects and drives its own elements.
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

type SnaRecTyp = { // What: Snapshot Record Type. Why: An element's look, and whether each part of it would ease, is compared between two moments the same way. How: This holds one value and one duration per probed property.


	durArr : number[], // What: Duration Array. Why: A property that changes has to ease rather than snap. How: This holds each probed property's transition duration in milliseconds, or 0 when no transition covers it, with an inherited color taking its parent's duration and a currentColor border taking the color's when that's longer.
	valArr : string[]  // What: Value Array. Why: Two moments are compared property by property. How: This holds each probed property's computed value.


};

// #endregion Types



// #region Constants

const CON_PRO_ARR = [ 'color', 'background-color', 'border-color', 'transform', 'opacity' ]; // What: Control Property Array. Why: Hover, press, and toggle feedback changes these, on a control and on what's inside it, such as the menu toggle's lines. How: Each is compared between moments, and each that changes has to be transitioned.
const FOC_PRO_ARR = [ ...CON_PRO_ARR, 'outline-color', 'outline-offset', 'outline-width' ];  // What: Focus Property Array. Why: A control's focus can change its look as well as draw its ring. How: Each is compared between unfocused and focused, and each that changes has to be transitioned.
const SET_WAI_NUM = 400;                                                                     // What: Settle Wait Number. Why: Each look is read once its transition has finished, and the longest interface transition runs about 277ms. How: This is the pause, in milliseconds, before each look is read.

// #endregion Constants



// #region Helpers

// #region cliBloFun

/**
 * cliBloFun = Click Block Function
 *
 * @summary
 * Runs inside the page and cancels every click before the app handles it, so
 * pressing a control during a check never follows a link, starts a phone
 * call, or closes the menu. It listens on the document in the capture phase,
 * ahead of React's own listener on the app's root, and both prevents the
 * click's default and stops it from going any further. Passed to Playwright's
 * evaluate, so it can't read anything from this file.
 *
 * @author z4nta0 <https://github.com/z4nta0>
 *
 * @param void - This function takes no parameters.
 *
 * @returns This function does not return anything.
 *
 * @example
 * ```ts
 * page.evaluate(cliBloFun) // => void
 * ```
 *
*/

function cliBloFun () : void {


	document.addEventListener( 'click', ( cliEveObj ) => { // What: Click Block Listener. Why: A press during a check shouldn't do anything. How: This cancels every click in the capture phase, before the page or React sees it.


		cliEveObj.preventDefault(); // What: Default Prevention Call. Why: A link shouldn't navigate mid-check. How: This cancels the click's default.

		cliEveObj.stopPropagation(); // What: Propagation Stop Call. Why: React's handlers, such as a menu link closing the menu, shouldn't run either. How: This keeps the click from reaching the app's root.


	}, true ); // What: Capture Phase Flag. Why: The block has to run ahead of the app's own handlers. How: This registers the listener for the capture phase.


}

// #endregion cliBloFun



// #region movProFun

/**
 * movProFun = Moving Problems Function
 *
 * @summary
 * The reduced-motion counterpart of {@link snaProFun}: compares two snapshots
 * of the same element, taken before and after a change, and returns one
 * problem for each probed property that changed on the element or anything
 * inside it while a transition still eases it, read from the later snapshot.
 * A property that eases on several inner elements is one problem.
 *
 * @author z4nta0 <https://github.com/z4nta0>
 *
 * @param froRecArr - From Record Array: The snapshot before the change.
 * @param tarRecArr - Target Record Array: The snapshot after the change.
 * @param proNamArr - Property Name Array: The probed property names, in the
 *                    snapshots' order.
 * @param desLabStr - Description Label String: The element's name in each
 *                    problem.
 * @param staNamStr - State Name String: The change in each problem, such as
 *                    'when toggled on'.
 *
 * @returns One problem per eased property.
 *
 * @example
 * ```ts
 * movProFun(inaSnaArr, actSnaArr, CON_PRO_ARR, 'button "Toggle menu"',
 *   'when toggled on')
 * // => []
 * ```
 *
*/

function movProFun ( froRecArr : SnaRecTyp[], tarRecArr : SnaRecTyp[], proNamArr : string[], desLabStr : string, staNamStr : string ) : string[] {


	const movNamSet = new Set< string >(); // What: Moving Name Set. Why: A property that eases on several inner elements is one problem. How: This collects each eased property's name once.


	for ( const [ recIndNum, tarCurObj ] of tarRecArr.entries() ) { // What: Record Compare Loop. Why: Every element of the snapshot has to switch its changes at once. How: This compares each later record with the earlier one in its place.


		const froCurObj = froRecArr[ recIndNum ]; // What: From Current Object. Why: The change is read against the same element's earlier record. How: This finds it by place.


		if ( !froCurObj ) continue; // What: Missing Record Guard. Why: An element that appeared with the change has nothing to compare with. How: This skips it.



		for ( const [ proIndNum, proNamStr ] of proNamArr.entries() ) if ( froCurObj.valArr[ proIndNum ] !== tarCurObj.valArr[ proIndNum ] && tarCurObj.durArr[ proIndNum ] > 0 ) movNamSet.add( proNamStr ); // What: Property Compare Loop. Why: Under reduced motion a change should switch rather than ease. How: This records each one whose value changed while its later duration is above 0.


	}



	return [ ...movNamSet ].map( ( proNamStr ) => `${ desLabStr } eases its ${ proNamStr } ${ staNamStr } under reduced motion` ); // What: Motion Problems Return. Why: Each eased property should be reported plainly. How: This turns each name into a problem line.


}

// #endregion movProFun



// #region snaEleFun

/**
 * snaEleFun = Snapshot Element Function
 *
 * @summary
 * Runs inside the page and records how an element looks right now, and whether
 * each part of that look would ease if it changed: for the element and every
 * element inside it, each probed property's computed value and the duration of
 * the transition covering it, listed by its own name, by a shorthand holding
 * it (such as background for background-color), or by all, or 0 when none is.
 * The border color reads only the sides actually drawn, those with a width
 * above zero, as one color when they all share it, since an undrawn side's
 * color can change without anything showing. An inner element whose color
 * matches its parent's takes the parent's duration for it, since an inherited
 * color eases with the parent's transition, and a border color matching the
 * element's own color takes the longer of its own duration and the color's,
 * since an unset border color is currentColor and follows the color as it
 * eases. An identity matrix reads as none, since the two draw the same.
 * Passed to Playwright's evaluate, so it can't read anything from this file.
 *
 * @author z4nta0 <https://github.com/z4nta0>
 *
 * @param eleCurEle - Element Current Element: The element to record.
 * @param proNamArr - Property Name Array: The property names to probe.
 *
 * @returns One record per element, the element itself first.
 * @see {@link snaRecArr}
 *
 * @example
 * ```ts
 * handle.evaluate(snaEleFun, CON_PRO_ARR) // => [ { durArr, valArr }, ... ]
 * ```
 *
*/

function snaEleFun ( eleCurEle : Element, proNamArr : string[] ) : SnaRecTyp[] {


	const parNamObj : Record< string, string > = { 'background-color' : 'background', 'border-color' : 'border', 'outline-color' : 'outline', 'outline-offset' : 'outline', 'outline-width' : 'outline' }; // What: Parent Name Object. Why: A transition listed by a shorthand covers the longhands inside it. How: This maps each probed longhand that has a shorthand to it.



	const borValFun = ( styCurObj : CSSStyleDeclaration ) : string => [ ...new Set( [ 'top', 'right', 'bottom', 'left' ].filter( ( sidNamStr ) => styCurObj.getPropertyValue( `border-${ sidNamStr }-width` ) !== '0px' ).map( ( sidNamStr ) => styCurObj.getPropertyValue( `border-${ sidNamStr }-color` ) ) ) ].join( ' ' ); // What: Border Value Function. Why: Only a drawn border's color shows, so an undrawn side changing color isn't feedback. How: This joins the distinct colors of the sides wider than zero, one color when they share it.



	const snaStyFun = ( styCurObj : CSSStyleDeclaration ) : SnaRecTyp => { // What: Snapshot Style Function. Why: Each element is recorded the same way. How: This reads its probed values and the duration covering each.


		const traDurArr = styCurObj.transitionDuration.split( ',' ).map( ( traDurStr ) => parseFloat( traDurStr ) * ( traDurStr.trim().endsWith( 'ms' ) ? 1 : 1000 ) ); // What: Transition Duration Array. Why: A covered property eases only with a duration above zero. How: This reads each listed duration in milliseconds.
		const traNamArr = styCurObj.transitionProperty.split( ',' ).map( ( traNamStr ) => traNamStr.trim() );                                                           // What: Transition Name Array. Why: A property eases only when its transition lists it. How: This reads each listed property name.


		const durProFun = ( proNamStr : string ) : number => { // What: Duration Property Function. Why: Each probed property needs the duration of whichever transition covers it. How: This finds the first listing by its name, its shorthand, or all, and reads its duration, which repeats when fewer durations than names are listed.


			const traIndNum = traNamArr.findIndex( ( traNamStr ) => [ proNamStr, 'all', parNamObj[ proNamStr ] ].includes( traNamStr ) ); // What: Transition Index Number. Why: The covering transition's place picks its duration. How: This finds the first name that covers the property.



			return traIndNum < 0 ? 0 : traDurArr[ traIndNum % traDurArr.length ]; // What: Covering Duration Return. Why: An uncovered property has no transition at all. How: This returns 0 for one, or its listing's duration.


		};



		return { // What: Snapshot Record Return. Why: Each element's record holds its values and durations side by side. How: This reads both for every probed property.


			durArr : proNamArr.map( durProFun ), // What: Duration Array. Why: A property that changes has to ease rather than snap. How: This reads the duration of the transition covering each probed property, or 0 when none does.

			valArr : proNamArr.map( ( proNamStr ) => ( proNamStr === 'border-color' ? borValFun( styCurObj ) : styCurObj.getPropertyValue( proNamStr ).replace( /^matrix\(1, 0, 0, 1, 0, 0\)$/, 'none' ) ) ) // What: Value Array. Why: Two moments are compared property by property. How: This reads each probed property's computed value, taking the border color from its drawn sides only and reading an identity matrix as none, since a transform settled at translateY( 0 ) draws the same as no transform.


		};


	};



	const borIndNum = proNamArr.indexOf( 'border-color' );                                          // What: Border Index Number. Why: An unset border color follows the color, so its place is checked against color's. How: This finds its place, or -1 when it isn't probed.
	const colIndNum = proNamArr.indexOf( 'color' );                                                 // What: Color Index Number. Why: Only color is inherited among the probed properties. How: This finds its place, or -1 when it isn't probed.
	const borColBoo = borIndNum >= 0 && colIndNum >= 0;                                             // What: Border Color Boolean. Why: The currentColor check needs both properties probed. How: This is true when the border color and the color are both in the list.
	const eleLisArr = [ eleCurEle, ...eleCurEle.querySelectorAll( '*' ) ];                          // What: Element List Array. Why: A change to an inner element counts as the element's own. How: This lists the element and everything inside it, parents before children.
	const snaRecArr = eleLisArr.map( ( lisCurEle ) => snaStyFun( getComputedStyle( lisCurEle ) ) ); // What: Snapshot Record Array. Why: Each element is recorded. How: This snapshots every listed element's computed styles.


	for ( const [ lisIndNum, lisCurEle ] of eleLisArr.entries() ) { // What: Inherited Color Loop. Why: An inner element whose color comes from its parent eases with the parent's transition. How: This gives each one whose color matches its parent's the parent's duration, in document order, so it passes down every level.


		const parIndNum = lisCurEle.parentElement ? eleLisArr.indexOf( lisCurEle.parentElement ) : -1; // What: Parent Index Number. Why: Only a parent inside the element passes its color down here. How: This finds the parent's place in the list, or -1.


		if ( parIndNum < 0 || colIndNum < 0 ) continue; // What: No Parent Guard. Why: The element itself, and every element when color isn't probed, keeps its own duration. How: This skips them.



		if ( snaRecArr[ lisIndNum ].valArr[ colIndNum ] === snaRecArr[ parIndNum ].valArr[ colIndNum ] ) snaRecArr[ lisIndNum ].durArr[ colIndNum ] = snaRecArr[ parIndNum ].durArr[ colIndNum ]; // What: Inherited Duration Assignment. Why: A color matching the parent's is the parent's, eased by the parent's transition. How: This copies the parent's color duration.


	}



	for ( const snaRecObj of snaRecArr ) if ( borColBoo && snaRecObj.valArr[ borIndNum ] === snaRecObj.valArr[ colIndNum ] ) snaRecObj.durArr[ borIndNum ] = Math.max( snaRecObj.durArr[ borIndNum ], snaRecObj.durArr[ colIndNum ] ); // What: Current Color Border Loop. Why: A border color matching the element's own color is currentColor, which follows the color as it eases. How: This gives each such border color the longer of its own duration and the color's.



	return snaRecArr; // What: Snapshot Records Return. Why: The caller compares two moments' records. How: This hands back every record.


}

// #endregion snaEleFun



// #region snaProFun

/**
 * snaProFun = Snap Problems Function
 *
 * @summary
 * Compares two snapshots of the same element, taken before and after a
 * change, and returns one problem for each probed property that changed on
 * the element or anything inside it without a transition to ease it, read
 * from the later snapshot, since a change eases with the transition of the
 * state it moves into. A property that snaps on several inner elements is one
 * problem.
 *
 * @author z4nta0 <https://github.com/z4nta0>
 *
 * @param froRecArr - From Record Array: The snapshot before the change.
 * @param tarRecArr - Target Record Array: The snapshot after the change.
 * @param proNamArr - Property Name Array: The probed property names, in the
 *                    snapshots' order.
 * @param desLabStr - Description Label String: The element's name in each
 *                    problem.
 * @param staNamStr - State Name String: The change in each problem, such as
 *                    'when hovered'.
 *
 * @returns One problem per snapped property.
 *
 * @example
 * ```ts
 * snaProFun(resSnaArr, hovSnaArr, CON_PRO_ARR, 'a "Services"', 'when hovered')
 * // => []
 * ```
 *
*/

function snaProFun ( froRecArr : SnaRecTyp[], tarRecArr : SnaRecTyp[], proNamArr : string[], desLabStr : string, staNamStr : string ) : string[] {


	const snaNamSet = new Set< string >(); // What: Snapped Name Set. Why: A property that snaps on several inner elements is one problem. How: This collects each snapped property's name once.


	for ( const [ recIndNum, tarCurObj ] of tarRecArr.entries() ) { // What: Record Compare Loop. Why: Every element of the snapshot has to ease its own probed changes. How: This compares each later record with the earlier one in its place.


		const froCurObj = froRecArr[ recIndNum ]; // What: From Current Object. Why: The change is read against the same element's earlier record. How: This finds it by place.


		if ( !froCurObj ) continue; // What: Missing Record Guard. Why: An element that appeared with the change has nothing to compare with. How: This skips it.



		for ( const [ proIndNum, proNamStr ] of proNamArr.entries() ) if ( froCurObj.valArr[ proIndNum ] !== tarCurObj.valArr[ proIndNum ] && tarCurObj.durArr[ proIndNum ] === 0 ) snaNamSet.add( proNamStr ); // What: Property Compare Loop. Why: A property that changed with nothing to ease it snaps. How: This records each one whose value changed while its later duration is 0.


	}



	return [ ...snaNamSet ].map( ( proNamStr ) => `${ desLabStr } snaps its ${ proNamStr } ${ staNamStr }` ); // What: Snap Problems Return. Why: Each snapped property should be reported plainly. How: This turns each name into a problem line.


}

// #endregion snaProFun



// #region valSigFun

/**
 * valSigFun = Value Signature Function
 *
 * @summary
 * Joins every probed value of a snapshot into one string, so two looks are
 * the same only when every value of every element in them matches. The
 * durations are left out, since only the look is compared.
 *
 * @author z4nta0 <https://github.com/z4nta0>
 *
 * @param snaRecArr - Snapshot Record Array: The snapshot to sign.
 *
 * @returns The snapshot's values as one string.
 *
 * @example
 * ```ts
 * valSigFun(resSnaArr) // => '[["rgb(232, 168, 152)", ...]]'
 * ```
 *
*/

const valSigFun = ( snaRecArr : SnaRecTyp[] ) : string => JSON.stringify( snaRecArr.map( ( snaRecObj ) => snaRecObj.valArr ) ); // What: Value Signature Function. Why: A look is the same between two moments only when every probed value matches. How: This joins every record's values into one string to compare.

// #endregion valSigFun

// #endregion Helpers



// #region Exports

export { cliBloFun, CON_PRO_ARR, FOC_PRO_ARR, movProFun, SET_WAI_NUM, snaEleFun, snaProFun, valSigFun }; // What: Named Exports. Why: More than one spec probes feedback the same way. How: This exports the property lists, the settle wait, the snapshot and comparison helpers, and the click block.

// #endregion Exports


