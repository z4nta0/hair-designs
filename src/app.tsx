


// #region Imports

import cssModObj from './app.module.css'; // What: CSS Module Object. Why: The root wrapper's container styles live in its own module. How: This reads the scoped class name for the root div.


import { HomPagCom } from './pages/home/home.tsx'; // What: Home Page Component. Why: The home page holds every section of the site. How: The root path's route renders it.
import { NavBarCom } from './ui/nav.tsx';          // What: Navigation Bar Component. Why: Every page opens with the fixed bar. How: This renders it above the main element.
import { Route     } from 'react-router';          // What: Route. Why: Each page is matched to a path. How: This declares one path and the page it renders.
import { Routes    } from 'react-router';          // What: Routes. Why: Only one page should render for any path. How: This renders the first route whose path matches.
import { SitFooCom } from './ui/footer.tsx';       // What: Site Footer Component. Why: Every page ends with the footer. How: This renders it after the main element.

// #endregion Imports



/**
 * app.tsx = App
 *
 * @summary
 * The site's root component, mounted by main.tsx inside the router. It
 * renders, inside the app container every module's layout queries
 * measure, what every page shares around the route table: the fixed bar
 * above the main element, which holds whichever page matches the current
 * path (for now only the home page at the root path), and the footer after
 * it, where it's the page's contentinfo landmark.
 *
 * Sections:
 *  - Components
 *  - Exports
 *
 * @author z4nta0 <https://github.com/z4nta0>
 *
*/



// #region Components

// #region AppRooCom

/**
 * AppRooCom = App Root Component
 *
 * @summary
 * The top of the component tree: renders the bar, then the main element with
 * the site's route table, so whichever page matches the current path is the
 * one on screen, then the footer. The bar and footer sit outside the routes
 * so every page shares them without rendering them itself.
 *
 * @author z4nta0 <https://github.com/z4nta0>
 *
 * @param props - This component does not use any props.
 *
 * @returns The bar, the page matching the current path, and the footer.
 *
 * @example
 * ```tsx
 * AppRooCom() // => <AppRooCom />
 * ```
 *
*/

function AppRooCom () : React.JSX.Element {


	return (


		<div className={ cssModObj.appRooDiv }>{ /* What: App Root Div Element. Why: Every module's layout queries measure one shared container. How: This wraps the bar, the main element, and the footer in the element named the app container. */ }


			<NavBarCom />{ /* What: Navigation Bar Component. Why: Every page opens with the fixed bar. How: This renders the logo, the section links, and the phone menu. */ }



			<main>{ /* What: App Main Element. Why: Each page's content is the page's main landmark, apart from the bar and footer every page shares. How: This holds the route table. */ }


				<Routes>{ /* What: Page Routes. Why: Only one page should render for any path. How: This renders the first route below whose path matches. */ }


					<Route
						element={ <HomPagCom /> }
						path='/'
					/>{ /* What: Home Route. Why: The site's root address is its home page. How: This renders HomPagCom at the root path. */ }


				</Routes>


			</main>



			<SitFooCom />{ /* What: Site Footer Component. Why: Every page ends with the footer, outside the main element so it's the page's contentinfo landmark. How: This renders it after main. */ }


		</div>


	);


}

// #endregion AppRooCom

// #endregion Components



// #region Exports

export { AppRooCom }; // What: Named Exports. Why: main.tsx is the sole consumer, mounting this as the site's root. How: This exports AppRooCom.

// #endregion Exports


