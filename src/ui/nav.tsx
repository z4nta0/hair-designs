
// #region Imports

import logoSvg from '../assets/logo.svg';    /** What : Logo SVG. Why : A scalable, lightweight image of the brand's logo was required in the navigation bar to act as a brand identifier and as a link to the Home section.                    How : Using a standard SVG image format placed inside the ./src/assets folder. */
import styles  from './nav.module.css';      /** What : Styles.   Why : A CSS stylesheet was required for styling this component in a modular format and scoped for this component only so that there are no class naming conflicts or clashes. How : Using a standard React module.css file placed inside of the same folder as this component. */


import { useState } from 'react'; // What: Use State. Why: The bar tracks whether the phone menu is open. How: This holds that flag.

// #endregion Imports



// #region NavBarCom

/**
 * NavBarCom = Navigation Bar Component
 *
 * @summary
 * The fixed bar at the top of the page: the logo and name, which lead back
 * to the top, and the links to each section of the Home page. At 900px and
 * narrower the links no longer fit, so a menu button takes their place and
 * opens a panel below the bar holding the same links. The panel is inert
 * while closed, so its links stay out of the keyboard's way, and choosing a
 * link closes it on the way to its section.
 *
 * @author z4nta0 <https://github.com/z4nta0>
 * 
 * @param props - This component does not use any props.
 * 
 * @returns A React JSX element representing the Navigation Bar component.
 * @see {@link navBarComJsx}
 * 
 * @example
 * ```tsx
 * <NavBarCom /> // => navBarComJsx
 * ```
 *
*/

function NavBarCom () : React.ReactElement {


    const [ menOpeBoo, setMenOpeBoo ] = useState( false ); // What: Menu Open Boolean And Setter. Why: The phone menu opens and closes from its button. How: This holds whether it's open, starting closed.



    // #region navBarComJsx

    /** What : Navigation Bar Component Javascript XML. Why : A custom variable was required in order to store the HTML like code that this component will return to its parent component and so that it can be referenced inside of comments in the other sections of this component. How : Using a standard Javascript const variable declaration and its corresponding Typescript type annotation. */
    const navBarComJsx : React.ReactElement = (


            /* <!-- ══ Start Navbar Header ══ --> */

            <  header id='navHeaEle' className={ styles.navbarHeader } > { /* What : Navbar Header Element. Why : A semantic container element was required in order to contain, group and provide the grid structure for the navigation bar content, as was as a single root element to be returned by this component as required by React. How : Using a standard HTML <header> element. */ }


                { /* <!-- ══ Start Logo Anchor ══ --> */ }

                < a id='logAncEle' className={ styles.logoAnchor } href='#homSecEle' > { /* What : Logo Anchor Element. Why : A semantic link element was required in order to contain, group and provide the grid structure for the brand's logo image and name text for the application and to act as a link to the Home section of the page. How : Using a standard HTML <a> element with an appropriate href attribute. */ }


                    < img id='nblImaEle' className={ styles.logoImage } src={ logoSvg } alt='Hair Designs logo of a BOLO that is used as a link to the Home page' /> { /* What : Navbar Logo Image Element. Why : A semantic image element adhering to standard accessibility guidelines was required in order to display the brand's SVG logo to act as a visual brand identifier and as a link to the Home section of the page. How : Using a standard HTML <img> element with an appropriate alt text attribute. */ }



                    { /* <!-- ══ Start Title Span ══ --> */ }

                    < span id='nbtSpaEle' className={ styles.titleSpan } > { /* What : Navbar Title Span Element. Why : A generic, inline text element was required in order to display the brand's name to act as a visual brand identifier and as a link to the Home section of the page. How : Using a standard HTML <span> element. */ }

                        Hair Designs

                    </ span >

                    { /* <!-- ══ End Title Span ══ --> */ }


                </ a >

                { /* <!-- ══ End Logo Anchor ══ --> */ }



                { /* <!-- ══ Start Navbar Nav ══ --> */ }

                <  nav id='navNavEle' className={ styles.navbarNav } aria-label='Main navigation' > { /* What : Navbar Nav Element. Why : A semantic container element adhering to standard accessibility guidelines was required in order to contain the navigation bar's main navigation links <ul> container. How : Using a standard HTML <nav> element with an appropriate aria-label attribute. */ }


                    { /* <!-- ══ Start Navbar UL ══ --> */ }

                    < ul id='navUnlEle' className={ styles.navbarUnorderedList } > { /* What: Navbar Unordered List Element. Why : A semantic container element was required in order to contain, group and provide the grid structure for the navigation bar's main navigation links and their <li> containers. How : Using a standard HTML <ul> element. */ }


                        { /* <!-- ══ Start Home LI ══ --> */ }

                        <  li id='homLiiEle' className={ ` ${ styles.navbarListItems }   ${ styles.navbarListItems_home } ` } > { /* What : Home List Item Element. Why : A semantic container element was required in order to contain the anchor for the Home section. How : Using a standard HTML <li> element. */ }


                            { /* <!-- ══ Start Home Anchor ══ --> */ }

                            < a id='nbhAncEle' className={ ` ${ styles.navbarAnchors }   ${ styles.navbarAnchors_home } ` } href='#homSecEle' > { /* What : Navbar Home Anchor Element. Why : A semantic link element was required in order to contain the link to the Home section. How : Using a standard HTML <a> element with an appropriate href attribute. */ }

                                Home

                            </ a >

                            { /* <!-- ══ End Home Anchor ══ --> */ }


                        </ li >

                        { /* <!-- ══ End Home LI ══ --> */ }



                        { /* <!-- ══ Start Services LI ══ --> */ }

                        <  li id='serLiiEle' className={ ` ${ styles.navbarListItems }   ${ styles.navbarListItems_services } ` } > { /* What : Services List Item Element. Why : A semantic container element was required in order to contain the anchor for the Services section. How : Using a standard HTML <li> element. */ }


                            { /* <!-- ══ Start Services Anchor ══ --> */ }

                            < a id='nbsAncEle' className={ ` ${ styles.navbarAnchors }   ${ styles.navbarAnchors_services } ` } href='#serSecEle' > { /* What : Navbar Services Anchor Element. Why : A semantic link element was required in order to contain the link to the Services section. How : Using a standard HTML <a> element with an appropriate href attribute. */ }

                                Services

                            </ a >

                            { /* <!-- ══ End Services Anchor ══ --> */ }


                        </ li >

                        { /* <!-- ══ End Services LI ══ --> */ }



                        { /* <!-- ══ Start About LI ══ --> */ }

                        <  li id='aboLiiEle' className={ ` ${ styles.navbarListItems }   ${ styles.navbarListItems_about } ` } > { /* What : About List Item Element. Why : A semantic container element was required in order to contain the anchor for the About section. How : Using a standard HTML <li> element. */ }


                            { /* <!-- ══ Start About Anchor ══ --> */ }

                            < a id='nbaAncEle' className={ ` ${ styles.navbarAnchors }   ${ styles.navbarAnchors_about } ` } href='#aboSecEle' > { /* What : Navbar About Anchor Element. Why : A semantic link element was required in order to contain the link to the About section. How : Using a standard HTML <a> element with an appropriate href attribute. */ }

                                About

                            </ a >

                            { /* <!-- ══ End About Anchor ══ --> */ }


                        </ li >

                        { /* <!-- ══ End About LI ══ */ }



                        { /* <!-- ══ Start Contact LI ══ */ }

                        <  li id='conLiiEle' className={ ` ${ styles.navbarListItems }   ${ styles.navbarListItems_contact } ` } > { /* What : Contact List Item Element. Why : A semantic container element was required in order to contain the anchor for the Contact section. How : Using a standard HTML <li> element. */ }


                            { /* <!-- ══ Start Contact Anchor ══ */ }

                            < a id='nbcAncEle' className={ ` ${ styles.navbarAnchors }   ${ styles.navbarAnchors_contact } ` } href='#conSecEle' > { /* What : Navbar Contact Anchor Element. Why : A semantic link element was required in order to contain the link to the Contact section. How : Using a standard HTML <a> element with an appropriate href attribute. */ }

                                Contact

                            </ a >

                            { /* <!-- ══ End Contact Anchor ══ */ }


                        </ li >

                        { /* <!-- ══ End Contact LI ══ */ }


                    </ ul >

                    { /* <!-- ══ End Navbar UL ══ */ }


                </ nav >

                { /* <!-- ══ End Navbar Nav ══ --> */ }



                <button
                    className={ styles.menuToggleButton }

                    type='button'

                    aria-expanded={ menOpeBoo }
                    aria-label='Toggle menu'

                    onClick={ () => setMenOpeBoo( ( preOpeBoo ) => !preOpeBoo ) }
                >{ /* What: Menu Toggle Button Element. Why: At 900px and narrower the links no longer fit in the bar. How: This opens and closes the menu panel, reporting its state through aria-expanded, which also turns its three lines into a cross. */ }


                    <span className={ styles.toggleLineSpans } />{ /* What: Toggle Line Span Element. Why: Three lines draw the menu icon. How: This is the first, which tilts down into the cross. */ }

                    <span className={ styles.toggleLineSpans } />{ /* What: Toggle Line Span Element. Why: Three lines draw the menu icon. How: This is the second, which fades out of the cross. */ }

                    <span className={ styles.toggleLineSpans } />{ /* What: Toggle Line Span Element. Why: Three lines draw the menu icon. How: This is the third, which tilts up into the cross. */ }


                </button>



                <div
                    className={ styles.menuPanelDiv }

                    data-mobile-menu-open={ menOpeBoo || undefined }

                    inert={ !menOpeBoo } // What: Closed Menu Inert Flag. Why: The closed panel is only faded out, so its links would otherwise still take keyboard focus while hidden. How: This makes the panel and its links unfocusable and hidden from screen readers until it opens.
                >{ /* What: Menu Panel Div Element. Why: Phones need the section links somewhere once the bar hides them. How: This drops below the bar with the same four links, carrying data-mobile-menu-open while it's open. */ }


                    <a
                        className={ styles.menuAnchors }
                        href='#homSecEle'
                        onClick={ () => setMenOpeBoo( false ) }
                    >Home</a>{ /* What: Menu Home Anchor Element. Why: Phones reach the Home section from the menu. How: This jumps to the section and closes the menu behind it. */ }


                    <a
                        className={ styles.menuAnchors }
                        href='#serSecEle'
                        onClick={ () => setMenOpeBoo( false ) }
                    >Services</a>{ /* What: Menu Services Anchor Element. Why: Phones reach the Services section from the menu. How: This jumps to the section and closes the menu behind it. */ }


                    <a
                        className={ styles.menuAnchors }
                        href='#aboSecEle'
                        onClick={ () => setMenOpeBoo( false ) }
                    >About</a>{ /* What: Menu About Anchor Element. Why: Phones reach the About section from the menu. How: This jumps to the section and closes the menu behind it. */ }


                    <a
                        className={ styles.menuAnchors }
                        href='#conSecEle'
                        onClick={ () => setMenOpeBoo( false ) }
                    >Contact</a>{ /* What: Menu Contact Anchor Element. Why: Phones reach the Contact section from the menu. How: This jumps to the section and closes the menu behind it. */ }


                </div>


            </ header >

            /* <!-- ══ End Navbar Header ══ --> */


    );

    // #endregion navBarComJsx



    return navBarComJsx;


};

// #endregion NavBarCom



export default NavBarCom;


