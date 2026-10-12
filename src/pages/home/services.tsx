


// #region Imports

import cssModObj from './services.module.css'; // What: CSS Module Object. Why: The Services section is styled in its own module, whose class names Vite hashes. How: Every element reads its class from this.

// #endregion Imports



/**
 * services.tsx = Services
 *
 * @summary
 * The home page's Services section: a header with a script eyebrow, the
 * heading, a short rose rule, and an intro, above a grid of six cards, one
 * per service, each with a small line icon, a title, and a description.
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

// #region SER_CAR_ARR

/**
 * SER_CAR_ARR = Services Card Array
 *
 * @summary
 * The six service cards, in the order they appear. Every row shares one
 * shape, so its fields carry no comments of their own:
 * - `desStr` (String): Description String, the card's text.
 * - `icoClaStr` (String): Icon Class String, the icon's color modifier
 *   class, which its shapes read as currentColor.
 * - `icoEle` (Element): Icon Element, the icon's shapes, drawn inside a
 *   44 by 44 view box. Each icon is one self-contained piece of markup, so
 *   it stays on one line with no comments on its shapes.
 * - `titStr` (String): Title String, the service's name.
 *
 * @author z4nta0 <https://github.com/z4nta0>
 *
*/

const SER_CAR_ARR = [ // What: Services Card Array. Why: The six cards share one layout and differ only in their content. How: Each row holds one card's icon, title, and description.


	{ // What: Cuts And Styling Card.


		icoClaStr : cssModObj.carIcoSvgRose,
		titStr    : 'Cuts & Styling',

		desStr : 'Precision cuts for women, men, and children. Blowouts, updos, and everyday styles tailored to you.',
		icoEle : <><circle className={ cssModObj.icoRinCir } cx='22' cy='22' r='20' /><path className={ cssModObj.icoFilPat } d='M14 14 Q22 10 30 14 Q26 22 22 28 Q18 22 14 14Z' /><line className={ cssModObj.icoStrLin } x1='22' x2='22' y1='28' y2='34' /></>


	},

	{ // What: Color And Highlights Card.


		icoClaStr : cssModObj.carIcoSvgSage,
		titStr    : 'Color & Highlights',

		desStr : 'Full color, balayage, highlights, and toning. Vibrant results using quality professional products.',
		icoEle : <><circle className={ cssModObj.icoRinCir } cx='22' cy='22' r='20' /><path className={ cssModObj.icoFilPat } d='M12 22 Q18 14 22 20 Q26 14 32 22 Q26 30 22 26 Q18 30 12 22Z' /></>


	},

	{ // What: Perms And Texture Card.


		icoClaStr : cssModObj.carIcoSvgMauve,
		titStr    : 'Perms & Texture',

		desStr : 'Body waves, curls, and relaxers. We work with your natural hair to create texture that lasts.',
		icoEle : <><circle className={ cssModObj.icoRinCir } cx='22' cy='22' r='20' /><path className={ cssModObj.icoFilPat } d='M16 16 Q22 12 28 16 L30 28 Q22 32 14 28Z' /><circle className={` ${ cssModObj.icoDotCir }   ${ cssModObj.icoDotCirPlum } `} cx='22' cy='22' r='4' /></>


	},

	{ // What: Special Occasions Card.


		icoClaStr : cssModObj.carIcoSvgRose,
		titStr    : 'Special Occasions',

		desStr : 'Weddings, proms, and events. Let us make sure you look and feel your absolute best on the big day.',
		icoEle : <><circle className={ cssModObj.icoRinCir } cx='22' cy='22' r='20' /><rect className={ cssModObj.icoFilRec } rx='3' x='14' y='16' /><line className={ cssModObj.icoStrLin } x1='18' x2='18' y1='16' y2='12' /><line className={ cssModObj.icoStrLin } x1='26' x2='26' y1='16' y2='12' /></>


	},

	{ // What: Men's Cuts Card.


		icoClaStr : cssModObj.carIcoSvgSage,
		titStr    : "Men's Cuts",

		desStr : 'Classic cuts, fades, and tapers for the gentlemen too. Everyone is welcome at Hair Designs.',
		icoEle : <><circle className={ cssModObj.icoRinCir } cx='22' cy='22' r='20' /><path className={` ${ cssModObj.icoFilPat }   ${ cssModObj.icoFilPatSoft } `} d='M17 17 L27 17 L25 29 L19 29Z' /><line className={` ${ cssModObj.icoStrLin }   ${ cssModObj.icoStrLinBold } `} x1='14' x2='30' y1='17' y2='17' /></>


	},

	{ // What: Hair Treatments Card.


		icoClaStr : cssModObj.carIcoSvgMauve,
		titStr    : 'Hair Treatments',

		desStr : 'Deep conditioning, glosses, and scalp treatments to keep your hair healthy and hydrated.',
		icoEle : <><circle className={ cssModObj.icoRinCir } cx='22' cy='22' r='20' /><path className={ cssModObj.icoStrPat } d='M12 28 Q17 18 22 24 Q27 18 32 28' /><circle className={ cssModObj.icoDotCir } cx='22' cy='16' r='5' /></>


	}


];

// #endregion SER_CAR_ARR

// #endregion Constants



// #region Components

// #region SerSecCom

/**
 * SerSecCom = Services Section Component
 *
 * @summary
 * Renders the Services section: its header, then one card per row of
 * SER_CAR_ARR, each with its icon (hidden from screen readers, since the
 * title names the service), its title, and its description. Its id,
 * services, is the target of the bar's Services link and the hero's Our
 * Services button.
 *
 * @author z4nta0 <https://github.com/z4nta0>
 *
 * @param props - This component does not use any props.
 *
 * @returns The Services section.
 *
 * @example
 * ```tsx
 * SerSecCom() // => <SerSecCom />
 * ```
 *
*/

function SerSecCom () : React.JSX.Element {


	return (


		<section
			id='services'

			className={ cssModObj.homSerSec }
		>{ /* What: Home Services Section Element. Why: The page's second section lists the services. How: Its id, services, is kept as a readable word since in-page links put it in the address bar. */ }


			<header className={ cssModObj.serHeaHed }>{ /* What: Services Header Header Element. Why: The section opens with its heading and intro. How: This stacks the eyebrow, heading, rule, and intro. */ }


				<p className={ cssModObj.eyeLabPar }>What We Do</p>{ /* What: Eyebrow Label Paragraph Element. Why: A script line leads into the heading. How: This shows it above the heading. */ }

				<h2 className={ cssModObj.secTitHea }>Our Services</h2>{ /* What: Section Title Heading Element. Why: The section's heading names it. How: This shows it. */ }

				<hr className={ cssModObj.secRulHor } />{ /* What: Section Rule Horizontal Rule Element. Why: A short rose rule underlines the heading. How: This draws it. */ }

				<p className={ cssModObj.serIntPar }>From a fresh trim to a full color transformation, Juli and Keeli bring skill, care, and small town warmth to every client who sits in their chair.</p>{ /* What: Services Intro Paragraph Element. Why: A short intro sums up the services. How: This shows it under the rule. */ }


			</header>



			<div className={ cssModObj.serGriDiv }>{ /* What: Services Grid Div Element. Why: The cards fill rows that adapt to the screen. How: This holds one card per service. */ }


				{ SER_CAR_ARR.map( ( carRcdObj ) => ( // What: Services Card Map. Why: Each service gets a card. How: This renders one card per row.


					<div
						key={ carRcdObj.titStr }

						className={ cssModObj.serCarDiv }
					>{ /* What: Services Card Div Element. Why: Each service is a card. How: This holds its icon, title, and description. */ }


						<svg
							className={` ${ cssModObj.carIcoSvg }   ${ carRcdObj.icoClaStr } `}

							viewBox='0 0 44 44'

							aria-hidden='true'
						>{ carRcdObj.icoEle }</svg>{ /* What: Card Icon SVG Element. Why: Each card opens with a small icon in its own color. How: This draws the row's shapes, hidden from screen readers since the title names the service. */ }

						<h3 className={ cssModObj.carTitHea }>{ carRcdObj.titStr }</h3>{ /* What: Card Title Heading Element. Why: Each card names its service. How: This shows the row's title. */ }

						<p className={ cssModObj.carDesPar }>{ carRcdObj.desStr }</p>{ /* What: Card Description Paragraph Element. Why: Each card describes its service. How: This shows the row's description. */ }


					</div>

				))}


			</div>


		</section>


	);


}

// #endregion SerSecCom

// #endregion Components



// #region Exports

export { SerSecCom }; // What: Named Exports. Why: The home page renders the Services section second. How: This exports SerSecCom.

// #endregion Exports


