var fs = require('fs');
var phtml = require('./lib/packageHtml.js')

function packageHtml() {
  var done = this.async();

  var options = this.options({
    pretty: true
  });

  var html = phtml(options.name, options.version, options.pretty);

  fs.writeFile(options.file, html, function (err) {
    if (err) {
      console.error('Failed to write html to file', err);
    } else {
      console.log('Written html to ' + options.file);
    }
    done();
  });
}

module.exports = function(grunt) {

  grunt.initConfig({
    package: grunt.file.readJSON('package.json'),
    html: {
      options: {
        file: './tmp/package.html',
        name: '<%= package.name %>',
        version: '<%= package.version %>'
      },
      dev: {
      },
      dist: {
        options: {
          pretty: false
        }
      }
    },
    htmlangular: {
      files: {
        src: ['tmp/*.html'],
      },
    }
  });

  grunt.loadNpmTasks('grunt-html-angular-validate');

  grunt.registerMultiTask('html', packageHtml);

  grunt.registerTask('default', ['html:dev', 'htmlangular']);
  grunt.registerTask('dist', ['html:dist']);

};
