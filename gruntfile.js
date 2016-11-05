module.exports = function(grunt) {

	/**
	 * Sample of grunt build organized by grunt task (i.e. all concat operations in grunt/concat.js)
	 *
	 * Aliases (i.e. `grunt build-all` commands set in grunt/aliases.js)
	 *
	 * Loads tasks from the grunt directory
	 * Add task to the file named for that task (i.e. clean -> grunt/clean.js)
	 */
	
	require('load-grunt-config')(grunt, {

		// Expose the package name (Amadel) to the grunt services
		data: {
			pkg: grunt.file.readJSON('package.json')
		}
		
	});

};