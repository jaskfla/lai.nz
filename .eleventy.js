const SOURCE_DIR = 'src';

export default (eleventyConfig) => {
	/* Static files */

	const staticFiles = [
		'fonts/',
		'images/',
		'meta/',
		'scripts/',
		'style/',
		'apple-touch-icon.png',
		'favicon.ico',
		'humans.txt',
		'robots.txt',
		'slides/**/*.{css,js}',
	];
	for (const file of staticFiles) {
		eleventyConfig.addPassthroughCopy(`${SOURCE_DIR}/${file}`);
	}

	/* Collections */

	eleventyConfig.addCollection('notes', (collection) =>
		collection.getFilteredByGlob(`${SOURCE_DIR}/notes/*.md`),
	);

	/* Filters */

	eleventyConfig.addFilter('hostname', (url) => {
		const hostname = new URL(url).hostname;
		return hostname.slice(0, 4) === 'www.' ? hostname.slice(4) : hostname;
	});

	return {
		dir: {
			input: SOURCE_DIR,
			templateFormats: ['liquid', 'md'],
		},
	};
};
