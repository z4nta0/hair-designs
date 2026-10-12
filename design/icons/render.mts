


// #region Imports

import { chromium      } from '@playwright/test'; // What: Chromium. Why: The icons are drawn in a real browser's canvas, the one image tool every machine running the tests already has. How: This launches Playwright's Chromium.
import { fileURLToPath } from 'node:url';         // What: File URL To Path. Why: The source and output paths are resolved from this script's own location. How: This turns a file URL into a path.
import { readFileSync  } from 'node:fs';          // What: Read File Sync. Why: The logo and the site's colors are read from the source tree. How: This reads each file's text.
import { writeFileSync } from 'node:fs';          // What: Write File Sync. Why: Each finished icon is saved into public/. How: This writes its bytes.

// #endregion Imports



/**
 * render.mts = Favicon Set Renderer
 *
 * @summary
 * Rebuilds the site's whole icon set in public/ from the logo the site shows,
 * src/assets/logo.svg. The logo is light artwork drawn for the navy bar, so
 * every icon sets it on the bar's navy, read from styles.css's
 * --bac-inv-col so it follows the site's color: favicon.svg puts it on a
 * rounded navy square, for the browsers that read SVG favicons, and the PNG
 * icons at 16, 32, 192, and 512px and a favicon.ico holding the 16, 32, and
 * 48px sizes are drawn from that same SVG, for every other browser and for
 * the request browsers make for /favicon.ico on their own. The 180px
 * apple-touch-icon.png fills the whole square with navy instead, since iOS
 * fills transparent corners with black and rounds the corners itself, and
 * draws the logo a little smaller, so those corners never crowd the arrows.
 * Since the logo is a vector, each size is drawn straight from it. Run it
 * with npm run icons whenever the logo or the navy changes. Adapted from
 * tonys-toppers' own icon renderer.
 *
 * Sections:
 *  - Constants
 *  - Module Init
 *
 * @author z4nta0 <https://github.com/z4nta0>
 *
*/



// #region Constants

type IcoRecTyp = { // What: Icon Record Type. Why: Every PNG icon is described the same way. How: This names its file, its size, and which SVG it's drawn from.


	filStr : string,  // What: File String. Why: Each icon is saved under its own name in public/. How: This is the file name.
	sizNum : number,  // What: Size Number. Why: Each icon is square at its own size. How: This is its width and height in pixels.
	touBoo : boolean  // What: Touch Boolean. Why: The Apple touch icon is drawn from its own full-square SVG. How: This is true for that icon alone.


};

const ICO_REC_ARR : IcoRecTyp[] = [ // What: Icon Record Array. Why: The PNG icons the head links to, and the one iOS reads, are rendered from one list. How: Each row names a file, its size, and whether it's the touch icon.


	{ filStr : 'favicon-16x16.png',    sizNum : 16,  touBoo : false }, // What: Small Icon Row. Why: Tabs draw small icons crisper at their own size. How: This renders the 16px icon.
	{ filStr : 'favicon-32x32.png',    sizNum : 32,  touBoo : false }, // What: Medium Icon Row. Why: Most browsers pick a 32px tab icon. How: This renders the 32px icon.
	{ filStr : 'favicon-192x192.png',  sizNum : 192, touBoo : false }, // What: Large Icon Row. Why: Android and some browsers use a large icon for shortcuts. How: This renders the 192px icon.
	{ filStr : 'favicon-512x512.png',  sizNum : 512, touBoo : false }, // What: Extra Large Icon Row. Why: High-density screens and launchers can ask for a bigger icon still, and the structured data names it as the salon's logo. How: This renders the 512px icon.
	{ filStr : 'apple-touch-icon.png', sizNum : 180, touBoo : true  }  // What: Apple Touch Icon Row. Why: iOS draws the home screen icon at 180px and fills transparency with black. How: This renders the full navy square.


];



const ICO_SIZ_ARR = [ 16, 32, 48 ]; // What: ICO Size Array. Why: favicon.ico should hold the sizes older browsers and Windows pick from. How: Each entry is one square size packed into the file.



const FAV_SCA_NUM = 0.84;                                                                                                                                   // What: Favicon Scale Number. Why: The arrows' feathers reach the logo's corners, which a rounded square would clip. How: favicon.svg draws the logo at this share of its square, centered.
const LOG_SVG_STR = readFileSync( new URL( '../../src/assets/logo.svg', import.meta.url ), 'utf8' );                                                        // What: Logo SVG String. Why: Every icon is drawn from the logo the site shows. How: This reads it from src/assets/.
const NAV_COL_STR = readFileSync( new URL( '../../src/styles/styles.css', import.meta.url ), 'utf8' ).match( /--bac-inv-col\s*:\s*(#[0-9a-f]{6})/i )![ 1 ]; // What: Navy Color String. Why: The icons sit on the same navy as the bar, and should follow it if it changes. How: This reads --bac-inv-col's value from styles.css. // What: Non-Null Note. Why: match returns null when the pattern isn't found. How: styles.css always defines --bac-inv-col as a hex color, and a missing one should stop the run.
const OUT_DIR_STR = fileURLToPath( new URL( '../../public/', import.meta.url ) );                                                                           // What: Output Directory String. Why: Browsers request icons from the site's root. How: This resolves public/ from this script's folder.
const TOU_SCA_NUM = 0.74;                                                                                                                                   // What: Touch Scale Number. Why: iOS rounds the touch icon's corners further than favicon.svg does. How: The touch icon draws the logo at this share of its square, centered.

// #endregion Constants



// #region Module Init

const logInnStr = LOG_SVG_STR.replace( /^[\s\S]*?<svg[^>]*>/, '' ).replace( /<\/svg>\s*$/, '' ); // What: Logo Inner String. Why: The logo's shapes are set inside a new square, so its own outer svg tag has to go. How: This strips the opening and closing svg tags, keeping everything between them.
const icoSvgFun = ( scaValNum : number, radValNum : number ) : string => `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 220 220'><rect width='220' height='220' rx='${ radValNum }' fill='${ NAV_COL_STR }'/><g transform='translate(${ ( 110 * ( 1 - scaValNum ) ).toFixed( 1 ) } ${ ( 110 * ( 1 - scaValNum ) ).toFixed( 1 ) }) scale(${ scaValNum })'>${ logInnStr }</g></svg>\n`; // What: Icon SVG Function. Why: favicon.svg and the touch icon frame the logo the same way at different scales and corner radii. How: This returns the logo set on navy as SVG text.
const favSvgStr = icoSvgFun( FAV_SCA_NUM, 44 );                                                  // What: Favicon SVG String. Why: Browsers that read SVG favicons show the logo sharp at any density. How: This sets the logo on a navy square rounded by a fifth of its side.
const touSvgStr = icoSvgFun( TOU_SCA_NUM, 0 );                                                   // What: Touch SVG String. Why: iOS rounds the touch icon itself and fills transparent corners with black. How: This sets the logo, a little smaller, on a full navy square.


writeFileSync( OUT_DIR_STR + 'favicon.svg', favSvgStr ); // What: Favicon SVG Write Call. Why: The head's first icon link points at it. How: This writes it into public/.


const broInsObj = await chromium.launch();   // What: Browser Instance Object. Why: The icons are drawn in a real browser's canvas. How: This launches Chromium.
const draPagObj = await broInsObj.newPage(); // What: Draw Page Object. Why: The canvas work runs inside a page. How: This opens a blank one.



// #region renPngFun

/**
 * renPngFun = Render PNG Function
 *
 * @summary
 * Draws an icon SVG at one square size inside the browser and returns the
 * PNG's bytes. The SVG is a vector, so the browser rasterizes it straight at
 * the target size.
 *
 * @author z4nta0 <https://github.com/z4nta0>
 *
 * @param icoSvgStr - Icon SVG String: The SVG to draw, favicon.svg's or the
 *                    touch icon's.
 * @param icoSizNum - Icon Size Number: The icon's width and height in pixels.
 *
 * @returns The finished PNG's bytes.
 *
 * @example
 * ```ts
 * renPngFun(favSvgStr, 32) // => Buffer
 * ```
 *
*/

async function renPngFun ( icoSvgStr : string, icoSizNum : number ) : Promise< Buffer > {


	const pngB64Str = await draPagObj.evaluate( async ( [ souB64Str, tarSizNum ] ) => { // What: PNG Base64 String. Why: The canvas lives in the page, so the finished image comes back as text. How: This runs the drawing in the page and returns the PNG as base64.


		const souImaEle = new Image(); // What: Source Image Element. Why: The SVG has to be decoded before it's drawn. How: This loads it from its base64 data.


		souImaEle.src = `data:image/svg+xml;base64,${ souB64Str }`; // What: Source Address Assignment. Why: The image loads from the data handed in. How: This sets it as an SVG data URL.

		await souImaEle.decode(); // What: Source Decode Wait. Why: Drawing an undecoded image draws nothing. How: This waits until it's ready.


		const finCanEle = document.createElement( 'canvas' ); // What: Final Canvas Element. Why: The icon draws at its exact target size. How: This creates the canvas.


		finCanEle.height = tarSizNum; // What: Final Height Assignment. Why: The icon is square at its target size. How: This sets the height.
		finCanEle.width  = tarSizNum; // What: Final Width Assignment. Why: The icon is square at its target size. How: This sets the width.

		finCanEle.getContext( '2d' )!.drawImage( souImaEle, 0, 0, tarSizNum, tarSizNum ); // What: Icon Draw Call. Why: This draws the icon itself. How: This rasterizes the SVG to fill the canvas. // What: Non-Null Note. Why: getContext can return null for an unsupported type. How: A 2D context is always available on a fresh canvas.



		return finCanEle.toDataURL( 'image/png' ).split( ',' )[ 1 ]; // What: PNG Data Return. Why: The bytes have to leave the page as text. How: This encodes the canvas as a PNG and returns its base64 part.


	}, [ Buffer.from( icoSvgStr ).toString( 'base64' ), icoSizNum ] as const ); // What: Drawing Arguments. Why: The page can't read this script's variables. How: This hands the SVG's data and the target size into the page. // What: Type Assertion Note. Why: Without it the array widens to one mixed type, so the page function's destructured parameters lose their own types. How: as const keeps it a readonly tuple, so each parameter is typed by its position.



	return Buffer.from( pngB64Str, 'base64' ); // What: PNG Bytes Return. Why: The caller writes bytes, not text. How: This decodes the base64 PNG into a buffer.


}

// #endregion renPngFun



for ( const icoRecObj of ICO_REC_ARR ) writeFileSync( OUT_DIR_STR + icoRecObj.filStr, await renPngFun( icoRecObj.touBoo ? touSvgStr : favSvgStr, icoRecObj.sizNum ) ); // What: PNG Icon Loop. Why: Each PNG icon is saved under its own name. How: This renders every row from its SVG and writes it into public/.



const icoPngArr = await Promise.all( ICO_SIZ_ARR.map( ( icoSizNum ) => renPngFun( favSvgStr, icoSizNum ) ) ); // What: ICO PNG Array. Why: favicon.ico packs one PNG per size. How: This renders each of its sizes.
const icoHeaBuf = Buffer.alloc( 6 + 16 * icoPngArr.length );                                                  // What: ICO Header Buffer. Why: An ICO file starts with a header and one directory entry per image. How: This allocates both.


icoHeaBuf.writeUInt16LE( 1, 2 );                // What: ICO Type Write. Why: The format marks icons with type 1. How: This writes it after the reserved zero.
icoHeaBuf.writeUInt16LE( icoPngArr.length, 4 ); // What: ICO Count Write. Why: The header says how many images follow. How: This writes the count.


let icoOffNum = icoHeaBuf.length; // What: ICO Offset Number. Why: Each directory entry says where its image starts. How: This begins right after the header and directory.


for ( const [ icoIndNum, icoPngBuf ] of icoPngArr.entries() ) { // What: ICO Entry Loop. Why: Each image needs a directory entry. How: This writes one per size, in order.


	const entOffNum = 6 + 16 * icoIndNum;       // What: Entry Offset Number. Why: Each entry has its own place in the directory. How: This finds it.
	const entSizNum = ICO_SIZ_ARR[ icoIndNum ]; // What: Entry Size Number. Why: The entry names its image's width and height. How: This reads the size it was rendered at.


	icoHeaBuf.writeUInt8( entSizNum, entOffNum );               // What: Entry Width Write. Why: The entry names the image's width. How: This writes it.
	icoHeaBuf.writeUInt8( entSizNum, entOffNum + 1 );           // What: Entry Height Write. Why: The entry names the image's height. How: This writes it.
	icoHeaBuf.writeUInt16LE( 1, entOffNum + 4 );                // What: Entry Planes Write. Why: The format expects one color plane. How: This writes it.
	icoHeaBuf.writeUInt16LE( 32, entOffNum + 6 );               // What: Entry Depth Write. Why: The images are full-color PNGs with alpha. How: This writes 32 bits per pixel.
	icoHeaBuf.writeUInt32LE( icoPngBuf.length, entOffNum + 8 ); // What: Entry Size Write. Why: The entry says how many bytes its image takes. How: This writes the PNG's length.
	icoHeaBuf.writeUInt32LE( icoOffNum, entOffNum + 12 );       // What: Entry Offset Write. Why: The entry says where its image starts. How: This writes the running offset.


	icoOffNum += icoPngBuf.length; // What: Offset Advance. Why: The next image starts after this one. How: This adds its length.


}



writeFileSync( OUT_DIR_STR + 'favicon.ico', Buffer.concat( [ icoHeaBuf, ...icoPngArr ] ) ); // What: ICO Write Call. Why: Browsers request /favicon.ico on their own. How: This writes the header, directory, and PNGs as one file.

await broInsObj.close(); // What: Browser Close Call. Why: The script should exit once the icons are saved. How: This shuts Chromium down.

console.log( `Wrote favicon.svg, ${ ICO_REC_ARR.length } PNG icons, and favicon.ico to ${ OUT_DIR_STR }.` ); // What: Result Log Call. Why: The run should say what it wrote. How: This prints what it wrote and where.

// #endregion Module Init


