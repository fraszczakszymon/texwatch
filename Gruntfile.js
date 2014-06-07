"use strict";

module.exports = function(grunt) {
    var basePath = '.';

    if (typeof grunt.option('basePath') !== "undefined") {
        basePath = grunt.option('basePath').replace(/ /g, '\\ ');
    }

    grunt.initConfig({
        watch: {
            src: {
                files: [ basePath + "/*.tex" ],
                tasks: [ "shell:compile" ]
            }
        },
        shell: {
            compile: {
                options: {
                    stderr: false
                },
                command: './pdflatex.sh ' + basePath
            }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks('grunt-shell');
};