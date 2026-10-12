


// #region Imports

import cssModObj from './not-found.module.css'; // What: CSS Module Object. Why: The 404 page is styled in its own module, whose class names Vite hashes. How: Every element reads its class from this.


import { useSecCliFun } from '../../ui/section-link.ts'; // What: Use Section Click Function. Why: The Back Home button reaches the home page the same way the bar's brand does. How: This returns secCliFun, the shared click handler that navigates home without leaving a hash in the address.

// #endregion Imports



/**
 * not-found.tsx = Not Found
 *
 * @summary
 * The page every unknown address lands on: a script eyebrow naming the
 * error, a heading saying the page wasn't found, the short rose rule, one
 * line pointing back to the salon, and two ways onward, home and a call to
 * book. It names itself in the tab and asks search engines not to index it,
 * since the host answers every unknown address with this page and a 200
 * status. The bar and footer around it come from app.tsx, so every section
 * link still works from here.
 *
 * Sections:
 *  - Components
 *  - Exports
 *
 * @author z4nta0 <https://github.com/z4nta0>
 *
*/



// #region Components

// #region NotFouCom

/**
 * NotFouCom = Not Found Component
 *
 * @summary
 * Renders the 404 page's title and its noindex robots tag, which React moves
 * into the document head, then its message, centered in the space between
 * the bar and the footer under the page's one h1. Back Home goes through
 * secCliFun to the home page's top section, the same way the bar's brand
 * does, so it opens the home page at its top with a clean address, and a
 * modified click still opens it in a new tab.
 *
 * @author z4nta0 <https://github.com/z4nta0>
 *
 * @param props - This component does not use any props.
 *
 * @returns The 404 page's title, robots tag, and section element.
 *
 * @example
 * ```tsx
 * NotFouCom() // => <NotFouCom />
 * ```
 *
*/

function NotFouCom () : React.JSX.Element {


	const secCliFun = useSecCliFun(); // What: Section Click Function. Why: The Back Home button reaches the home page the same way the bar's brand does. How: This leaves a modified click to the browser and otherwise navigates home without a hash.



	return (


		<>{ /* What: Not Found Fragment. Why: The page's head tags and its section render side by side. How: This groups them without adding an element. */ }


			<title>Page Not Found | Hair Designs</title>{ /* What: Page Title Element. Why: A visitor's tab and history should say the address they tried doesn't exist. How: React 19 moves this title into the document head while the page is shown. */ }

			<meta
				name='robots'

				content='noindex'
			/>{ /* What: Robots Meta Element. Why: The host answers every unknown path with the site and a 200 status, so search engines would otherwise index this page under every mistyped address. How: React 19 moves this tag into the document head while the page is shown. */ }


			<section className={ cssModObj.nofPagSec }>{ /* What: Not-Found Page Section Element. Why: An unknown address should land somewhere useful. How: This fills the space between the bar and the footer and centers its message there. */ }


				<p className={ cssModObj.eyeLabPar }>Oops, error 404</p>{ /* What: Eyebrow Label Paragraph Element. Why: A script line says what happened before the heading. How: This shows it above the heading. */ }

				<h1 className={ cssModObj.secTitHea }>Page not <em className={ cssModObj.titAccEmp }>found</em></h1>{ /* What: Section Title Heading Element. Why: The page's one heading says the page wasn't found. How: The last word is set apart in rose italic. */ }

				<hr className={ cssModObj.secRulHor } />{ /* What: Section Rule Horizontal Rule Element. Why: A short rose rule underlines the heading, as on every section. How: This draws it, centered. */ }

				<p className={ cssModObj.nofLedPar }>The page you're looking for doesn't exist, but we're still right here in Carson's Corner. Head back home, or give us a call to book your next appointment.</p>{ /* What: Not-Found Lede Paragraph Element. Why: The page points the visitor back to the salon. How: This shows one short paragraph under the rule. */ }

				<div className={ cssModObj.nofActDiv }>{ /* What: Not-Found Actions Div Element. Why: The page's two ways onward sit together. How: This sets the buttons side by side, wrapping when they run out of room. */ }


					<a
						className={` ${ cssModObj.butBasAnc }   ${ cssModObj.butBasAncPrimary } `}

						href='/#home'

						onClick={ ( cliEveObj ) => secCliFun( cliEveObj, 'home' ) }
					>Back Home</a>{ /* What: Primary Button Base Anchor Element. Why: Going home is the clearest way onward. How: This navigates to the home page's top without leaving a hash in the address, or opens it in a new tab on a modified click. */ }

					<a
						className={` ${ cssModObj.butBasAnc }   ${ cssModObj.butBasAncOutline } `}

						href='tel:+1-417-988-6239'
					>Call 417-988-6239</a>{ /* What: Outline Button Base Anchor Element. Why: The salon books by phone, so a call is its main action. How: This dials the salon. */ }


				</div>


			</section>


		</>


	);


}

// #endregion NotFouCom

// #endregion Components



// #region Exports

export { NotFouCom }; // What: Named Exports. Why: The router renders the 404 page for every unknown address. How: This exports NotFouCom.

// #endregion Exports


