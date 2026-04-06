
// #region Imports

import logoSvg from '../../assets/logo.svg'; /** What : Logo SVG. Why : A scalable, lightweight image of the brand's logo was required in the navigation bar to act as a brand identifier and as a link to the Home section.                    How : Using a standard SVG image format placed inside the ./src/assets folder. */
import styles  from './NavBar.module.css';   /** What : Styles.   Why : A CSS stylesheet was required for styling this component in a modular format and scoped for this component only so that there are no class naming conflicts or clashes. How : Using a standard React module.css file placed inside of the same folder as this component. */

// #endregion Imports



// #region NavBarCom

/**
 * NavBarCom = Navigation Bar Component
 *
 * @summary
 * What : Navigation Bar Component. Why : A navigation bar was required for the
 * application in order to allow users to easily navigate to the different
 * sections of the Home page and to provide a consistent header across the
 * application regardless of the page being viewed. How : Using a custom React
 * functional component that returns the JSX representing the HTML content of
 * the navigation bar, styled with a CSS module and containing an imported SVG
 * logo image. No extra functionality or logic was required for the navigation
 * bar at this time, so it is just a simple component that renders the JSX for
 * the navbar and does not use any props or state.
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


            </ header >

            /* <!-- ══ End Navbar Header ══ --> */


    );

    // #endregion navBarComJsx



    return navBarComJsx;


};

// #endregion NavBarCom



export default NavBarCom;


