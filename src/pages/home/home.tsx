


// #region Imports

import { AboSecCom } from './about.tsx';    // What: About Section Component. Why: The page's third section tells the salon's story. How: This renders it.
import { ConSecCom } from './contact.tsx';  // What: Contact Section Component. Why: The page's last section holds the contact details and the turned-off form. How: This renders it.
import { HerSecCom } from './hero.tsx';     // What: Hero Section Component. Why: The page opens with the hero. How: This renders it.
import { SerSecCom } from './services.tsx'; // What: Services Section Component. Why: The page's second section lists the salon's services. How: This renders it.

// #endregion Imports



/**
 * home.tsx = Home
 *
 * @summary
 * The home page, the site's only real page, which stacks its four sections in
 * order: the hero, Services, About, and Contact. Each section lives in its own
 * file beside this one, and the bar and footer around them come from ui/,
 * rendered by the app root on every page.
 *
 * Sections:
 *  - Components
 *  - Exports
 *
 * @author z4nta0 <https://github.com/z4nta0>
 *
*/



// #region Components

// #region HomPagCom

/**
 * HomPagCom = Home Page Component
 *
 * @summary
 * Renders the home page's four sections in order, inside the app root's main
 * element, which React Router fills with this page at the root path.
 *
 * @author z4nta0 <https://github.com/z4nta0>
 *
 * @param props - This component does not use any props.
 *
 * @returns The home page's sections.
 *
 * @example
 * ```tsx
 * HomPagCom() // => <HomPagCom />
 * ```
 *
*/

function HomPagCom () : React.JSX.Element {


    return (


        <>



            <HerSecCom />{ /* What: Hero Section Component. Why: The page opens with the hero. How: This renders it. */ }



            <SerSecCom />{ /* What: Services Section Component. Why: The services follow the hero. How: This renders them. */ }



            <AboSecCom />{ /* What: About Section Component. Why: The salon's story follows its services. How: This renders it. */ }



            <ConSecCom />{ /* What: Contact Section Component. Why: The page ends with how to reach the salon. How: This renders it. */ }



        </>


    );


}

// #endregion HomPagCom

// #endregion Components



// #region Exports

export { HomPagCom }; // What: Named Export. Why: The app root renders the home page at the root path. How: This exports HomPagCom.

// #endregion Exports


