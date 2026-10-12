
// #region Imports

import styles from './services.module.css'; /** What : Styles. Why : A CSS stylesheet was required for styling this component in a modular format and scoped for this component only so that there are no class naming conflicts or clashes. How : Using a standard React module.css file placed inside of the same folder as this component. */

// #endregion Imports



// #region SerSecCom

/**
 * SerSecCom = Services Section Component
 *
 * @summary
 * What : Services Section Component. Why : A services section was required for
 * the Home page in order to display the different services offered and provide
 * detailed information about each service. These distinct sections of the Home
 * page were extracted into their own components for a three reasons. 1) To
 * prevent the Home page component from becoming too monolithic and difficult
 * to manage. 2) To promote reusability and maintainability of the code. And 3)
 * To prepare for the possiblity that in the future they will be separated and
 * turned into actual, standalone pages. How : Using a custom React functional
 * component that returns the JSX representing the HTML content of the services
 * section, styled with a CSS module. No extra functionality or logic was
 * required for the services section at this time, so it is just a simple
 * component that renders the JSX for the services section and does not use any
 * props or state.
 *
 * @author z4nta0 <https://github.com/z4nta0>
 * 
 * @param props - This component does not use any props.
 * 
 * @returns A React JSX element representing the Services Section component.
 * @see {@link serSecComJsx}
 * 
 * @example
 * ```tsx
 * <SerSecCom /> // => serSecComJsx
 * ```
 *
*/

function SerSecCom () : React.ReactElement {


    // #region serSecComJsx

    /** What : Services Section Component Javascript XML. Why : A custom variable was required in order to store the HTML like code that this component will return to its parent component and so that it can be referenced inside of comments in the other sections of this component. How : Using a standard Javascript const variable declaration and its corresponding Typescript type annotation. */
    const serSecComJsx : React.ReactElement = (


            /* ══ Start Services Section ══ */

            <  section id='services' className={ styles.servicesSection } > { /* What : Services Section Element. Why : A semantic container element was required in order to contain, group and provide the grid structure for the Services section, as was as a single root element to be returned by this component as required by React. How : Using a standard HTML <section> element. */ }


                {/* ══ Start Services Header ══ */}

                <  header id='serHeaEle' className={ styles.servicesHeader } > { /* What : Services Header Element. Why : A semantic container element was required in order to contain, group and provide the grid structure for the Services section's introductory content. How : Using a standard HTML <header> element. */ }


                    {/* ══ Start Tagline Paragraph ══ */}

                    <  p  id='tagParEle' className={ styles.taglineParagraph } > { /* What : Tagline Paragraph Element. Why : A semantic, block level text element was required in order to contain the text that is used as a sort of subheading or tagline for the Services header. How : Using a standard HTML <p> element. */ }

                        What We Do

                    </ p >

                    {/* ══ End Tagline Paragraph ══ */}



                    {/* ══ Start Header H2 ══ */}

                    < h2 id='heaHe2Ele' className={ styles.headerHeading2 } > { /* What : Header Heading 2 Element. Why : A semantic heading element was required in order to contain an appropriate hierarchically leveled heading for the Services header. How : Using a standard HTML <h2> element. */ }

                        Our Services

                    </ h2 >

                    {/* ══ End Header H2 ══ */}



                    < hr id='heaHorEle' className={ styles.headerHorizontalRule } /> { /* What : Header Horizontal Rule Element. Why : A generic style element was required in order to provide a visual separator between the heading and the description text for the Services header. How : Using a standard HTML <hr> element. */ }



                    {/* ══ Start Description Paragraph ══ */}

                    <  p id='desParEle' className={ styles.descriptionParagraph } > { /* What : Description Paragraph Element. Why : A semantic, block level text element was required in order to contain the description text for the Services header. How : Using a standard HTML <p> element. */ }

                        From a fresh trim to a full color transformation, Juli and Keeli bring skill, care, and small town warmth to every client who sits in their chair.

                    </ p >

                    {/* ══ End Description Paragraph ══ */}


                </  header >

                {/* ══ End Services Header ══ */}



                {/* ══ Start Cards Container ══ */}

                < div id='cacDivEle' className={ styles.cardsContainerDiv } > { /* What : Cards Container Div Element. Why : A generic container element was required in order to contain, group and provide the grid structure for all of the Services section's service cards content. How : Using a standard HTML <div>. */ }


                    {/* ══ Start Cuts and Styling Card ══ */}

                    < div id='casDivEle' className={ ` ${ styles.cardDivs }   ${ styles.cardDivs_cutsAndStyling } ` } > { /* What : Cuts and Styling Div Element. Why : A generic container element was required in order to contain, group and provide the grid structure for the Cuts and Styling service card. How : Using a standard HTML <div> element. */ }


                        {/* ══ Start Cuts and Styling SVG ══ */}

                        <  svg id='casSvgEle' className={ ` ${ styles.cardSvgs }   ${ styles.cardSvgs_cutsAndStyling } ` } viewBox='0 0 44 44' xmlns='http://www.w3.org/2000/svg' > { /* What : Cuts and Styling SVG Element. Why : A semantic image element was required in order to display a scalable, lightweight icon for the Cuts and Styling service card. How : Using a standard HTML <svg> element. */ }


                            < circle id='casCirEle' className={ ` ${ styles.svgCircles }   ${ styles.svgCircles_cutsAndStyling } ` } cx='22' cy='22' r='20' /> { /* What : Cuts and Styling Circle Element. Why : A custom SVG element was required in order to display the circle border for the Cuts and Styling SVG icon. How : Using a standard SVG <circle> element. */ }



                            < path   id='casPatEle' className={ ` ${ styles.svgPaths   }   ${ styles.svgPaths_cutsAndStyling   } ` } d='M14 14 Q22 10 30 14 Q26 22 22 28 Q18 22 14 14Z' /> { /* What : Cuts and Styling Path Element. Why : A custom SVG element was required in order to display the main shape for the Cuts and Styling SVG icon. How : Using a standard SVG <path> element. */ }



                            < line   id='casLinEle' className={ ` ${ styles.svgLines   }   ${ styles.svgLines_cutsAndStyling   } ` } x1='22' y1='28' x2='22' y2='34' /> { /* What : Cuts and Styling Line Element. Why : A custom SVG element was required in order to display the line that is used as a handle for the Cuts and Styling SVG icon. How : Using a standard SVG <line> element. */ }


                        </ svg >

                        {/* ══ End Cuts and Styling SVG ══ */}



                        {/* ══ Start Cuts and Styling H3 ══ */}

                        < h3 id='casHe3Ele' className={ ` ${ styles.cardHeading3s   }   ${ styles.cardHeading3s_cutsAndStyling  } ` } > { /* What : Cuts and Styling Heading 3 Element. Why : A semantic heading element was required in order to contain an appropriate hierarchically leveled heading for the Cuts and Styling service card. How : Using a standard HTML <h3> element. */ }

                            Cuts &amp; Styling

                        </ h3 >

                        {/* ══ End Cuts and Styling H3 ══ */}



                        {/* ══ Start Cuts and Styling Paragraph ══ */}

                        < p  id='casParEle' className={ ` ${ styles.cardParagraphs  }   ${ styles.cardParagraphs_cutsAndStyling } ` } > { /* What : Cuts and Styling Paragraph Element. Why : A semantic, block level text element was required in order to display the description text for the Cuts and Styling service card. How : Using a standard HTML <p> element. */ }

                            Precision cuts for women, men, and children. Blowouts, updos, and everyday styles tailored to you.

                        </ p >

                        {/* ══ End Cuts and Styling Paragraph ══ */}


                    </ div >

                    {/* ══ End Cuts and Styling Card ══ */}



                    {/* ══ Start Color and Highlights Card ══ */}

                    <  div id='cahDivEle' className={ ` ${ styles.cardDivs }   ${ styles.cardDivs_colorAndHighlights } ` } > { /* What : Color and Highlights Div Element. Why : A generic container element was required in order to contain, group and provide the grid structure for the Color and Highlights service card. How : Using a standard HTML <div> element. */ }


                        {/* ══ Start Color and Highlights SVG ══ */}

                        < svg id='cahSvgEle' className={ ` ${ styles.cardSvgs }   ${ styles.cardSvgs_colorAndHighlights } ` } viewBox='0 0 44 44' > { /* What : Color and Highlights SVG Element. Why : A semantic image element was required in order to display a scalable, lightweight icon for the Color and Highlights service card. How : Using a standard HTML <svg> element. */ }



                            < circle id='cahCirEle' className={ ` ${ styles.svgCircles }   ${ styles.svgCircles_colorAndHighlights } ` } cx='22' cy='22' r='20' /> { /* What : Color and Highlights Circle Element. Why : A custom SVG element was required in order to display the circle border for the Color and Highlights SVG icon. How : Using a standard SVG <circle> element. */ }



                            < path   id='cahPatEle' className={ ` ${ styles.svgPaths   }   ${ styles.svgPaths_colorAndHighlights   } ` } d='M12 22 Q18 14 22 20 Q26 14 32 22 Q26 30 22 26 Q18 30 12 22Z' /> { /* What : Color and Highlights Path Element. Why : A custom SVG element was required in order to display the main shape for the Color and Highlights SVG icon. How : Using a standard SVG <path> element. */ }


                        </ svg >

                        {/* ══ End Color and Highlights SVG ══ */}



                        {/* ══ Start Color and Highlights H3 ══ */}

                        < h3 id='cahHe3Ele' className={ ` ${ styles.cardHeading3s  }   ${ styles.cardHeading3s_colorAndHighlights  } ` } > { /* What : Color and Highlights Heading 3 Element. Why : A semantic heading element was required in order to contain an appropriate hierarchically leveled heading for the Color and Highlights service card. How : Using a standard HTML <h3> element. */ }

                            Color &amp; Highlights

                        </ h3 >

                        {/* ══ End Color and Highlights H3 ══ */}



                        {/* ══ Start Color and Highlights Paragraph ══ */}

                        < p  id='cahParEle' className={ ` ${ styles.cardParagraphs }   ${ styles.cardParagraphs_colorAndHighlights } ` } > { /* What : Color and Highlights Paragraph Element. Why : A semantic, block level text element was required in order to display the description text for the Color and Highlights service card. How : Using a standard HTML <p> element. */ }

                            Full color, balayage, highlights, and toning. Vibrant results using quality professional products.

                        </ p >

                        {/* ══ End Color and Highlights Paragraph ══ */}


                    </ div >

                    {/* ══ End Color and Highlights Card ══ */}



                    {/* ══ Start Perms and Texture Card ══ */}

                    <  div id='patDivEle' className={ ` ${ styles.cardDivs }   ${ styles.cardDivs_permsAndTexture } ` } > { /* What : Perms and Texture Div Element. Why : A generic container element was required in order to contain, group and provide the grid structure for the Perms and Texture service card. How : Using a standard HTML <div> element. */ }


                        {/* ══ Start Perms and Texture SVG ══ */}

                        < svg id='patSvgEle' className={ ` ${ styles.cardSvgs }   ${ styles.cardSvgs_permsAndTexture } ` } viewBox='0 0 44 44' > { /* What : Perms and Texture SVG Element. Why : A semantic image element was required in order to display a scalable, lightweight icon for the Perms and Texture service card. How : Using a standard HTML <svg> element. */ }


                            < circle id='patCirEle' className={ ` ${ styles.svgCircles }   ${ styles.svgCircles_permsAndTexture1 } ` } cx='22' cy='22' r='20' /> { /* What : Perms and Texture Circle Element. Why : A custom SVG element was required in order to display the circle border for the Perms and Texture SVG icon. How : Using a standard SVG <circle> element. */ }



                            < path   id='patPatEle' className={ ` ${ styles.svgPaths   }   ${ styles.svgPaths_permsAndTexture    } ` } d='M16 16 Q22 12 28 16 L30 28 Q22 32 14 28Z' /> { /* What : Perms and Texture Path Element. Why : A custom SVG element was required in order to display the main shape for the Perms and Texture SVG icon. How : Using a standard SVG <path> element. */ }



                            < circle id='patIciEle' className={ ` ${ styles.svgCircles }   ${ styles.svgCircles_permsAndTexture2 } ` } cx='22' cy='22' r='4' /> { /* What : Perms and Texture Inner Circle Element. Why : A custom SVG element was required in order to display the inner, smaller circle for the Perms and Texture SVG icon. How : Using a standard SVG <circle> element. */ }


                        </ svg >

                        {/* ══ End Perms and Texture SVG ══ */}



                        {/* ══ Start Perms and Texture H3 ══ */}

                        < h3 id='patHe3Ele' className={ ` ${ styles.cardHeading3s   }   ${ styles.cardHeading3s_permsAndTexture  } ` } > { /* What : Perms and Texture Heading 3 Element. Why : A semantic heading element was required in order to contain an appropriate hierarchically leveled heading for the Perms and Texture service card. How : Using a standard HTML <h3> element. */ }

                            Perms &amp; Texture

                        </ h3 >

                        {/* ══ End Perms and Texture H3 ══ */}



                        {/* ══ Start Perms and Texture Paragraph ══ */}

                        < p  id='patParEle'  className={ ` ${ styles.cardParagraphs }   ${ styles.cardParagraphs_permsAndTexture } ` } > { /* What : Perms and Texture Paragraph Element. Why : A semantic, block level text element was required in order to display the description text for the Perms and Texture service card. How : Using a standard HTML <p> element. */ }

                            Body waves, curls, and relaxers. We work with your natural hair to create texture that lasts.

                        </ p >

                        {/* ══ End Perms and Texture Paragraph ══ */}


                    </ div >

                    {/* ══ End Perms and Texture Card ══ */}



                    {/* ══ Start Special Occasions Card ══ */}

                    < div id='spoDivEle' className={ ` ${ styles.cardDivs }   ${ styles.cardDivs_specialOccasions } ` } > { /* What : Special Occasions Div Element. Why : A generic container element was required in order to contain, group and provide the grid structure for the Special Occasions service card. How : Using a standard HTML <div> element. */ }


                        {/* ══ Start Special Occasions SVG ══ */}

                        <  svg id='spoSvgEle' className={ ` ${ styles.cardSvgs }   ${ styles.cardSvgs_specialOccasions } ` } viewBox='0 0 44 44' > { /* What : Special Occasions SVG Element. Why : A semantic image element was required in order to display a scalable, lightweight icon for the Special Occasions service card. How : Using a standard HTML <svg> element. */ }


                            < circle id='spoCirEle' className={ ` ${ styles.svgCircles    }   ${ styles.svgCircles_specialOccasions    } ` } cx='22' cy='22' r='20' /> { /* What : Special Occasions Circle Element. Why : A custom SVG element was required in order to display the circle border for the Special Occasions SVG icon. How : Using a standard SVG <circle> element. */ }



                            < rect   id='spoRecEle' className={ ` ${ styles.svgRectangles }   ${ styles.svgRectangles_specialOccasions } ` } x='14' y='16' rx='3' /> { /* What : Special Occasions Rect Element. Why : A custom SVG element was required in order to display the main rectable shape for the Special Occasions SVG icon. How : Using a standard SVG <rect> element. */ }



                            < line   id='spoLi1Ele' className={ ` ${ styles.svgLines      }   ${ styles.svgLines_specialOccasions      } ` } x1='18' y1='16' x2='18' y2='12' /> { /* What : Special Occasions Line 1 Element. Why : A custom SVG element was required in order to display the first top binder line for the Special Occasions SVG icon. How : Using a standard SVG <line> element. */ }



                            < line   id='spoLi2Ele' className={ ` ${ styles.svgLines      }   ${ styles.svgLines_specialOccasions      } ` } x1='26' y1='16' x2='26' y2='12' /> { /* What : Special Occasions Line 2 Element. Why : A custom SVG element was required in order to display the second top binder line for the Special Occasions SVG icon. How : Using a standard SVG <line> element. */ }


                        </ svg >

                        {/* ══ End Special Occasions SVG ══ */}



                        {/* ══ Start Special Occasions H3 ══ */}

                        < h3 id='spoHe3Ele' className={ ` ${ styles.cardHeading3s  }   ${ styles.cardHeading3s_specialOccasions  } ` } > { /* What : Special Occasions Heading 3 Element. Why : A semantic heading element was required in order to contain an appropriate hierarchically leveled heading for the Special Occasions service card. How : Using a standard HTML <h3> element. */ }

                            Special Occasions

                        </ h3 >

                        {/* ══ End Special Occasions H3 ══ */}



                        {/* ══ Start Special Occasions Paragraph ══ */}

                        < p  id='spoParEle' className={ ` ${ styles.cardParagraphs }   ${ styles.cardParagraphs_specialOccasions } ` } > { /* What : Special Occasions Paragraph Element. Why : A semantic, block level text element was required in order to display the description text for the Special Occasions service card. How : Using a standard HTML <p> element. */ }

                            Weddings, proms, and events. Let us make sure you look and feel your absolute best on the big day.

                        </ p >

                        {/* ══ End Special Occasions Paragraph ══ */}


                    </ div >

                    {/* ══ End Special Occasions Card ══ */}



                    {/* ══ Start Men's Cuts Card ══ */}

                    <  div id='mecDivEle' className={ ` ${ styles.cardDivs }   ${ styles.cardDivs_mensCuts } ` } > { /* What : Men's Cuts Div Element. Why : A generic container element was required in order to contain, group and provide the grid structure for the Men's Cuts service card. How : Using a standard HTML <div> element. */ }


                        {/* ══ Start Men's Cuts SVG ══ */}

                        < svg id='mecSvgEle' className={ ` ${ styles.cardSvgs }   ${ styles.cardSvgs_mensCuts } ` } viewBox='0 0 44 44' > { /* What : Men's Cuts SVG Element. Why : A semantic image element was required in order to display a scalable, lightweight icon for the Men's Cuts service card. How : Using a standard HTML <svg> element. */ }


                            < circle id='mecCirEle' className={ ` ${ styles.svgCircles }   ${ styles.svgCircles_mensCuts } ` } cx='22' cy='22' r='20' /> { /* What : Men's Cuts Circle Element. Why : A custom SVG element was required in order to display the circle border for the Men's Cuts SVG icon. How : Using a standard SVG <circle> element. */ }



                            < path   id='mecPatEle' className={ ` ${ styles.svgPaths   }   ${ styles.svgPaths_mensCuts   } ` } d='M17 17 L27 17 L25 29 L19 29Z' /> { /* What : Men's Cuts Path Element. Why : A custom SVG element was required in order to display the main shape for the Men's Cuts SVG icon. How : Using a standard SVG <path> element. */ }



                            < line   id='mecLinEle' className={ ` ${ styles.svgLines   }   ${ styles.svgLines_mensCuts   } ` } x1='14' y1='17' x2='30' y2='17'  /> { /* What : Men's Cuts Line Element. Why : A custom SVG element was required in order to display the line for the Men's Cuts SVG icon. How : Using a standard SVG <line> element. */ }


                        </ svg >

                        {/* ══ End Men's Cuts SVG ══ */}



                        {/* ══ Start Men's Cuts H3 ══ */}

                        < h3 id='mecHe3Ele' className={ ` ${ styles.cardHeading3s  }   ${ styles.cardHeading3s_mensCuts  } ` } > { /* What : Men's Cuts Heading 3 Element. Why : A semantic heading element was required in order to contain an appropriate hierarchically leveled heading for the Men's Cuts service card. How : Using a standard HTML <h3> element. */ }

                            Men's Cuts

                        </ h3 >

                        {/* ══ End Men's Cuts H3 ══ */}



                        {/* ══ Start Men's Cuts Paragraph ══ */}

                        < p  id='mecParEle' className={ ` ${ styles.cardParagraphs }   ${ styles.cardParagraphs_mensCuts } ` } > { /* What : Men's Cuts Paragraph Element. Why : A semantic, block level text element was required in order to display the description text for the Men's Cuts service card. How : Using a standard HTML <p> element. */ }

                            Classic cuts, fades, and tapers for the gentlemen too. Everyone is welcome at Hair Designs.

                        </ p >

                        {/* ══ End Men's Cuts Paragraph ══ */}


                    </ div >

                    {/* ══ End Men's Cuts Card ══ */}



                    {/* ══ Start Hair Treatments Card ══ */}

                    <  div id='hatDivEle' className={ ` ${ styles.cardDivs }   ${ styles.cardDivs_hairTreatments } ` } > { /* What : Hair Treatments Div Element. Why : A generic container element was required in order to contain, group and provide the grid structure for the Hair Treatments service card. How : Using a standard HTML <div> element. */ }


                        {/* ══ Start Hair Treatments SVG ══ */}

                        <  svg id='hatSvgEle' className={ ` ${ styles.cardSvgs }   ${ styles.cardSvgs_hairTreatments } ` } viewBox='0 0 44 44' > { /* What : Hair Treatments SVG Element. Why : A semantic image element was required in order to display a scalable, lightweight icon for the Hair Treatments service card. How : Using a standard HTML <svg> element. */ }


                            < circle id='hatCirEle' className={ ` ${ styles.svgCircles }   ${ styles.svgCircles_hairTreatments1 } ` } cx='22' cy='22' r='20' /> { /* What : Hair Treatments Circle Element. Why : A custom SVG element was required in order to display the circle border for the Hair Treatments SVG icon. How : Using a standard SVG <circle> element. */ }



                            < path   id='hatPatEle' className={ ` ${ styles.svgPaths   }   ${ styles.svgPaths_hairTreatments    } ` } d='M12 28 Q17 18 22 24 Q27 18 32 28' /> { /* What : Hair Treatments Path Element. Why : A custom SVG element was required in order to display the main shape for the Hair Treatments SVG icon. How : Using a standard SVG <path> element. */ }



                            < circle id='hatIciEle' className={ ` ${ styles.svgCircles }   ${ styles.svgCircles_hairTreatments2 } ` } cx='22' cy='16' r='5' /> { /* What : Hair Treatments Inner Circle Element. Why : A custom SVG element was required in order to display the inner, smaller circle for the Hair Treatments SVG icon. How : Using a standard SVG <circle> element. */ }


                        </ svg >

                        {/* ══ End Hair Treatments SVG ══ */}



                        {/* ══ Start Hair Treatments H3 ══ */}

                        < h3 id='hatHe3Ele' className={ ` ${ styles.cardHeading3s  }   ${ styles.cardHeading3s_hairTreatments  } ` } > { /* What : Hair Treatments Heading 3 Element. Why : A semantic heading element was required in order to contain an appropriate hierarchically leveled heading for the Hair Treatments service card. How : Using a standard HTML <h3> element. */ }

                            Hair Treatments

                        </ h3 >

                        {/* ══ End Hair Treatments H3 ══ */}



                        {/* ══ Start Hair Treatments Paragraph ══ */}

                        < p  id='hatParEle' className={ ` ${ styles.cardParagraphs }   ${ styles.cardParagraphs_hairTreatments } ` } > { /* What : Hair Treatments Paragraph Element. Why : A semantic, block level text element was required in order to display the description text for the Hair Treatments service card. How : Using a standard HTML <p> element. */ }

                            Deep conditioning, glosses, and scalp treatments to keep your hair healthy and hydrated.

                        </ p >

                        {/* ══ End Hair Treatments Paragraph ══ */}


                    </ div >

                    {/* ══ End Hair Treatments Card ══ */}


                </ div >

                {/* ══ End Cards Container ══ */}


            </ section >

            /* ══ End Services Section ══ */


    );

    // #endregion serSecComJsx



    return serSecComJsx;


};

// #endregion SerSecCom



export default SerSecCom;


