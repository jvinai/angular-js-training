var fs = require('fs');
var phtml = require('./lib/packageHtml.js')

fs.readFile('package.json', {encoding: 'UTF-8'}, function (err, data) {
  var packageJSON = JSON.parse(data);

  var html = phtml(packageJSON);

  fs.writeFile('./tmp/package.html', html, function (err) {
    if (err) {
      console.error('Failed to write html to file', err);
    } else {
      console.log('Written html to tmp/package.html')
    }
  });
});
