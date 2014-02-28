module.exports = function ( grunt ) {

    var serverPort  = 9001
    ,   srcCoffee   = "src/coffee/"
    ,   srcJade     = "src/jade/"
    ,   deployJade  = "deploy/"
    ,   coffeesToWatch
    ,   sassToWatch
    ,   jadesToWatch;

    grunt.loadNpmTasks( "grunt-contrib-stylus" );
    grunt.loadNpmTasks( "grunt-contrib-watch" );
    grunt.loadNpmTasks( "grunt-contrib-jade" );
    grunt.loadNpmTasks( "grunt-contrib-coffee" );
    grunt.loadNpmTasks( "grunt-contrib-imagemin" );
    grunt.loadNpmTasks( "grunt-contrib-uglify" );
    grunt.loadNpmTasks('grunt-express');
    grunt.loadNpmTasks('grunt-notify');

    grunt.event.on( "watch", function( action, filepath ) {
        var fileType = getFileType( filepath );
        if( fileType == "coffee" ) {
            getCoffees();
            initConfig();
        } else if ( fileType == "jade" ) {
            getJades();
            initConfig();
        }
    });

    function getFileType( filepath ) {
        return filepath.split( "." ).pop();
    }

    function getCoffees() {
        coffeesToWatch = [ srcCoffee + "*.coffee" ];

        grunt.file.recurse( srcCoffee, function( abspath, rootdir, subdir, filename ) {
            if( subdir == undefined )
                return;
            coffeesToWatch[ coffeesToWatch.length ] = srcCoffee + subdir + "/*.coffee";
        });

        coffeesToWatch.reverse();
    }

    function getJades() {
        jadesToWatch = {};

        var deployPath = ""
        ,   fileNameWithoutType = "";

        grunt.file.recurse( srcJade, function( abspath, rootdir, subdir, filename ) {
            deployPath = deployJade;
            fileNameWithoutType = filename.split( "." ).shift() + ".html"
            if( subdir == undefined ) {
                deployPath += fileNameWithoutType;
            } else {
                deployPath += subdir + "/" + fileNameWithoutType;
            }
            jadesToWatch[ deployPath ] = abspath;
        });
    }

    function initConfig() {
        grunt.config.init( {
            pkg: grunt.file.readJSON('package.json'),
            express: {
                server: {
                    options: {
                        port: serverPort,
                        bases: 'deploy/',
                        hostname: '0.0.0.0',
                        livereload: true
                    }
                }
            },
            watch: {
                coffee: {
                    files: [ "src/coffee/**/*.coffee" ],
                    tasks: [ "coffee:compile", "notify:coffee" ],
                    options: {
                      livereload: true,
                    }
                },
                stylus: {
                    files: [ "src/stylus/**/*.styl" ],
                    tasks: [ "stylus", "notify:stylus" ],
                    options: {
                      livereload: true,
                    }
                },
                jade: {
                    files: [ "src/jade/**/*.jade" ],
                    tasks: [ "jade:compile", "notify:jade" ],
                    options: {
                      livereload: true,
                    }
                }
            },

            jade: {
                compile: {
                    options: {
                        data: {
                            debug: true
                        }
                    },
                    files: jadesToWatch
                }
            },

            coffee: {
                compile: {
                    options: {
                        bare: true
                    },
                    files: {
                        "deploy/js/main.js": coffeesToWatch
                    }
                }
            },

            stylus: {
                compile: {
                    options: {
                        compress: false,
                        firebug: false,
                        urlfunc: "url"
                    },
                    files: {
                        'deploy/css/main.css': ['./src/stylus/main.styl']  
                    }             
                }
            },

            imagemin: {
                dynamic: {
                    options: {
                        optimizationLevel: 7
                    },
                    files: [ {
                        expand: true,
                        cwd: "deploy/img/",
                        dest: "deploy/img/",
                        src: [ "**/*.{png,jpg}"]
                    }]
                }
            },

            uglify: {
                compile: {
                    files: {
                        "deploy/js/main.min.js": "deploy/js/main.js"
                    }
                }
            },

            notify: {
                server: { options: { message: 'Server is ready on port :'+serverPort } },
                compile: { options: { message: 'Jade / Coffeescript / Stylus compile with success'} },
                jade: { options: { message: 'Jade compile with success'} },
                stylus: { options: { message: 'Stylus compile with success'} },
                coffee: { options: { message: 'Coffeescript compile with success'} }
            },

        });
    }

    getCoffees();
    getJades();
    initConfig();

    grunt.registerTask( "imageoptim", [ "imagemin:dynamic" ] );
    grunt.registerTask( "compile", [ "jade:compile", "coffee:compile", "stylus", "notify:compile" ] )
    grunt.registerTask( "all", [ "jade:compile", "coffee:compile", "stylus", "uglify", "imageoptim" ] )
    grunt.registerTask( "default", ["compile", "express", "notify:server", "watch"] );
}
