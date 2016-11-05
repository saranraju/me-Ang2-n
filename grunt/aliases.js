module.exports = {

	'default': function() {
		console.log('** You must select a project to build. **');
	},

	'site': {
		description: 'All tasks for the browse section',
		tasks: [
			'newer:clean:site',
			'newer:copy:images',
			'newer:copy:fonts',
			'newer:concat:plugin_js',
			'newer:concat:site_js',
			'newer:concat:site_css',
			'newer:sass:site',
			'newer:postcss:site',
			'newer:uglify:plugins',
			'newer:uglify:site'
		]
	},

	'build-all': [
		'site'
	]
};