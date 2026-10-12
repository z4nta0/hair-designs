


// #region Imports

import logoSvg from '../../assets/logo.svg'; // What: Logo SVG. Why: The section shows the Hair Designs logo. How: Vite resolves this to the image's fingerprinted URL.
import styles  from './home.module.css';     // What: Styles. Why: The home page's sections still share one stylesheet until the CSS module pass splits it. How: Each element reads its hashed class from this.

// #endregion Imports



/**
 * hero.tsx = Hero
 *
 * @summary
 * The home page's opening section: the striped logo panel, the welcome heading
 * with both stylists' names and the buttons to the Services and Contact
 * sections, and the bar beneath them with the phone number and address. Split
 * out of the home page component during the directory move; its markup is
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

// #region HerSecCom

/**
 * HerSecCom = Hero Section Component
 *
 * @summary
 * Renders the hero section, the first thing a visitor sees, with the logo, the
 * salon's name and stylists, its two calls to action, and the phone and
 * address bar.
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


    return (


        <  section id='homSecEle' className={ styles.homeSection } > { /* Home Section Element = This custom section HTML element contains the hero banner consisting of a striped background with the Hair designs logo on the left and a cream panel with welcoming text containg the Hair Designs and cosmetologists names along with a services and contact button on the right. */ }


            {/* ══ Start herDivEle ══ */}

            <  div id='herDivEle' className={ styles.heroDiv } > { /* Hero Div Element = This custom div HTML element contains the hero banner consisting of a striped background with the Hair designs logo on the left and a cream panel with welcoming text containg the Hair Designs and cosmetologists names along with a services and contact button on the right. */ }


                {/* ══ Start helDivEle ══ */}

                <  div id='helDivEle' className={ styles.heroLeftDiv } > { /* Hero Left Div Element = This custom div HTML element contains the left side of the hero banner with the Hair Designs logo on a striped background. */ }


                    {/* ══ Start fuaDivEle_helDivEle ══ */}

                    <  div id='fuaDivEle_helDivEle' className={ ` ${ styles.fadeUpInAnimation }   ${ styles.fadeUpInAnimation_helDivEle } ` } > { /* Fade Up In Animation Div Element for Hero Left Div Element = This custom div HTML element is a container for the SVG logo on the left side of the hero banner, which is used to animate the logo to fade up and in on page load. */ }


                        < img id='logImgEle_helDivEle' className={ ` ${ styles.logoImage }   ${ styles.logoImage_homeSection } ` } src={ logoSvg } alt='Hair Designs logo of a BOHO arrow and flower arrangement' /> { /* Logo Image Element for Hero Left Div Element = This custom img HTML element contains the brand's SVG logo for the Home section of the page. */ }


                    </div>

                    {/* ══ End fuaDivEle_helDivEle ══ */}


                </ div >

                {/* ══ End helDivEle ══ */}



                {/* ══ Start hriDivEle ══ */}

                <  div id='hriDivEle' className={ styles.heroRightDiv } > { /* Hero Right Div Element = This custom div HTML element contains the right side of the hero banner with a cream background and welcoming text containing the Hair Designs and cosmetologists names along with a services and contact button on the right. */ }


                    {/* ══ Start fuaDivEle_hriDivEle ══ */}

                    <  div id='fuaDivEle_hriDivEle' className={ ` ${ styles.fadeUpInAnimation }   ${ styles.fadeUpInAnimation_hriDivEle } ` } > { /* Fade Up In Animation Div Element for Hero Right Div Element = This custom div HTML element is a container for the text content on the right side of the hero banner, which is used to animate the text to fade up and in on page load. */ }


                        < p id='tagParEle' className={ styles.heroTaglineParagraph } >Welcome to</ p > { /* Tagline Paragraph Element = This custom p HTML element contains the 'Welcome to' text for the hero banner on the Home section of the page. */ }



                        < h1 id='herHe1Ele' className={ styles.heroHeading1 } >Hair< br id='he1BreEle' className={ styles.heading1Break } />< em id='he1EmpEle' className={ styles.heading1Emphasis } >Designs</ em ></ h1 > { /* Hero Heading 1 Element + Heading 1 Break Element + Heading 1 Emphasis Element = This custom h1 HTML element contains the main heading for the hero banner on the Home section of the page, with the brand name split into two lines and with the second line emphasized. */ }



                        < p id='suhParEle' className={ styles.heroSubheadingParagraph } >Cosmetology · Carson's Corner, Mo.</ p > { /* Subheading Paragraph Element = This custom p HTML element contains the city and state information for the hero banner on the Home section of the page. */ }



                        < hr id='herHorEle' className={ styles.heroHorizontalRule } /> { /* Hero Horizontal Rule Element = This custom hr HTML element is a simple horizontal divider used to separate the tagline from the rest of the content in the right side of the hero banner on the Home section of the page. */ }



                        {/* ══ Start namDivEle ══ */}

                        <  div id='namDivEle' className={ styles.namesDiv } > { /* Names Div Element = This custom div HTML element is a container for the names of the cosmetologists in the hero banner on the Home section of the page, which are styled to look like a signature. */ }


                            < span id='julSpaEle' className={ ` ${ styles.nameSpans }   ${ styles.nameSpans_juli      } ` } >Juli Wilkerson</ span > { /* Juli Span Element      = This custom span HTML element contains the name of the cosmetologist Juli Wilkerson in the hero banner on the Home section of the page. */ }



                            < span id='ampSpaEle' className={ ` ${ styles.nameSpans }   ${ styles.nameSpans_ampersand } ` } >&amp;</ span >          { /* Ampersand Span Element = This custom span HTML element contains the ampersand symbol '&' used to separate the names of the cosmetologists in the hero banner on the Home section of the page. */ }



                            < span id='keeSpaEle' className={ ` ${ styles.nameSpans }   ${ styles.nameSpans_keeli     } ` } >Keeli Bryan</ span >    { /* Keeli Span Element     = This custom span HTML element contains the name of the cosmetologist Keeli Bryan in the hero banner on the Home section of the page. */ }


                        </ div >

                        {/* ══ End namDivEle ══ */}



                        < p id='desParEle' className={ styles.heroDescriptionParagraph } >Licensed Cosmetologists</ p > { /* Description Paragraph Element = This custom p HTML element contains the 'Licensed Cosmetologists' text in the hero banner on the Home section of the page, which is used to indicate that the cosmetologists are licensed professionals. */ }



                        {/* ══ Start ctaDivEle ══ */}

                        < div id='ctaDivEle' className={ styles.ctaDiv } > { /* Call to Action Div Element = This custom div HTML element is a container for the call to action buttons in the hero banner on the Home section of the page. */ }


                            < a id='serAncEle_ctaDivEle' className={ ` ${ styles.ctaAnchors }   ${ styles.buttonAnchors }   ${ styles.buttonAnchors_primary } ` } href='#serSecEle'>Our Services</ a > { /* Services Anchor Element for Call to Action Div Element = This custom a HTML element is a call to action anchor that is styled as button that links to the Services section of the page. */ }


                            < a id='conAncEle_ctaDivEle' className={ ` ${ styles.ctaAnchors }   ${ styles.buttonAnchors }   ${ styles.buttonAnchors_outline } ` } href='#conSecEle'>Get in Touch</ a > { /* Contact  Anchor Element for Call to Action Div Element = This custom a HTML element is a call to action anchor that is styled as button that links to the Contact section of the page. */ }


                        </ div >

                        {/* ══ End ctaDivEle ══ */}


                    </ div >

                    {/* ══ End fuaDivEle_hriDivEle ══ */}


                </ div >

                {/* ══ End hriDivEle ══ */}


            </div>

            {/* ══ End herDivEle ══ */}



            {/* ══ Start hbbDivEle ══ */}

            <  div id='hbbDivEle' className={ styles.heroBottomBarDiv } > { /* Hero Bottom Bar Div Element = This custom div HTML element is a container for the phone number and address inside of the bottom bar in the hero banner on the Home section of the page. */ }


                {/* ══ Start phoDivEle_hbbDivEle ══ */}

                <  div id='phoDivEle_hbbDivEle' className={ ` ${ styles.infoDivs }   ${ styles.infoDivs_hbbDivEle }   ${ styles.infoDivs_phone } ` } > { /* Phone Div Element for Hero Bottom Bar Div Element = This custom div HTML element is a container for the phone SVG and number inside of the bottom bar in the hero banner on the Home section of the page. */ }


                    {/* ══ Start phoSvgEle_hbbDivEle ══ */}

                    <  svg id='phoSvgEle_hbbDivEle' className={ ` ${ styles.heroBottomBarSvgs }   ${ styles.phoneSvg }   ${ styles.phoneSvg_hbbDivEle } ` } viewBox='0 0 24 24' strokeWidth='1.8' > { /* Phone SVG Element for Hero Bottom Bar Div Element = This custom svg HTML element is used to display the phone icon inside of the bottom bar in the hero banner on the Home section of the page. */ }


                        < path id='phoPatEle_hbbDivEle' className={ ` ${ styles.phonePath }   ${ styles.phonePath_hbbDivEle } ` } d='M3 5h2l1 5-2 2a16 16 0 006 6l2-2 5 1v2a2 2 0 01-2 2C8 21 3 16 3 7a2 2 0 012-2z' /> { /* Phone Path Element for Hero Bottom Bar Div Element = This custom path SVG element is used to define the shape of the phone icon inside of the svg element for the phone icon in the bottom bar in the hero banner on the Home section of the page. */ }


                    </ svg >

                    {/* ══ End phoSvgEle_hbbDivEle ══ */}



                    < span id='phoSpaEle' className={ styles.phoneSpan } >417-988-6239</ span > { /* Phone Span Element = This custom span HTML element is used to display the phone number inside of the bottom bar in the hero banner on the Home section of the page. */ }


                </ div >

                {/* ══ End phoDivEle_hbbDivEle ══ */}



                {/* ══ Start addDivEle_hbbDivEle ══ */}

                <  div id='addDivEle_hbbDivEle' className={ ` ${ styles.infoDivs }   ${ styles.infoDivs_hbbDivEle }   ${ styles.infoDivs_address } ` } > { /* Address Div Element for Hero Bottom Bar Div Element = This custom div HTML element is a container for the address SVG and text inside of the bottom bar in the hero banner on the Home section of the page. */ }


                    {/* ══ Start addSvgEle ══ */}

                    <  svg id='addSvgEle' className={ ` ${ styles.heroBottomBarSvgs }   ${ styles.addressSvg } ` } viewBox='0 0 24 24' strokeWidth='1.8' > { /* Address SVG Element = This custom svg HTML element is used to display the address icon inside of the bottom bar in the hero banner on the Home section of the page. */ }


                        < path id='addPatEle' className={ styles.addressPath } d='M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z' /> { /* Address Path Element = This custom path SVG element is used to define the shape of the address icon inside of the svg element for the address icon in the bottom bar in the hero banner on the Home section of the page. */ }


                    </ svg >

                    {/* ══ End addSvgEle ══ */}



                    < span id='addSpaEle' className={ styles.addressSpan } >24579 State Hwy 254 · Carson's Corner, Mo. 65668</ span > { /* Address Span Element = This custom span HTML element is used to display the address inside of the bottom bar in the hero banner on the Home section of the page. */ }


                </ div >

                {/* ══ End addDivEle_hbbDivEle ══ */}


            </ div >

            {/* ══ End hbbDivEle ══ */}


        </ section >


    );


}

// #endregion HerSecCom

// #endregion Components



// #region Exports

export { HerSecCom }; // What: Named Export. Why: The home page renders this section. How: This exports HerSecCom.

// #endregion Exports


