const pickOne = (arr) => arr[Math.floor(Math.random() * arr.length)];

const signoffAction = pickOne([
	'Hand-coded in',
	'Hand-crafted in',
	'Well wishes from',
]);
const signoffPlace = pickOne([
	'big-little <span lang="mi">Tāmaki Makaurau</span>',
	'downtown Auckland, New Zealand',
]);
document.getElementById(
	'signoff'
).innerHTML = `${signoffAction} ${signoffPlace}`;

document.getElementById('thanks').outerHTML = pickOne([
	'<p id="thanks" lang="mi">Ngā mihi mo te haere mai</p>',
	'<p id="thanks">Thanks for dropping by</p>',
]);

const quips = [
	'<a href="http://wisdom.limo" rel="external" target="_blank">Looking for the chimneys</a>',
	'<a href="https://hackers.town/@calcifer/113818863859989960" rel="external" target="_blank">Stay whimsical, silly geese</a>',
	'<a href="https://nerdfighteria.info/v/307598550" rel="external" target="_blank">Memento mori</a>&nbsp;😊',
	'<a href="https://overcast.fm/+BmEPOwtek" rel="external" target="_blank">Keep moving <em>and</em> get out of the way</a>',
	'<a href="https://song.link/i/1444693586" rel="external" target="_blank" title="Puzzle by Winterbourne">It’s a big fucking ladder to take a rung at a time</a>',
	'<a href="https://song.link/i/1553604480" rel="external" target="_blank" title="Talk to Me by Cavetown">You don’t have to be a prodigy to be unique</a>',
	'<a href="https://www.goodreads.com/book/show/42190.Wabi_Sabi" rel="external" target="_blank" title="Wabi-Sabi by Leonard Koren">Pare down to the essence, but don’t remove the poetry</a>',
	'<a href="https://www.youlooknicetoday.com/articles/hello" rel="external" target="_blank">It’s always two things with me</a>',
	'<a href="https://youtu.be/FyQi79aYfxU?t=73" rel="external" target="_blank">Don’t forget to be awesome!</a>&nbsp;🎃🐧',
	'<span title="Any ideas? Please contact me!">Still brainstorming a <a href="http://www.thehomeland.org/blog/2018/04/05/masterlist-of-name-specific-sign-offs-dear-hank-john" rel="external" target="_blank">name-specific sign-off</a>,&emsp;<span class="caps">—Jasper</span></span>',
	'Anticipating the next episode of <a class="caps" href="https://www.relay.fm/bonanza" rel="external" target="_blank">BONANZA</a>&nbsp;🛟',
	'Curating pixels since 2018',
	'Eternally browsing for fonts',
	'Farm-to-table pixels since 2018',
	'Full of beans',
	'Half the battle is giving a shit',
	'Here to pay attention',
	'Mourning the death of <a href="https://vimeo.com/groups/159435/videos/54553882" rel="external" target="_blank">Mailbox</a> to this day 😔',
	'No generative AI’s were harmed in the making of this website',
	// 'Nothing half-arsed here',
	// 'Opinionated design for opinionated people',
	'Still figuring this shit out',
	'The truth resists simplicity',
];
document.getElementById('quip').innerHTML = pickOne(quips);
