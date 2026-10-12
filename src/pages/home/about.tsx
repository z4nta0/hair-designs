


// #region Imports

import cssModObj from './about.module.css';     // What: CSS Module Object. Why: The About section is styled in its own module, whose class names Vite hashes. How: Every element reads its class from this.
import logSvgUrl from '../../assets/logo.svg'; // What: Logo SVG URL. Why: The stylists' card opens with the logo. How: Vite resolves this to the image's fingerprinted URL, which the logo's src reads.

// #endregion Imports



/**
 * about.tsx = About
 *
 * @summary
 * The home page's About section: a card with the logo, both stylists' names,
 * and their title on a striped navy panel, beside the salon's story and a
 * button to the Contact section.
 *
 * Sections:
 *  - Components
 *  - Exports
 *
 * @author z4nta0 <https://github.com/z4nta0>
 *
*/



// #region Components

// #region AboSecCom

/**
 * AboSecCom = About Section Component
 *
 * @summary
 * Renders the About section, telling the salon's story beside a card naming
 * its two stylists. Its id, about, is the target of the bar's About link.
 *
 * @author z4nta0 <https://github.com/z4nta0>
 *
 * @param props - This component does not use any props.
 *
 * @returns The About section.
 *
 * @example
 * ```tsx
 * AboSecCom() // => <AboSecCom />
 * ```
 *
*/

function AboSecCom () : React.JSX.Element {


	return (


		<section
			id='about'

			className={ cssModObj.homAboSec }
		>{ /* What: Home About Section Element. Why: The page's third section tells the salon's story. How: Its id, about, is kept as a readable word since in-page links put it in the address bar. */ }


			<div className={ cssModObj.aboVisDiv }>{ /* What: About Visual Div Element. Why: The section's visual half holds the stylists' card. How: This sets a positioning context for its panel. */ }


				<div className={ cssModObj.logBacDiv }>{ /* What: Logo Backdrop Div Element. Why: The card sits on the brand's stripes. How: This draws a striped navy panel and centers the card on it. */ }


					<div className={ cssModObj.aboCarDiv }>{ /* What: About Card Div Element. Why: The stylists' details read as a framed card. How: This holds the logo, their names, and their title. */ }


						<img
							className={ cssModObj.aboLogIma }

							src={ logSvgUrl }

							alt='Hair Designs logo of a BOHO arrow and flower arrangement'
						/>{ /* What: About Logo Image Element. Why: The card opens with the logo. How: This shows it above the names. */ }

						<div className={ cssModObj.styNamDiv }>Juli Wilkerson<br /> &amp; Keeli Bryan</div>{ /* What: Stylist Names Div Element. Why: The two stylists sign the card. How: This breaks their names over two lines, the space before the ampersand kept as written. */ }

						<p className={ cssModObj.aboCapPar }>Licensed Cosmetologists</p>{ /* What: About Caption Paragraph Element. Why: The stylists' title follows their names. How: This shows it in italic. */ }


					</div>


				</div>


			</div>



			<div>{ /* What: About Text Div Element. Why: The story forms the section's second column. How: This holds the eyebrow, heading, rule, paragraphs, and button. */ }


				<p className={ cssModObj.eyeLabPar }>Our Story</p>{ /* What: Eyebrow Label Paragraph Element. Why: A script line leads into the heading. How: This shows it above the heading. */ }

				<h2 className={ cssModObj.secTitHea }>Small Town.<br />Big Heart.</h2>{ /* What: Section Title Heading Element. Why: The heading sums up the salon in four words. How: This breaks it over two lines. */ }

				<hr className={ cssModObj.secRulHor } />{ /* What: Section Rule Horizontal Rule Element. Why: A short rose rule underlines the heading. How: This draws it. */ }

				<p className={ cssModObj.aboBodPar }>Tucked along State Hwy 254 in Carson's Corner, Missouri, Hair Designs is a family run salon with heart. Juli Wilkerson and Keeli Bryan bring years of professional cosmetology experience right to your neighborhood with no big city drive required.</p>{ /* What: About Body Paragraph Element. Why: The story opens with where the salon is and who runs it. How: This shows the first paragraph. */ }

				<p className={ cssModObj.aboBodPar }>Whether you're coming in for a quick trim or a complete color transformation, you'll be welcomed like a neighbor, because you are one. We take pride in listening to what you want and delivering results you'll love.</p>{ /* What: About Body Paragraph Element. Why: The story turns to how clients are treated. How: This shows the second paragraph. */ }

				<p className={ cssModObj.aboBodPar }>We serve women, men, and children of all ages. Our cozy salon is the kind of place where you'll leave looking great and feeling like you've caught up with an old friend.</p>{ /* What: About Body Paragraph Element. Why: The story ends with who the salon serves. How: This shows the third paragraph. */ }

				<a
					className={` ${ cssModObj.butBasAnc }   ${ cssModObj.butBasAncPrimary } `}

					href='#contact'
				>Reach Out</a>{ /* What: Primary Button Base Anchor Element. Why: The story ends with a way to reach the salon. How: This jumps to the Contact section. */ }


			</div>


		</section>


	);


}

// #endregion AboSecCom

// #endregion Components



// #region Exports

export { AboSecCom }; // What: Named Exports. Why: The home page renders the About section third. How: This exports AboSecCom.

// #endregion Exports


