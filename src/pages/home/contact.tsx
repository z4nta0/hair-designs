


// #region Imports

import styles from './home.module.css'; // What: Styles. Why: The home page's sections still share one stylesheet until the CSS module pass splits it. How: Each element reads its hashed class from this.


import { useEffect } from 'react'; // What: Use Effect. Why: An open form tooltip closes when a tap lands anywhere else. How: This adds and removes that page-wide listener while the tooltip is open.
import { useRef    } from 'react'; // What: Use Ref. Why: The tooltip is placed and closed relative to the disabled form's wrapper. How: This holds that wrapper element.
import { useState  } from 'react'; // What: Use State. Why: The form tooltip opens at a position. How: This holds that position, or null while it's closed.

// #endregion Imports



/**
 * contact.tsx = Contact
 *
 * @summary
 * The home page's Contact section: the phone number, hours, and a quote from
 * the stylists beside the contact form, which is shown but turned off, since
 * the salon doesn't take messages. Its fields sit in a disabled fieldset, and
 * hovering, tapping, or tabbing to them opens a tooltip pointing to the phone
 * number. Split out of the home page component during the directory move; its
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

// #region ConSecCom

/**
 * ConSecCom = Contact Section Component
 *
 * @summary
 * Renders the Contact section and runs its form tooltip: the tooltip's
 * position state, the function that places it at the pointer, and the effect
 * that closes it on a tap outside the form.
 *
 * @author z4nta0 <https://github.com/z4nta0>
 *
 * @param props - This component does not use any props.
 *
 * @returns The Contact section.
 *
 * @example
 * ```tsx
 * ConSecCom() // => <ConSecCom />
 * ```
 *
*/

function ConSecCom () : React.JSX.Element {


    // #region Form Tooltip

    const tipDivRef = useRef< HTMLDivElement >( null ); // What: Tip Div Reference. Why: A press on the tooltip itself, such as on its phone link, shouldn't move it. How: This holds the tooltip element while it's open.
    const forWraRef = useRef< HTMLDivElement >( null ); // What: Form Wrapper Reference. Why: The tooltip is placed inside the disabled form's wrapper and closes when a tap lands outside it. How: This holds the wrapper element.

    const [ tipPosObj, setTipPosObj ] = useState< { lefNum : number, topNum : number } | null >( null ); // What: Tip Position Object And Setter. Why: The tooltip opens where the visitor pointed, or at the top of the form for the keyboard. How: This holds its left and top in pixels within the wrapper, or null while it's closed.



    const plaTipFun = ( cliXcoNum : number, cliYcoNum : number ) => { // What: Place Tip Function. Why: The tooltip should open where the visitor pointed without spilling past the form's sides. How: This turns a viewport point into a position within the wrapper, keeping the tooltip's center at least 130px, half its width, from either side.


        const wraRecObj = forWraRef.current!.getBoundingClientRect(); // What: Wrapper Rectangle Object. Why: The point has to be measured from the wrapper's corner. How: This reads the wrapper's box in viewport pixels. // What: Non-Null Note. Why: Only the wrapper's own events call this function. How: Those events can't fire before the ref is attached.

        const lefMaxNum = Math.max( 130, wraRecObj.width - 130 ); // What: Left Maximum Number. Why: The tooltip's center has to stay 130px inside the right side. How: This is the wrapper's width less half the tooltip's, never below the left limit.


        setTipPosObj({ // What: Tip Position Update. Why: The tooltip opens at the measured point. How: This stores its left and top within the wrapper.


            lefNum : Math.min( Math.max( cliXcoNum - wraRecObj.left, 130 ), lefMaxNum ), // What: Left Number. Why: The tooltip centers on the point across, inside the side limits. How: This measures the point from the wrapper's left edge and clamps it between 130px and the right limit.
            topNum : cliYcoNum - wraRecObj.top                                          // What: Top Number. Why: The tooltip rises from the point. How: This measures the point from the wrapper's top edge.


        });


    };



    const bluCloFun = () => requestAnimationFrame( () => { if ( !forWraRef.current?.contains( document.activeElement ) ) setTipPosObj( null ); } ); // What: Blur Close Function. Why: The tooltip should close once focus leaves the form, but not when Tab moves into its own phone link, or when focus leaves and returns at once. How: This waits a frame, then closes the tooltip only if focus has settled outside the wrapper.



    useEffect( () => { // What: Outside Tap Effect. Why: On a touchscreen there's no pointer leaving the form, so an open tooltip closes when a tap lands anywhere else. How: This listens for pointer presses on the page while the tooltip is open and closes it for one outside the wrapper.


        if ( !tipPosObj ) return; // What: Closed Tooltip Guard. Why: A closed tooltip has nothing to close. How: This skips the listener.



        const outPreFun = ( preEveObj : PointerEvent ) => { if ( !forWraRef.current!.contains( preEveObj.target as Node ) ) setTipPosObj( null ); }; // What: Outside Press Function. Why: Only a press outside the form should close the tooltip. How: This closes it when the press's target isn't inside the wrapper. // What: Non-Null Note. Why: The listener only exists while the wrapper is mounted and its tooltip open. How: The effect removes it before the wrapper can unmount. // What: Type Assertion Note. Why: A pointer event's target is typed as an EventTarget, while contains needs a Node. How: Every press lands on a node in the page.


        document.addEventListener( 'pointerdown', outPreFun ); // What: Outside Press Listener Call. Why: Presses anywhere on the page have to be seen. How: This registers the handler.



        return () => document.removeEventListener( 'pointerdown', outPreFun ); // What: Listener Cleanup Return. Why: The listener should only run while the tooltip is open. How: This removes it when the tooltip closes or the page unmounts.


    }, [ tipPosObj ] ); // What: Effect Dependency Array. Why: The listener is added when the tooltip opens and removed when it closes. How: tipPosObj changes from null to a position and back as it does.

    // #endregion Form Tooltip



    return (


        <  section id='conSecEle' className={ styles.contactSection } > { /* What : Contact Section Element. Why : A semantic element was required to act as a container and provide the grid structure for the contact section. How : Using a standard HTML <section> element. */ }


            < p id='cotParEle' className={ styles.contactTaglineParagraph } >Find Us</ p > { /* What : Contact Tagline Paragraph Element. Why : A text element was required to display a stylistic (smaller, cursive, colored) tagline for the contact section. How : Using a standard HTML <p> element. */ }



            < h2 id='conHe2Ele' className={ styles.contactHeading2 } >Get in Touch</ h2 > { /* What : Contact Heading 2 Element. Why : A semantic, hierarchical (next in line after h1) heading element was required to display a prominent title for the contact section. How : Using a standard HTML <h2> element. */ }



            < hr id='conHorEle' className={ styles.contactHorizontalRule   } /> { /* What : Contact Horizontal Rule Element. Why : A stylistic (short, colored) visual separator was required to distinguish the tagline and heading from the main content within the contact section. How : Using a standard HTML <hr> element. */ }



            {/* ══ Start conDivEle ══ */}

            <  div id='conDivEle' className={ styles.contactDiv } > { /* What : Contact Div Element. Why : A generic container element was required to group and provide the grid structure for the contact information and form within the contact section. How : Using a standard HTML <div> element. */ }


                {/* ══ Start coiDivEle ══ */}

                <  div id='coiDivEle' className={ styles.contactInformationDiv } > { /* What : Contact Information Div Element. Why : A generic container element was required to group and provide the grid structure for the contact information within the contact section's main div container. How : Using a standard HTML <div> element. */ }


                    {/* ══ Start phoDivEle_coiDivEle ══ */}

                    <  div id='phoDivEle_coiDivEle' className={ ` ${ styles.informationDivs }   ${ styles.informationDivs_phone } ` } > { /* What : Phone Div Element for the Contact Information Div Element. Why : A generic container element was required to group and provide the grid structure for the phone SVG icon and information within the contact section's information div. How : Using a standard HTML <div> element. */ }



                        {/* ══ Start phoSvgEle_coiDivEle ══ */}

                        <  svg id='phoSvgEle_coiDivEle' className={ ` ${ styles.contactSvgs }   ${ styles.contactSvgs_phone } ` } viewBox='0 0 24 24' strokeWidth='1.8' > { /* What : Phone SVG Element for the Contact Information Div Element. Why : A scalable, lightweight image element was required to visually represent the phone information within the contact section's phone div. How : Using a standard HTML <svg> element. */ }


                            < path id='phoPatEle_coiDivEle' className={ ` ${ styles.svgPaths }   ${ styles.svgPaths_roseStrokColor } ` } d='M3 5h2l1 5-2 2a16 16 0 006 6l2-2 5 1v2a2 2 0 01-2 2C8 21 3 16 3 7a2 2 0 012-2z' /> { /* What : Phone Path Element for the Contact Information Div Element. Why : An SVG element was required to draw a shape that was representative of a phone within the contact section's phone SVG icon. How : Using a standard SVG <path> element. */ }


                        </ svg >

                        {/* ══ End phoSvgEle_coiDivEle ══ */}



                        {/* ══ Start phtDivEle ══ */}

                        <  div id='phtDivEle' className={ styles.phoneTextDiv } > { /* What : Phone Text Div Element. Why : A generic container element was required to group and provide the grid structure for the phone information text within the contact section's phone div. How : Using a standard HTML <div> element. */ }


                            < strong id='phoStrEle' className={ ` ${ styles.contactInformationStrongs }   ${ styles.contactInformationStrongs_phone } ` } >Phone</ strong > { /* What : Phone Strong Element. Why : A semantic HTML element was required to provide a stylistic (thick lettering) title for the phone information within the contact section's phone div. How : Using a standard HTML <strong> element. */ }



                            < a id='phoAncEle' className={ styles.phoneAnchor } href='tel:+1-417-988-6239' >417-988-6239</ a > { /* What : Phone Anchor Element. Why : An anchor element was required to contain the phone number text within a link that would automatically open the user's preferred phone app within the contact section's phone div. How : Using a standard HTML <a> element with an href value of tel: + phone number. */ }


                        </ div >

                        {/* ══ End phtDivEle ══ */}


                    </ div >

                    {/* ══ End phoDivEle_coiDivEle ══ */}



                    {/* ══ Start houDivEle ══ */}

                    < div id='houDivEle' className={ ` ${ styles.informationDivs }   ${ styles.informationDivs_hours } ` } > { /* What : Hours Div Element. Why : A generic container element was required to group and provide the grid structure for the calendar SVG icon and hours information within the contact section's information div. How : Using a standard HTML <div> element. */ }


                        {/* ══ Start calSvgEle ══ */}

                        <  svg id='calSvgEle' className={ ` ${ styles.contactSvgs }   ${ styles.contactSvgs_calendar } ` } viewBox='0 0 24 24' strokeWidth='1.8' > { /* What : Calendar SVG Element. Why : A scalable, lightweight image element was required to visually represent the hours by appointment only information within the contact section's hours div. How : Using a standard HTML <svg> element. */ }


                            < rect id='calRecEle' className={ ` ${ styles.svgRectangles }   ${ styles.svgRectangles_roseStrokColor } ` } x='3' y='4' width='18' height='16' rx='2' /> { /* What : Calendar Rectangle Element. Why : An SVG element was required to draw the main outline shape that was representative of a calendar within the contact section's calendar SVG icon. How : Using a standard SVG <rect> element. */ }



                            < path id='calPatEle' className={ ` ${ styles.svgPaths }   ${ styles.svgPaths_roseStrokColor } ` } d='M16 2v4M8 2v4M3 10h18' /> { /* What : Calendar Path Element. Why : An SVG element was required to draw the divider and binder ring shapes that was representative of a calendar within the contact section's calendar SVG icon. How : Using a standard SVG <path> element. */ }


                        </ svg >

                        {/* ══ End calSvgEle ══ */}



                        {/* ══ Start hotDivEle ══ */}

                        <  div id='hotDivEle' className={ styles.hoursTextDiv } > { /* What : Hours Text Div Element. Why : A generic container element was required to group and provide the grid structure for the hours information text within the contact section's hours div. How : Using a standard HTML <div> element. */ }


                            < strong id='houStrEle' className={ ` ${ styles.contactInformationStrongs }   ${ styles.contactInformationStrongs_hours } ` } >Hours</ strong > { /* What : Hours Strong Element. Why : A semantic HTML element was required to provide a stylistic (thick lettering) title for the hours information within the contact section's hours div. How : Using a standard HTML <strong> element. */ }



                            < span id='houSpaEle' className={ styles.hoursSpan } >By Appointment< br id='hosBreEle' className={ styles.hoursSpanBreak } />Call us to schedule</ span > { /* What : Hours Span Element and Hours Span Break Element. Why : An inline text container was required to contain the hours information text along with a link breaking element in order to break said text into two separate lines within the contact section's hours div. How : Using standard HTML <span> and <br> element. */ }


                        </ div >

                        {/* ══ End hotDivEle ══ */}


                    </ div >

                    {/* ══ End houDivEle ══ */}



                    {/* ══ Start quoDivEle ══ */}

                    <  div id='quoDivEle' className={ styles.quoteDiv } > { /* What : Quote Div Element. Why : A generic container element was required to group, stylize (mostly transparent background, colored left border and names) and provide the grid structure for the shop owners' quote within the contact section's information div. How : Using a standard HTML <div> element. */ }


                        {/* ══ Start quoParEle ══ */}

                        < p id='quoParEle' className={ styles.quoteParagraph } > { /* What : Quote Paragraph Element. Why : A block level text container was required to contain the main portion of the quote text within the contact section's quote div. How : Using a standard HTML <p> element. */ }

                            "We're your neighbors — give us a call, stop by, or drop us a message. We'd love to hear from you."

                        </ p >

                        {/* ══ End quoParEle ══ */}



                        < p id='qunParEle' className={ styles.quoteNamesParagraph } >— Juli &amp; Keeli</ p > { /* What : Quote Names Paragraph Element. Why : A block level text container was required to contain and stylize (cursive, colored) the names of the shop owners whom the quote is from within the contact section's quote div. How : Using a standard HTML <p> element. */ }


                    </ div >

                    {/* ══ End quoDivEle ══ */}


                </ div >

                {/* ══ End coiDivEle ══ */}



                {/* ══ Start cofDivEle ══ */}

                <  div id='cofDivEle' className={ styles.contactFormDiv } > { /* What : Contact Form Div Element. Why : A generic container was required to group and provide the structure for the form's heading and the form itself within the contact section. How : Using a standard HTML <div> element. */ }


                    < h3 id='cofHe3Ele' className={ styles.contactFormHeading3 } >Send Us a Message</ h3 > { /* What : Contact Form Heading 3 Element. Why : A semantic, hierarchical (next in line after h2) heading element was required to display a prominent title for the form within the the contact section. How : Using a standard HTML <h3> element. */ }



                    {/* ══ Start conForEle ══ */}

                    <  form id='conForEle' className={ styles.contactForm } onSubmit={ ( subEveObj ) => subEveObj.preventDefault() } > { /* What : Contact Form Element. Why : A semantic container was required to group and provide the grid structure for the various labels and inputs div containers for the form within the contact section. How : Using a standard HTML <form> element. */ }



                        <div
                            ref={ forWraRef }

                            className={ styles.formDisabledDiv }

                            tabIndex={ 0 }
                            aria-describedby='forNotLeg'
                            aria-label='Contact form, turned off'
                            role='group'

                            onBlur={ bluCloFun }
                            onFocus={ ( focEveObj ) => { if ( focEveObj.target === focEveObj.currentTarget ) setTipPosObj( { lefNum : focEveObj.currentTarget.offsetWidth / 2, topNum : 0 } ); } } // What: Focus Open Handler. Why: Keyboard users reach the form as one stop and need the same message. How: This opens the tooltip centered at the form's top edge when the wrapper itself takes focus.
                            onKeyDown={ ( keyEveObj ) => { if ( keyEveObj.key === 'Escape' ) setTipPosObj( null ); } } // What: Escape Close Handler. Why: A tooltip should close on Escape. How: This closes it for the Escape key.
                            onPointerDown={ ( preEveObj ) => { if ( !tipDivRef.current?.contains( preEveObj.target as Node ) ) plaTipFun( preEveObj.clientX, preEveObj.clientY ); } } // What: Press Open Handler. Why: A tap on a touchscreen has no hover to open the tooltip, but a tap on the open tooltip, such as on its phone link, mustn't move it out from under the finger. How: This opens it where the finger landed, unless the press was inside the tooltip. // What: Type Assertion Note. Why: A pointer event's target is typed as an EventTarget, while contains needs a Node. How: Every press lands on a node in the page.
                            onPointerEnter={ ( entEveObj ) => { if ( entEveObj.pointerType === 'mouse' ) plaTipFun( entEveObj.clientX, entEveObj.clientY ); } } // What: Mouse Enter Handler. Why: A mouse hovering the form should learn why it's turned off. How: This opens the tooltip where the pointer entered, for a mouse only, since a touch also fires enter before its press.
                            onPointerLeave={ ( leaEveObj ) => { if ( leaEveObj.pointerType === 'mouse' ) setTipPosObj( null ); } } // What: Mouse Leave Handler. Why: The tooltip should go once the mouse moves off the form. How: This closes it for a mouse only, since a touch fires leave as soon as the finger lifts.
                        >{ /* What: Form Disabled Div Element. Why: Disabled fields don't reliably pass the pointer on in every browser, and the keyboard skips them entirely. How: This wraps the disabled fields, catches the pointer for them, and takes one keyboard stop, opening the tooltip from each and describing the form through its fieldset's legend. */ }


                            <fieldset
                                className={ styles.formFieldset }

                                disabled
                            >{ /* What: Form Fieldset Element. Why: The salon doesn't take messages, so every field and the button are turned off at once. How: This disables everything inside it. */ }


                                <legend
                                    id='forNotLeg'
                                    className={ styles.formNoteLegend }
                                >The form is disabled at this time. Please call us at 417-988-6239. We apologize for any inconvenience.</legend>{ /* What: Form Note Legend Element. Why: A fieldset should say what its group is, and screen readers should hear why the form is off without needing the tooltip. How: This holds the tooltip's message, hidden visually, and also describes the wrapper through aria-describedby. */ }




                        {/* ══ Start fonDivEle ══ */}

                        <  div id='fncDivEle' className={ ` ${ styles.formDivs }   ${ styles.formDivs_names } ` } > { /* What : Form Names Div Element. Why : A generic container was required to group and provide the grid structure for the first and last name labels and inputs for the form within the contact section. How : Using a standard HTML <div> element. */ }


                            {/* ══ Start ffnDivEle ══ */}

                            <  div id='ffnDivEle' className={ styles.formFirstNameDiv } > { /* What : Form First Name Div Element. Why : A generic container was required to group and provide the grid structure for the first name label and input for the form within the contact section. How : Using a standard HTML <div> element. */ }


                                < label id='ffnLabEle' className={ ` ${ styles.formLabels }   ${ styles.formLabels_firstName } ` } htmlFor='ffnInpEle' >First Name</ label > { /* What : Form First Name Label Element. Why : A semantic element was required to provide a descriptive text for the first name input for the form within the contact section. How : Using a standard HTML <label> element using the appropriate attributes (htmlFor). */ }



                                {/* ══ Start ffnInpEle ══ */}

                                < input

                                    id='ffnInpEle'
                                    className={ ` ${ styles.formInputs }   ${ styles.formInputs_firstName } ` }
                                    name='firstName'
                                    placeholder='Jane'
                                    required
                                    type='text'

                                /> { /* What : Form First Name Input Element. Why : A semantic element was required to allow users to enter their first name for the form within the contact section. How : Using a standard HTML <input> element with the appropriate attributes (name, placeholder, required, type text). */ }

                                {/* ══ End ffnInpEle ══ */}


                            </ div >

                            {/* ══ End ffnDivEle ══ */}



                            {/* ══ Start flnDivEle ══ */}

                            <  div id='flnDivEle' className={ styles.formLastNameDiv } > { /* What : Form Last Name Div Element. Why : A generic container was required to group and provide the grid structure for the last name label and input for the form within the contact section. How : Using a standard HTML <div> element. */ }


                                < label id='flnLabEle' className={ ` ${ styles.formLabels }   ${ styles.formLabels_lastName } ` } htmlFor='flnInpEle' >Last Name</ label > { /* What : Form Last Name Label Element. Why : A semantic element was required to provide a descriptive text for the last name input for the form within the contact section. How : Using a standard HTML <label> element using the appropriate attributes (htmlFor). */ }



                                {/* ══ Start flnInpEle ══ */}

                                < input
                                
                                    id='flnInpEle'
                                    className={ ` ${ styles.formInputs }   ${ styles.formInputs_lastName } ` }
                                    name='lastName'
                                    placeholder='Smith'
                                    required
                                    type='text'

                                /> { /* What : Form Last Name Input Element. Why : A semantic element was required to allow users to enter their last name for the form within the contact section. How : Using a standard HTML <input> element with the appropriate attributes (name, placeholder, required, type text). */ }

                                {/* ══ End flnInpEle ══ */}


                            </ div >

                            {/* ══ End flnDivEle ══ */}


                        </ div >

                        {/* ══ End fonDivEle ══ */}



                        {/* ══ Start fopDivEle ══ */}

                        <  div id='fopDivEle' className={ ` ${ styles.formDivs }   ${ styles.formDivs_phone } ` } > { /* What : Form Phone Div Element. Why : A generic container was required to group and provide the grid structure for the phone number label and input for the form within the contact section. How : Using a standard HTML <div> element. */ }


                            < label id='fopLabEle' className={ ` ${ styles.formLabels }   ${ styles.formLabels_phone } ` } htmlFor='fopInpEle' >Phone Number (optional)</ label > { /* What : Form Phone Label Element. Why : A semantic element was required to provide a descriptive text for the phone number input for the form within the contact section. How : Using a standard HTML <label> element using the appropriate attributes (htmlFor). */ }


                            < input

                                id='fopInpEle'
                                className={ ` ${ styles.formInputs }   ${ styles.formInputs_phone } ` }
                                name='phone'
                                placeholder='417-555-0100'
                                type='tel'

                            /> { /* What : Form Phone Input Element. Why : A semantic element was required to allow users to enter their phone number for the form within the contact section. How : Using a standard HTML <input> element with the appropriate attributes (name, placeholder, type tel). */ }


                        </ div >

                        {/* ══ End fopDivEle ══ */}



                        {/* ══ Start foeDivEle ══ */}

                        <  div id='foeDivEle' className={ ` ${ styles.formDivs }   ${ styles.formDivs_email } ` } > { /* What : Form Email Div Element. Why : A generic container was required to group and provide the grid structure for the email label and input for the form within the contact section. How : Using a standard HTML <div> element. */ }


                            < label id='foeLabEle' className={ ` ${ styles.formLabels }   ${ styles.formLabels_email } ` } htmlFor='foeInpEle' >Email (optional)</ label > { /* What : Form Email Label Element. Why : A semantic element was required to provide a descriptive text for the email input for the form within the contact section. How : Using a standard HTML <label> element using the appropriate attributes (htmlFor). */ }



                            < input

                                id='foeInpEle'
                                className={ ` ${ styles.formInputs }   ${ styles.formInputs_email } ` }
                                name='email'
                                placeholder='jane@email.com'
                                type='email'

                            /> { /* What : Form Email Input Element. Why : A semantic element was required to allow users to enter their email for the form within the contact section. How : Using a standard HTML <input> element with the appropriate attributes (name, placeholder, type email). */ }


                        </ div >

                        {/* ══ End foeDivEle ══ */}



                        {/* ══ Start fosDivEle ══ */}

                        <  div id='fosDivEle' className={ ` ${ styles.formDivs }   ${ styles.formDivs_service } ` } > { /* What : Form Service Div Element. Why : A generic container was required to group and provide the grid structure for the service label and select for the form within the contact section. How : Using a standard HTML <div> element. */ }


                            < label id='fosLabEle' className={ ` ${ styles.formLabels }   ${ styles.formLabels_service } ` } htmlFor='fosSelEle' >Service Interested In</ label > { /* What : Form Service Label Element. Why : A semantic element was required to provide a descriptive text for the service select for the form within the contact section. How : Using a standard HTML <label> element using the appropriate attributes (htmlFor). */ }



                            {/* ══ Start fosSelEle ══ */}

                            <  select

                                id='fosSelEle'
                                className={ ` ${ styles.formInputs }   ${ styles.formInputs_service } ` }
                                name='service'
                                defaultValue=''
                                required

                            > { /* What : Form Service Select Element. Why : A semantic element was required to allow users to select a service for the form within the contact section. How : Using a standard HTML <select> element with the appropriate attributes (name, required). */ }


                                < option disabled value=''                >— Select a service —</ option >



                                < option value='Haircut and Styling'      >Haircut &amp; Styling</ option >



                                < option value='Color and Highlights'     >Color &amp; Highlights</ option >



                                < option value='Perms and Texture'        >Perms &amp; Texture</ option >



                                < option value='Special Occasion'         >Special Occasion</ option >



                                < option value="Men's Cut"                >Men's Cut</ option >



                                < option value='Hair Treatment'           >Hair Treatment</ option >



                                < option value='Other / General Question' >Other / General Question</ option >


                            </ select >

                            {/* ══ End fosSelEle ══ */}


                        </ div >

                        {/* ══ End fosDivEle ══ */}



                        {/* ══ Start fomDivEle ══ */}

                        <  div id='fomDivEle' className={ ` ${ styles.formDivs }   ${ styles.formDivs_message } ` } > { /* What : Form Message Div Element. Why : A generic container was required to group and provide the grid structure for the message label and textarea for the form within the contact section. How : Using a standard HTML <div> element. */ }


                            < label id='fomLabEle' className={ ` ${ styles.formLabels }   ${ styles.formLabels_message } ` } htmlFor='fomTeaEle' >Message</ label > { /* What : Form Message Label Element. Why : A semantic element was required to provide a descriptive text for the message textarea for the form within the contact section. How : Using a standard HTML <label> element using the appropriate attributes (htmlFor). */ }



                            {/* ══ Start fomTeaEle ══ */}

                            < textarea

                                id='fomTeaEle'
                                className={ ` ${ styles.formInputs }   ${ styles.formInputs_message } ` }
                                name='message'
                                placeholder="Tell us a little about what you're looking for…"
                                required

                            ></ textarea > { /* What : Form Message Textarea Element. Why : A semantic element was required to allow users to input a text message for the form within the contact section. How : Using a standard HTML <textarea> element with the appropriate attributes (name, placeholder, required). */ }

                            {/* ══ End fomTeaEle ══ */}


                        </ div >

                        {/* ══ End fomDivEle ══ */}



                        < button id='fosButEle' className={ ` ${ styles.buttonAnchors }   ${ styles.btnRose } ` } type='submit' >Send Message</ button > { /* What : Form Submit Button Element. Why : A semantic element was required to allow users to submit the form within the contact section. How : Using a standard HTML <button> element with the appropriate attributes (type submit). */ }



                            </fieldset>



                            { tipPosObj && ( // What: Form Tooltip Check. Why: The tooltip shows only while it's open. How: This renders it at its stored position.


                                <div
                                    ref={ tipDivRef }

                                    className={ styles.formTooltipDiv }

                                    style={{
                                        left : `${ tipPosObj.lefNum }px`,
                                        top  : `${ tipPosObj.topNum }px`
                                    }}
                                >{ /* What: Form Tooltip Div Element. Why: A visitor trying the form needs to know it's off and how to reach the salon instead. How: This floats above the point they tried, with the phone number as a link. */ }

                                    The form is disabled at this time. Please call us at <a className={ styles.formTooltipAnchor } href='tel:+1-417-988-6239'>417-988-6239</a>. We apologize for any inconvenience.

                                </div>

                            ) }





                        </div>


                    </ form >

                    {/* ══ End conForEle ══ */}


                </div>

                {/* ══ End cofDivEle ══ */}


            </ div >

            {/* ══ End conDivEle ══ */}


        </ section >


    );


}

// #endregion ConSecCom

// #endregion Components



// #region Exports

export { ConSecCom }; // What: Named Export. Why: The home page renders this section. How: This exports ConSecCom.

// #endregion Exports


