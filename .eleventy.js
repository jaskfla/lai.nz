import { minify } from 'html-minifier-terser';

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
		return hostname.startsWith('www.') ? hostname.slice(4) : hostname;
	});
	eleventyConfig.addFilter('isoDateString', (date) =>
		date.toISOString().slice(0, 10),
	);
	eleventyConfig.addFilter('stringify', (o) => JSON.stringify(o, null, '\t'));

	/* Filters */

	eleventyConfig.addTransform('htmlmin', function (content) {
		return this.page.outputPath?.endsWith('.html') ?
				minify(content, {
					collapseWhitespace: true,
					minifyJS: true,
					removeComments: true,
					removeEmptyAttributes: true,
					useShortDoctype: true,
				})
			:	content; // If not HTML output, return as-is
	});

	return {
		dir: {
			input: SOURCE_DIR,
			templateFormats: ['liquid', 'md'],
		},
	};
};
