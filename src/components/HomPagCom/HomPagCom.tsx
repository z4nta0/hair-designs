
// #region Imports

import logoSvg from '../../assets/logo.svg';  /** This import is the SVG version of the Hair Designs logo, which is used in various places throughout the Home page. */
import styles  from './HomPagCom.module.css'; /** This import is the custom CSS file that contains all of the styling declarations for this component. */

// #endregion Imports



// #region HomPagCom

/**
 * HomPagCom = Home Page Component
 *
 * @summary
 * This custom React component executes the logic of and renders the JSX of the
 * Home page. At the time of creation, there is really only this one page (with
 * the navbar and footer being extracted into their own separate components
 * that are rendered inside of the custom AppRooCom component regardless of the
 * current page). The navbar links just point to the different sections of this
 * page. It is for that reason that I made the choice to extract each section
 * of the page into their own custom components, and then render all of those
 * components together inside of this custom Home page component. This way, if
 * I want to add more pages in the future, I can just create new components for
 * those pages and then set up the React Router structure to route to those
 * pages instead of this one, without having to change any of the internal
 * structure of this custom Home page component. For now though, this is the
 * only page, and it is rendered by the custom AppRooCom component when
 * navigated to '/' via React Router.
 *
 * @author z4nta0 <https://github.com/z4nta0>
 * 
 * @param props - This component does not use any props.
 * 
 * @returns A React JSX element representing the Home component.
 * @see {@link homPagComJsx}
 * 
 * @example
 * ```tsx
 * <HomPagCom /> // => homPagComJsx
 * ```
 *
*/

function HomPagCom () : React.ReactElement {


    /** Home Page Component Javascript XML  = This custom variable stores the HTML like code that this component will render when called by its parent component, with the idea behind this being that I prefer to store this in a variable before being returned so that it can be referenced inside of comments in the other sections of this component. */
    const homPagComJsx : React.ReactElement = (


        <>


            {/* ══ Start homSecEle ══ */}

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

            {/* ══ End homSecEle ══ */}
 


            {/* ══ Start serSecEle ══ */}

            <  section id='serSecEle' className={ styles.servicesSection } > { /* Services Section Element = This custom section HTML element contains the content for the Services section of the page, which includes a heading, a paragraph, and a grid of service cards with icons and descriptions. */ }


                < p id='tagParEle' className={ styles.servicesTaglineParagraph }>What We Do</ p > { /* Tagline Paragraph Element = This custom p HTML element contains the 'What We Do' text for the Services section of the page, which is used as a sort of subheading or tagline for the section. */ }



                < h2 id='serHe2Ele' className={ styles.servicesHeading2 }>Our Services</ h2 > { /* Services Heading 2 Element = This custom h2 HTML element contains the 'Our Services' text for the Services section of the page, which is used as the main heading for the section. */ }



                < hr id='serHorEle' className={ styles.servicesHorizontalRule } /> { /* Services Horizontal Rule Element = This custom hr HTML element is used to display a horizontal rule for the Services section of the page, which is used as a visual separator between the heading and the content. */ }



                {/* ══ Start desParEle ══ */}

                <  p id='desParEle' className={ styles.servicesDescriptionParagraph } > { /* Description Paragraph Element = This custom p HTML element contains the description text for the Services section of the page, which is used to provide more information about the services offered and to entice potential clients to book an appointment. */ }

                    From a fresh trim to a full color transformation, Juli and Keeli bring skill, care, and small town warmth to every client who sits in their chair.

                </ p >

                {/* ══ End desParEle ══ */}



                {/* ══ Start cacDivEle ══ */}

                < div id='cacDivEle' className={ styles.cardsContainerDiv } > { /* Cards Container Div Element = This custom div HTML element is a container for the grid of service cards in the Services section of the page, which are used to visually represent the different services offered along with a brief description of each. */ }


                    {/* ══ Start casDivEle ══ */}

                    < div id='casDivEle' className={ ` ${ styles.cardDivs }   ${ styles.cardDivs_cutsAndStyling } ` } > { /* Cuts and Styling Div Element = This custom div HTML element is a container for the Cuts and Styling service card in the Services section of the page, which includes an icon, a heading, and a description. */ }


                        {/* ══ Start casSvgEle ══ */}

                        <  svg id='casSvgEle' className={ ` ${ styles.cardSvgs }   ${ styles.cardSvgs_cutsAndStyling } ` } viewBox='0 0 44 44' fill='none' xmlns='http://www.w3.org/2000/svg' > { /* Cuts and Styling SVG Element = This custom svg HTML element is used to display the icon for the Cuts and Styling service card in the Services section of the page. */ }


                            < circle id='casCirEle' className={ ` ${ styles.svgCircles }   ${ styles.svgCircles_roseStrokeColor } ` } cx='22' cy='22' r='20' stroke='#d4806a' strokeWidth='1.5' opacity='0.3' /> { /* Cuts and Styling Circle Element = This custom circle SVG element is used to display the rose colored circle border for the Cuts and Styling SVG icon in the Services section of the page. */ }



                            < path   id='casPatEle' className={ ` ${ styles.svgPaths   }   ${ styles.svgPaths_roseFillColor     } ` } d='M14 14 Q22 10 30 14 Q26 22 22 28 Q18 22 14 14Z' fill='#d4806a' opacity='0.7' /> { /* Cuts and Styling Path Element = This custom path SVG element is used to display the rose colored main shape for the Cuts and Styling SVG icon in the Services section of the page. */ }



                            < line   id='casLinEle' className={ ` ${ styles.svgLines   }   ${ styles.svgLines_roseStrokeColor   } ` } x1='22' y1='28' x2='22' y2='34' stroke='#d4806a' strokeWidth='2' strokeLinecap='round' /> { /* Cuts and Styling Line Element = This custom line SVG element is used to display the rose colored line that is used as a handle for the Cuts and Styling SVG icon in the Services section of the page. */ }


                        </ svg >

                        {/* ══ End casSvgEle ══ */}



                        < h3 id='casHe3Ele' className={ ` ${ styles.cardHeading3s   }   ${ styles.cardHeading3s_cutsAndStyling  } ` } >Cuts &amp; Styling</ h3 > { /* Cuts and Styling Heading 3 Element = This custom h3 HTML element is used to display the heading for the Cuts and Styling service card in the Services section of the page. */ }



                        < p  id='casParEle'  className={ ` ${ styles.cardParagraphs }   ${ styles.cardParagraphs_cutsAndStyling } ` } >Precision cuts for women, men, and children. Blowouts, updos, and everyday styles tailored to you.</ p > { /* Cuts and Styling Paragraph Element = This custom p HTML element is used to display the description for the Cuts and Styling service card in the Services section of the page. */ }


                    </ div >

                    {/* ══ End casDivEle ══ */}



                    {/* ══ Start cahDivEle ══ */}

                    <  div id='cahDivEle' className={ ` ${ styles.cardDivs }   ${ styles.cardDivs_colorAndHighlights } ` } > { /* Color and Highlights Div Element = This custom div HTML element is a container for the Color and Highlights service card in the Services section of the page, which includes an icon, a heading, and a description. */ }


                        {/* ══ Start cahSvgEle ══ */}

                        < svg id='cahSvgEle' className={ ` ${ styles.cardSvgs }   ${ styles.cardSvgs_colorAndHighlights } ` } viewBox='0 0 44 44' fill='none' > { /* Color and Highlights SVG Element = This custom svg HTML element is used to display the icon for the Color and Highlights service card in the Services section of the page. */ }



                            < circle id='cahCirEle' className={ ` ${ styles.svgCircles }   ${ styles.svgCircles_sageStrokeColor } ` } cx='22' cy='22' r='20' stroke='#8ea89a' strokeWidth='1.5' opacity='0.3' /> { /* Color and Highlights Circle Element = This custom circle SVG element is used to display the sage colored circle border for the Color and Highlights SVG icon in the Services section of the page. */ }



                            < path   id='cahPatEle' className={ ` ${ styles.svgPaths    }   ${ styles.svgPaths_sageFillColor     } ` } d='M12 22 Q18 14 22 20 Q26 14 32 22 Q26 30 22 26 Q18 30 12 22Z' fill='#8ea89a' opacity='0.7' /> { /* Color and Highlights Path Element = This custom path SVG element is used to display the sage colored main shape for the Color and Highlights SVG icon in the Services section of the page. */ }


                        </ svg >

                        {/* ══ End cahSvgEle ══ */}



                        < h3 id='cahHe3Ele' className={ ` ${ styles.cardHeading3s  }   ${ styles.cardHeading3s_colorAndHighlights  } ` } >Color &amp; Highlights</ h3 > { /* Color and Highlights Heading 3 Element = This custom h3 HTML element is used to display the heading for the Color and Highlights service card in the Services section of the page. */ }


                        < p  id='cahParEle' className={ ` ${ styles.cardParagraphs }   ${ styles.cardParagraphs_colorAndHighlights } ` } >Full color, balayage, highlights, and toning. Vibrant results using quality professional products.</ p > { /* Color and Highlights Paragraph Element = This custom p HTML element is used to display the description for the Color and Highlights service card in the Services section of the page. */ }


                    </ div >

                    {/* ══ End cahDivEle ══ */}



                    {/* ══ Start patDivEle ══ */}

                    <  div id='patDivEle' className={ ` ${ styles.cardDivs }   ${ styles.cardDivs_permsAndTexture } ` } > { /* Perms and Texture Div Element = This custom div HTML element is a container for the Perms and Texture service card in the Services section of the page, which includes an icon, a heading, and a description. */ }


                        {/* ══ Start patSvgEle ══ */}

                        < svg id='patSvgEle' className={ ` ${ styles.cardSvgs }   ${ styles.cardSvgs_permsAndTexture } ` } viewBox='0 0 44 44' fill='none' > { /* Perms and Texture SVG Element = This custom SVG element is used to display the icon for the Perms and Texture service card in the Services section of the page. */ }


                            < circle id='patCirEle' className={ ` ${ styles.svgCircles }   ${ styles.svgCircles_mauveStrokeColor } ` } cx='22' cy='22' r='20' stroke='#c9a0a0' strokeWidth='1.5' opacity='0.3' /> { /* Perms and Texture Circle Element = This custom circle SVG element is used to display the mauve colored circle border for the Perms and Texture SVG icon in the Services section of the page. */ }



                            < path   id='patPatEle' className={ ` ${ styles.svgPaths   }   ${ styles.svgPaths_mauveFillColor     } ` } d='M16 16 Q22 12 28 16 L30 28 Q22 32 14 28Z' fill='#c9a0a0' opacity='0.7' /> { /* Perms and Texture Path Element = This custom path SVG element is used to display the mauve colored main shape for the Perms and Texture SVG icon in the Services section of the page. */ }



                            < circle id='patIciEle' className={ ` ${ styles.svgCircles }   ${ styles.svgCircles_mauveFillColor   } ` } cx='22' cy='22' r='4' fill='#c9a0a0' opacity='1' /> { /* Perms and Texture Inner Circle Element = This custom circle SVG element is used to display the mauve colored inner circle for the Perms and Texture SVG icon in the Services section of the page. */ }


                        </ svg >

                        {/* ══ End patSvgEle ══ */}



                        < h3 id='patHe3Ele' className={ ` ${ styles.cardHeading3s   }   ${ styles.cardHeading3s_cutsAndStyling   } ` } >Perms &amp; Texture</ h3 > { /* Perms and Texture Heading 3 Element = This custom h3 HTML element is used to display the heading for the Perms and Texture service card in the Services section of the page. */ }


                        < p  id='patParEle'  className={ ` ${ styles.cardParagraphs }   ${ styles.cardParagraphs_permsAndTexture } ` } >Body waves, curls, and relaxers. We work with your natural hair to create texture that lasts.</ p > { /* Perms and Texture Paragraph Element = This custom p HTML element is used to display the description for the Perms and Texture service card in the Services section of the page. */ }


                    </ div >

                    {/* ══ End patDivEle ══ */}



                    {/* ══ Start spoDivEle ══ */}

                    < div id='spoDivEle' className={ ` ${ styles.cardDivs }   ${ styles.cardDivs_specialOccasions } ` } > { /* Special Occasions Div Element = This custom div HTML element is a container for the Special Occasions service card in the Services section of the page, which includes an icon, a heading, and a description. */ }


                        {/* ══ Start spoSvgEle ══ */}

                        <  svg id='spoSvgEle' className={ ` ${ styles.cardSvgs }   ${ styles.cardSvgs_specialOccasions } ` } viewBox='0 0 44 44' fill='none' > { /* Special Occasions SVG Element = This custom SVG element is used to display the icon for the Special Occasions service card in the Services section of the page. */ }


                            < circle id='spoCirEle' className={ ` ${ styles.svgCircles }   ${ styles.svgCircles_roseStrokeColor } ` } cx='22' cy='22' r='20' stroke='#d4806a' strokeWidth='1.5' opacity='0.3' /> { /* Special Occasions Circle Element = This custom circle SVG element is used to display the rose colored circle border for the Special Occasions SVG icon in the Services section of the page. */ }



                            < rect   id='spoRecEle' className={ ` ${ styles.svgRectangles   }   ${ styles.svgRectangles_roseFillColor     } ` } x='14' y='16' width='16' height='12' rx='3' fill='#d4806a' opacity='0.6' /> { /* Special Occasions Rect Element = This custom rect SVG element is used to display the rose colored rectangle for the Special Occasions SVG icon in the Services section of the page. */ }



                            < line   id='spoLi1Ele' className={ ` ${ styles.svgLines   }   ${ styles.svgLines_roseStrokeColor   } ` } x1='18' y1='16' x2='18' y2='12' stroke='#d4806a' strokeWidth='2' strokeLinecap='round' /> { /* Special Occasions Line 1 Element = This custom line SVG element is used to display the first rose colored line for the Special Occasions SVG icon in the Services section of the page. */ }



                            < line   id='spoLi2Ele' className={ ` ${ styles.svgLines   }   ${ styles.svgLines_roseStrokeColor   } ` } x1='26' y1='16' x2='26' y2='12' stroke='#d4806a' strokeWidth='2' strokeLinecap='round' /> { /* Special Occasions Line 2 Element = This custom line SVG element is used to display the second rose colored line for the Special Occasions SVG icon in the Services section of the page. */ }


                        </ svg >

                        {/* ══ End spoSvgEle ══ */}



                        < h3 id='spoHe3Ele' className={ ` ${ styles.cardHeading3s  }   ${ styles.cardHeading3s_specialOccasions  } ` } >Special Occasions</ h3 > { /* Special Occasions Heading 3 Element = This custom h3 HTML element is used to display the heading for the Special Occasions service card in the Services section of the page. */ }


                        < p  id='spoParEle' className={ ` ${ styles.cardParagraphs }   ${ styles.cardParagraphs_specialOccasions } ` } >Weddings, proms, and events. Let us make sure you look and feel your absolute best on the big day.</ p > { /* Special Occasions Paragraph Element = This custom p HTML element is used to display the description for the Special Occasions service card in the Services section of the page. */ }


                    </ div >

                    {/* ══ End spoDivEle ══ */}



                    {/* ══ Start mecDivEle ══ */}

                    <  div id='mecDivEle' className={ ` ${ styles.cardDivs }   ${ styles.cardDivs_mensCuts } ` } > { /* Men's Cuts Div Element = This custom div HTML element is used to display the Men's Cuts service card in the Services section of the page. */ }


                        {/* ══ Start mecSvgEle ══ */}

                        < svg id='mecSvgEle' className={ ` ${ styles.cardSvgs }   ${ styles.cardSvgs_mensCuts } ` } viewBox='0 0 44 44' fill='none' > { /* Men's Cuts SVG Element = This custom SVG element is used to display the icon for the Men's Cuts service card in the Services section of the page. */ }


                            < circle id='mecCirEle' className={ ` ${ styles.svgCircles }   ${ styles.svgCircles_sageStrokeColor } ` } cx='22' cy='22' r='20' stroke='#8ea89a' strokeWidth='1.5' opacity='0.3' /> { /* Men's Cuts Circle Element = This custom circle SVG element is used to display the sage colored circle border for the Men's Cuts SVG icon in the Services section of the page. */ }



                            < path   id='mecPatEle' className={ ` ${ styles.svgPaths   }   ${ styles.svgPaths_sageFillColor     } ` } d='M17 17 L27 17 L25 29 L19 29Z' fill='#8ea89a' opacity='0.65' /> { /* Men's Cuts Path Element = This custom path SVG element is used to display the sage colored main shape for the Men's Cuts service card in the Services section of the page. */ }



                            < line   id='mecLinEle' className={ ` ${ styles.svgLines   }   ${ styles.svgLines_sageStrokeColor   } ` } x1='14' y1='17' x2='30' y2='17' stroke='#8ea89a' strokeWidth='2.2' strokeLinecap='round' /> { /* Men's Cuts Line Element = This custom line SVG element is used to display the sage colored line for the Men's Cuts SVG icon in the Services section of the page. */ }


                        </ svg >

                        {/* ══ End mecSvgEle ══ */}



                        < h3 id='mecHe3Ele' className={ ` ${ styles.cardHeading3s  }   ${ styles.cardHeading3s_mensCuts  } ` } >Men's Cuts</ h3 > { /* Men's Cuts Heading 3 Element = This custom h3 HTML element is used to display the heading for the Men's Cuts service card in the Services section of the page. */ }


                        < p  id='mecParEle' className={ ` ${ styles.cardParagraphs }   ${ styles.cardParagraphs_mensCuts } ` } >Classic cuts, fades, and tapers for the gentlemen too. Everyone is welcome at Hair Designs.</ p > { /* Men's Cuts Paragraph Element = This custom p HTML element is used to display the description for the Men's Cuts service card in the Services section of the page. */ }


                    </ div >

                    {/* ══ End mecDivEle ══ */}



                    {/* ══ Start hatDivEle ══ */}

                    <  div id='hatDivEle' className={ ` ${ styles.cardDivs }   ${ styles.cardDivs_hairTreatments } ` } > { /* Hair Treatments Div Element = This custom div HTML element is used to display the Hair Treatments service card in the Services section of the page. */ }


                        {/* ══ Start hatSvgEle ══ */}

                        <  svg id='hatSvgEle' className={ ` ${ styles.cardSvgs }   ${ styles.cardSvgs_hairTreatments } ` } viewBox='0 0 44 44' fill='none' > { /* Hair Treatments SVG Element = This custom SVG element is used to display the icon for the Hair Treatments service card in the Services section of the page. */ }


                            < circle id='hatCirEle' className={ ` ${ styles.svgCircles }   ${ styles.svgCircles_mauveStrokeColor } ` } cx='22' cy='22' r='20' stroke='#c9a0a0' strokeWidth='1.5' opacity='0.3' /> { /* Hair Treatments Circle Element = This custom circle SVG element is used to display the mauve colored circle border for the Hair Treatments SVG icon in the Services section of the page. */ }



                            < path   id='hatPatEle' className={ ` ${ styles.svgPaths   }   ${ styles.svgPaths_mauveStrokeColor   } ` } d='M12 28 Q17 18 22 24 Q27 18 32 28' stroke='#c9a0a0' strokeWidth='2.5' fill='none' strokeLinecap='round' /> { /* Hair Treatments Path Element = This custom path SVG element is used to display the mauve colored path for the Hair Treatments SVG icon in the Services section of the page. */ }



                            < circle id='hatIciEle' className={ ` ${ styles.svgCircles }   ${ styles.svgCircles_mauveFillColor   } ` } cx='22' cy='16' r='5' fill='#c9a0a0' opacity='0.65' /> { /* Hair Treatments Inner Circle Element = This custom circle SVG element is used to display the mauve colored filled inner circle for the Hair Treatments SVG icon in the Services section of the page. */ }


                        </ svg >

                        {/* ══ End hatSvgEle ══ */}


                        < h3 id='hatHe3Ele' className={ ` ${ styles.cardHeading3s  }   ${ styles.cardHeading3s_hairTreatments  } ` } >Hair Treatments</ h3 > { /* Hair Treatments Heading 3 Element = This custom h3 HTML element is used to display the heading for the Hair Treatments service card in the Services section of the page. */ }


                        < p  id='hatParEle' className={ ` ${ styles.cardParagraphs }   ${ styles.cardParagraphs_hairTreatments } ` } >Deep conditioning, glosses, and scalp treatments to keep your hair healthy and hydrated.</ p > { /* Hair Treatments Paragraph Element = This custom p HTML element is used to display the description for the Hair Treatments service card in the Services section of the page. */ }


                    </ div >

                    {/* ══ End hatDivEle ══ */}


                </ div >

                {/* ══ End cacDivEle ══ */}


            </ section >

            {/* ══ End serSecEle ══ */}



            {/* ══ Start aboSecEle ══ */}

            <  section id='aboSecEle' className={ styles.aboutSection } > { /* About Section Element = This custom section HTML element is used to display the About section of the page, which includes information about the salon and its owners. */ }


                {/* ══ Start abvDivEle ══ */}

                <  div id='abvDivEle' className={ styles.aboutVisualDiv } > { /* About Visual Div Element = This custom div HTML element is used to display the visual content in the About section of the page, which includes the salon's logo and the names of the owners. */ }


                    {/* ══ Start sbgDivEle ══ */}

                    <  div id='sbgDivEle' className={ styles.stripedBackgroundDiv } > { /* Striped Background Div Element = This custom div HTML element is used to display the striped background in the About section of the page. */ }


                        {/* ══ Start abcDivEle ══ */}

                        <  div id='abcDivEle' className={ styles.aboutCardDiv } > { /* About Card Div Element = This custom div HTML element is used to display the card content in the About section of the page, which includes the salon's logo and the names of the owners. */ }


                            < img id='logImgEle_abcDivEle' className={ ` ${ styles.logoImage }   ${ styles.logoImage_aboutSection } ` } src={ logoSvg } alt='Hair Designs logo of a BOHO arrow and flower arrangement' /> { /* Logo Image Element for About Card Div Element = This custom img HTML element contains the brand's SVG logo for the About section of the page. */ }



                            {/* ══ Start abnDivEle ══ */}

                            <  div id='abnDivEle' className={ styles.aboutNamesDiv } > { /* About Names Div Element = This custom div HTML element is used to display the names of the salon owners in the About section of the page. */ }


                                Juli Wilkerson< br id='abnBreEle' className={ styles.aboutNamesBreak } /> &amp; Keeli Bryan


                            </ div >

                            {/* ══ End abnDivEle ══ */}



                            < p id='desParEle' className={ styles.aboutDescriptionParagraph } >Licensed Cosmetologists</ p > { /* Description Paragraph Element = This custom p HTML element is used to display the role of the salon owners in the About section of the page. */ }


                        </ div >

                        {/* ══ End abcDivEle ══ */}


                    </ div >

                    {/* ══ End sbgDivEle ══ */}


                </ div >

                {/* ══ End abvDivEle ══ */}



                {/* ══ Start abtDivEle ══ */}

                <  div id='abtDivEle' className={ styles.aboutTextDiv } > { /* About Text Div Element = This custom div HTML element is a container for the text content in the About section of the page, which includes a tagline, a heading, a horizontal rule, several paragraphs of text, and a call to action button. */ }


                    < p  id='ataParEle' className={ styles.aboutTaglineParagraph } >Our Story</ p > { /* About Tagline Paragraph Element = This custom p HTML element is used to display the tagline for the About section of the page. */ }



                    < h2 id='aboHe2Ele' className={ styles.aboutHeading2         } >Small Town.< br id='ah2BreEle' className={ styles.aboutHeading2Break } />Big Heart.</ h2> { /* About Heading 2 Element = This custom h2 HTML element is used to display the main heading for the About section of the page. */ }



                    < hr id='aboHorEle' className={ styles.aboutHorizontalRule   } /> { /* About Horizontal Rule Element = This custom hr HTML element is used to display a horizontal rule for the About section of the page, which is used as a visual separator between the heading and the content. */ }



                    {/* ══ Start abtPa1Ele ══ */}

                    <  p id='abtPa1Ele' className={ ` ${ styles.aboutTextParagraphs }   ${ styles.aboutTextParagraphs_one   } ` } > { /* About Text Paragraph 1 Element = This custom p HTML element is used to display the first paragraph of text in the About section of the page, which provides an introduction to the salon and its owners. */ }

                        Tucked along State Hwy 254 in Carson's Corner, Missouri, Hair Designs is a family run salon with heart. Juli Wilkerson and Keeli Bryan bring years of professional cosmetology experience right to your neighborhood with no big city drive required.

                    </ p >

                    {/* ══ End abtPa1Ele ══ */}



                    {/* ══ Start abtPa2Ele ══ */}

                    <  p id='abtPa2Ele' className={ ` ${ styles.aboutTextParagraphs }   ${ styles.aboutTextParagraphs_two   } ` } > { /* About Text Paragraph 2 Element = This custom p HTML element is used to display the second paragraph of text in the About section of the page, which provides additional information about the salon's services and customer experience. */ }

                        Whether you're coming in for a quick trim or a complete color transformation, you'll be welcomed like a neighbor, because you are one. We take pride in listening to what you want and delivering results you'll love.

                    </ p >

                    {/* ══ End abtPa2Ele ══ */}



                    {/* ══ Start abtPa3Ele ══ */}

                    <  p id='abtPa3Ele' className={ ` ${ styles.aboutTextParagraphs }   ${ styles.aboutTextParagraphs_three } ` } > { /* About Text Paragraph 3 Element = This custom p HTML element is used to display the third paragraph of text in the About section of the page, which provides additional information about the salon's services and customer experience. */ }

                        We serve women, men, and children of all ages. Our cozy salon is the kind of place where you'll leave looking great and feeling like you've caught up with an old friend.

                    </ p >

                    {/* ══ End abtPa3Ele ══ */}



                    < a id='conAncEle_abtDivEle' className={ ` ${ styles.buttonAnchors }   ${ styles.buttonAnchors_primary } ` } href='#conSecEle' >Reach Out</ a > { /* Contact Anchor Element for About Text Div Element = This custom a HTML element is styled as a button and is used as a call to action in the About section of the page, which encourages users to reach out and contact the salon by linking to the Contact section of the page. */ }


                </ div >

                {/* ══ End abtDivEle ══ */}


            </ section >

            {/* ══ End aboSecEle ══ */}



            {/* ══ Start conSecEle ══ */}

            <  section id='conSecEle' className={ styles.contactSection } > { /* What : Contact Section Element. Why : A semantic element was required to act as a container and provide the grid structure for the contact section. How : Using a standard HTML <section> element. */ }


                < p id='cotParEle' className={ styles.contactTaglineParagraph } >Find Us</ p > { /* What : Contact Tagline Paragraph Element. Why : A text element was required to display a stylistic (smaller, cursive, colored) tagline for the contact section. How : Using a standard HTML <p> element. */ }



                < h2 id='conHe2Ele' className={ styles.contactHeading2 } >Get in Touch</ h2 > { /* What : Contact Heading 2 Element. Why : A semantic, hierarchical (next in line after h1) heading element was required to display a prominent title for the contact section. How : Using a standard HTML <h2> element. */ }



                < hr id='conHorEle' className={ styles.contactHorizontalRule   } /> { /* What : Contact Horizontal Rule Element. Why : A stylistic (short, colored) visual separator was required to distinguish the tagline and heading from the main content within the contact section. How : Using a standard HTML <hr> element. */ }



                {/* ══ Start conDivEle ══ */}

                <  div id='conDivEle' className={ styles.contactDiv } > { /* What : Contact Div Element. Why : A generic container element was required to group and provide the grid structure for the contact information and form within the contact section. How : Using a standard HTML <div> element. */ }


                    {/* ══ Start coiDivEle ══ */}

                    <  div id='coiDivEle' className={ styles.contactInformationDiv } > { /* What : Contact Information Div Element. Why : A generic container element was required to group and provide the grid structure for the contact information within the contact section's main div container. How : Using a standard HTML <div> element. */ }


                        {/* ══ Start phoDivEle_coiDivEle ══ */}

                        <  div id='phoDivEle_coiDivEle' className={ ` ${ styles.informationDivs }   ${ styles.informationDivs_phone } ` } > { /* What : Phone Div Element for the Contact Information Div Element. Why : A generic container element was required to group and provide the grid structure for the phone SVG icon and information within the contact section's information div. How : Using a standard HTML <div> element. */ }



                            {/* ══ Start phoSvgEle_coiDivEle ══ */}

                            <  svg id='phoSvgEle_coiDivEle' className={ ` ${ styles.contactSvgs }   ${ styles.contactSvgs_phone } ` } viewBox='0 0 24 24' strokeWidth='1.8' > { /* What : Phone SVG Element for the Contact Information Div Element. Why : A scalable, lightweight image element was required to visually represent the phone information within the contact section's phone div. How : Using a standard HTML <svg> element. */ }


                                < path id='phoPatEle_coiDivEle' className={ ` ${ styles.svgPaths }   ${ styles.svgPaths_roseStrokColor } ` } d='M3 5h2l1 5-2 2a16 16 0 006 6l2-2 5 1v2a2 2 0 01-2 2C8 21 3 16 3 7a2 2 0 012-2z' /> { /* What : Phone Path Element for the Contact Information Div Element. Why : An SVG element was required to draw a shape that was representative of a phone within the contact section's phone SVG icon. How : Using a standard SVG <path> element. */ }


                            </ svg >

                            {/* ══ End phoSvgEle_coiDivEle ══ */}



                            {/* ══ Start phtDivEle ══ */}

                            <  div id='phtDivEle' className={ styles.phoneTextDiv } > { /* What : Phone Text Div Element. Why : A generic container element was required to group and provide the grid structure for the phone information text within the contact section's phone div. How : Using a standard HTML <div> element. */ }


                                < strong id='phoStrEle' className={ ` ${ styles.contactInformationStrongs }   ${ styles.contactInformationStrongs_phone } ` } >Phone</ strong > { /* What : Phone Strong Element. Why : A semantic HTML element was required to provide a stylistic (thick lettering) title for the phone information within the contact section's phone div. How : Using a standard HTML <strong> element. */ }



                                < a id='phoAncEle' className={ styles.phoneAnchor } href='tel:+1-417-988-6239' >417-988-6239</ a > { /* What : Phone Anchor Element. Why : An anchor element was required to contain the phone number text within a link that would automatically open the user's preferred phone app within the contact section's phone div. How : Using a standard HTML <a> element with an href value of tel: + phone number. */ }


                            </ div >

                            {/* ══ End phtDivEle ══ */}


                        </ div >

                        {/* ══ End phoDivEle_coiDivEle ══ */}



                        {/* ══ Start houDivEle ══ */}

                        < div id='houDivEle' className={ ` ${ styles.informationDivs }   ${ styles.informationDivs_hours } ` } > { /* What : Hours Div Element. Why : A generic container element was required to group and provide the grid structure for the calendar SVG icon and hours information within the contact section's information div. How : Using a standard HTML <div> element. */ }


                            {/* ══ Start calSvgEle ══ */}

                            <  svg id='calSvgEle' className={ ` ${ styles.contactSvgs }   ${ styles.contactSvgs_calendar } ` } viewBox='0 0 24 24' strokeWidth='1.8' > { /* What : Calendar SVG Element. Why : A scalable, lightweight image element was required to visually represent the hours by appointment only information within the contact section's hours div. How : Using a standard HTML <svg> element. */ }


                                < rect id='calRecEle' className={ ` ${ styles.svgRectangles }   ${ styles.svgRectangles_roseStrokColor } ` } x='3' y='4' width='18' height='16' rx='2' /> { /* What : Calendar Rectangle Element. Why : An SVG element was required to draw the main outline shape that was representative of a calendar within the contact section's calendar SVG icon. How : Using a standard SVG <rect> element. */ }



                                < path id='calPatEle' className={ ` ${ styles.svgPaths }   ${ styles.svgPaths_roseStrokColor } ` } d='M16 2v4M8 2v4M3 10h18' /> { /* What : Calendar Path Element. Why : An SVG element was required to draw the divider and binder ring shapes that was representative of a calendar within the contact section's calendar SVG icon. How : Using a standard SVG <path> element. */ }


                            </ svg >

                            {/* ══ End calSvgEle ══ */}



                            {/* ══ Start hotDivEle ══ */}

                            <  div id='hotDivEle' className={ styles.hoursTextDiv } > { /* What : Hours Text Div Element. Why : A generic container element was required to group and provide the grid structure for the hours information text within the contact section's hours div. How : Using a standard HTML <div> element. */ }


                                < strong id='houStrEle' className={ ` ${ styles.contactInformationStrongs }   ${ styles.contactInformationStrongs_hours } ` } >Hours</ strong > { /* What : Hours Strong Element. Why : A semantic HTML element was required to provide a stylistic (thick lettering) title for the hours information within the contact section's hours div. How : Using a standard HTML <strong> element. */ }



                                < span id='houSpaEle' className={ styles.hoursSpan } >By Appointment< br id='hosBreEle' className={ styles.hoursSpanBreak } />Call us to schedule</ span > { /* What : Hours Span Element and Hours Span Break Element. Why : An inline text container was required to contain the hours information text along with a link breaking element in order to break said text into two separate lines within the contact section's hours div. How : Using standard HTML <span> and <br> element. */ }


                            </ div >

                            {/* ══ End hotDivEle ══ */}


                        </ div >

                        {/* ══ End houDivEle ══ */}



                        {/* ══ Start quoDivEle ══ */}

                        <  div id='quoDivEle' className={ styles.quoteDiv } > { /* What : Quote Div Element. Why : A generic container element was required to group, stylize (mostly transparent background, colored left border and names) and provide the grid structure for the shop owners' quote within the contact section's information div. How : Using a standard HTML <div> element. */ }


                            {/* ══ Start quoParEle ══ */}

                            < p id='quoParEle' className={ styles.quoteParagraph } > { /* What : Quote Paragraph Element. Why : A block level text container was required to contain the main portion of the quote text within the contact section's quote div. How : Using a standard HTML <p> element. */ }

                                "We're your neighbors — give us a call, stop by, or drop us a message. We'd love to hear from you."

                            </ p >

                            {/* ══ End quoParEle ══ */}



                            < p id='qunParEle' className={ styles.quoteNamesParagraph } >— Juli &amp; Keeli</ p > { /* What : Quote Names Paragraph Element. Why : A block level text container was required to contain and stylize (cursive, colored) the names of the shop owners whom the quote is from within the contact section's quote div. How : Using a standard HTML <p> element. */ }


                        </ div >

                        {/* ══ End quoDivEle ══ */}


                    </ div >

                    {/* ══ End coiDivEle ══ */}



                    {/* ══ Start cofDivEle ══ */}

                    <  div id='cofDivEle' className={ styles.contactFormDiv } > { /* What : Contact Form Div Element. Why : A generic container was required to group and provide the structure for the form's heading and the form itself within the contact section. How : Using a standard HTML <div> element. */ }


                        < h3 id='cofHe3Ele' className={ styles.contactFormHeading3 } >Send Us a Message</ h3 > { /* What : Contact Form Heading 3 Element. Why : A semantic, hierarchical (next in line after h2) heading element was required to display a prominent title for the form within the the contact section. How : Using a standard HTML <h3> element. */ }



                        {/* ══ Start conForEle ══ */}

                        <  form id='conForEle' className={ styles.contactForm } > { /* What : Contact Form Element. Why : A semantic container was required to group and provide the grid structure for the various labels and inputs div containers for the form within the contact section. How : Using a standard HTML <form> element. */ }


                            {/* ══ Start fonDivEle ══ */}

                            <  div id='fncDivEle' className={ ` ${ styles.formDivs }   ${ styles.formDivs_names } ` } > { /* What : Form Names Div Element. Why : A generic container was required to group and provide the grid structure for the first and last name labels and inputs for the form within the contact section. How : Using a standard HTML <div> element. */ }


                                {/* ══ Start ffnDivEle ══ */}

                                <  div id='ffnDivEle' className={ styles.formFirstNameDiv } > { /* What : Form First Name Div Element. Why : A generic container was required to group and provide the grid structure for the first name label and input for the form within the contact section. How : Using a standard HTML <div> element. */ }


                                    < label id='ffnLabEle' className={ ` ${ styles.formLabels }   ${ styles.formLabels_firstName } ` } htmlFor='ffnInpEle' >First Name</ label > { /* What : Form First Name Label Element. Why : A semantic element was required to provide a descriptive text for the first name input for the form within the contact section. How : Using a standard HTML <label> element using the appropriate attributes (htmlFor). */ }



                                    {/* ══ Start ffnInpEle ══ */}

                                    < input

                                        id='ffnInpEle'
                                        className={ ` ${ styles.formInputs }   ${ styles.formInputs_firstName } ` }
                                        name='firstName'
                                        placeholder='Jane'
                                        required
                                        type='text'

                                    /> { /* What : Form First Name Input Element. Why : A semantic element was required to allow users to enter their first name for the form within the contact section. How : Using a standard HTML <input> element with the appropriate attributes (name, placeholder, required, type text). */ }

                                    {/* ══ End ffnInpEle ══ */}


                                </ div >

                                {/* ══ End ffnDivEle ══ */}



                                {/* ══ Start flnDivEle ══ */}

                                <  div id='flnDivEle' className={ styles.formLastNameDiv } > { /* What : Form Last Name Div Element. Why : A generic container was required to group and provide the grid structure for the last name label and input for the form within the contact section. How : Using a standard HTML <div> element. */ }


                                    < label id='flnLabEle' className={ ` ${ styles.formLabels }   ${ styles.formLabels_lastName } ` } htmlFor='flnInpEle' >Last Name</ label > { /* What : Form Last Name Label Element. Why : A semantic element was required to provide a descriptive text for the last name input for the form within the contact section. How : Using a standard HTML <label> element using the appropriate attributes (htmlFor). */ }



                                    {/* ══ Start flnInpEle ══ */}

                                    < input
                                    
                                        id='flnInpEle'
                                        className={ ` ${ styles.formInputs }   ${ styles.formInputs_lastName } ` }
                                        name='lastName'
                                        placeholder='Smith'
                                        required
                                        type='text'

                                    /> { /* What : Form Last Name Input Element. Why : A semantic element was required to allow users to enter their last name for the form within the contact section. How : Using a standard HTML <input> element with the appropriate attributes (name, placeholder, required, type text). */ }

                                    {/* ══ End flnInpEle ══ */}


                                </ div >

                                {/* ══ End flnDivEle ══ */}


                            </ div >

                            {/* ══ End fonDivEle ══ */}



                            {/* ══ Start fopDivEle ══ */}

                            <  div id='fopDivEle' className={ ` ${ styles.formDivs }   ${ styles.formDivs_phone } ` } > { /* What : Form Phone Div Element. Why : A generic container was required to group and provide the grid structure for the phone number label and input for the form within the contact section. How : Using a standard HTML <div> element. */ }


                                < label id='fopLabEle' className={ ` ${ styles.formLabels }   ${ styles.formLabels_phone } ` } htmlFor='fopInpEle' >Phone Number (optional)</ label > { /* What : Form Phone Label Element. Why : A semantic element was required to provide a descriptive text for the phone number input for the form within the contact section. How : Using a standard HTML <label> element using the appropriate attributes (htmlFor). */ }


                                < input

                                    id='fopInpEle'
                                    className={ ` ${ styles.formInputs }   ${ styles.formInputs_phone } ` }
                                    name='phone'
                                    placeholder='417-555-0100'
                                    type='tel'

                                /> { /* What : Form Phone Input Element. Why : A semantic element was required to allow users to enter their phone number for the form within the contact section. How : Using a standard HTML <input> element with the appropriate attributes (name, placeholder, type tel). */ }


                            </ div >

                            {/* ══ End fopDivEle ══ */}



                            {/* ══ Start foeDivEle ══ */}

                            <  div id='foeDivEle' className={ ` ${ styles.formDivs }   ${ styles.formDivs_email } ` } > { /* What : Form Email Div Element. Why : A generic container was required to group and provide the grid structure for the email label and input for the form within the contact section. How : Using a standard HTML <div> element. */ }


                                < label id='foeLabEle' className={ ` ${ styles.formLabels }   ${ styles.formLabels_email } ` } htmlFor='foeInpEle' >Email (optional)</ label > { /* What : Form Email Label Element. Why : A semantic element was required to provide a descriptive text for the email input for the form within the contact section. How : Using a standard HTML <label> element using the appropriate attributes (htmlFor). */ }



                                < input

                                    id='foeInpEle'
                                    className={ ` ${ styles.formInputs }   ${ styles.formInputs_email } ` }
                                    name='email'
                                    placeholder='jane@email.com'
                                    type='email'

                                /> { /* What : Form Email Input Element. Why : A semantic element was required to allow users to enter their email for the form within the contact section. How : Using a standard HTML <input> element with the appropriate attributes (name, placeholder, type email). */ }


                            </ div >

                            {/* ══ End foeDivEle ══ */}



                            {/* ══ Start fosDivEle ══ */}

                            <  div id='fosDivEle' className={ ` ${ styles.formDivs }   ${ styles.formDivs_service } ` } > { /* What : Form Service Div Element. Why : A generic container was required to group and provide the grid structure for the service label and select for the form within the contact section. How : Using a standard HTML <div> element. */ }


                                < label id='fosLabEle' className={ ` ${ styles.formLabels }   ${ styles.formLabels_service } ` } htmlFor='fosSelEle' >Service Interested In</ label > { /* What : Form Service Label Element. Why : A semantic element was required to provide a descriptive text for the service select for the form within the contact section. How : Using a standard HTML <label> element using the appropriate attributes (htmlFor). */ }



                                {/* ══ Start fosSelEle ══ */}

                                <  select

                                    id='fosSelEle'
                                    className={ ` ${ styles.formInputs }   ${ styles.formInputs_service } ` }
                                    name='service'
                                    required

                                > { /* What : Form Service Select Element. Why : A semantic element was required to allow users to select a service for the form within the contact section. How : Using a standard HTML <select> element with the appropriate attributes (name, required). */ }


                                    < option disabled selected value=''       >— Select a service —</ option >



                                    < option value='Haircut and Styling'      >Haircut &amp; Styling</ option >



                                    < option value='Color and Highlights'     >Color &amp; Highlights</ option >



                                    < option value='Perms and Texture'        >Perms &amp; Texture</ option >



                                    < option value='Special Occasion'         >Special Occasion</ option >



                                    < option value="Men's Cut"                >Men's Cut</ option >



                                    < option value='Hair Treatment'           >Hair Treatment</ option >



                                    < option value='Other / General Question' >Other / General Question</ option >


                                </ select >

                                {/* ══ End fosSelEle ══ */}


                            </ div >

                            {/* ══ End fosDivEle ══ */}



                            {/* ══ Start fomDivEle ══ */}

                            <  div id='fomDivEle' className={ ` ${ styles.formDivs }   ${ styles.formDivs_message } ` } > { /* What : Form Message Div Element. Why : A generic container was required to group and provide the grid structure for the message label and textarea for the form within the contact section. How : Using a standard HTML <div> element. */ }


                                < label id='fomLabEle' className={ ` ${ styles.formLabels }   ${ styles.formLabels_message } ` } htmlFor='fomTeaEle' >Message</ label > { /* What : Form Message Label Element. Why : A semantic element was required to provide a descriptive text for the message textarea for the form within the contact section. How : Using a standard HTML <label> element using the appropriate attributes (htmlFor). */ }



                                {/* ══ Start fomTeaEle ══ */}

                                < textarea

                                    id='fomTeaEle'
                                    className={ ` ${ styles.formInputs }   ${ styles.formInputs_message } ` }
                                    name='message'
                                    placeholder="Tell us a little about what you're looking for…"
                                    required

                                ></ textarea > { /* What : Form Message Textarea Element. Why : A semantic element was required to allow users to input a text message for the form within the contact section. How : Using a standard HTML <textarea> element with the appropriate attributes (name, placeholder, required). */ }

                                {/* ══ End fomTeaEle ══ */}


                            </ div >

                            {/* ══ End fomDivEle ══ */}



                            < button id='fosButEle' className={ ` ${ styles.buttonAnchors }   ${ styles.btnRose } ` } type='submit' >Send Message</ button > { /* What : Form Submit Button Element. Why : A semantic element was required to allow users to submit the form within the contact section. How : Using a standard HTML <button> element with the appropriate attributes (type submit). */ }


                        </ form >

                        {/* ══ End conForEle ══ */}


                    </div>

                    {/* ══ End cofDivEle ══ */}


                </ div >

                {/* ══ End conDivEle ══ */}


            </ section >

            {/* ══ End conSecEle ══ */}



            {/* ══ Start fooFooEle ══ */}

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

            {/* ══ End fooFooEle ══ */}


        </>


    );



    return homPagComJsx;

    // #endregion Return Statement


};

// #endregion HomPagCom



export default HomPagCom;


