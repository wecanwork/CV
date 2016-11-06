module.exports = function (grunt)
{
	// Grunt Dependencies
	// -------------------------------------------------------

	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-open');

	// Configuration
	// -------------------------------------------------------

	grunt.initConfig(
	{
		less :
		{
			options :
			{
				report : 'gzip'
			},

			build :
			{
				files :
				{
					'build/css/cv.css' : 'src/less/index.less'
				},

				options : { compress : true }
			}
		},

		// ------------------------------------------------------

		copy :
		{
			build :
			{
				files :
				[
					// Source.
					{ expand : true, cwd : 'src', src : ['assets/**', 'index.html', 'manifest.json', 'config.xml'], dest : 'build' },
					
					// Root.
					{ expand : true, src : ['CNAME'], dest : 'build' }
				]
			}
		},

		// ------------------------------------------------------

		open :
		{
			view :
			{
				path : 'build/index.html'
			}
		},

		// ------------------------------------------------------

		watch :
		{
			build : { files : ['src/assets/**', 'src/less/**', 'src/index.html'], tasks : ['less:build', 'copy:build'] }
		}
	});

	// Task: `build`
	// -------------------------------------------------------

	grunt.registerTask('build', ['less:build', 'copy:build']);

	// Task: `view`
	// -------------------------------------------------------

	grunt.registerTask('view', ['build', 'open:view']);

	// Task: `default`
	// -------------------------------------------------------

	grunt.registerTask('default', ['view']);
};
