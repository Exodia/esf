module.exports = function(grunt) {

    // 任务配置
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            less: {
                files: ['src/css/*.less'],
                tasks: ['less']
            }
        },
        less: {
            development: {
                options: {
                    paths: ['./']
                },
                files: {
                    './assets/main.css': './src/css/main.less'
                }
            }
        }
    });

    // 任务加载
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');

    // 自定义任务
    grunt.registerTask('default', ['watch']);

};
