module.exports = {

	/**
	 * CSS WORKFLOW
	 * 	1. concatenated
	 * 	2. CONVERTED FROM SCSS TO CSS
	 * 	3. post-css prefixes applied and minified
	 */

	options: {
		sourceMap: false
	},

	site2: {
		files: {
			'build/style.css': 'build/style.scss'
		}
	},

	site:{
		files: [{
			expand:true,
			cwd: 'build',
			src: 'style.scss',
			dest: 'build',
			ext: '.css'
		}]
	}

};