


// #region Imports

import logoSvg from '../../assets/logo.svg'; // What: Logo SVG. Why: The section shows the Hair Designs logo. How: Vite resolves this to the image's fingerprinted URL.
import styles  from './home.module.css';     // What: Styles. Why: The home page's sections still share one stylesheet until the CSS module pass splits it. How: Each element reads its hashed class from this.

// #endregion Imports



/**
 * about.tsx = About
 *
 * @summary
 * The home page's About section: a card with the logo and both stylists' names
 * on a striped panel, beside the salon's story and a button to the Contact
 * section. Split out of the home page component during the directory move; its
 * markup is unchanged until the formatting pass.
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
 * its two stylists.
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


    );


}

// #endregion AboSecCom

// #endregion Components



// #region Exports

export { AboSecCom }; // What: Named Export. Why: The home page renders this section. How: This exports AboSecCom.

// #endregion Exports


