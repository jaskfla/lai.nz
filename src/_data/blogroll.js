import { JSDOM } from 'jsdom';
const { document } = new JSDOM().window;

function decodeHtml(str) {
	const el = document.createElement('span');
	el.innerHTML = str;
	return el.textContent;
}

function trimLeadingArticle(str) {
	return str.replaceAll(/^(a|an|the)\b\s*/gi, '');
}

function sanitizeNbsp(str) {
	return str.replaceAll('\u{00A0}', ' ');
}

function lexicalCompare(_a, _b) {
	const [a, b] = [_a, _b]
		.map(decodeHtml)
		.map(trimLeadingArticle)
		.map(sanitizeNbsp);
	return a.localeCompare(b, 'en', {
		ignorePunctuation: true,
		numeric: true,
		sensitivity: 'base',
	});
}

export default [
	{
		author: 'Merlin Mann',
		title: '5ives',
		url: 'https://www.5ives.com',
		feedUrl: 'http://www.5ives.com/feed',
	},
	{
		author: 'Merlin Mann',
		title: '43&nbsp;Folders',
		url: 'http://www.43folders.com',
		feedUrl: 'https://feeds.feedburner.com/43folders',
	},
	{
		title: 'Adam Argyle',
		url: 'https://nerdy.dev',
		feedUrl: 'https://nerdy.dev/rss.xml',
	},
	{
		title: 'Ahmad Shadeed',
		url: 'https://ishadeed.com',
		feedUrl: 'https://ishadeed.com/feed.xml',
	},
	{
		title: 'Arun Venkatesan',
		url: 'https://arun.is/blog',
		feedUrl: 'https://arun.is/rss.xml',
	},
	{
		title: 'Bartosz Ciechanowski',
		url: 'https://ciechanow.ski',
		feedUrl: 'https://ciechanow.ski/atom.xml',
	},
	{
		author: 'Robin Rendle',
		title: 'The Cascade',
		url: 'https://csscade.com',
		feedUrl: 'https://csscade.com/feed.xml',
	},
	{
		title: 'Dave Rupert',
		url: 'https://daverupert.com',
		feedUrl: 'https://daverupert.com/atom.xml',
	},
	{
		author: 'Chris Coyier',
		title: 'Email is Good',
		url: 'https://email-is-good.com',
		feedUrl: 'http://email-is-good.com/feed',
	},
	{
		title: 'Ethan Marcotte',
		url: 'https://ethanmarcotte.com/wrote',
		feedUrl: 'https://ethanmarcotte.com/wrote/feed.xml',
	},
	{
		title: 'Heydon Pickering',
		url: 'https://heydonworks.com/latest',
		feedUrl: 'https://heydonworks.com/feed.xml',
	},
	{
		author: 'Shelby Wilson & Maxwell Neely-Cohen',
		title: 'The <abbr title="Hypertext Markup Language">HTML</abbr> Review',
		url: 'https://thehtml.review',
		feedUrl: 'https://thehtml.review/rss.xml',
	},
	{
		author: 'John Siracusa',
		title: 'Hypercritical',
		url: 'https://hypercritical.co',
		feedUrl: 'https://hypercritical.co/feeds/main',
	},
	{
		author: 'Alex Russell',
		title: 'Infrequently Noted',
		url: 'https://infrequently.org',
		feedUrl: 'https://infrequently.org/feed',
	},
	{
		title: 'Jim Nielsen',
		url: 'https://blog.jim-nielsen.com',
		feedUrl: 'https://blog.jim-nielsen.com/feed.xml',
	},
	{
		title: 'Jonnie Hallman',
		url: 'https://destroytoday.com/blog',
		feedUrl: 'https://destroytoday.com/feeds/all',
	},
	{
		title: 'Josh Comeau',
		url: 'https://www.joshwcomeau.com',
		feedUrl: 'https://www.joshwcomeau.com/rss.xml',
	},
	{
		title: 'A List Apart',
		url: 'https://alistapart.com',
		feedUrl: 'https://alistapart.com/main/feed',
	},
	{
		title: '<span class="caps">LOW←TECH MAGAZINE</span>',
		url: 'https://solar.lowtechmagazine.com',
		feedUrl: 'https://solar.lowtechmagazine.com/posts/index.xml',
	},
	{
		author: 'Nanda Syahrasyad',
		title: 'Not a Number',
		url: 'https://www.nan.fyi',
		feedUrl: null,
	},
	{
		author: 'Set Studio',
		title: 'Piccalilli',
		url: 'https://piccalil.li/blog',
		feedUrl: 'https://piccalil.li/feed.xml',
	},
	{
		author: 'Nick Heer',
		title: 'Pixel Envy',
		url: 'https://pxlnv.com',
		feedUrl: 'https://pxlnv.com/feed',
	},
	{
		title: 'Robin Rendle',
		url: 'https://robinrendle.com',
		feedUrl: 'https://robinrendle.com/feed.xml',
	},
	{
		title: 'Sara Soueidan',
		url: 'https://www.sarasoueidan.com/blog',
		feedUrl: 'https://www.sarasoueidan.com/blog/index.xml',
	},
	{
		author: 'Marcin Wichary',
		title: 'Unsung',
		url: 'https://unsung.aresluna.org',
		feedUrl: 'https://unsung.aresluna.org/feed.xml',
	},
	{
		author: 'Erin Kissane',
		title: 'Wreckage/salvage',
		url: 'https://www.wrecka.ge',
		feedUrl: 'https://www.wrecka.ge/rss',
	},
].sort((a, b) => lexicalCompare(a.title, b.title));
