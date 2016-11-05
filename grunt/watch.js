module.exports = {

	js:{
		files: 'src/js/**/*.js',
		tasks: ['concat:site_js','uglify:site'],
		options: {
			debounceDelay: 500,
			livereload: true
		}
	},

	css: {
		files: 'src/css/**/*.scss',
		tasks: ['concat:site_css','sass:site','postcss:site'],
		options: {
			debounceDelay: 500,
			livereload: true
		}
	}

};