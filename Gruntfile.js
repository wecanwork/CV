module.exports = function (grunt)
{
	// Grunt Dependencies
	// -------------------------------------------------------

	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-appcache');
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

		appcache :
		{
			options :
			{
				basePath : 'build'
			},

			build :
			{
				dest : 'build/manifest.appcache',

				cache :
				{
					patterns : ['build/**'],
				}
			}
		},

		// ------------------------------------------------------

		copy :
		{
			build :
			{
				files :
				[
					{ expand : true, cwd : 'src', src : ['assets/**', 'index.html'], dest : 'build' }
				]
			}
		},

		// ------------------------------------------------------

		open :
		{
			build :
			{
				path : 'build/index.html'
			}
		},

		// ------------------------------------------------------

		watch :
		{
			build : { files : ['src/assets/**', 'src/less/**', 'src/index.html'], tasks : ['less:build', 'copy:build', 'appcache:build'] }
		}
	});

	// Task: `build`
	// -------------------------------------------------------

	grunt.registerTask('build', ['less:build', 'copy:build', 'appcache:build', 'open:build']);

	// Task: `travis`
	// -------------------------------------------------------

	grunt.registerTask('travis', ['less:build', 'copy:build', 'appcache:build']);

	// Task: `default`
	// -------------------------------------------------------

	grunt.registerTask('default', ['build']);
};
