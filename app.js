const arr = [
	'',
	'charSet="utf-8"',
	'name="viewport" content="width=device-width"',
	'property="twitter:domain" content="tini.fyi"',
	'property="twitter:url" content="https://tini.fyi"',
	'name="twitter:title" content="Tini.fyi - Free, Fast, and Private URL Shortener"',
	'name="twitter:description" content="Tini.fyi is a free, fast, and private platform for shortening long URLs. With our lightning-fast redirects and privacy-focused approach, you can share links worry-free. Say goodbye to cluttered links and hello to streamlined sharing with Tini.fyi."',
	'name="twitter:image" content="https://app.tini.fyi/brand-0.5x.png"',
	'name="robots" content="index,follow"',
	'name="description" content="Tini.fyi is a free, fast, and private platform for shortening long URLs. With our lightning-fast redirects and privacy-focused approach, you can share links worry-free. Say goodbye to cluttered links and hello to streamlined sharing with Tini.fyi."',
	'name="theme-color" content="#000212"',
	'name="twitter:card" content="summary_large_image"',
	'name="twitter:site" content="https://tini.fyi"',
	'name="twitter:creator" content="@tinifyi"',
	'property="og:title" content="Tini.fyi - Free, Fast, and Private URL Shortener"',
	'property="og:description" content="Tini.fyi is a free, fast, and private platform for shortening long URLs. With our lightning-fast redirects and privacy-focused approach, you can share links worry-free. Say goodbye to cluttered links and hello to streamlined sharing with Tini.fyi."',
	'property="og:url" content="https://tini.fyi"',
	'property="og:type" content="website"',
	'property="og:image" content="https://app.tini.fyi/brand-0.5x.png"',
	'property="og:locale" content="en_IE"',
	'property="og:site_name" content="Tini.fyi"',
	'name="next-head-count" content="22"',
]

let dta = []

arr.map((e) => {
	const obj = {
		[e.replaceAll('"', '').split('=')[1]?.replace(' content', '')]: e
			.replaceAll('"', '')
			.split('=')[2],
	}
	dta.push(obj)
})

console.log(dta)
