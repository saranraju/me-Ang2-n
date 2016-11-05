module.exports = {

	options: {
		processors: [
			require('autoprefixer')({browsers: ['last 2 versions', 'ie 8', 'ie 9', '> 5%']}), 	// Add vendor prefixes
			require('cssnano')()  																// Minify Result
		]
	},

	site:{
		files: [{
			expand:	true,
			cwd: 	'build',
			src: 	'style.css',
			dest: 	'public/',
			ext: 	'.min.css'
		}]
	}

};