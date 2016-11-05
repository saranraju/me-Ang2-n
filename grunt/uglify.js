module.exports = {

	options: {
		banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
		beautify: false
	},

	plugins:{
		files: [{
			expand:true,
			cwd: 'build',
			src: 'plugin.js',
			dest: 'public/',
			ext: '.min.js'
		}]
	},

	site:{
		files: [{
			expand:true,
			cwd: 'build',
			src: 'script.js',
			dest: 'public/',
			ext: '.min.js'
		}]
	}

};