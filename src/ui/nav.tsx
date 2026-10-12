


// #region Imports

import cssModObj from './nav.module.css';    // What: CSS Module Object. Why: The bar is styled in its own module, whose class names Vite hashes. How: Every element reads its class from this.
import logSvgUrl from '../assets/logo.svg'; // What: Logo SVG URL. Why: The bar's brand opens with the logo. How: Vite resolves this to the image's fingerprinted URL, which the logo's src reads.


import { useEffect    } from 'react';             // What: Use Effect. Why: The open menu makes the page behind it inert and listens for Escape and resizing. How: This applies and removes them as the menu opens and closes.
import { useRef       } from 'react';             // What: Use Ref. Why: The menu's effect needs the bar, the scrim, and the toggle. How: This holds each element.
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

const FAC_PAT_STR = 'M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z'; // What: Facebook Path String. Why: The menu's Facebook link opens with the platform's mark. How: This is the 24 by 24 path from Simple Icons (CC0), the same the-bernie-bears uses.



const FAC_URL_STR = 'https://www.facebook.com/hairdesignscosmetology'; // What: Facebook URL String. Why: The phone menu links to the salon's Facebook page. How: The menu's Facebook link opens this address in a new tab.



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
 * way to its section. Under the links, the menu offers a Call button and a
 * link to the salon's Facebook page, each row fading in just after the one
 * before, over a scrim that dims the page. While it's open the rest of the
 * page is inert; tapping the scrim closes it, Escape closes it and returns
 * focus to the toggle, and widening the screen past 900px closes it, since
 * its toggle is gone. Every link points at its section's address on the
 * home page, which a Ctrl, Cmd, Shift, Alt, or middle click opens, while a
 * plain click goes through secCliFun, scrolling in place without leaving a
 * hash in the address.
 *
 * @author z4nta0 <https://github.com/z4nta0>
 *
 * @param props - This component does not use any props.
 *
 * @returns The scrim, then the bar's header element, holding the brand, the
 *          links, the menu button, and the menu panel.
 *
 * @example
 * ```tsx
 * NavBarCom() // => <NavBarCom />
 * ```
 *
*/

function NavBarCom () : React.JSX.Element {


	const secCliFun = useSecCliFun(); // What: Section Click Function. Why: Every link in the bar reaches its section the same way. How: This leaves a modified click to the browser and otherwise scrolls to the section without a hash.



	const navBarRef = useRef< HTMLElement >( null );       // What: Navigation Bar Reference. Why: The open menu leaves the bar usable while it makes the rest of the page inert. How: This attaches to the header element.
	const scrDivRef = useRef< HTMLDivElement >( null );    // What: Scrim Div Reference. Why: The scrim has to stay tappable while the page behind it is inert. How: This attaches to the scrim.
	const togButRef = useRef< HTMLButtonElement >( null ); // What: Toggle Button Reference. Why: Escape puts focus back on the toggle, and a hidden toggle means the menu no longer applies. How: This attaches to the toggle.

	const [ menOpeBoo, setMenOpeBoo ] = useState( false ); // What: Menu Open Boolean And Setter. Why: The phone menu opens and closes from its button. How: This holds whether it's open, starting closed.



	useEffect( () => { // What: Open Menu Effect. Why: The open menu sits over a dimmed page, so keyboard and screen reader users should stay in the bar until it closes, and it needs the usual ways out. How: While the menu is open, this makes the bar's siblings inert and listens for Escape and resizing, undoing all of it when the menu closes.


		if ( !menOpeBoo ) return; // What: Closed Menu Guard. Why: Only the open menu changes the rest of the page. How: This leaves everything alone while the menu is closed.



		const navBarEle = navBarRef.current!; // What: Navigation Bar Element. Why: The bar stays usable. How: This reads the bar. // What: Non-Null Note. Why: TypeScript can't see the ref is attached. How: Effects run after the bar has rendered.
		const scrDivEle = scrDivRef.current!; // What: Scrim Div Element. Why: The scrim stays tappable to close the menu. How: This reads the scrim. // What: Non-Null Note. Why: TypeScript can't see the ref is attached. How: Effects run after the scrim has rendered.
		const sibEleArr = Array.from( navBarEle.parentElement!.children ).filter( ( sibCurEle ) => sibCurEle !== navBarEle && sibCurEle !== scrDivEle ); // What: Sibling Element Array. Why: The page's main content and footer sit beside the bar. How: This lists the bar's siblings except the scrim. // What: Non-Null Note. Why: TypeScript can't see the bar has a parent. How: The bar always renders inside the app root.
		const togButEle = togButRef.current!; // What: Toggle Button Element. Why: Escape returns focus here, and its visibility says whether the menu still applies. How: This reads the toggle. // What: Non-Null Note. Why: TypeScript can't see the ref is attached. How: Effects run after the toggle has rendered.


		const onKeyDowFun = ( keyEveObj : KeyboardEvent ) => { // What: On Key Down Function. Why: Escape is the expected way out of a layer over the page. How: This closes the menu and puts focus back on the toggle when Escape is pressed.


			if ( keyEveObj.key !== 'Escape' ) return; // What: Escape Key Guard. Why: Only Escape closes the menu. How: This ignores every other key.



			setMenOpeBoo( false ); // What: Menu Close Call. Why: Escape closes the menu. How: This sets the menu state to closed.

			togButEle.focus(); // What: Toggle Focus Call. Why: Focus would otherwise be left inside the closing menu. How: This moves it to the toggle, where the visitor opened the menu.


		};


		const onResWinFun = () => { if ( !togButEle.getClientRects().length ) setMenOpeBoo( false ); }; // What: On Resize Window Function. Why: A screen widened past the phone layout hides the toggle, which would leave the page inert with no way to close the menu. How: This closes the menu once the toggle has no box on the page.


		for ( const sibCurEle of sibEleArr ) sibCurEle.setAttribute( 'inert', '' ); // What: Sibling Inert Loop. Why: Content under the scrim shouldn't take focus or be read while the menu is open. How: This marks each sibling inert.



		document.addEventListener( 'keydown', onKeyDowFun ); // What: Key Down Listener Registration. Why: Escape should close the menu wherever focus is. How: This listens on the whole document.
		window.addEventListener( 'resize', onResWinFun );    // What: Resize Listener Registration. Why: Widening the screen can hide the toggle. How: This rechecks on every resize.



		return () => { // What: Open Menu Cleanup. Why: Closing the menu gives the page back. How: This removes the inert marks and both listeners.


			for ( const sibCurEle of sibEleArr ) sibCurEle.removeAttribute( 'inert' ); // What: Sibling Restore Loop. Why: The page has to be usable again once the menu closes. How: This removes each sibling's inert mark.



			document.removeEventListener( 'keydown', onKeyDowFun ); // What: Key Down Listener Cleanup. Why: Escape should do nothing once the menu is closed. How: This removes the listener.
			window.removeEventListener( 'resize', onResWinFun );    // What: Resize Listener Cleanup. Why: Resizing doesn't matter once the menu is closed. How: This removes the listener.


		};


	}, [ menOpeBoo ] ); // What: Effect Dependency Array. Why: The page's inert state and the listeners have to follow the menu opening and closing. How: menOpeBoo changing reruns the effect, which applies them while it's true and its cleanup removes them.



	return (


		<>{ /* What: Navigation Fragment. Why: The scrim and the bar render side by side, the scrim first. How: This groups them without adding a wrapper element. */ }


			<div
				ref={ scrDivRef }

				className={ cssModObj.navScrDiv }

				data-mobile-menu-open={ menOpeBoo || undefined }

				onClick={ () => setMenOpeBoo( false ) }
			/>{ /* What: Navigation Scrim Div Element. Why: The open menu should stand apart from the page, and tapping anywhere outside it should close it. How: This dims the page while the menu is open, carrying data-mobile-menu-open then, and closes the menu when tapped. */ }



			<header
				ref={ navBarRef }

				className={ cssModObj.navBarHed }
			>{ /* What: Navigation Bar Header Element. Why: The bar is the page's banner, shared by every page. How: This holds the brand, the links, the menu button, and the menu panel. */ }


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
					ref={ togButRef }

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


					{ NAV_LIN_ARR.map( ( linRcdObj, linIndNum ) => ( // What: Menu Link Map. Why: Each section gets a link in the menu. How: This renders one anchor per row, numbering each for the staggered entrance.


						<a
							key={ linRcdObj.ideStr }

							className={ cssModObj.menLinAnc }
							style={ { '--men-ite-ind' : linIndNum } as React.CSSProperties } // What: Menu Item Index Style. Why: Each row fades in just after the one before. How: This hands the row its place, which the stylesheet multiplies into its entrance delay. // What: Type Assertion Note. Why: React's style type doesn't list custom properties. How: The browser accepts any custom property in a style attribute.

							href={ `/#${ linRcdObj.ideStr }` }

							onClick={ ( cliEveObj ) => { if ( secCliFun( cliEveObj, linRcdObj.ideStr ) ) setMenOpeBoo( false ); } } // What: Menu Link Click Handler. Why: A chosen link should close the menu on the way to its section, but a link opened in a new tab leaves the menu as it was. How: This closes the menu only when secCliFun handled the click.
						>{ linRcdObj.labStr }</a> // What: Menu Link Anchor Element. Why: Phones reach each section from the menu. How: This scrolls to the section without a hash and closes the menu behind it.


					))}



					<div className={ cssModObj.menExtDiv }>{ /* What: Menu Extras Div Element. Why: After the links, the menu offers the quickest ways to reach the salon. How: This stacks the Call button and the Facebook link, centered. */ }


						<a
							className={ cssModObj.menCalAnc }
							style={ { '--men-ite-ind' : NAV_LIN_ARR.length } as React.CSSProperties } // What: Menu Item Index Style. Why: The Call button fades in after the links. How: This continues the rows' count. // What: Type Assertion Note. Why: React's style type doesn't list custom properties. How: The browser accepts any custom property in a style attribute.

							href='tel:+1-417-988-6239'
						>Call 417-988-6239</a>{ /* What: Menu Call Anchor Element. Why: The salon works by appointment, so a call is the way to book. How: This dials the salon from the menu. */ }

						<a
							className={ cssModObj.menFacAnc }
							style={ { '--men-ite-ind' : NAV_LIN_ARR.length + 1 } as React.CSSProperties } // What: Menu Item Index Style. Why: The Facebook link fades in last. How: This continues the rows' count. // What: Type Assertion Note. Why: React's style type doesn't list custom properties. How: The browser accepts any custom property in a style attribute.

							href={ FAC_URL_STR }
							rel='noopener noreferrer'
							target='_blank'
						>{ /* What: Menu Facebook Anchor Element. Why: The salon's Facebook page is another way to keep up with it. How: This opens the page in a new tab. */ }


							<svg
								className={ cssModObj.menFacSvg }

								viewBox='0 0 24 24'

								aria-hidden='true'
							>{ /* What: Menu Facebook SVG Element. Why: The link opens with the platform's mark. How: This draws it, hidden from screen readers since the text names the link. */ }


								<path d={ FAC_PAT_STR } />{ /* What: Facebook Path Element. Why: The mark is one path. How: This draws it. */ }


							</svg>

							Find us on Facebook


						</a>


					</div>


				</div>


			</header>


		</>


	);


}

// #endregion NavBarCom

// #endregion Components



// #region Exports

export { NavBarCom }; // What: Named Exports. Why: The app root renders the bar above every page. How: This exports NavBarCom.

// #endregion Exports


