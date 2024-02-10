const SOURCE_DIR = 'src'

export default (eleventyConfig) => {
	const staticFiles = [
		// Directories
		`/fonts`,
		`/images`,
		`/meta`,
		`/style`,

		// Files
		`/apple-touch-icon.png`,
		`/favicon.ico`,
		`/humans.txt`,
		`/robots.txt`,
	]
	for (const file of staticFiles) {
		eleventyConfig.addPassthroughCopy(`${SOURCE_DIR}/${file}`)
	}

	return {
		dir: {
			input: SOURCE_DIR,
		},
	}
}
