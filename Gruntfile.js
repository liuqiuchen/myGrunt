'use strict';

//"wrapper"函数
module.exports = function (grunt) {
    // Do grunt-related things in here

    /**在命令行里，先安装好 load-grunt-tasks 和 time-grunt
     * */
    //运行grunt时，利用node提供的require()系统查找本地安装的Grunt
    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);

    var config = {
        app:'app',
        dist:'dist'
    };

    //项目和任务配置：数据被定义在object(对象)内，并传递给grunt.initConfig()方法
    //grunt.initConfig()方法里可以存储任意数据
    grunt.initConfig({
        //引入config配置
        config: config,

        /**在命令行里，先安装好 grunt-contrib-copy 和 grunt-contrib-clean
         * Gruntfile.js文件配置完毕后，在命令行中运行grunt copy命令
         * */
        copy: {
            dist: {
                src:'<%= config.app %>/index.html',
                dest:'<%= config.dist %>/index.html'
            }
        },

        clean: {}

    });


    //加载Grunt插件和任务


};
