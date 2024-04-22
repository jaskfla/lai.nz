const SOURCE_DIR = 'src';

export default (eleventyConfig) => {
	/* Static files */

	const staticFiles = [
		'fonts/',
		'images/',
		'meta/',
		'style/',
		'apple-touch-icon.png',
		'favicon.ico',
		'humans.txt',
		'robots.txt',
	];
	for (const file of staticFiles) {
		eleventyConfig.addPassthroughCopy(`${SOURCE_DIR}/${file}`);
	}

	/* Collections */

	eleventyConfig.addCollection('notes', (collection) =>
		collection.getFilteredByGlob(`${SOURCE_DIR}/notes/*.md`),
	);

	return {
		dir: {
			input: SOURCE_DIR,
		},
	};
};
