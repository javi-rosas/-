module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{mp3,m4a,js,css,html,jpg,json}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};