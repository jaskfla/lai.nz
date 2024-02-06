export default (eleventyConfig) => {
	eleventyConfig.addPassthroughCopy('src/style')
	eleventyConfig.addPassthroughCopy('src/fonts')
	eleventyConfig.addPassthroughCopy('src/images')

	return {
		dir: {
			input: 'src',
		},
	}
}
