function getHostname(url) {
	const hostname = new URL(url).hostname;
	return hostname.startsWith('www.') ? hostname.slice(4) : hostname;
}

function hostnameCompare(a, b) {
	return getHostname(a).localeCompare(getHostname(b));
}

export default [
	'https://alexandersandberg.com',
	'https://anhvn.com',
	'https://arielsalminen.com',
	'https://benji.org',
	'https://bradleyziffer.com',
	'https://charlottedann.com',
	'https://emilkowal.ski',
	'https://eva.town',
	'https://glenn.me',
	'https://henry.codes',
	'https://ja.mt',
	'https://jillian.garden',
	'https://jzhao.xyz',
	'https://kayserifserif.place',
	'https://kuntz.io',
	'https://lynnandtonic.com',
	'https://medienbaecker.com',
	'https://mifsud.org',
	'https://miocene.io',
	'https://motherfuckingwebsite.com',
	'https://nelson.co',
	'https://onur.design',
	'https://paco.me',
	'https://paulstamatiou.com',
	'https://pham.codes',
	'https://ribo.zone',
	'https://robinrendle.com',
	'https://ryanmulligan.dev',
	'https://scottkellum.com',
	'https://vhbelvadi.com',
	'https://wojtek.im',
	'https://www.adithnarein.com',
	'https://www.alasdairmonk.com',
	'https://www.joshuawootonn.com',
	'https://www.yasmins.site',
	'https://yannglt.com',
].sort(hostnameCompare);
