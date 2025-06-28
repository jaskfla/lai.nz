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
		commentary: null,
	},
	{
		name: 'BBEdit',
		platform: Platform.MACOS,
		iconPath: `${dir}/bbedit.png`,
		link: 'https://www.barebones.com/products/bbedit',
		commentary: null,
	},
	{
		name: 'Clear',
		platform: Platform.IOS,
		iconPath: `${dir}/clear.png`,
		link: 'https://www.useclear.com',
		commentary: null,
	},
	{
		name: 'Drafts',
		platform: Platform.IOS,
		iconPath: `${dir}/drafts.png`,
		link: 'https://getdrafts.com',
		commentary: null,
	},
	{
		name: 'Hazel',
		platform: Platform.MACOS,
		iconPath: `${dir}/hazel.png`,
		link: 'https://www.noodlesoft.com',
		commentary: null,
	},
	{
		name: 'iA Writer',
		platform: Platform.IOS,
		iconPath: `${dir}/ia-writer.png`,
		link: 'https://ia.net/writer',
		commentary: null,
	},
	{
		name: 'Pages',
		platform: Platform.MACOS,
		iconPath: `${dir}/pages.png`,
		link: 'https://www.apple.com/pages',
		commentary: null,
	},
	{
		name: 'Overcast',
		platform: Platform.IOS,
		iconPath: `${dir}/overcast.png`,
		link: 'https://overcast.fm',
		commentary: null,
	},
	{
		name: 'PDF Squeezer',
		platform: Platform.MACOS,
		iconPath: `${dir}/pdf-squeezer.png`,
		link: 'https://witt-software.com/pdfsqueezer',
		commentary: null,
	},
	{
		name: 'Preview',
		platform: Platform.MACOS,
		iconPath: `${dir}/preview.png`,
		link: 'https://support.apple.com/guide/preview',
		commentary: null,
	},
	{
		name: 'Soulver',
		platform: Platform.MACOS,
		iconPath: `${dir}/soulver.png`,
		link: 'https://soulver.app',
		commentary: null,
	},
	{
		name: 'Tower',
		platform: Platform.MACOS,
		iconPath: `${dir}/tower~light.png`,
		link: 'https://www.git-tower.com',
		commentary: null,
	},
	{
		name: 'Timery',
		platform: Platform.IOS,
		iconPath: `${dir}/timery.png`,
		link: 'https://timeryapp.com',
		commentary: null,
	},
	{
		name: 'Unobstruct',
		platform: Platform.IOS,
		iconPath: `${dir}/unobstruct.png`,
		link: 'https://medium.com/@tgaul/introducing-unobstruct-230e4e95cf5e',
		commentary: null,
	},
	{
		name: 'Unread',
		platform: Platform.IOS,
		iconPath: `${dir}/unread.png`,
		link: 'https://www.goldenhillsoftware.com/unread',
		commentary: null,
	},
];

const honorary = [
	{
		name: 'Castro',
		platform: Platform.IOS,
		iconPath: `${dir}/castro.svg`,
		link: 'https://castro.fm',
		commentary: null,
	},
	{
		name: 'Citymapper',
		platform: Platform.IOS,
		iconPath: `${dir}/citymapper.svg`,
		link: 'https://citymapper.com',
		commentary: null,
	},
	{
		name: 'Crouton',
		platform: Platform.IOS,
		iconPath: `${dir}/crouton.png`,
		link: 'https://crouton.app',
		commentary: null,
	},
	{
		name: 'Flighty',
		platform: Platform.IOS,
		iconPath: `${dir}/flighty.jpg`,
		link: 'https://flighty.com',
		commentary: null,
	},
	{
		name: 'Halide',
		platform: Platform.IOS,
		iconPath: `${dir}/halide.png`,
		link: 'https://halide.cam',
		commentary: null,
	},
	{
		name: 'iA Presenter',
		platform: Platform.MACOS,
		iconPath: `${dir}/ia-presenter.png`,
		link: 'https://ia.net/presenter',
		commentary: null,
	},
	{
		name: 'Mela',
		platform: Platform.IOS,
		iconPath: `${dir}/mela.png`,
		link: 'https://mela.recipes',
		commentary: null,
	},
	{
		name: 'Monodraw',
		platform: Platform.MACOS,
		iconPath: `${dir}/monodraw.png`,
		link: 'https://monodraw.helftone.com',
		commentary: null,
	},
	{
		name: 'Orion',
		platform: Platform.IOS,
		iconPath: `${dir}/orion.png`,
		link: 'https://orion.tube',
		commentary: null,
	},
	{
		name: 'Things',
		platform: Platform.MACOS,
		iconPath: `${dir}/things.png`,
		link: 'https://culturedcode.com/things',
		commentary: null,
	},
	{
		name: 'Timepage',
		platform: Platform.IOS,
		iconPath: `${dir}/timepage.webp`,
		link: 'https://bonobolabs.com/timepage',
		commentary: null,
	},
];

const graveyard = [
	{
		name: 'Apollo',
		platform: Platform.IOS,
		iconPath: `${dir}/apollo.webp`,
		link: 'https://apolloapp.io',
		commentary: null,
	},
	{
		name: 'Carousel',
		platform: Platform.IOS,
		iconPath: `${dir}/carousel.png`,
		link: 'http://carousel.destroytoday.com',
		commentary: null,
	},
	{
		name: 'Haze',
		platform: Platform.IOS,
		iconPath: `${dir}/haze.png`,
		link: 'https://web.archive.org/web/20201111202539/http://www.gethaze.com',
		commentary: null,
	},
	{
		name: 'Mailbox',
		platform: Platform.IOS,
		iconPath: `${dir}/mailbox.jpg`,
		link: 'https://web.archive.org/web/20150830160717/http://www.mailboxapp.com',
		commentary: null,
	},
	{
		name: 'Mammoth',
		platform: Platform.IOS,
		iconPath: `${dir}/mammoth.png`,
		link: 'https://www.theverge.com/2023/12/7/23991158/mammoth-2-app-mastodon',
		commentary: null,
	},
	{
		name: 'Paper by FiftyThree',
		platform: Platform.IOS,
		iconPath: `${dir}/paper.png`,
		link: 'https://web.archive.org/web/20171203203620/http://fiftythree.com/paper',
		commentary: null,
	},
	{
		name: 'Path',
		platform: Platform.IOS,
		iconPath: `${dir}/path.png`,
		link: 'https://web.archive.org/web/20161128235506/https://path.com/moments',
		commentary: null,
	},
	{
		name: 'Pinpoint',
		platform: Platform.IOS,
		iconPath: `${dir}/pinpoint.jpg`,
		link: 'https://www.macstories.net/ios/bugshot-relaunches-as-pinpoint',
		commentary: null,
	},
	{
		name: 'Sunrise',
		platform: Platform.IOS,
		iconPath: `${dir}/sunrise.png`,
		link: 'https://web.archive.org/web/20140521033147/https://www.sunrise.am',
		commentary: null,
	},
];

primary.sort(nameCompare);
honorary.sort(nameCompare);
graveyard.sort(nameCompare);

export default {
	primary,
	honorary,
	graveyard,
};
