var fs = require('fs');
var phtml = require('./lib/packageHtml.js')

module.exports = function (grunt) {

  grunt.registerMultiTask('html', function () {
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
  });
}
