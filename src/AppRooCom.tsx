
// #region Imports

import HomPagCom from './components/HomPagCom/HomPagCom.tsx'; /** This import is the custom React component that will return the Home page when navigated to via React Router. */
import styles    from './AppRooCom.module.css';               /** This import is the custom CSS file that contains all of the styling declarations for this component. */


import { BrowserRouter } from 'react-router-dom'; /** This import is the standard React Router component that uses the HTML5 history API to keep the UI in sync with the URL, allowing for client side routing in a React application. */
import { Route         } from 'react-router-dom'; /** This import is the standard React Router component that is used to declaratively render specific UI components when the application's current URL matches this component's custom defined path, acting as a bridge between the URL and the user interface. */
import { Routes        } from 'react-router-dom'; /** This import is the standard React Router component that acts as a container for all custom Route components, ensuring only one route is rendered at a time. */

// #endregion Imports



// #region AppRooCom

/**
 * AppRooCom = App Root Component
 *
 * @summary
 * This custom React component executes the root logic of and renders the root
 * JSX of the application. The custom React Router structure is set up here via
 * the standard React Router {@link BrowserRouter} component, which acts as the
 * core of the application by routing all requested paths to the specified
 * custom components. Said custom components will then be rendered via React
 * Router inside of both the custom appMaiEle HTML element and the standard
 * React Router {@link Routes} component. In addition, any custom global
 * components that should be rendered regardless of the current path are also
 * declared inside of said BrowserRouter component but outside of the appMaiEle
 * element and the Routes component. For this application, that includes both
 * the custom {@link NavBarCom} component and the custom {@link FooBarCom}
 * component.
 *
 * @author React Router <https://reactrouter.com/>
 * @author z4nta0       <https://github.com/z4nta0>
 * 
 * @param props - This component does not use any props.
 * 
 * @returns A React JSX element representing the App component.
 * @see {@link appRooComJsx}
 * 
 * @example
 * ```tsx
 * <AppRooCom /> // => appRooComJsx
 * ```
 *
*/

function AppRooCom () : React.ReactElement {


    // #region Return Statement

    /** App Root Component Javascript XML   = This custom variable stores the HTML like code that this component will render when called by its parent component, with the idea behind this being that I prefer to store this in a variable before being returned so that it can be referenced inside of comments in the other sections of this component. */
    const appRooComJsx : React.ReactElement = (


        /** Start BrowserRouter Component */

        <  BrowserRouter > { /** BrowserRouter = This component is the standard React Router component that uses the HTML5 history API to keep the UI in sync with the URL, allowing for client side routing in a React application. */ }


            { /* Start NavBarCom Component */ }

            { /**< NavBarCom /> { /* Navigation Bar Component = This custom React component contains all of the logic and JSX for the sticky navigation bar at the top of the application. */ }

            { /* End NavBarCom Component */ }


            { /* Start appMaiEle Element */ }

            <  main id='appMaiEle' className={ styles.appMain } > { /* App Main Element = This custom HTML main element is the container for all of the custom React components that will be rendered by React Router based on the current URL path. */ }


                { /* Start Routes Component */ }

                <  Routes > { /** Routes = This component is the standard React Router component that acts as a container for all custom Route components, ensuring only one route is rendered at a time. */ }


                    < Route path='/' element={ < HomPagCom /> } /> { /** Route -> HomPagCom = This standard React Router component will render the custom Home page component. */ }


                </ Routes >

                { /* End Routes Component */ }


            </ main >

            { /* End appMaiEle Element */ }



            { /* Start FooBarCom Component */ }

            {/**< FooBarCom /> { /* Footer Bar Component = This custom React component contains all of the logic and JSX for the footer bar at the bottom of the application. */ }

            { /* End FooBarCom Component */ }


        </ BrowserRouter >
        
        /** End BrowserRouter Component */


    );



    return appRooComJsx;

    // #endregion Return Statement


};

// #endregion AppRooCom



export default AppRooCom;


