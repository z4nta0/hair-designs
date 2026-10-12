


// #region Imports

import cssModObj from './footer.module.css'; // What: CSS Module Object. Why: The footer is styled in its own module, whose class names Vite hashes. How: Every element reads its class from this.

// #endregion Imports



/**
 * footer.tsx = Footer
 *
 * @summary
 * The site's footer, with the copyright line naming the salon, its
 * stylists, its town, and its phone number. It lives in ui/ since every page
 * renders it, after the main element, where it's the page's contentinfo
 * landmark.
 *
 * Sections:
 *  - Components
 *  - Exports
 *
 * @author z4nta0 <https://github.com/z4nta0>
 *
*/



// #region Components

// #region SitFooCom

/**
 * SitFooCom = Site Footer Component
 *
 * @summary
 * Renders the footer below every page's main content: one centered
 * copyright line, with the salon's name and phone number in light rose.
 *
 * @author z4nta0 <https://github.com/z4nta0>
 *
 * @param props - This component does not use any props.
 *
 * @returns The footer.
 *
 * @example
 * ```tsx
 * SitFooCom() // => <SitFooCom />
 * ```
 *
*/

function SitFooCom () : React.JSX.Element {


	return (


		<footer className={ cssModObj.sitFooFoo }>{ /* What: Site Footer Footer Element. Why: Every page ends with the salon's details. How: This is the page's contentinfo landmark, holding the copyright line. */ }


			<p>{ /* What: Copyright Line Paragraph Element. Why: The footer's one line names the salon, its stylists, its town, and its number. How: This holds the line, whose spaces sit inside its two spans, kept as written since JSX drops the line breaks between them. */ }


				© 2026

				<span className={ cssModObj.copAccSpa }> Hair Designs </span>{ /* What: Copyright Accent Span Element. Why: The salon's name stands out in the line. How: This colors it light rose. */ }

				· Juli Wilkerson &amp; Keeli Bryan · Carson's Corner, Mo. ·

				<span className={ cssModObj.copAccSpa }> 417-988-6239 </span>{ /* What: Copyright Accent Span Element. Why: The phone number stands out in the line. How: This colors it light rose. */ }


			</p>


		</footer>


	);


}

// #endregion SitFooCom

// #endregion Components



// #region Exports

export { SitFooCom }; // What: Named Exports. Why: The app root renders the footer below every page. How: This exports SitFooCom.

// #endregion Exports


