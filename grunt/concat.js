module.exports = {

	/**
	 * JS WORKFLOW
	 * 	1. CONCATENATED
	 * 	2. uglified
	 *
	 * CSS WORKFLOW
	 * 	1. CONCATENATED
	 * 	2. converted from scss to css
	 * 	3. post-css prefixes applied and minified
	 */

	options: {
		separator: "\n\n",
		banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
	},

	plugin_js :{
		src: [
			// 'bower_components/jquery/jquery.js',
		],
		dest: 'build/plugin.js'
	},

	site_js :{
		src: [
			'src/js/*.js',
			'src/js/**/*.js'
		],
		dest: 'build/script.js'
	},

	site_css :{
		src: [
			// 'bower_components/angular/angular-csp.css',
			'src/css/*.scss',
			'src/css/**/*.scss'
		],
		dest: 'build/style.scss'
	}

};