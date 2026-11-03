


// #region Imports

import cssModObj from './hero.module.css';     // What: CSS Module Object. Why: The hero is styled in its own module, whose class names Vite hashes. How: Its elements read their classes from this.
import logSvgUrl from '../../assets/logo.svg'; // What: Logo SVG URL. Why: The hero's centerpiece is the logo. How: Vite resolves this to the image's fingerprinted URL, which the logo's src reads.


import { useSecCliFun } from '../../ui/section-link.ts'; // What: Use Section Click Function. Why: The hero's buttons reach their sections the same way the bar does. How: This returns secCliFun, the shared click handler that scrolls to a section without leaving a hash in the address.

// #endregion Imports



/**
 * hero.tsx = Hero
 *
 * @summary
 * The home page's opening section: the logo on a striped navy panel beside the
 * welcome (stacked at 900px and narrower), with the salon's name, its trade
 * and town, both stylists, and buttons to the Services and Contact sections,
 * then a navy bar with the phone number and address. Both panels' contents
 * rise into place as the page opens.
 *
 * Sections:
 *  - Components
 *  - Exports
 *
 * @author z4nta0 <https://github.com/z4nta0>
 *
*/



// #region Components

// #region HerSecCom

/**
 * HerSecCom = Hero Section Component
 *
 * @summary
 * Renders the hero section, the first thing a visitor sees: the logo panel and
 * the welcome panel side by side (stacked at 900px and narrower), then the bar
 * with the phone number and address. Its ID, `home`, is the target of the
 * page's links to the top of the home page.
 *
 * @author z4nta0 <https://github.com/z4nta0>
 *
 * @param props - This component does not use any props.
 *
 * @returns The hero section.
 *
 * @example
 * ```tsx
 * HerSecCom() // => <HerSecCom />
 * ```
 *
*/

function HerSecCom () : React.JSX.Element {


	const secCliFun = useSecCliFun(); // What: Section Click Function. Why: The hero's buttons reach their sections the same way the bar does. How: This leaves a modified click to the browser and otherwise scrolls to the section without a hash.



	return (


		<section
			id='home'

			className={ cssModObj.homHerSec }
		>{ /* What: Home Hero Section Element. Why: The page opens with the hero. How: Its ID, `home`, is kept as a readable word since the links to it name it in their addresses (/#home). */ }


			<div className={ cssModObj.herGriDiv }>{ /* What: Hero Grid Div Element. Why: The logo and the welcome share the screen. How: This splits it into two columns, stacked at 900px and narrower. */ }


				<div className={ cssModObj.herLefDiv }>{ /* What: Hero Left Div Element. Why: The logo sits on the brand's stripes. How: This centers it on striped navy, with a rose divider at its edge above 900px. */ }


					<div className={ cssModObj.herLogDiv }>{ /* What: Hero Logo Div Element. Why: The logo should rise into place as the page opens. How: This plays the entrance for it. */ }


						<img
							className={ cssModObj.herLogIma }

							src={ logSvgUrl }

							alt='Hair Designs logo of a BOHO arrow and flower arrangement'
						/>{ /* What: Hero Logo Image Element. Why: The logo is the hero's centerpiece. How: This shows it large on the stripes. */ }


					</div>


				</div>



				<div className={ cssModObj.herRigDiv }>{ /* What: Hero Right Div Element. Why: The welcome sits on a warm light panel. How: This centers it on cream. */ }


					<div className={ cssModObj.herConDiv }>{ /* What: Hero Content Div Element. Why: The welcome should rise into place just after the logo. How: This plays the entrance for it. */ }


						<p className={ cssModObj.eyeLabPar }>Welcome to</p>{ /* What: Eyebrow Label Paragraph Element. Why: A script line leads into the salon's name. How: This shows it above the heading. */ }

						<h1 className={ cssModObj.herTitHea }>Hair<br /><em className={ cssModObj.titAccEmp }>Designs</em></h1>{ /* What: Hero Title Heading Element. Why: The salon's name is the page's main heading. How: This breaks it over two lines, the second set apart in italic. */ }

						<p className={ cssModObj.herSubPar }>Cosmetology · Carson's Corner, Mo.</p>{ /* What: Hero Subheading Paragraph Element. Why: The trade and the town follow the name. How: This shows them in spaced capitals. */ }

						<hr className={ cssModObj.herRulHor } />{ /* What: Hero Rule Horizontal Rule Element. Why: A short rose rule divides the name from the stylists. How: This draws it. */ }

						<div className={ cssModObj.styNamDiv }>{ /* What: Stylist Names Div Element. Why: The two stylists sign the welcome. How: This stacks their names around an ampersand. */ }


							<span className={ cssModObj.styNamSpa }>Juli Wilkerson</span>{ /* What: Stylist Name Span Element. Why: The first stylist is named. How: This shows her name on its own line. */ }

							<span className={ cssModObj.styNamSpa }>&</span>{ /* What: Stylist Name Span Element. Why: The names are joined like a signature. How: This shows the ampersand on its own line. */ }

							<span className={ cssModObj.styNamSpa }>Keeli Bryan</span>{ /* What: Stylist Name Span Element. Why: The second stylist is named. How: This shows her name on its own line. */ }


						</div>

						<p className={ cssModObj.herCapPar }>Licensed Cosmetologists</p>{ /* What: Hero Caption Paragraph Element. Why: The stylists' title follows their names. How: This shows it in italic. */ }

						<div className={ cssModObj.herActDiv }>{ /* What: Hero Actions Div Element. Why: The welcome ends with two ways onward. How: This sets the buttons in a row, wrapping onto two lines at about 416px wide and below. */ }


							<a
								className={` ${ cssModObj.butBasAnc }   ${ cssModObj.butBasAncPrimary } `}

								href='/#services'

								onClick={ ( cliEveObj ) => secCliFun( cliEveObj, 'services' ) }
							>Our Services</a>{ /* What: Button Base Anchor Primary Element. Why: Seeing the services is the main next step. How: This scrolls to the Services section without leaving a hash in the address, or opens it in a new tab on a modified click. */ }

							<a
								className={` ${ cssModObj.butBasAnc }   ${ cssModObj.butBasAncOutline } `}

								href='/#contact'

								onClick={ ( cliEveObj ) => secCliFun( cliEveObj, 'contact' ) }
							>Get in Touch</a>{ /* What: Button Base Anchor Outline Element. Why: Reaching the salon is the other next step. How: This scrolls to the Contact section without leaving a hash in the address, or opens it in a new tab on a modified click. */ }


						</div>


					</div>


				</div>


			</div>



			<div className={ cssModObj.herBarDiv }>{ /* What: Hero Bar Div Element. Why: The phone number and address belong right under the welcome. How: This sets them in a navy band below the panels. */ }


				<div className={ cssModObj.barIteDiv }>{ /* What: Bar Item Div Element. Why: The phone number pairs with its icon. How: This centers them as one line of text, the icon inline before the number. */ }


					<svg
						className={ cssModObj.barIcoSvg }

						strokeWidth='1.8'
						viewBox='0 0 24 24'

						aria-hidden='true'
					>{ /* What: Bar Icon SVG Element. Why: A phone icon marks the number. How: This draws it, hidden from screen readers since the number beside it says what it is. */ }


						<path d='M3 5h2l1 5-2 2a16 16 0 006 6l2-2 5 1v2a2 2 0 01-2 2C8 21 3 16 3 7a2 2 0 012-2z' />{ /* What: Phone Path Element. Why: The phone icon is one shape. How: This draws its outline. */ }


					</svg>

					<span>417-988-6239</span>{ /* What: Phone Number Span Element. Why: The salon's number is the main way to reach it. How: This shows it. */ }


				</div>


				<div className={ cssModObj.barIteDiv }>{ /* What: Bar Item Div Element. Why: The address pairs with its icon. How: This centers them as one line of text, the icon inline before the address so it stays with the first line when the address wraps. */ }


					<svg
						className={ cssModObj.barIcoSvg }

						strokeWidth='1.8'
						viewBox='0 0 24 24'

						aria-hidden='true'
					>{ /* What: Bar Icon SVG Element. Why: A map pin marks the address. How: This draws it, hidden from screen readers since the address beside it says what it is. */ }


						<path d='M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z' />{ /* What: Pin Path Element. Why: The map pin is one shape. How: This draws its outline. */ }


					</svg>

					<span>24579 State Hwy 254 · Carson's Corner, Mo. 65668</span>{ /* What: Address Span Element. Why: The salon's address tells visitors where to find it. How: This shows it. */ }


				</div>


			</div>


		</section>


	);


}

// #endregion HerSecCom

// #endregion Components



// #region Exports

export { HerSecCom }; // What: Named Export. Why: The home page renders the hero first. How: This exports HerSecCom.

// #endregion Exports


