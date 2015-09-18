module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
	        js : {
	            src : [
	                'src/*'
	            ],
	            dest : 'urban-analytics.min.js'
	        }
    	},
    	uglify: {
            js: {
                files: {
                    'urban-analytics.min.js': ['urban-analytics.min.js']
                }
            }
        },
    	watch: {
      		files: ['src/*'],
      		tasks: ['concat','uglify']
   		}
    });
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['concat:js', 'uglify:js' ]);
};