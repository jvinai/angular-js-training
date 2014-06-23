var fs = require('fs');
var phtml = require('./lib/packageHtml.js')

function packageHtml() {
  var done = this.async();

  var options = this.options();

  var html = phtml(options.name, options.version);

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
      }
    },
    htmlangular: {
      files: {
        src: ['tmp/*.html'],
      },
    }
  });

  grunt.loadNpmTasks('grunt-html-angular-validate');

  grunt.registerTask('html', packageHtml)
  grunt.registerTask('default', ['html', 'htmlangular']);

};
