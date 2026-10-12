


// #region Imports

import styles from './footer.module.css'; // What: Styles. Why: The footer is styled in its own module. How: Each element reads its hashed class from this.

// #endregion Imports



/**
 * footer.tsx = Footer
 *
 * @summary
 * The site's footer, with the copyright line naming the salon, its stylists,
 * its town, and its phone number. It lives in ui/ since every page renders it,
 * and moved out of the home page during the directory move; its markup is
 * unchanged until the formatting pass.
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
 * Renders the footer below every page's main content, as the page's
 * contentinfo landmark.
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


        <  footer id='fooFooEle' className={ styles.footbarFooter } > { /* What : Footbar Footer Element. Why : A semantic element was required to provide footer content for the page. How : Using a standard HTML <footer> element. */ }


            {/* ══ Start fooParEle ══ */}

            < p id='fooParEle' className={ styles.footerParagraph } > { /* What : Footer Paragraph Element. Why : A semantic element was required to provide text content within the footer. How : Using a standard HTML <p> element. */ }


                © 2026

                < span id='fonSpaEle' className={ ` ${ styles.footerSpan }   ${ styles.footerSpan_name } ` } > Hair Designs </ span > { /* What : Footer Name Span Element. Why : An inline text container was required to contain and stylize (colored) the name of the salon within the footer paragraph element. How : Using a standard HTML <span> element. */ }

                · Juli Wilkerson &amp; Keeli Bryan · Carson's Corner, Mo. ·

                < span id='fopSpaEle' className={ ` ${ styles.footerSpan }   ${ styles.footerSpan_phone } ` } > 417-988-6239 </ span > { /* What : Footer Phone Span Element. Why : An inline text container was required to contain and stylize (colored) the phone number within the footer paragraph element. How : Using a standard HTML <span> element. */ }


            </ p >

            {/* ══ End fooParEle ══ */}


        </ footer >


    );


}

// #endregion SitFooCom

// #endregion Components



// #region Exports

export { SitFooCom }; // What: Named Export. Why: The app root renders this footer. How: This exports SitFooCom.

// #endregion Exports


