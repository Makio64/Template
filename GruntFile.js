module.exports = function ( grunt ) {

	// Load grunt tasks automatically
	require('load-grunt-tasks')(grunt);

	// Time how long tasks take. 
	require('time-grunt')(grunt);



	function initConfig() {

		grunt.config.init( {
			// Project settings
			paths: {
				// configurable paths
				src: 'src',
				app: 'app',
				dist: 'dist'
			},

			pkg: grunt.file.readJSON('package.json'),

			// create the server with livereload
			express: {
				server: {
					options: {
						port: 9001,
						bases: '<%= paths.app %>/',
						hostname: '0.0.0.0',
						livereload: true,
						open: true
					}
				}
			},

			// Watch files 
			watch: {
				coffee: {
					files: [ '<%= paths.src %>/coffee/**/*.coffee' ],
					tasks: [ 'coffee:compile', 'notify:coffee' ],
					options: {
					  livereload: true,
					}
				},
				stylus: {
					files: [ '<%= paths.src %>/stylus/**/*.styl' ],
					tasks: [ 'stylus', 'notify:stylus' ],
					options: {
					  livereload: true,
					}
				},
				jade: {
					files: [ '<%= paths.src %>/jade/index.jade' ],
					tasks: [ 'jade:compile', 'bowerInstall', 'notify:jade' ],
					options: {
					  livereload: true,
					}
				},
				bower: {
					files: ['bower.json'],
					tasks: ['bowerInstall']
				},
			},

			// Compile task
			jade: {
				compile: {
					options: {
						compileDebug: false,
						pretty: true,
					},
					files:{
						'<%= paths.app %>/index.html' : '<%= paths.src %>/jade/**/*.jade'
					} 
				}
			},

			coffee: {
				compile: {
					expand: true,
					flatten: true,
					cwd: '<%= paths.src %>/coffee/',
					src: ['**/*.coffee'],
					dest: '<%= paths.app %>/js/',
					ext: '.js'
				}
			},

			stylus: {
				compile: {
					options: {
						compress: false,
						firebug: false,
						urlfunc: 'url'
					},
					files: {
						'<%= paths.app %>/css/main.css': ['<%= paths.src %>/stylus/main.styl']  
					}
				}
			},

			// Automatically inject Bower components into the app
			bowerInstall: {
				app: {
					src: ['<%= paths.app %>/index.html'],
					ignorePath: '<%= paths.app %>/'
				}
			},
			
			// Empties folders to start fresh
			clean: {
				dist: {
					files: [{
						dot: true,
						src: [
							'.tmp',
							'<%= paths.dist %>/*',
							'!<%= paths.dist %>/.git*'
						]
					}]
				},
				server: '.tmp'
			},

			copy: {
				dist:{
					files: [
						{
						expand: true,
							dot: true,
							cwd: '<%= paths.app %>',
							dest: '<%= paths.dist %>',
							src: [
								'*.{ico,png,txt}',
								'.htaccess',
								'webapp.appcache',
								'robots.txt',
								'*.html',
								'img/{,*/}*.{webp,svg}',
								'fonts/*.*'
							]
						},
						{
							expand: true,
							cwd: '<%= paths.app %>/css',
							dest: '.tmp/css/',
							src: '{,*/}*.css'
						}
					]
				},
			},

			// Optimizing tasks
			useminPrepare: {
				html: '<%= paths.app %>/index.html',
				options: {
					dest: '<%= paths.dist %>',
					flow: {
						html: {
							steps: {
								js: ['concat', 'uglifyjs'],
								css: ['cssmin']
							},
  							post: {}
	    				}
					}
				}
			},

			usemin: {
				html: ['<%= paths.dist %>/*.html'],
				css: ['<%= paths.dist %>/css/*.css'],
				options: {
					assetsDirs: ['<%= paths.dist %>']
				}
			},
				
			cssmin: {
				minify: {
					expand: true,
					cwd: '<%= paths.app %>/css/',
					src: ['*.css', '!*.min.css'],
					dest: '<%= paths.dist %>/css/',
					ext: '.css'
				}
			},

			imagemin: {
				dynamic: {
					options: {
						optimizationLevel: 7
					},
					files: [ {
						expand: true,
						cwd: '<%= paths.app %>/img/',
						dest: '<%= paths.dist %>/img/',
						src: [ '**/*.{png,jpg,jpeg,gif}']
					}]
				}
			},

			svgmin: {
				dist: {
					files: [{
						expand: true,
						cwd: '<%= paths.app %>/img/',
						src: '**/*.svg',
						dest: '<%= paths.dist %>/img/'
					}]
				}
			},

			// Fancy
			notify: {
				server: { options: { message: 'Server is ready on port : 9001' } },
				compile: { options: { message: 'Jade / Coffeescript / Stylus compile with success'} },
				jade: { options: { message: 'Jade compile with success'} },
				stylus: { options: { message: 'Stylus compile with success'} },
				coffee: { options: { message: 'Coffeescript compile with success'} }
			},

			// Run some tasks in parallel to speed up the build process
			concurrent: {
				compile: [
					'jade:compile',
					'coffee:compile',
					'stylus'
				],
			},

		});
	}

	// Init
	initConfig();

	// Main tasks
	grunt.registerTask( 'compile', [ 'concurrent:compile', 'bowerInstall:app',  'notify:compile' ] )
	grunt.registerTask( 'build', [ 'clean:dist', 'compile', 'useminPrepare', 'concat', 'copy:dist', 'cssmin', 'uglify', 'imagemin', 'svgmin', 'usemin' ] )
	grunt.registerTask( 'test', ['clean:server', 'compile', 'express', 'notify:server', 'watch'] );
	grunt.registerTask( 'default', 'test' );
}
