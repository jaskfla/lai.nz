function getHostname(url) {
	const hostname = new URL(url).hostname;
	return hostname.startsWith('www.') ? hostname.slice(4) : hostname;
}

function hostnameCompare(a, b) {
	return getHostname(a).localeCompare(getHostname(b));
}

export default [
	'https://anhvn.com',
	'https://benji.org',
	'https://bradleyziffer.com',
	'https://emilkowal.ski',
	'https://eva.town',
	'https://glenn.me',
	'https://henry.codes',
	'https://ja.mt',
	'https://jillian.garden',
	'https://jzhao.xyz',
	'https://kayserifserif.place',
	'https://lynnandtonic.com',
	'https://medienbaecker.com',
	'https://paco.me',
	'https://ribo.zone',
	'https://robinrendle.com',
].sort(hostnameCompare);
