


// #region Imports

import cssModObj from './contact.module.css'; // What: CSS Module Object. Why: The Contact section is styled in its own module, whose class names Vite hashes. How: Its elements read their classes from this.


import { rhyPixFun } from '../../utils/rhythm.ts'; // What: Rhythm Pixel Function. Why: The tooltip's centering math needs its width in pixels, the same rhythm step its stylesheet uses. How: This turns the step's name into pixels at the current root size.
import { useEffect } from 'react';                 // What: Use Effect. Why: An open form tooltip closes on page-wide events, such as a tap anywhere else. How: This adds and removes those listeners while the tooltip is open.
import { useRef    } from 'react';                 // What: Use Ref. Why: The tooltip is placed and closed relative to the disabled form's wrapper. How: This holds what the tooltip's handlers read between renders, such as the wrapper element.
import { useState  } from 'react';                 // What: Use State. Why: The form tooltip opens at a position. How: This holds that position, or null while it's closed.

// #endregion Imports



/**
 * contact.tsx = Contact
 *
 * @summary
 * The home page's Contact section: the phone number, hours, prices, service
 * area, and a quote from the stylists beside the contact form (stacked at
 * 900px and narrower), which is shown but turned off, since the salon doesn't
 * take messages. Its fields sit in a disabled fieldset, and hovering, tapping,
 * or tabbing to them opens a tooltip pointing to the phone number, while the
 * fieldset's hidden legend tells screen readers the same.
 *
 * Sections:
 *  - Types
 *  - Constants
 *  - Helpers
 *  - Components
 *  - Exports
 *
 * @author z4nta0 <https://github.com/z4nta0>
 *
*/



// #region Types

type TipPosTyp = { // What: Tip Position Type. Why: The form tooltip's state and the helpers that close it share one shape. How: This holds where the tooltip sits and whether it's on its way out.


	leaBoo : boolean, // What: Leaving Boolean. Why: A closing tooltip fades out before it's removed. How: This is true from the moment it's closed until its fade ends.
	lefNum : number,  // What: Left Number. Why: The tooltip centers on a point across the wrapper. How: This is that point's distance from the wrapper's left edge, in pixels.
	topNum : number   // What: Top Number. Why: The tooltip rises from a point down the wrapper. How: This is that point's distance from the wrapper's top edge, in pixels.


};

// #endregion Types



// #region Constants

// #region ARE_NAM_ARR

/**
 * ARE_NAM_ARR = Area Name Array
 *
 * @summary
 * The places the salon serves, as the tags under "Service Area" in the
 * Contact section show them: Hickory County first, then the towns around
 * Carson's Corner.
 * Every row is one place's name, so no row needs a comment of its own.
 *
 * @author z4nta0 <https://github.com/z4nta0>
 *
*/

const ARE_NAM_ARR = [ // What: Area Name Array. Why: The "Service Area" row shows one tag per place the salon serves. How: Each entry is a place's name as its tag reads.


	'Hickory County',
	'Hermitage',
	'Pittsburg',
	'Galmey',
	'Wheatland',
	'Nemo',
	'Preston',
	'Cross Timbers',
	'Elkton',
	'Urbana'


];

// #endregion ARE_NAM_ARR



// #region SER_OPT_ARR

/**
 * SER_OPT_ARR = Service Option Array
 *
 * @summary
 * The service select's choices after its placeholder, in order. Every row
 * shares one shape, so its fields carry no comments of their own:
 *
 * - `labStr` (String): Label String, the choice as the visitor reads it.
 *
 * - `valStr` (String): Value String, the choice as the form would send it.
 *
 * @author z4nta0 <https://github.com/z4nta0>
 *
*/

const SER_OPT_ARR = [ // What: Service Option Array. Why: The select lists one choice per service plus a general one. How: Each row pairs a choice's label with its value.


	{ labStr : 'Haircut & Styling',        valStr : 'Haircut and Styling'      }, // What: Haircut And Styling Option Row. Why: Cuts and styling are the first service card. How: This pairs the choice's label with its value.
	{ labStr : 'Color & Highlights',       valStr : 'Color and Highlights'     }, // What: Color And Highlights Option Row. Why: Color is the second service card. How: This pairs the choice's label with its value.
	{ labStr : 'Perms & Texture',          valStr : 'Perms and Texture'        }, // What: Perms And Texture Option Row. Why: Perms and texture are the third service card. How: This pairs the choice's label with its value.
	{ labStr : 'Special Occasion',         valStr : 'Special Occasion'         }, // What: Special Occasion Option Row. Why: Special occasion styling is the fourth service card. How: This pairs the choice's label with its value.
	{ labStr : "Men's Cut",                valStr : "Men's Cut"                }, // What: Men's Cut Option Row. Why: Men's cuts are the fifth service card. How: This pairs the choice's label with its value.
	{ labStr : 'Hair Treatment',           valStr : 'Hair Treatment'           }, // What: Hair Treatment Option Row. Why: Treatments are the sixth service card. How: This pairs the choice's label with its value.
	{ labStr : 'Other / General Question', valStr : 'Other / General Question' }  // What: Other Or General Question Option Row. Why: A visitor may want something no card names. How: This pairs the choice's label with its value.


];

// #endregion SER_OPT_ARR

// #endregion Constants



// #region Helpers

const endTipFun = ( curPosObj : TipPosTyp | null ) => curPosObj?.leaBoo ? null : curPosObj;         // What: End Tip Function. Why: A closing tooltip should leave the page once its fade has played, while an opening one's fade ending changes nothing. How: This state updater removes a leaving tooltip and returns any other state unchanged.
const leaTipFun = ( curPosObj : TipPosTyp | null ) => curPosObj && { ...curPosObj, leaBoo : true }; // What: Leave Tip Function. Why: Every way of closing the tooltip should fade it out rather than snap it away. How: This state updater returns a copy of an open tooltip's state marked as leaving, at the same position, and leaves a closed one closed.

// #endregion Helpers



// #region Components

// #region ConSecCom

/**
 * ConSecCom = Contact Section Component
 *
 * @summary
 * Renders the Contact section and runs its form tooltip. The tooltip's
 * position lives in state, null while it's closed: a mouse entering the form
 * or a tap on it opens the tooltip at that point, focusing the form's wrapper
 * opens it at the form's top edge, and it closes when the mouse leaves, on
 * Escape however it opened, when focus settles outside the form, or on a tap
 * anywhere else. Escape on the tooltip's phone link hands focus back to the
 * wrapper. Its ID, `contact`, is the target of the page's links to this
 * section.
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


	const forWraRef = useRef< HTMLDivElement >( null ); // What: Form Wrapper Reference. Why: The tooltip is placed inside the disabled form's wrapper and closes when a tap lands outside it. How: This holds the wrapper element.
	const skiOpeRef = useRef( false );                  // What: Skip Open Reference. Why: Escape on the tooltip's phone link hands focus back to the wrapper, which would otherwise reopen the tooltip it just closed. How: This is true only for that one hand-back, and the wrapper's focus handler clears it.
	const tipDivRef = useRef< HTMLDivElement >( null ); // What: Tip Div Reference. Why: A press on the tooltip itself, such as on its phone link, shouldn't move it. How: This holds the tooltip element while it's open.

	const [ tipPosObj, setTipPosObj ] = useState< TipPosTyp | null >( null ); // What: Tip Position Object And Setter. Why: The tooltip opens where the visitor pointed, or at the top of the form for the keyboard, and fades out before it goes. How: This holds its left and top in pixels within the wrapper and whether it's leaving, or null once it's gone.


	// #region plaTipFun

	/**
	 * plaTipFun = Place Tip Function
	 *
	 * @summary
	 * Opens the tooltip at a point on the screen, measured from the form
	 * wrapper's corner. Its left is clamped so the tooltip, as wide as the
	 * p10 rhythm step and centered on the point, stays inside the form's
	 * sides whenever the form is at least as wide as the tooltip.
	 *
	 * @author z4nta0 <https://github.com/z4nta0>
	 *
	 * @param cliXcoNum - Client X-Coordinate Number: The point's distance
	 *                    from the viewport's left edge.
	 * @param cliYcoNum - Client Y-Coordinate Number: The point's distance
	 *                    from the viewport's top edge.
	 *
	 * @returns This function does not return anything.
	 *
	 * @example
	 * ```ts
	 * plaTipFun(eveObj.clientX, eveObj.clientY) // => void
	 * ```
	 *
	*/

	const plaTipFun = ( cliXcoNum : number, cliYcoNum : number ) => { // What: Place Tip Function. Why: The tooltip should open where the visitor pointed without spilling past the form's sides. How: This stores the point's position within the wrapper as the tooltip's position.


		const halWidNum = rhyPixFun( 'p10' ) / 2;                             // What: Half Width Number. Why: The tooltip's center has to stay half its width inside each side. How: This halves the p10 rhythm step its stylesheet sizes it to. // Vertical Rhythm Base Plus 10 ~= 242.522px
		const wraRecObj = forWraRef.current!.getBoundingClientRect();         // What: Wrapper Rectangle Object. Why: The point has to be measured from the wrapper's corner. How: This reads the wrapper's box in viewport pixels. // What: Non-Null Note. Why: Only the wrapper's own events call this function. How: Those events can't fire before the ref is attached.
		const lefMaxNum = Math.max( halWidNum, wraRecObj.width - halWidNum ); // What: Left Maximum Number. Why: The tooltip's center has to stay half its width inside the right side. How: This is the wrapper's width less half the tooltip's, never below the left limit.


		setTipPosObj({ // What: Tip Position Update. Why: The tooltip opens at the measured point. How: This stores its left and top within the wrapper, open rather than leaving.


			leaBoo : false,                                                                    // What: Leaving Boolean. Why: An opened tooltip stays until it's closed, even one that was fading out. How: This marks it open.
			lefNum : Math.min( Math.max( cliXcoNum - wraRecObj.left, halWidNum ), lefMaxNum ), // What: Left Number. Why: The tooltip centers on the point across, inside the side limits. How: This measures the point from the wrapper's left edge and clamps it between half the tooltip's width and the right limit.
			topNum : cliYcoNum - wraRecObj.top                                                 // What: Top Number. Why: The tooltip rises from the point. How: This measures the point from the wrapper's top edge.


		});


	};

	// #endregion plaTipFun



	const bluCloFun = () => requestAnimationFrame( () => { if ( !forWraRef.current?.contains( document.activeElement ) ) setTipPosObj( leaTipFun ); } ); // What: Blur Close Function. Why: The tooltip should close once focus leaves the form, but not when Tab moves into its own phone link, or when focus leaves and returns at once. How: This waits a frame, then fades the tooltip out only if focus has settled outside the wrapper.



	useEffect( () => { // What: Outside Close Effect. Why: On a touchscreen there's no pointer leaving the form, so an open tooltip closes when a tap lands anywhere else, and Escape has to close it however it opened, a mouse's hover included, which never puts focus in the form. How: This listens for presses and keys on the page while the tooltip is open, closing it for a press outside the wrapper or for Escape.


		if ( !tipPosObj || tipPosObj.leaBoo ) return; // What: Closed Tooltip Guard. Why: A closed or closing tooltip has nothing to close. How: This skips the listeners.



		const outPreFun = ( preEveObj : PointerEvent ) => { if ( !forWraRef.current!.contains( preEveObj.target as Node ) ) setTipPosObj( leaTipFun ); }; // What: Outside Press Function. Why: Only a press outside the form should close the tooltip. How: This fades it out when the press's target isn't inside the wrapper. // What: Non-Null Note. Why: The listener only exists while the wrapper is mounted and its tooltip open. How: The effect removes it before the wrapper can unmount. // What: Type Assertion Note. Why: A pointer event's target is typed as an EventTarget, while contains needs a Node. How: Every press lands on a node in the page.



		const escKeyFun = ( keyEveObj : KeyboardEvent ) => { // What: Escape Key Function. Why: Escape is the expected way to dismiss a tooltip, and focus on its phone link mustn't fall to the page when the link goes. How: For Escape, this hands focus from the link back to the wrapper without reopening the tooltip, then fades the tooltip out.


			if ( keyEveObj.key !== 'Escape' ) return; // What: Other Key Guard. Why: Only Escape closes the tooltip. How: This ignores every other key.



			if ( tipDivRef.current?.contains( document.activeElement ) ) { // What: Link Focus Check. Why: The phone link disappears with the tooltip, which would drop its focus to the page. How: When focus is inside the tooltip, this moves it back to the wrapper first.


				skiOpeRef.current = true; // What: Skip Open Set. Why: The wrapper's focus handler would reopen the tooltip. How: This tells it to let this one focus pass.


				forWraRef.current!.focus(); // What: Wrapper Focus Call. Why: The keyboard visitor should stay on the form. How: This focuses the wrapper. // What: Non-Null Note. Why: The listener only exists while the wrapper is mounted and its tooltip open. How: The effect removes it before the wrapper can unmount.


			}



			setTipPosObj( leaTipFun ); // What: Tip Close Call. Why: Escape closes the tooltip. How: This fades it out.


		};


		document.addEventListener( 'pointerdown', outPreFun ); // What: Outside Press Listener Call. Why: Presses anywhere on the page have to be seen. How: This registers the press handler.
		document.addEventListener( 'keydown', escKeyFun );     // What: Escape Listener Call. Why: Escape has to work wherever focus is, since a hover never moves it. How: This registers the key handler.



		return () => { // What: Listener Cleanup Return. Why: The listeners should only run while the tooltip is open. How: This removes both when the tooltip closes or the page unmounts.


			document.removeEventListener( 'pointerdown', outPreFun ); // What: Press Listener Removal. Why: A closed tooltip has nothing to close. How: This removes the press handler.
			document.removeEventListener( 'keydown', escKeyFun );     // What: Key Listener Removal. Why: A closed tooltip has nothing to close. How: This removes the key handler.


		};


	}, [ tipPosObj ] ); // What: Effect Dependency Array. Why: The listeners are added when the tooltip opens and removed when it closes. How: tipPosObj changes from null to an open position, then to a leaving one, as it does.



	return (


		<section
			id='contact'

			className={ cssModObj.homConSec }
		>{ /* What: Home Contact Section Element. Why: The page ends with how to reach the salon. How: Its ID, `contact`, is kept as a readable word since the links to it name it in their addresses (/#contact). */ }


			<p className={ cssModObj.eyeLabPar }>Find Us</p>{ /* What: Eyebrow Label Paragraph Element. Why: A script line leads into the heading. How: This shows it above the heading. */ }

			<h2 className={ cssModObj.secTitHea }>Get in Touch</h2>{ /* What: Section Title Heading Element. Why: The section's heading invites a visitor to reach out. How: This shows it. */ }

			<hr className={ cssModObj.secRulHor } />{ /* What: Section Rule Horizontal Rule Element. Why: A short rose rule underlines the heading. How: This draws it. */ }



			<div className={ cssModObj.conLayDiv }>{ /* What: Contact Layout Div Element. Why: The details and the form card sit side by side. How: This holds both columns, stacked at 900px and narrower. */ }


				<div className={ cssModObj.conDetDiv }>{ /* What: Contact Details Div Element. Why: The phone number, hours, prices, service area, and a word from the stylists form the first column, above the form card at 900px and narrower. How: This holds them. */ }


					<div className={ cssModObj.detRowDiv }>{ /* What: Detail Row Div Element. Why: The phone number pairs with its icon and label. How: This lines them up. */ }


						<svg
							className={ cssModObj.detIcoSvg }

							strokeWidth='1.8'
							viewBox='0 0 24 24'

							aria-hidden='true'
						>{ /* What: Detail Icon SVG Element. Why: A phone icon marks the number. How: This draws it, hidden from screen readers since the label beside it says what it is. */ }


							<path d='M3 5h2l1 5-2 2a16 16 0 006 6l2-2 5 1v2a2 2 0 01-2 2C8 21 3 16 3 7a2 2 0 012-2z' />{ /* What: Phone Path Element. Why: The phone icon is one shape. How: This draws its outline. */ }


						</svg>

						<div>{ /* What: Detail Text Div Element. Why: The label and the number stack beside the icon. How: This holds them. */ }


							<strong className={ cssModObj.detLabStr }>Phone</strong>{ /* What: Detail Label Strong Element. Why: The detail is named above its value. How: This shows "Phone". */ }

							<a
								className={ cssModObj.detValAnc }

								href='tel:+1-417-988-6239'
							>417-988-6239</a>{ /* What: Detail Value Anchor Element. Why: A phone number should call when tapped. How: This dials the salon. */ }


						</div>


					</div>


					<div className={ cssModObj.detRowDiv }>{ /* What: Detail Row Div Element. Why: The hours pair with their icon and label. How: This lines them up. */ }


						<svg
							className={ cssModObj.detIcoSvg }

							strokeWidth='1.8'
							viewBox='0 0 24 24'

							aria-hidden='true'
						>{ /* What: Detail Icon SVG Element. Why: A calendar icon marks the hours. How: This draws it, hidden from screen readers since the label beside it says what it is. */ }


							<rect
								height='16'
								rx='2'
								width='18'
								x='3'
								y='4'
							/>{ /* What: Calendar Body Rect Element. Why: The calendar's page is a rounded rectangle. How: This draws it. */ }

							<path d='M16 2v4M8 2v4M3 10h18' />{ /* What: Calendar Rings Path Element. Why: The calendar's rings and header line finish the icon. How: This draws them. */ }


						</svg>

						<div>{ /* What: Detail Text Div Element. Why: The label and the hours stack beside the icon. How: This holds them. */ }


							<strong className={ cssModObj.detLabStr }>Hours</strong>{ /* What: Detail Label Strong Element. Why: The detail is named above its value. How: This shows "Hours". */ }

							<span className={ cssModObj.detValSpa }>By Appointment<br />Call us to schedule</span>{ /* What: Detail Value Span Element. Why: The salon works by appointment. How: This says so over two lines. */ }


						</div>


					</div>


					<div className={ cssModObj.detRowDiv }>{ /* What: Detail Row Div Element. Why: The price range pairs with its icon and label. How: This lines them up. */ }


						<svg
							className={ cssModObj.detIcoSvg }

							strokeWidth='1.8'
							viewBox='0 0 24 24'

							aria-hidden='true'
						>{ /* What: Detail Icon SVG Element. Why: A price tag icon marks the price range. How: This draws it, hidden from screen readers since the label beside it says what it is. */ }


							<path d='M20.6 13.4l-7.2 7.2a2 2 0 01-2.8 0L2 12V2h10l8.6 8.6a2 2 0 010 2.8z' />{ /* What: Tag Body Path Element. Why: The tag's outline is one shape. How: This draws it. */ }

							<circle
								cx='7'
								cy='7'
								r='1'
							/>{ /* What: Tag Hole Circle Element. Why: A punched hole makes the shape read as a price tag. How: This draws it near the tag's corner. */ }


						</svg>

						<div>{ /* What: Detail Text Div Element. Why: The label and the price range stack beside the icon. How: This holds them. */ }


							<strong className={ cssModObj.detLabStr }>Prices</strong>{ /* What: Detail Label Strong Element. Why: The detail is named above its value. How: This shows "Prices". */ }

							<span className={ cssModObj.detValSpa }>$20 to $100, depending on the service</span>{ /* What: Detail Value Span Element. Why: A visitor should know roughly what a visit costs, and the structured data's price range has to appear on the page. How: This gives the range. */ }


						</div>


					</div>



					<div className={ cssModObj.detRowDiv }>{ /* What: Detail Row Div Element. Why: The service area pairs with its icon and label. How: This lines them up. */ }


						<svg
							className={ cssModObj.detIcoSvg }

							strokeWidth='1.8'
							viewBox='0 0 24 24'

							aria-hidden='true'
						>{ /* What: Detail Icon SVG Element. Why: A map pin icon marks the service area. How: This draws it, hidden from screen readers since the label beside it says what it is. */ }


							<path d='M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z' />{ /* What: Pin Body Path Element. Why: The pin's outline is one shape. How: This draws it. */ }

							<circle
								cx='12'
								cy='10'
								r='3'
							/>{ /* What: Pin Center Circle Element. Why: A hollow center makes the shape read as a map pin. How: This draws it inside the pin's head. */ }


						</svg>


						<div>{ /* What: Detail Text Div Element. Why: The label and the places stack beside the icon. How: This holds them. */ }


							<strong className={ cssModObj.detLabStr }>Service Area</strong>{ /* What: Detail Label Strong Element. Why: The detail is named above its value. How: This shows "Service Area". */ }

							<ul className={ cssModObj.areTagUno }>{ /* What: Area Tag Unordered List Element. Why: The places the salon serves read as a list of labels, and the structured data's service area has to appear on the page. How: This sets them as tags in a row that wraps. */ }


								{ ARE_NAM_ARR.map( ( areNamStr ) => ( // What: Area Tag Map. Why: Each place gets its own tag. How: This renders one list item per name in ARE_NAM_ARR.


									<li
										key={ areNamStr }

										className={ cssModObj.areTagIte }
									>{ areNamStr }</li> // What: Area Tag Item Element. Why: Each place reads as its own label. How: This shows the place's name in a small rose-outlined tag.


								))}


							</ul>


						</div>


					</div>



					<div className={ cssModObj.conQuoDiv }>{ /* What: Contact Quote Div Element. Why: A word from the stylists closes the details. How: This sets it on a faint panel with a rose edge. */ }


						<p className={ cssModObj.quoBodPar }>"We're your neighbors, so give us a call or stop by. We'd love to hear from you."</p>{ /* What: Quote Body Paragraph Element. Why: The stylists speak to visitors directly. How: This shows their words. */ }

						<p className={ cssModObj.quoSigPar }>— Juli & Keeli</p>{ /* What: Quote Signature Paragraph Element. Why: The quote is signed by the stylists. How: This shows their names in script after an em dash, the copy rules' exception for a quote's attribution. */ }


					</div>


				</div>



				<div className={ cssModObj.forCarDiv }>{ /* What: Form Card Div Element. Why: The form sits on a light card against the navy. How: This holds its heading and the form. */ }


					<h3 className={ cssModObj.forTitHea }>Send Us a Message</h3>{ /* What: Form Title Heading Element. Why: The card names the form. How: This shows its heading. */ }



					<form onSubmit={ ( subEveObj ) => subEveObj.preventDefault() }>{ /* What: Contact Form Element. Why: The fields keep a form's semantics, though the salon doesn't take messages. How: Its only attribute stops a submission, which its disabled fields can't trigger anyway. */ }


						<div
							ref={ forWraRef }

							className={ cssModObj.forWraDiv }

							aria-describedby='forNotLeg'
							aria-label='Contact form, turned off'
							role='group'
							tabIndex={ 0 }

							onBlur={ bluCloFun }
							onFocus={ ( focEveObj ) => { // What: Focus Open Handler. Why: Keyboard users reach the form as one stop and need the same message. How: This opens the tooltip centered at the form's top edge when the wrapper itself takes focus.


								if ( focEveObj.target !== focEveObj.currentTarget ) return; // What: Own Focus Guard. Why: Focus moving onto the tooltip's own link shouldn't move the tooltip. How: This acts only when the wrapper itself takes focus.



								if ( skiOpeRef.current ) { skiOpeRef.current = false; return; } // What: Hand-Back Guard. Why: Escape on the phone link returns focus here after closing the tooltip, which shouldn't reopen. How: This clears the flag and leaves the tooltip closed.



								setTipPosObj({ // What: Tip Position Update. Why: The tooltip opens at the form's top edge for the keyboard. How: This stores its center and top, open rather than leaving.


									leaBoo : false,                                   // What: Leaving Boolean. Why: An opened tooltip stays until it's closed. How: This marks it open.
									lefNum : focEveObj.currentTarget.offsetWidth / 2, // What: Left Number. Why: The keyboard has no point to open at. How: This centers the tooltip across the wrapper.
									topNum : 0                                        // What: Top Number. Why: The tooltip rises from the form's top edge. How: This places its point there.


								});


							} }
							onPointerDown={ ( preEveObj ) => { if ( !tipDivRef.current?.contains( preEveObj.target as Node ) ) plaTipFun( preEveObj.clientX, preEveObj.clientY ); } } // What: Press Open Handler. Why: A tap on a touchscreen has no hover to open the tooltip, but a tap on the open tooltip, such as on its phone link, mustn't move it out from under the finger. How: This opens it where the finger landed, unless the press was inside the tooltip. // What: Type Assertion Note. Why: A pointer event's target is typed as an EventTarget, while contains needs a Node. How: Every press lands on a node in the page.
							onPointerEnter={ ( entEveObj ) => { if ( entEveObj.pointerType === 'mouse' ) plaTipFun( entEveObj.clientX, entEveObj.clientY ); } } // What: Mouse Enter Handler. Why: A mouse hovering the form should learn why it's turned off. How: This opens the tooltip where the pointer entered, for a mouse only, since a touch also fires enter before its press.
							onPointerLeave={ ( leaEveObj ) => { if ( leaEveObj.pointerType === 'mouse' ) setTipPosObj( leaTipFun ); } } // What: Mouse Leave Handler. Why: The tooltip should go once the mouse moves off the form. How: This closes it for a mouse only, since a touch fires leave as soon as the finger lifts.
						>{ /* What: Form Wrapper Div Element. Why: The disabled fieldset ignores the pointer, and the keyboard skips its fields entirely. How: This wraps the disabled fields, catches the pointer for them, and takes one keyboard stop, opening the tooltip from each and described by the fieldset's legend. */ }


							<fieldset
								className={ cssModObj.forDisFie }

								disabled
							>{ /* What: Form Disabled Fieldset Element. Why: The salon doesn't take messages, so every field and the button are turned off at once. How: This disables everything inside it. */ }


								<legend
									id='forNotLeg'

									className={ cssModObj.forNotLeg }
								>The form is disabled at this time. Please call us at 417-988-6239. We apologize for any inconvenience.</legend>{ /* What: Form Note Legend Element. Why: A fieldset should say what its group is, and screen readers should hear why the form is off without needing the tooltip. How: This holds the tooltip's message, hidden visually, and also describes the wrapper through aria-describedby. */ }


								<div className={ cssModObj.forRowDiv }>{ /* What: Form Row Div Element. Why: The first and last name fields share a row. How: This splits it into two columns, stacked at 900px and narrower. */ }


									<div>{ /* What: First Name Field Div Element. Why: The label and its input form one group. How: This holds them in the row's first column. */ }


										<label
											className={ cssModObj.forFieLab }

											htmlFor='firNamInp'
										>First Name</label>{ /* What: Form Field Label Element. Why: The field needs a visible name. How: This names it and points at its input. */ }

										<input
											id='firNamInp'

											className={ cssModObj.forFieInp }

											name='firstName'

											placeholder='Jane'
											required
											type='text'
										/>{ /* What: Form Field Input Element. Why: The form asks for the visitor's first name. How: Its name, `firstName`, is kept as the form data key. */ }


									</div>

									<div>{ /* What: Last Name Field Div Element. Why: The label and its input form one group. How: This holds them in the row's second column. */ }


										<label
											className={ cssModObj.forFieLab }

											htmlFor='lasNamInp'
										>Last Name</label>{ /* What: Form Field Label Element. Why: The field needs a visible name. How: This names it and points at its input. */ }

										<input
											id='lasNamInp'

											className={ cssModObj.forFieInp }

											name='lastName'

											placeholder='Smith'
											required
											type='text'
										/>{ /* What: Form Field Input Element. Why: The form asks for the visitor's last name. How: Its name, `lastName`, is kept as the form data key. */ }


									</div>


								</div>


								<div className={ cssModObj.forFieDiv }>{ /* What: Form Field Div Element. Why: The phone field and its label form one group. How: This spaces it from the next. */ }


									<label
										className={ cssModObj.forFieLab }

										htmlFor='phoNumInp'
									>Phone Number (optional)</label>{ /* What: Form Field Label Element. Why: The field needs a visible name. How: This names it and points at its input. */ }

									<input
										id='phoNumInp'

										className={ cssModObj.forFieInp }

										name='phone'

										placeholder='417-555-0100'
										type='tel'
									/>{ /* What: Form Field Input Element. Why: The form offers to take a number to call back. How: Its name, `phone`, is kept as the form data key. */ }


								</div>

								<div className={ cssModObj.forFieDiv }>{ /* What: Form Field Div Element. Why: The email field and its label form one group. How: This spaces it from the next. */ }


									<label
										className={ cssModObj.forFieLab }

										htmlFor='emaAdrInp'
									>Email (optional)</label>{ /* What: Form Field Label Element. Why: The field needs a visible name. How: This names it and points at its input. */ }

									<input
										id='emaAdrInp'

										className={ cssModObj.forFieInp }

										name='email'

										placeholder='jane@email.com'
										type='email'
									/>{ /* What: Form Field Input Element. Why: The form offers to take an email address. How: Its name, `email`, is kept as the form data key. */ }


								</div>


								<div className={ cssModObj.forFieDiv }>{ /* What: Form Field Div Element. Why: The service field and its label form one group. How: This spaces it from the next. */ }


									<label
										className={ cssModObj.forFieLab }

										htmlFor='serIntSel'
									>Service Interested In</label>{ /* What: Form Field Label Element. Why: The field needs a visible name. How: This names it and points at its select. */ }

									<select
										id='serIntSel'

										className={ cssModObj.forFieSel }

										name='service'

										defaultValue=''
										required
									>{ /* What: Form Field Select Element. Why: The form asks which service the visitor wants. How: It starts on its placeholder, and its name, `service`, is kept as the form data key. */ }


										<option
											disabled
											value=''
										>Select a service</option>{ /* What: Placeholder Option Element. Why: The select should prompt for a choice rather than preselect a service. How: This shows a prompt that can't be chosen. */ }

										{ SER_OPT_ARR.map( ( optRecObj ) => ( // What: Service Option Map. Why: Each service is one choice. How: This renders one option per row.


											<option
												key={ optRecObj.valStr }

												value={ optRecObj.valStr }
											>{ optRecObj.labStr }</option> // What: Service Option Element. Why: The visitor picks a service by its label. How: This shows the row's label, valued for the form.


										))}


									</select>


								</div>


								<div className={ cssModObj.forFieDiv }>{ /* What: Form Field Div Element. Why: The message field and its label form one group. How: This spaces it from the button. */ }


									<label
										className={ cssModObj.forFieLab }

										htmlFor='mesBodTex'
									>Message</label>{ /* What: Form Field Label Element. Why: The field needs a visible name. How: This names it and points at its textarea. */ }

									<textarea
										id='mesBodTex'

										className={ cssModObj.forFieTex }

										name='message'

										placeholder="Tell us a little about what you're looking for…"
										required
									/>{ /* What: Form Field Textarea Element. Why: The form asks what the visitor is looking for. How: Its name, `message`, is kept as the form data key. */ }


								</div>

								<button
									className={ cssModObj.forSubBut }

									type='submit'
								>Send Message</button>{ /* What: Form Submit Button Element. Why: The form ends with its send button. How: This would submit the form, disabled with the rest of the fieldset. */ }


							</fieldset>



							{ tipPosObj && ( // What: Form Tooltip Check. Why: The tooltip shows while it's open and while it fades out. How: This renders it at its stored position.


								<div
									ref={ tipDivRef }

									className={ cssModObj.forTipDiv }

									style={{
										left : `${ tipPosObj.lefNum }px`,
										top  : `${ tipPosObj.topNum }px`
									}}

									data-tooltip-close-active={ tipPosObj.leaBoo || undefined }

									onAnimationEnd={ () => setTipPosObj( endTipFun ) } // What: Fade End Handler. Why: A closing tooltip stays on the page until its fade-out has played, which ends in its stylesheet. How: This removes the tooltip once a leaving fade ends, and leaves an opening one alone.
								>The form is disabled at this time. Please call us at <a className={ cssModObj.tipTelAnc } href='tel:+1-417-988-6239'>417-988-6239</a>. We apologize for any inconvenience.</div> // What: Form Tooltip Div Element. Why: A visitor trying the form needs to know it's off and how to reach the salon instead. How: This floats above the point they tried, with the phone number as a link.


							) }


						</div>


					</form>


				</div>


			</div>


		</section>


	);


}

// #endregion ConSecCom

// #endregion Components



// #region Exports

export { ConSecCom }; // What: Named Export. Why: The home page renders the Contact section last. How: This exports ConSecCom.

// #endregion Exports


