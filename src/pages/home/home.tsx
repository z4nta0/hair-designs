


// #region Imports

import { AboSecCom   } from './about.tsx';    // What: About Section Component. Why: The page's third section tells the salon's story. How: This renders it.
import { ConSecCom   } from './contact.tsx';  // What: Contact Section Component. Why: The page's last section holds the contact details and the turned-off form. How: This renders it.
import { HerSecCom   } from './hero.tsx';     // What: Hero Section Component. Why: The page opens with the hero. How: This renders it.
import { SerSecCom   } from './services.tsx'; // What: Services Section Component. Why: The page's second section lists the salon's services. How: This renders it.
import { useEffect   } from 'react';          // What: Use Effect. Why: The page handles a section's hash once it has rendered. How: This runs the hash arrival effect.
import { useLocation } from 'react-router';   // What: Use Location. Why: The page needs the hash a section link or a shared address arrived with. How: This reads the current location.
import { useNavigate } from 'react-router';   // What: Use Navigate. Why: The hash should leave the address once the page has scrolled to it. How: This returns the router's navigate function.

// #endregion Imports



/**
 * home.tsx = Home
 *
 * @summary
 * The home page, the site's only real page, which stacks its four sections in
 * order: the hero, Services, About, and Contact. A visitor arriving with a
 * section's id as the hash, from a shared address such as /#about or another
 * page's section link, lands on that section, and the hash is cleared from
 * the address once used. Each section lives in its own
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


	const { hash : hasValStr } = useLocation(); // What: Hash Value String. Why: A visitor can arrive with a section's id as the hash. How: This reads the hash, e.g. #contact, or an empty string, renaming the router's hash key.

	const navRouFun = useNavigate(); // What: Navigate Router Function. Why: The hash should be cleared once the page has used it. How: This is the router's navigate function.



	useEffect( () => { // What: Hash Arrival Effect. Why: A visitor arriving from a shared address or another page's section link should land on that section, with no hash left in the address. How: This jumps to the section the hash names, then replaces the address with one without it.


		if ( !hasValStr ) return; // What: No Hash Guard. Why: Most visits arrive without a hash. How: This does nothing when the hash is empty, including right after it's been cleared.



		document.getElementById( hasValStr.slice( 1 ) )?.scrollIntoView( { behavior : 'instant' } ); // What: Arrival Scroll Call. Why: The visitor should land on the section, as a normal link arrival would. How: This jumps to the element the hash names, without the html element's smooth scrolling, since gliding down from the top of a freshly loaded page would be slow.

		void navRouFun( { hash : '' }, { replace : true } ); // What: Hash Clear Call. Why: The address should stay as clean as it does for in-page links. How: This replaces the current history entry with the same path and no hash; void marks the returned promise as deliberately unawaited.


	}, [ hasValStr, navRouFun ] ); // What: Effect Dependency Array. Why: Each new hash has to be handled once. How: hasValStr changes when a visitor arrives with a hash, and navRouFun is listed because the effect calls it, though it stays the same between renders.



	return (


		<>{ /* What: Home Page Fragment. Why: The sections sit side by side in the main landmark app.tsx provides. How: This groups them without adding an element. */ }


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


