import path from 'node:path';
import { eleventyImageTransformPlugin } from '@11ty/eleventy-img';
import slugify from '@sindresorhus/slugify';
import { minify } from 'html-minifier-terser';
import { JSDOM } from 'jsdom';

const SOURCE_DIR = 'src';
const { document } = new JSDOM().window;

/** Turn character entities into the character they encode. */
function decodeHtml(str) {
	const el = document.createElement('span');
	el.innerHTML = str;
	return el.textContent;
}

/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */
export default (eleventyConfig) => {
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

	eleventyConfig.addCollection('notes', (collection) =>
		collection.getFilteredByGlob(`${SOURCE_DIR}/notes/*.md`),
	);

	eleventyConfig.addFilter('hostname', (url) => {
		const hostname = new URL(url).hostname;
		return hostname.startsWith('www.') ? hostname.slice(4) : hostname;
	});
	eleventyConfig.addFilter('iso_date_string', (date) =>
		date.toISOString().slice(0, 10),
	);
	eleventyConfig.addFilter('slugify', (str) => slugify(decodeHtml(str))); // Shadow built-in slugify
	eleventyConfig.addFilter('stringify', (o) => JSON.stringify(o, null, '\t'));

	eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
		filenameFormat: (_id, src, width, format, _options) => {
			const extIn = path.extname(src);
			const name = path.basename(src, extIn);
			const extOut = format === 'jpeg' ? 'jpg' : format;
			return `${name}-${width}w.${extOut}`;
		},
		formats: ['svg', 'avif', 'webp', 'jpeg'],
		svgShortCircuit: 'size',
		widths: ['auto'],
		htmlOptions: {
			imgAttributes: {
				decoding: 'async',
				loading: 'lazy',
			},
			pictureAttributes: {},
		},
	});

	eleventyConfig.addTransform('htmlmin', function (content) {
		return this.page.outputPath?.endsWith('.html') ?
				minify(content, {
					collapseWhitespace: true,
					minifyJS: true,
					removeComments: true,
					removeEmptyAttributes: true,
					useShortDoctype: true,
				})
			:	content;
	});

	eleventyConfig.setDataFileSuffixes(['.11tydata']);

	return {
		dir: {
			input: SOURCE_DIR,
			templateFormats: ['liquid', 'md'],
		},
	};
};
