'use strict';

//"wrapper"����
module.exports = function (grunt) {
    // Do grunt-related things in here

    /**����������Ȱ�װ�� load-grunt-tasks �� time-grunt
     * */
    //����gruntʱ������node�ṩ��require()ϵͳ���ұ��ذ�װ��Grunt
    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);

    var config = {
        app:'app',
        dist:'dist'
    };

    //��Ŀ���������ã����ݱ�������object(����)�ڣ������ݸ�grunt.initConfig()����
    //grunt.initConfig()��������Դ洢��������
    grunt.initConfig({
        //����config����
        config: config,

        /**����������Ȱ�װ�� grunt-contrib-copy �� grunt-contrib-clean
         * Gruntfile.js�ļ�������Ϻ���������������grunt copy����
         * */
        copy: {
            dist: {
                src:'<%= config.app %>/index.html',
                dest:'<%= config.dist %>/index.html'
            }
        },

        clean: {}

    });


    //����Grunt���������


};
