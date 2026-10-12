


// #region Imports

import { expect } from '@playwright/test'; // What: Expect. Why: Each check passes only when the page says what it should. How: This asserts on the page's head, its text, and the crawler files.
import { test   } from '@playwright/test'; // What: Test. Why: Each route and each file is its own test. How: This declares them.

// #endregion Imports



/**
 * head.spec.ts = Head Spec
 *
 * @summary
 * Checks the site's SEO setup in whichever engine the project runs. Hair
 * Designs is a real local salon, so the home page has to be findable and
 * describe it accurately: the raw page, fetched without a browser, already
 * carries the full title and the one description, which name the salon and
 * its town; its canonical and author tags are in place; it carries no
 * noindex; and its structured data, a HairSalon, a Person for each stylist,
 * and a WebSite, matches what the page itself shows: the phone number,
 * street address, stylists, services, and Facebook page, with no opening
 * hours, since the salon works by appointment. The 404 page carries noindex,
 * a title of its own, and the one description, and each page has exactly one
 * h1. robots.txt lets every crawler in and names the sitemap, which lists the
 * home page alone. Adapted from tonys-toppers' own SEO suite.
 *
 * Sections:
 *  - Constants
 *  - Module Init
 *
 * @author z4nta0 <https://github.com/z4nta0>
 *
*/



// #region Constants

const FAC_URL_STR = 'https://www.facebook.com/hairdesignscosmetology'; // What: Facebook URL String. Why: The structured data's sameAs has to be the Facebook page the site links to. How: This is the address both are compared with.
const LIV_URL_STR = 'https://hairdesigns.hair/';                        // What: Live URL String. Why: The canonical link, structured data, and sitemap must all name the live address. How: This is the address they're compared with.

// #endregion Constants



// #region Module Init

// #region Home Page Checks

test( 'the raw page carries the full title and one description', async ( { request : reqConObj } ) => { // What: Raw Head Test. Why: Link checkers and many crawlers read the HTML without running the script, so the home page's title and description have to be in it already. How: This fetches the page as plain HTML and checks its title and description tags.


	const rawTexStr = await ( await reqConObj.get( '/' ) ).text(); // What: Raw Text String. Why: The checks read the page the way a crawler without JavaScript does. How: This fetches the root path and reads its HTML.


	expect( rawTexStr ).toContain( "<title>Hair Designs | Hair Salon in Carson's Corner, Missouri</title>" ); // What: Raw Title Assertion. Why: The title has to be the full one, not a bare site name. How: This checks the HTML carries it.

	expect( rawTexStr.match( /<meta name='description'/g ) ).toHaveLength( 1 ); // What: Raw Description Assertion. Why: The page should carry exactly one description for crawlers to read. How: This counts the description tags in the HTML.


} );



test( 'the home page names the salon, its town, and its owner', async ( { page : curPagObj } ) => { // What: Home Head Test. Why: Search listings show the title and description, and nearby visitors search for a salon by town. How: This loads the home page and checks its title, description, author, canonical, and robots tags.


	await curPagObj.goto( '/' ); // What: Home Open Call. Why: The checks read the home page's head. How: This loads the root path.


	const desConStr = await curPagObj.locator( 'meta[name="description"]' ).getAttribute( 'content' ) ?? ''; // What: Description Content String. Why: The description's wording and length are both checked. How: This reads the tag's content, or an empty string if it's missing.


	await expect( curPagObj ).toHaveTitle( /^Hair Designs .*Carson's Corner, Missouri$/ ); // What: Title Assertion. Why: The title should lead with the salon and name its town. How: This checks it starts with the name and ends with the town.

	expect( ( await curPagObj.title() ).length ).toBeLessThanOrEqual( 60 ); // What: Title Length Assertion. Why: Search listings and link cards cut long titles off. How: This keeps it to 60 characters or fewer.

	expect( desConStr ).toContain( "Juli Wilkerson and Keeli Bryan in Carson's Corner, Missouri" ); // What: Description Stylists Assertion. Why: The summary should say who does the work and where. How: This checks the description names both stylists and the town.

	expect( desConStr.length ).toBeGreaterThanOrEqual( 100 ); // What: Description Minimum Assertion. Why: A summary that's too short wastes the space a listing gives it. How: This checks it runs at least 100 characters.

	expect( desConStr.length ).toBeLessThanOrEqual( 125 ); // What: Description Maximum Assertion. Why: Phones cut a summary off around 125 characters. How: This checks it stays within that.

	await expect( curPagObj.locator( 'meta[name="description"]' ) ).toHaveCount( 1 ); // What: Single Description Assertion. Why: Two descriptions would leave search engines to pick one. How: This checks there's exactly one.

	await expect( curPagObj.locator( 'meta[name="author"]' ) ).toHaveAttribute( 'content', 'Hair Designs' ); // What: Author Assertion. Why: A real business's site names the business as its author. How: This checks the author tag.

	await expect( curPagObj.locator( 'link[rel="canonical"]' ) ).toHaveAttribute( 'href', LIV_URL_STR ); // What: Canonical Assertion. Why: Every address Netlify serves the site at should count as the live one. How: This checks the canonical link names the live address.

	await expect( curPagObj.locator( 'meta[name="robots"]' ) ).toHaveCount( 0 ); // What: Indexable Assertion. Why: The home page has to stay findable. How: This checks it carries no robots tag that could keep it out.

	await expect( curPagObj.getByRole( 'heading', { level : 1 } ) ).toHaveCount( 1 ); // What: Single Heading Assertion. Why: One h1 tells search engines and screen readers what the page is about. How: This checks there's exactly one.


} );



test( 'the structured data matches what the page shows', async ( { page : curPagObj } ) => { // What: Structured Data Test. Why: Search engines may show the salon's details from the JSON-LD, so every claim in it has to be true and visible on the page. How: This reads the JSON-LD and checks each detail against the page's own text and links.


	await curPagObj.goto( '/' ); // What: Home Open Call. Why: The structured data lives on the home page. How: This loads the root path.


	const ldjTexStr = await curPagObj.locator( 'script[type="application/ld+json"]' ).textContent() ?? '{}';                                                           // What: Linked-Data-JSON Text String. Why: The structured data is read as written in the page. How: This reads the script's text, or an empty object if it's missing.
	const pagTexStr = await curPagObj.locator( 'body' ).textContent() ?? '';                                                                                           // What: Page Text String. Why: Every claim has to appear on the page. How: This reads the page's text as written, before CSS uppercases any of it.
	const telHreArr = await curPagObj.locator( 'a[href^="tel:"]' ).evaluateAll( ( ancEleArr ) => ancEleArr.map( ( ancCurEle ) => ancCurEle.getAttribute( 'href' ) ) ); // What: Telephone Href Array. Why: The structured data's phone has to be the number the page's call links dial. How: This collects every call link's address.

	type LdjNodTyp = { '@id'? : string, '@type'? : string, address? : object, areaServed? : { name : string }[], employee? : { '@id' : string }[], hasOfferCatalog? : { itemListElement : { itemOffered : { name : string } }[] }, jobTitle? : string, name? : string, openingHours? : string, openingHoursSpecification? : object, publisher? : { '@id' : string }, sameAs? : string[], telephone? : string, url? : string, worksFor? : { '@id' : string } }; // What: Linked-Data-JSON Node Type. Why: Each node's fields are read by name, and a missing one should read as undefined rather than fail to type check. How: This lists every field the checks read, all optional.

	const ldjGraArr : LdjNodTyp[] = JSON.parse( ldjTexStr )[ '@graph' ] ?? []; // What: Linked-Data-JSON Graph Array. Why: The salon, the stylists, and the site are separate nodes, each checked on its own. How: This parses the text and reads its graph, or an empty list if it's missing.

	const perNodArr = ldjGraArr.filter( ( graNodObj ) => graNodObj[ '@type' ] === 'Person' );                              // What: Person Node Array. Why: Both stylists' details are checked together. How: This collects their nodes.
	const salNodObj = ldjGraArr.find( ( graNodObj ) => graNodObj[ '@type' ] === 'HairSalon' ) ?? {};                       // What: Salon Node Object. Why: The salon's details are checked together. How: This finds its node, or an empty object if it's missing.
	const serNamArr = salNodObj.hasOfferCatalog?.itemListElement.map( ( offCurObj ) => offCurObj.itemOffered.name ) ?? []; // What: Service Name Array. Why: Each service the data offers has to be one the page shows. How: This collects the offered services' names, or an empty list if the catalog is missing.
	const webNodObj = ldjGraArr.find( ( graNodObj ) => graNodObj[ '@type' ] === 'WebSite' ) ?? {};                         // What: WebSite Node Object. Why: The site's details are checked together. How: This finds its node, or an empty object if it's missing.


	expect( [ salNodObj.name, salNodObj.url, webNodObj.name, webNodObj.url ] ).toEqual( [ 'Hair Designs', LIV_URL_STR, 'Hair Designs', LIV_URL_STR ] ); // What: Salon Name Assertion. Why: The salon and the site have to carry the name and live address the site uses everywhere. How: This checks both nodes' names and addresses.

	expect( [ webNodObj.publisher?.[ '@id' ], ...perNodArr.map( ( perCurObj ) => perCurObj.worksFor?.[ '@id' ] ) ] ).toEqual( Array( 3 ).fill( salNodObj[ '@id' ] ) ); // What: Salon Links Assertion. Why: Search engines join the nodes by their ids, so the salon has to publish the site and employ both stylists. How: This checks each link points at the salon's node.

	expect( salNodObj.employee?.map( ( empCurObj ) => empCurObj[ '@id' ] ) ).toEqual( perNodArr.map( ( perCurObj ) => perCurObj[ '@id' ] ) ); // What: Employee Links Assertion. Why: The salon's employees have to be the two stylist nodes. How: This checks its employee list names each of them.

	expect( perNodArr.map( ( perCurObj ) => [ perCurObj.name, perCurObj.jobTitle ] ) ).toEqual( [ [ 'Juli Wilkerson', 'Licensed Cosmetologist' ], [ 'Keeli Bryan', 'Licensed Cosmetologist' ] ] ); // What: Stylists Assertion. Why: The people in the data have to be the salon's two cosmetologists. How: This checks their names and titles.

	expect( pagTexStr ).toContain( 'Licensed Cosmetologists' ); // What: Title Shown Assertion. Why: The stylists' title in the data has to be visible on the page. How: This checks the page shows it.


	for ( const perCurObj of perNodArr ) expect( pagTexStr ).toContain( perCurObj.name ); // What: Stylists Shown Assertion. Why: Each name in the data has to be visible on the page. How: This checks the page shows each stylist's name.



	expect( telHreArr.length ).toBeGreaterThan( 0 ); // What: Call Link Presence Assertion. Why: A phone in the data is only honest if the page offers it. How: This checks the page has call links.


	for ( const telHreStr of telHreArr ) expect( telHreStr?.replace( /\D/g, '' ) ).toBe( ( salNodObj.telephone ?? '' ).replace( /\D/g, '' ) ); // What: Phone Match Assertion. Why: Every call link and the data must dial the same number. How: This compares their digits.



	expect( pagTexStr ).toContain( '417-988-6239' ); // What: Phone Shown Assertion. Why: The number in the data has to be visible on the page. How: This checks the page shows it.

	expect( salNodObj.address ).toEqual( { '@type' : 'PostalAddress', addressCountry : 'US', addressLocality : "Carson's Corner", addressRegion : 'MO', postalCode : '65668', streetAddress : '24579 State Hwy 254' } ); // What: Address Assertion. Why: The data has to give the salon's exact street address. How: This checks every part of it.

	expect( pagTexStr ).toContain( "24579 State Hwy 254 · Carson's Corner, Mo. 65668" ); // What: Address Shown Assertion. Why: The address in the data has to be visible on the page. How: This checks the page shows it whole.

	expect( [ salNodObj.openingHours, salNodObj.openingHoursSpecification ] ).toEqual( [ undefined, undefined ] ); // What: No Hours Assertion. Why: The salon works by appointment, so the data must not claim regular hours. How: This checks the salon node carries none.

	expect( pagTexStr ).toContain( 'By Appointment' ); // What: Appointment Shown Assertion. Why: The page has to say why no hours are listed. How: This checks it shows By Appointment.

	expect( salNodObj.areaServed?.map( ( areCurObj ) => areCurObj.name ) ).toContain( 'Hickory County, Missouri' ); // What: Service Area Assertion. Why: The salon serves Hickory County and the towns around Carson's Corner. How: This checks the area served names the county.

	expect( serNamArr ).toHaveLength( 6 ); // What: Service Count Assertion. Why: The data should offer the six services the page shows. How: This checks the catalog lists six.


	for ( const serNamStr of serNamArr ) expect( pagTexStr ).toContain( serNamStr ); // What: Services Shown Assertion. Why: Each service in the data has to be visible on the page. How: This checks the page shows each service's name.



	expect( salNodObj.sameAs ).toEqual( [ FAC_URL_STR ] ); // What: Facebook Page Assertion. Why: The data should point to the salon's one other home on the web. How: This checks sameAs lists the Facebook page alone.

	await expect( curPagObj.locator( `a[href="${ FAC_URL_STR }"]` ).first() ).toBeAttached(); // What: Facebook Shown Assertion. Why: The page in the data has to be one the site links to. How: This checks the page has a link to it, the one in the phone menu.


} );

// #endregion Home Page Checks



// #region Not Found Page Checks

test( 'the 404 page stays out of search results', async ( { page : curPagObj } ) => { // What: Not Found Head Test. Why: The host answers every unknown address with a 200, so the 404 page must ask not to be indexed. How: This loads an unknown address and checks its robots tag, title, description, and heading.


	await curPagObj.goto( '/no-such-page' ); // What: Unknown Address Open Call. Why: Every unknown path shows the 404 page. How: This loads one.


	await expect( curPagObj.locator( 'meta[name="robots"]' ) ).toHaveAttribute( 'content', 'noindex' ); // What: Noindex Assertion. Why: Search engines must leave the page out. How: This checks the robots tag.

	await expect( curPagObj ).toHaveTitle( 'Page Not Found | Hair Designs' ); // What: Not Found Title Assertion. Why: The page needs a title of its own. How: This checks it.

	await expect( curPagObj.locator( 'meta[name="description"]' ) ).toHaveCount( 1 ); // What: Single Description Assertion. Why: The noindex page keeps the site's one description rather than adding a second. How: This checks there's exactly one.

	await expect( curPagObj.getByRole( 'heading', { level : 1 } ) ).toHaveCount( 1 ); // What: Single Heading Assertion. Why: Every page should have exactly one h1. How: This checks the 404 page has one.


} );

// #endregion Not Found Page Checks



// #region Crawler File Checks

test( 'robots.txt lets crawlers in and names the sitemap', async ( { request : reqConObj } ) => { // What: Robots File Test. Why: A real salon wants every page crawled and its sitemap found. How: This fetches robots.txt and checks its rules.


	const robResObj = await reqConObj.get( '/robots.txt' ); // What: Robots Response Object. Why: The file is read the way a crawler reads it. How: This fetches it from the site.
	const robTexStr = await robResObj.text();               // What: Robots Text String. Why: The rules are checked as written. How: This reads the response body.


	expect( robResObj.ok() ).toBe( true ); // What: Robots Served Assertion. Why: A missing robots.txt would fall through to the app. How: This checks the file is served.

	expect( robTexStr ).toMatch( /User-agent: \*\nAllow: \// ); // What: Allow All Assertion. Why: Every crawler should be let in. How: This checks the wildcard group allows the whole site.

	expect( robTexStr ).not.toMatch( /Disallow: \// ); // What: No Block Assertion. Why: Nothing should be blocked from crawling. How: This checks no group disallows the site.

	expect( robTexStr ).toContain( `Sitemap: ${ LIV_URL_STR }sitemap.xml` ); // What: Sitemap Line Assertion. Why: Crawlers find the sitemap from here. How: This checks it names the sitemap's absolute address.


} );



test( 'the sitemap lists the home page alone', async ( { request : reqConObj } ) => { // What: Sitemap Test. Why: The sitemap should list every indexable page and nothing else. How: This fetches it and checks its one entry.


	const sitResObj = await reqConObj.get( '/sitemap.xml' ); // What: Sitemap Response Object. Why: The file is read the way a crawler reads it. How: This fetches it from the site.
	const sitTexStr = await sitResObj.text();                // What: Sitemap Text String. Why: Its entries are checked as written. How: This reads the response body.


	expect( sitResObj.ok() ).toBe( true ); // What: Sitemap Served Assertion. Why: A missing sitemap would fall through to the app. How: This checks the file is served.

	expect( sitTexStr.match( /<loc>([^<]*)<\/loc>/g ) ).toEqual( [ `<loc>${ LIV_URL_STR }</loc>` ] ); // What: Home Entry Assertion. Why: The home page is the only indexable page. How: This checks the sitemap's entries are exactly its canonical address.


} );

// #endregion Crawler File Checks

// #endregion Module Init


