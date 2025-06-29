function nameCompare(a, b) {
	return a.name.localeCompare(b.name);
}

const dir = '/images/app-icons';

const Platform = {
	IOS: 'ios',
	MACOS: 'macos',
};

const primary = [
	{
		name: 'Audio Hijack',
		platform: Platform.MACOS,
		iconPath: `${dir}/audio-hijack.png`,
		link: 'https://rogueamoeba.com/audiohijack',
	},
	{
		name: 'BBEdit',
		platform: Platform.MACOS,
		iconPath: `${dir}/bbedit.png`,
		link: 'https://www.barebones.com/products/bbedit',
	},
	{
		name: 'Clear',
		platform: Platform.IOS,
		iconPath: `${dir}/clear.png`,
		link: 'https://www.useclear.com',
	},
	{
		name: 'Drafts',
		platform: Platform.IOS,
		iconPath: `${dir}/drafts.png`,
		link: 'https://getdrafts.com',
	},
	{
		name: 'Hazel',
		platform: Platform.MACOS,
		iconPath: `${dir}/hazel.png`,
		link: 'https://www.noodlesoft.com',
	},
	{
		name: 'iA Writer',
		platform: Platform.IOS,
		iconPath: `${dir}/ia-writer.png`,
		link: 'https://ia.net/writer',
	},
	{
		name: 'Pages',
		platform: Platform.MACOS,
		iconPath: `${dir}/pages.png`,
		link: 'https://www.apple.com/pages',
	},
	{
		name: 'Overcast',
		platform: Platform.IOS,
		iconPath: `${dir}/overcast.png`,
		link: 'https://overcast.fm',
	},
	{
		name: 'PDF Squeezer',
		platform: Platform.MACOS,
		iconPath: `${dir}/pdf-squeezer.png`,
		link: 'https://witt-software.com/pdfsqueezer',
	},
	{
		name: 'Preview',
		platform: Platform.MACOS,
		iconPath: `${dir}/preview.png`,
		link: 'https://support.apple.com/guide/preview',
	},
	{
		name: 'Soulver',
		platform: Platform.MACOS,
		iconPath: `${dir}/soulver.png`,
		link: 'https://soulver.app',
	},
	{
		name: 'Tower',
		platform: Platform.MACOS,
		iconPath: `${dir}/tower~light.png`,
		link: 'https://www.git-tower.com',
	},
	{
		name: 'Timery',
		platform: Platform.IOS,
		iconPath: `${dir}/timery.png`,
		link: 'https://timeryapp.com',
	},
	{
		name: 'Unobstruct',
		platform: Platform.IOS,
		iconPath: `${dir}/unobstruct.png`,
		link: 'https://medium.com/@tgaul/introducing-unobstruct-230e4e95cf5e',
	},
	{
		name: 'Unread',
		platform: Platform.IOS,
		iconPath: `${dir}/unread.png`,
		link: 'https://www.goldenhillsoftware.com/unread',
	},
];

const honorary = [
	{
		name: 'Castro',
		platform: Platform.IOS,
		iconPath: `${dir}/castro.svg`,
		link: 'https://castro.fm',
	},
	{
		name: 'Citymapper',
		platform: Platform.IOS,
		iconPath: `${dir}/citymapper.svg`,
		link: 'https://citymapper.com',
	},
	{
		name: 'Crouton',
		platform: Platform.IOS,
		iconPath: `${dir}/crouton.png`,
		link: 'https://crouton.app',
	},
	{
		name: 'Flighty',
		platform: Platform.IOS,
		iconPath: `${dir}/flighty.jpg`,
		link: 'https://flighty.com',
	},
	{
		name: 'Halide',
		platform: Platform.IOS,
		iconPath: `${dir}/halide.png`,
		link: 'https://halide.cam',
	},
	{
		name: 'iA Presenter',
		platform: Platform.MACOS,
		iconPath: `${dir}/ia-presenter.png`,
		link: 'https://ia.net/presenter',
	},
	{
		name: 'Mela',
		platform: Platform.IOS,
		iconPath: `${dir}/mela.png`,
		link: 'https://mela.recipes',
	},
	{
		name: 'Monodraw',
		platform: Platform.MACOS,
		iconPath: `${dir}/monodraw.png`,
		link: 'https://monodraw.helftone.com',
	},
	{
		name: 'Nova',
		platform: Platform.MACOS,
		iconPath: `${dir}/nova.png`,
		link: 'https://nova.app',
	},
	{
		name: 'Orion',
		platform: Platform.IOS,
		iconPath: `${dir}/orion.png`,
		link: 'https://orion.tube',
	},
	{
		name: 'Things',
		platform: Platform.MACOS,
		iconPath: `${dir}/things.png`,
		link: 'https://culturedcode.com/things',
	},
	{
		name: 'Timepage',
		platform: Platform.IOS,
		iconPath: `${dir}/timepage.webp`,
		link: 'https://bonobolabs.com/timepage',
	},
	{
		name: 'Transmit',
		platform: Platform.MACOS,
		iconPath: `${dir}/transmit.png`,
		link: 'https://panic.com/transmit',
	},
];

const graveyard = [
	{
		name: 'Apollo',
		platform: Platform.IOS,
		iconPath: `${dir}/apollo.webp`,
		link: 'https://apolloapp.io',
	},
	{
		name: 'Carousel',
		platform: Platform.IOS,
		iconPath: `${dir}/carousel.png`,
		link: 'http://carousel.destroytoday.com',
	},
	{
		name: 'Eat the Shorts',
		platform: Platform.MACOS,
		iconPath: `${dir}/eat-the-shorts.png`,
		link: 'https://mastodon.social/@aaron_pearce/109780176179825043',
	},
	{
		name: 'Haze',
		platform: Platform.IOS,
		iconPath: `${dir}/haze.png`,
		link: 'https://web.archive.org/web/20201111202539/http://www.gethaze.com',
	},
	{
		name: 'Mailbox',
		platform: Platform.IOS,
		iconPath: `${dir}/mailbox.jpg`,
		link: 'https://web.archive.org/web/20150830160717/http://www.mailboxapp.com',
	},
	{
		name: 'Mammoth',
		platform: Platform.IOS,
		iconPath: `${dir}/mammoth.png`,
		link: 'https://www.theverge.com/2023/12/7/23991158/mammoth-2-app-mastodon',
	},
	{
		name: 'Paper by FiftyThree',
		platform: Platform.IOS,
		iconPath: `${dir}/paper.png`,
		link: 'https://web.archive.org/web/20171203203620/http://fiftythree.com/paper',
	},
	{
		name: 'Path',
		platform: Platform.IOS,
		iconPath: `${dir}/path.png`,
		link: 'https://web.archive.org/web/20161128235506/https://path.com/moments',
	},
	{
		name: 'Pinpoint',
		platform: Platform.IOS,
		iconPath: `${dir}/pinpoint.jpg`,
		link: 'https://www.macstories.net/ios/bugshot-relaunches-as-pinpoint',
	},
	{
		name: 'Sunrise',
		platform: Platform.IOS,
		iconPath: `${dir}/sunrise.png`,
		link: 'https://web.archive.org/web/20140521033147/https://www.sunrise.am',
	},
];

export default [
	{
		heading: null,
		apps: primary.sort(nameCompare),
	},
	{
		heading: 'Apps I wish I had more reason to use',
		apps: honorary.sort(nameCompare),
	},
	{
		heading: 'Graveyard',
		apps: graveyard.sort(nameCompare),
	},
];
