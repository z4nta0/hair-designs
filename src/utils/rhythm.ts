


/**
 * rhythm.ts = Rhythm
 *
 * @summary
 * The vertical rhythm's step sizes in pixels, for layout math that works with
 * measured element positions (such as placing a tooltip). Every step is the
 * root font size times a power of the core design number, the same formula
 * styles.css uses for its --ver-rhy-* tokens, so a step read here always
 * matches the stylesheet's own value. Adapted from ease-my-life's own, keeping
 * only the pixel helper this site uses.
 *
 * Sections:
 *  - Constants
 *  - Helpers
 *  - Exports
 *
 * @author z4nta0 <https://github.com/z4nta0>
 *
*/



// #region Constants

const COR_DES_NUM = ( Math.cbrt( 108 + 12 * Math.sqrt( 69 ) ) + Math.cbrt( 108 - 12 * Math.sqrt( 69 ) ) ) / 6; // What: Core Design Number. Why: Every rhythm step is a power of the plastic ratio, the same core design number styles.css starts from. How: This solves for it with the same cube-root formula as the stylesheet's --cor-des-num, about 1.325.

// #endregion Constants



// #region Helpers

const steOffFun = ( steNamStr : string ) => steNamStr === 'bas' ? 0 : ( steNamStr[ 0 ] === 'p' ? 1 : -1 ) * Number( steNamStr.slice( 1 ) ); // What: Step Offset Function. Why: The rhythm names its steps by their offset from a base step. How: This returns 0 for 'bas', NN for 'pNN', and -NN for 'mNN'.



// #region rhyPixFun

/**
 * rhyPixFun = Rhythm Pixel Function
 *
 * @summary
 * The pixel size of one vertical rhythm step, named the way the stylesheet
 * names it: 'bas' for the base step, 'pNN' for NN steps above it, and 'mNN'
 * for NN steps below it. The base step is the first power of the core design
 * number, so 'p03' is the fourth power and 'm01' the zeroth. It reads the
 * root font size on every call, so a change to the browser's font size is
 * picked up without a reload.
 *
 * @author z4nta0 <https://github.com/z4nta0>
 *
 * @param rhySteStr - Rhythm Step String: The step's name, e.g. 'bas', 'p03',
 *                    or 'm02'.
 *
 * @returns The step's size in pixels at the current root font size.
 *
 * @example
 * ```ts
 * rhyPixFun('bas') // => about 14.57 at an 11px root font size
 * ```
 *
*/

const rhyPixFun = ( rhySteStr : string ) : number => { // What: Rhythm Pixel Function. Why: Layout math that works in pixels needs the same step sizes the stylesheet uses. How: This turns the step's name into a power of the core design number and multiplies the root font size by it.


	const powValNum = 1 + steOffFun( rhySteStr );                                                // What: Power Value Number. Why: Each step is a power of the core design number, counted from the base step's first power. How: This adds the step's offset to that first power.
	const rooPixNum = parseFloat( getComputedStyle( document.documentElement ).fontSize ) || 11; // What: Root Pixel Number. Why: Every step scales with the root font size, which follows the browser's own font size setting. How: This reads the root element's computed font size, falling back to the 11px default.



	return rooPixNum * Math.pow( COR_DES_NUM, powValNum ); // What: Step Pixel Return. Why: The caller needs the step's size in pixels. How: This scales the root pixel size by the core design number raised to the step's power.


};

// #endregion rhyPixFun

// #endregion Helpers



// #region Exports

export { rhyPixFun }; // What: Named Export. Why: Pixel layout math reads the stylesheet's rhythm through this helper. How: This exports rhyPixFun by name.

// #endregion Exports


