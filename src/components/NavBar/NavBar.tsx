
// #region Imports

import logoSvg from '../../assets/logo.svg';  /** This import is the SVG version of the Hair Designs logo, which is used in various places throughout the Home page. */
import styles  from './NavBar.module.css'; /** This import is the custom CSS file that contains all of the styling declarations for this component. */

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

function NavBarCom () : React.ReactElement {


    /** Home Page Component Javascript XML  = This custom variable stores the HTML like code that this component will render when called by its parent component, with the idea behind this being that I prefer to store this in a variable before being returned so that it can be referenced inside of comments in the other sections of this component. */
    const navBarComJsx : React.ReactElement = (



            /* <!-- ══ Start navNavEle ══ --> */

            <  nav id='navNavEle' className={ styles.navbarNav } > { /* Navbar Nav Element = This custom nav HTML element contains the main navigation links for the application, though they are really just links to the different sections of the Home page (for now). */ }


                { /* <!-- ══ Start logAncEle ══ --> */ }

                < a id='logAncEle' className={ styles.logoAnchor } href='#homSecEle' aria-label='Main navigation' > { /* Logo Anchor Element = This custom anchor HTML element contains the brand's logo for the application, which is used here as a link to the top section of the page. */ }


                    < img id='logImgEle_logAncEle' className={ ` ${ styles.logoImage }   ${ styles.logoImage_navbarNav } ` } src={ logoSvg } alt='Hair Designs logo that is used as a link to the Home page' /> { /* Logo Image Element for Logo Anchor Element = This custom img HTML element contains the brand's SVG logo for the application, which is used here as a visual brand identifier inside the navbar and as a link to the top section of the page. */ }



                    < span id='titSpaEle' className={ styles.titleSpan } >Hair Designs</ span > { /* Title Span Element = This custom span HTML element contains the brand's name for the application, which is used here as a visual brand identifier inside the navbar and as a link to the top section of the page. */ }


                </ a >

                { /* <!-- ══ End logAncEle ══ --> */ }



                { /* <!-- ══ Start navUnlEle ══ --> */ }

                < ul id='navUnlEle' className={ styles.navUnorderedList } > { /* Navbar Unordered List Element = This custom ul HTML element contains the main navigation links for the application, though they are really just links to the different sections of the Home page (for now). */ }


                    < li id='homLiiEle' className={ ` ${ styles.navbarLi }   ${ styles.navbarLi_home     } ` } >< a id='homAncEle_navUnlEle' className={ ` ${ styles.navbarAnchors }   ${ styles.navbarAnchors_home     } ` } href='#homSecEle' >Home</     a ></ li > { /* Home List Item Element     + Home Anchor Element for Navbar Unordered List Element     = These custom li and a HTML elements contain the link to the Home section of the page. */ }



                    < li id='serLiiEle' className={ ` ${ styles.navbarLi }   ${ styles.navbarLi_services } ` } >< a id='serAncEle_navUnlEle' className={ ` ${ styles.navbarAnchors }   ${ styles.navbarAnchors_services } ` } href='#serSecEle' >Services</ a ></ li > { /* Services List Item Element + Services Anchor Element for Navbar Unordered List Element = These custom li and a HTML elements contain the link to the Services section of the page. */ }



                    < li id='aboLiiEle' className={ ` ${ styles.navbarLi }   ${ styles.navbarLi_about    } ` } >< a id='aboAncEle_navUnlEle' className={ ` ${ styles.navbarAnchors }   ${ styles.navbarAnchors_about    } ` } href='#aboSecEle' >About</    a ></ li > { /* About List Item Element    + About Anchor Element for Navbar Unordered List Element    = These custom li and a HTML elements contain the link to the About section of the page. */ }



                    < li id='conLiiEle' className={ ` ${ styles.navbarLi }   ${ styles.navbarLi_contact  } ` } >< a id='conAncEle_navUnlEle' className={ ` ${ styles.navbarAnchors }   ${ styles.navbarAnchors_contact  } ` } href='#conSecEle' >Contact</  a ></ li > { /* Contact List Item Element  + Contact Anchor Element for Navbar Unordered List Element  = These custom li and a HTML elements contain the link to the Contact section of the page. */ }


                </ ul >

                { /* <!-- ══ End navUnlEle ══ --> */ }


            </ nav >

            /* <!-- ══ End navNavEle ══ --> */

            

    );



    return navBarComJsx;

    // #endregion Return Statement


};

// #endregion HomPagCom



export default NavBarCom;


