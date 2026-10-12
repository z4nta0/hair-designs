


// #region Imports

import cssModObj from './contact.module.css'; // What: CSS Module Object. Why: The Contact section is styled in its own module, whose class names Vite hashes. How: Every element reads its class from this.


import { useEffect } from 'react'; // What: Use Effect. Why: An open form tooltip closes when a tap lands anywhere else. How: This adds and removes that page-wide listener while the tooltip is open.
import { useRef    } from 'react'; // What: Use Ref. Why: The tooltip is placed and closed relative to the disabled form's wrapper. How: This holds the wrapper and the tooltip.
import { useState  } from 'react'; // What: Use State. Why: The form tooltip opens at a position. How: This holds that position, or null while it's closed.

// #endregion Imports



/**
 * contact.tsx = Contact
 *
 * @summary
 * The home page's Contact section: the phone number, hours, and a quote from
 * the stylists beside the contact form, which is shown but turned off, since
 * the salon doesn't take messages. Its fields sit in a disabled fieldset,
 * and hovering, tapping, or tabbing to them opens a tooltip pointing to the
 * phone number, while the fieldset's hidden legend tells screen readers the
 * same.
 *
 * Sections:
 *  - Constants
 *  - Components
 *  - Exports
 *
 * @author z4nta0 <https://github.com/z4nta0>
 *
*/



// #region Constants

/**
 * SER_OPT_ARR = Service Option Array
 *
 * @summary
 * The service select's choices after its placeholder, in order. Every row
 * shares one shape, so its fields carry no comments of their own:
 * - `labStr` (String): Label String, the choice as the visitor reads it.
 * - `valStr` (String): Value String, the choice as the form would send it.
 *
 * @author z4nta0 <https://github.com/z4nta0>
 *
*/

const SER_OPT_ARR = [ // What: Service Option Array. Why: The select lists one choice per service plus a general one. How: Each row pairs a choice's label with its value.


	{ labStr : 'Haircut & Styling',        valStr : 'Haircut and Styling'      },
	{ labStr : 'Color & Highlights',       valStr : 'Color and Highlights'     },
	{ labStr : 'Perms & Texture',          valStr : 'Perms and Texture'        },
	{ labStr : 'Special Occasion',         valStr : 'Special Occasion'         },
	{ labStr : "Men's Cut",                valStr : "Men's Cut"                },
	{ labStr : 'Hair Treatment',           valStr : 'Hair Treatment'           },
	{ labStr : 'Other / General Question', valStr : 'Other / General Question' }


];

// #endregion Constants



// #region Components

// #region ConSecCom

/**
 * ConSecCom = Contact Section Component
 *
 * @summary
 * Renders the Contact section and runs its form tooltip. The tooltip's
 * position lives in state, null while it's closed: a mouse entering the
 * form or a tap on it opens the tooltip at that point, focusing the form's
 * wrapper opens it at the form's top edge, and it closes when the mouse
 * leaves, on Escape, when focus settles outside the form, or on a tap
 * anywhere else. Its id, contact, is the target of the bar's Contact link
 * and the hero's and About section's buttons.
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
	const tipDivRef = useRef< HTMLDivElement >( null ); // What: Tip Div Reference. Why: A press on the tooltip itself, such as on its phone link, shouldn't move it. How: This holds the tooltip element while it's open.

	const [ tipPosObj, setTipPosObj ] = useState< { lefNum : number, topNum : number } | null >( null ); // What: Tip Position Object And Setter. Why: The tooltip opens where the visitor pointed, or at the top of the form for the keyboard. How: This holds its left and top in pixels within the wrapper, or null while it's closed.



	// #region plaTipFun

	/**
	 * plaTipFun = Place Tip Function
	 *
	 * @summary
	 * Opens the tooltip at a point on the screen, measured from the form
	 * wrapper's corner. Its left is clamped so the tooltip, 260px wide and
	 * centered on the point, never spills past either side of the form.
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


		const wraRecObj = forWraRef.current!.getBoundingClientRect(); // What: Wrapper Rectangle Object. Why: The point has to be measured from the wrapper's corner. How: This reads the wrapper's box in viewport pixels. // What: Non-Null Note. Why: Only the wrapper's own events call this function. How: Those events can't fire before the ref is attached.
		const lefMaxNum = Math.max( 130, wraRecObj.width - 130 );     // What: Left Maximum Number. Why: The tooltip's center has to stay 130px, half its width, inside the right side. How: This is the wrapper's width less 130px, never below the left limit.


		setTipPosObj({ // What: Tip Position Update. Why: The tooltip opens at the measured point. How: This stores its left and top within the wrapper.


			lefNum : Math.min( Math.max( cliXcoNum - wraRecObj.left, 130 ), lefMaxNum ), // What: Left Number. Why: The tooltip centers on the point across, inside the side limits. How: This measures the point from the wrapper's left edge and clamps it between 130px and the right limit.
			topNum : cliYcoNum - wraRecObj.top                                          // What: Top Number. Why: The tooltip rises from the point. How: This measures the point from the wrapper's top edge.


		});


	};

	// #endregion plaTipFun



	const bluCloFun = () => requestAnimationFrame( () => { if ( !forWraRef.current?.contains( document.activeElement ) ) setTipPosObj( null ); } ); // What: Blur Close Function. Why: The tooltip should close once focus leaves the form, but not when Tab moves into its own phone link, or when focus leaves and returns at once. How: This waits a frame, then closes the tooltip only if focus has settled outside the wrapper.



	useEffect( () => { // What: Outside Tap Effect. Why: On a touchscreen there's no pointer leaving the form, so an open tooltip closes when a tap lands anywhere else. How: This listens for presses on the page while the tooltip is open and closes it for one outside the wrapper.


		if ( !tipPosObj ) return; // What: Closed Tooltip Guard. Why: A closed tooltip has nothing to close. How: This skips the listener.



		const outPreFun = ( preEveObj : PointerEvent ) => { if ( !forWraRef.current!.contains( preEveObj.target as Node ) ) setTipPosObj( null ); }; // What: Outside Press Function. Why: Only a press outside the form should close the tooltip. How: This closes it when the press's target isn't inside the wrapper. // What: Non-Null Note. Why: The listener only exists while the wrapper is mounted and its tooltip open. How: The effect removes it before the wrapper can unmount. // What: Type Assertion Note. Why: A pointer event's target is typed as an EventTarget, while contains needs a Node. How: Every press lands on a node in the page.


		document.addEventListener( 'pointerdown', outPreFun ); // What: Outside Press Listener Call. Why: Presses anywhere on the page have to be seen. How: This registers the handler.



		return () => document.removeEventListener( 'pointerdown', outPreFun ); // What: Listener Cleanup Return. Why: The listener should only run while the tooltip is open. How: This removes it when the tooltip closes or the page unmounts.


	}, [ tipPosObj ] ); // What: Effect Dependency Array. Why: The listener is added when the tooltip opens and removed when it closes. How: tipPosObj changes from null to a position and back as it does.



	return (


		<section
			id='contact'

			className={ cssModObj.homConSec }
		>{ /* What: Home Contact Section Element. Why: The page ends with how to reach the salon. How: Its id, contact, is kept as a readable word since in-page links put it in the address bar. */ }


			<p className={ cssModObj.eyeLabPar }>Find Us</p>{ /* What: Eyebrow Label Paragraph Element. Why: A script line leads into the heading. How: This shows it above the heading. */ }

			<h2 className={ cssModObj.secTitHea }>Get in Touch</h2>{ /* What: Section Title Heading Element. Why: The section's heading invites a visitor to reach out. How: This shows it. */ }

			<hr className={ cssModObj.secRulHor } />{ /* What: Section Rule Horizontal Rule Element. Why: A short rose rule underlines the heading. How: This draws it. */ }



			<div className={ cssModObj.conLayDiv }>{ /* What: Contact Layout Div Element. Why: The details and the form card sit side by side. How: This holds both columns, stacked on narrow screens. */ }


				<div className={ cssModObj.conDetDiv }>{ /* What: Contact Details Div Element. Why: The phone number, hours, and a word from the stylists form the first column. How: This holds them. */ }


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


							<strong className={ cssModObj.detLabStr }>Phone</strong>{ /* What: Detail Label Strong Element. Why: The detail is named above its value. How: This shows Phone. */ }

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


							<strong className={ cssModObj.detLabStr }>Hours</strong>{ /* What: Detail Label Strong Element. Why: The detail is named above its value. How: This shows Hours. */ }

							<span className={ cssModObj.detValSpa }>By Appointment<br />Call us to schedule</span>{ /* What: Detail Value Span Element. Why: The salon works by appointment. How: This says so over two lines. */ }


						</div>


					</div>



					<div className={ cssModObj.conQuoDiv }>{ /* What: Contact Quote Div Element. Why: A word from the stylists closes the details. How: This sets it on a faint panel with a rose edge. */ }


						<p className={ cssModObj.quoBodPar }>"We're your neighbors — give us a call, stop by, or drop us a message. We'd love to hear from you."</p>{ /* What: Quote Body Paragraph Element. Why: The stylists speak to visitors directly. How: This shows their words. */ }

						<p className={ cssModObj.quoSigPar }>— Juli &amp; Keeli</p>{ /* What: Quote Signature Paragraph Element. Why: The quote is signed by the stylists. How: This shows their names in script. */ }


					</div>


				</div>



				<div className={ cssModObj.forCarDiv }>{ /* What: Form Card Div Element. Why: The form sits on a light card against the navy. How: This holds its heading and the form. */ }


					<h3 className={ cssModObj.forTitHea }>Send Us a Message</h3>{ /* What: Form Title Heading Element. Why: The card names the form. How: This shows its heading. */ }



					<form onSubmit={ ( subEveObj ) => subEveObj.preventDefault() }>{ /* What: Contact Form Element. Why: The fields keep a form's semantics, though the salon doesn't take messages. How: Its only attribute stops a submission, which its disabled fields can't trigger anyway. */ }



						<div
							ref={ forWraRef }

							className={ cssModObj.forWraDiv }

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
						>{ /* What: Form Wrapper Div Element. Why: Disabled fields don't reliably pass the pointer on in every browser, and the keyboard skips them entirely. How: This wraps the disabled fields, catches the pointer for them, and takes one keyboard stop, opening the tooltip from each and described by the fieldset's legend. */ }



							<fieldset
								className={ cssModObj.forDisFie }

								disabled
							>{ /* What: Form Disabled Fieldset Element. Why: The salon doesn't take messages, so every field and the button are turned off at once. How: This disables everything inside it. */ }


								<legend
									id='forNotLeg'

									className={ cssModObj.forNotLeg }
								>The form is disabled at this time. Please call us at 417-988-6239. We apologize for any inconvenience.</legend>{ /* What: Form Note Legend Element. Why: A fieldset should say what its group is, and screen readers should hear why the form is off without needing the tooltip. How: This holds the tooltip's message, hidden visually, and also describes the wrapper through aria-describedby. */ }



								<div className={ cssModObj.forRowDiv }>{ /* What: Form Row Div Element. Why: The first and last name fields share a row. How: This splits it into two columns, stacked on narrow screens. */ }


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
										/>{ /* What: First Name Input Element. Why: The form asks for the visitor's first name. How: Its name, firstName, is kept as the form data key. */ }


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
										/>{ /* What: Last Name Input Element. Why: The form asks for the visitor's last name. How: Its name, lastName, is kept as the form data key. */ }


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
									/>{ /* What: Phone Number Input Element. Why: The form offers to take a number to call back. How: Its name, phone, is kept as the form data key. */ }


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
									/>{ /* What: Email Address Input Element. Why: The form offers to take an email address. How: Its name, email, is kept as the form data key. */ }


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
									>{ /* What: Service Interest Select Element. Why: The form asks which service the visitor wants. How: It starts on its placeholder, and its name, service, is kept as the form data key. */ }


										<option
											disabled
											value=''
										>— Select a service —</option>{ /* What: Placeholder Option Element. Why: The select should prompt for a choice rather than preselect a service. How: This shows a prompt that can't be chosen. */ }

										{ SER_OPT_ARR.map( ( optRcdObj ) => ( // What: Service Option Map. Why: Each service is one choice. How: This renders one option per row.


											<option
												key={ optRcdObj.valStr }

												value={ optRcdObj.valStr }
											>{ optRcdObj.labStr }</option> // What: Service Option Element. Why: The visitor picks a service by its label. How: This shows the row's label, valued for the form.


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
									/>{ /* What: Message Body Textarea Element. Why: The form asks what the visitor is looking for. How: Its name, message, is kept as the form data key. */ }


								</div>

								<button
									className={ cssModObj.forSubBut }

									type='submit'
								>Send Message</button>{ /* What: Form Submit Button Element. Why: The form ends with its send button. How: This would submit the form, disabled with the rest of the fieldset. */ }


							</fieldset>



							{ tipPosObj && ( // What: Form Tooltip Check. Why: The tooltip shows only while it's open. How: This renders it at its stored position.


								<div
									ref={ tipDivRef }

									className={ cssModObj.forTipDiv }

									style={{
										left : `${ tipPosObj.lefNum }px`,
										top  : `${ tipPosObj.topNum }px`
									}}
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

export { ConSecCom }; // What: Named Exports. Why: The home page renders the Contact section last. How: This exports ConSecCom.

// #endregion Exports


