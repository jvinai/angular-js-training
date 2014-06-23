var fs = require('fs');
var phtml = require('./lib/packageHtml.js')

function packageHtml() {
  var done = this.async();

  fs.readFile('package.json', {encoding: 'UTF-8'}, function (err, data) {
    var packageJSON = JSON.parse(data);

    var html = phtml(packageJSON);

    fs.writeFile('./tmp/package.html', html, function (err) {
      if (err) {
        console.error('Failed to write html to file', err);
      } else {
        console.log('Written html to tmp/package.html')
      }
      done();
    });
  });
}

module.exports = function(grunt) {

  grunt.initConfig({
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
