const SOURCE_DIR = 'src'

export default (eleventyConfig) => {
	const staticFiles = [
		`/fonts`,
		`/images`,
		`/style`,
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
