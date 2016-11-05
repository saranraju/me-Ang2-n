module.exports = {

	options: {
		match: [
			{
				// Pattern         // File to hash
				'script.min.js' : 'dist/js/script.min.js',
				'style.min.css' : 'dist/css/style.min.css'
			}
		],
		replacement: 'md5'
	},
	files: {
		src: ['dist/index.html']
	}

};