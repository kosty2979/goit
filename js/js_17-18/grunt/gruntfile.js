module.exports = function(grunt) {

    // 1. Вся настройка находится здесь
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            dist: {
                src: [
                    'js/*.js',   
                ],
                dest: 'build/js/main.js',
            }
        },

        uglify: {
            build: {
                src: 'build/js/main.js',
                dest: 'build/js/main.min.js'
            }
        },
        
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'image/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'build/image'
                }]
            }
        },

        cssmin: {
              target: {
                files: [{
                  expand: true,
                  cwd: 'build/css',
                  src: ['*.css', '!*.min.css'],
                  dest: 'build/css',
                  ext: '.min.css'
                }]
              }
            },

        sass: {
            dist: {
              files: [{
                expand: true,
                cwd: 'css',
                src: ['*.scss'],
                dest: 'build/css',
                ext: '.css'
              }]
            }
          },
          
        watch: {
            scripts: {
                files: ['js/*.js'],
                tasks: ['concat', 'uglify'],
                options: {
                    spawn: false,
                },
            },
            css: {
                files: ['css/*.scss'],
                tasks: ['sass','cssmin'],
                options: {
                    spawn: false,
                }
            },
           
        }

    });

    // 3. Тут мы указываем Grunt, что хотим использовать этот плагин
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // 4. Указываем, какие задачи выполняются, когда мы вводим «grunt» в терминале
   grunt.registerTask('default', ['concat', 'uglify', 'imagemin','sass', 'cssmin']);
};