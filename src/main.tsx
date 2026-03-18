
// #region Imports

import                './index.css';     /** This import is the root CSS file where all non module CSS is placed, typically used for global styles that apply throughout the entire application. */
import AppRooCom from './AppRooCom.tsx'; /** This import is the custom React root component that contains the core routing structure of the application, acting as the container for the router, global components (navbar, footer, etc...) and any components that are dynamically rendered via React Router based on the current URL. */


import { createRoot    } from 'react-dom/client'; /** This import is the new standard React DOM 18 API for creating a root DOM node to render the application, replacing the older ReactDOM.render method and providing better performance and support for concurrent features. */
import { StrictMode    } from 'react';            /** This import is the standard React development only tool for highlighting potential problems in an application by activating additional checks and warnings for its descendants, it renders no visible UI, has no impact on the production build and acts solely as a passive debugging aid during development. */


import { type Root } from 'react-dom/client'; /** This import is the standard TypeScript type definition for the root DOM node that is created via the standard React DOM createRoot function. */

// #endregion Imports



/** Root DOM Node      = This custom variable stores the root DOM node using the new React DOM 18 API for rendering the application by targeting the HTML element with the id of rooDivEle, which is typically defined in the index.html file of a React application and to which all React components will be attached. */
const rooDomNod : Root = createRoot( document.getElementById( 'rooDivEle' ) as HTMLElement );



// #region Function Type Definitions

/** Root DOM Node Render = This custom Typescript type stores the type that will be used for the custom {@link rooDomNodRender} function. */
type RooDomNodRender     = () => void;

// #endregion Function Type Definitions



// #region rooDomNodRender

/**
 * rooDomNodRender = Root DOM Node Render
 * 
 * @summary
 * This custom function executes the render of the entire React application to
 * the root DOM node using the standard React DOM {@link createRoot} function
 * and said function's {@link Root.render} method. It wraps the custom React
 * {@link AppRooCom} component within the standard React {@link StrictMode}
 * component for development only checks and warnings. This function is then
 * called at the end of the file in order to render the application.
 *
 *
 * @author React Create Root <https://react.dev/reference/react-dom/client/createRoot>
 * @author z4nta0            <https://github.com/z4nta0>
 * 
 * @param void - This function takes no parameters.
 * 
 * @returns This function does not return anything.
 * 
 * @example
 * ```ts
 * rooDomNodRender() // => void 0
 * ```
 *
*/

const rooDomNodRender : RooDomNodRender = () => {


    // #region Render

    /** Root DOM Node Render = This standard React React DOM {@link createRoot} method executes the attachment of the following JSX to the custom rooDivEle HTML node in the browser's DOM. */
    rooDomNod.render(


        // #region StrictMode Component

        <  StrictMode > { /** Strict Mode = This component is the standard React development only tool for highlighting potential problems in an application by activating additional checks and warnings for its descendants, it renders no visible UI, has no impact on the production build and acts solely as a passive debugging aid during development. */ }


            { /** Start AppRooCom Component */ }

            < AppRooCom /> { /** App Root Component = This component is the custom React root component that contains the core routing structure of the application, acting as the container for the router, global components (navbar, footer, etc...) and any components that are dynamically rendered via React Router based on the current URL. */ }

            { /** End AppRooCom Component */ }


        </ StrictMode >

        // #endregion StrictMode Component


    );

    // #endregion Render



    // #region Return Statement

    /** Return = This standard Javascript return statement will explicitly return undefined, with the idea behind this being to remove any ambiguity that the function has ended and to clearly indicate that there is no intention of returning any meaningful value. */
    return void 0;

    // #endregion Return Statement


};

// #endregion rooDomNodRender



rooDomNodRender();


