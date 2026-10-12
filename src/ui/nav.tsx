


// #region Imports

import cssModObj from './nav.module.css';    // What: CSS Module Object. Why: The bar is styled in its own module, whose class names Vite hashes. How: Every element reads its class from this.
import logSvgUrl from '../assets/logo.svg'; // What: Logo SVG URL. Why: The bar's brand opens with the logo. How: Vite resolves this to the image's fingerprinted URL, which the logo's src reads.


import { useSecCliFun } from './section-link.ts'; // What: Use Section Click Function. Why: Every link in the bar reaches its section the same way, leaving no hash in the address. How: This returns secCliFun, the shared click handler.
import { useState     } from 'react';             // What: Use State. Why: The bar tracks whether the phone menu is open. How: This holds that flag.

// #endregion Imports



/**
 * nav.tsx = Navigation
 *
 * @summary
 * The fixed bar at the top of every page: the logo and name, which lead back
 * to the top, and the links to each section of the home page. At 900px and
 * narrower the links no longer fit, so a menu button takes their place and
 * opens a panel below the bar holding the same links. The panel is inert
 * while closed, so its links stay out of the keyboard's way, and choosing a
 * link closes it on the way to its section.
 *
 * Sections:
 *  - Constants
 *  - Components
 *  - Exports
 *
 * @author z4nta0 <https://github.com/z4nta0>
 *
*/



// #region Constants

/**
 * NAV_LIN_ARR = Navigation Link Array
 *
 * @summary
 * The section links the bar and the phone menu both render, in page order.
 * Every row shares one shape, so its fields carry no comments of their own:
 * - `ideStr` (String): Identifier String, the section's id.
 * - `labStr` (String): Label String, the link's text.
 *
 * @author z4nta0 <https://github.com/z4nta0>
 *
*/

const NAV_LIN_ARR = [ // What: Navigation Link Array. Why: The bar and the phone menu list the same links, so they're defined once. How: Each row pairs a section's id with the link's label.


	{ ideStr : 'home',     labStr : 'Home'     },
	{ ideStr : 'services', labStr : 'Services' },
	{ ideStr : 'about',    labStr : 'About'    },
	{ ideStr : 'contact',  labStr : 'Contact'  }


];

// #endregion Constants



// #region Components

// #region NavBarCom

/**
 * NavBarCom = Navigation Bar Component
 *
 * @summary
 * Renders the fixed top bar: the brand linking to the top of the page, the
 * row of section links on wide screens, and on narrow screens the menu
 * button and the panel it opens. The panel is inert while closed, so its
 * links stay out of the focus order, and each of its links closes it on the
 * way to its section. Every link points at its section's address on the
 * home page, which a Ctrl, Cmd, Shift, Alt, or middle click opens, while a
 * plain click goes through secCliFun, scrolling in place without leaving a
 * hash in the address.
 *
 * @author z4nta0 <https://github.com/z4nta0>
 *
 * @param props - This component does not use any props.
 *
 * @returns The bar's header element, holding the brand, the links, the menu
 *          button, and the menu panel.
 *
 * @example
 * ```tsx
 * NavBarCom() // => <NavBarCom />
 * ```
 *
*/

function NavBarCom () : React.JSX.Element {


	const secCliFun = useSecCliFun(); // What: Section Click Function. Why: Every link in the bar reaches its section the same way. How: This leaves a modified click to the browser and otherwise scrolls to the section without a hash.

	const [ menOpeBoo, setMenOpeBoo ] = useState( false ); // What: Menu Open Boolean And Setter. Why: The phone menu opens and closes from its button. How: This holds whether it's open, starting closed.



	return (


		<header className={ cssModObj.navBarHed }>{ /* What: Navigation Bar Header Element. Why: The bar is the page's banner, shared by every page. How: This holds the brand, the links, the menu button, and the menu panel. */ }


			<a
				className={ cssModObj.navBraAnc }

				href='/#home'

				onClick={ ( cliEveObj ) => secCliFun( cliEveObj, 'home' ) }
			>{ /* What: Navigation Brand Anchor Element. Why: The brand doubles as a way back to the top. How: This scrolls to the home section, leaving no hash in the address. */ }


				<img
					className={ cssModObj.navLogIma }

					src={ logSvgUrl }

					alt=''
				/>{ /* What: Navigation Logo Image Element. Why: The bar's brand opens with the logo. How: Its alt text is empty, since the name sits right beside it and already names the link. */ }

				<span className={ cssModObj.braNamSpa }>Hair Designs</span>{ /* What: Brand Name Span Element. Why: The salon's name completes the brand. How: This shows it beside the logo. */ }


			</a>



			<nav
				className={ cssModObj.navLinNav }

				aria-label='Main'
			>{ /* What: Navigation Links Nav Element. Why: Wide screens show the section links in the bar. How: This labels the landmark Main, which screen readers announce as the main navigation. */ }


				<ul className={ cssModObj.navLinUno }>{ /* What: Navigation Links Unordered List Element. Why: The links form one list of the page's sections. How: This holds one item per link. */ }


					{ NAV_LIN_ARR.map( ( linRcdObj ) => ( // What: Link Item Map. Why: Each section gets a link in the bar. How: This renders one list item per row.


						<li key={ linRcdObj.ideStr }>{ /* What: Link Item Element. Why: Each link is one item of the list. How: This holds it. */ }


							<a
								className={ cssModObj.navLinAnc }

								href={ `/#${ linRcdObj.ideStr }` }

								onClick={ ( cliEveObj ) => secCliFun( cliEveObj, linRcdObj.ideStr ) }
							>{ linRcdObj.labStr }</a>{ /* What: Navigation Link Anchor Element. Why: Each link takes the visitor to its section. How: Its address points at the home page's section, which a modified click opens, while a plain click scrolls there without a hash. */ }


						</li>

					))}


				</ul>


			</nav>



			<button
				className={ cssModObj.navTogBut }

				type='button'

				aria-expanded={ menOpeBoo }
				aria-label='Toggle menu'

				onClick={ () => setMenOpeBoo( ( preOpeBoo ) => !preOpeBoo ) }
			>{ /* What: Navigation Toggle Button Element. Why: At 900px and narrower the links no longer fit in the bar. How: This opens and closes the menu panel, reporting its state through aria-expanded, which also turns its three lines into a cross. */ }


				<span className={ cssModObj.togLinSpa } />{ /* What: Toggle Line Span Element. Why: Three lines draw the menu icon. How: This is the first, which tilts down into the cross. */ }

				<span className={ cssModObj.togLinSpa } />{ /* What: Toggle Line Span Element. Why: Three lines draw the menu icon. How: This is the second, which fades out of the cross. */ }

				<span className={ cssModObj.togLinSpa } />{ /* What: Toggle Line Span Element. Why: Three lines draw the menu icon. How: This is the third, which tilts up into the cross. */ }


			</button>

			<div
				className={ cssModObj.navMenDiv }

				data-mobile-menu-open={ menOpeBoo || undefined }

				inert={ !menOpeBoo } // What: Closed Menu Inert Flag. Why: The closed panel is only faded out, so its links would otherwise still take keyboard focus while hidden. How: This makes the panel and its links unfocusable and hidden from screen readers until it opens.
			>{ /* What: Navigation Menu Div Element. Why: Phones need the section links somewhere once the bar hides them. How: This drops below the bar with the same links, carrying data-mobile-menu-open while it's open. */ }


				{ NAV_LIN_ARR.map( ( linRcdObj ) => ( // What: Menu Link Map. Why: Each section gets a link in the menu. How: This renders one anchor per row.


					<a
						key={ linRcdObj.ideStr }

						className={ cssModObj.menLinAnc }

						href={ `/#${ linRcdObj.ideStr }` }

						onClick={ ( cliEveObj ) => { if ( secCliFun( cliEveObj, linRcdObj.ideStr ) ) setMenOpeBoo( false ); } } // What: Menu Link Click Handler. Why: A chosen link should close the menu on the way to its section, but a link opened in a new tab leaves the menu as it was. How: This closes the menu only when secCliFun handled the click.
					>{ linRcdObj.labStr }</a> // What: Menu Link Anchor Element. Why: Phones reach each section from the menu. How: This scrolls to the section without a hash and closes the menu behind it.


				))}


			</div>


		</header>


	);


}

// #endregion NavBarCom

// #endregion Components



// #region Exports

export { NavBarCom }; // What: Named Exports. Why: The app root renders the bar above every page. How: This exports NavBarCom.

// #endregion Exports


