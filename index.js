var fs = require('fs');

fs.readFile('package.json', {encoding: 'UTF-8'}, function (err, data) {
  var packageJSON = JSON.parse(data);

  function listItem(key, value) {
    return '<li><strong>' + key + ': </strong>' + value + '</li>';
  }
  var html = '<ul>' +
    listItem('Name', packageJSON.name) +
    listItem('Version', packageJSON.version) +
    '</ul>';

  fs.writeFile('./tmp/package.html', html, function (err) {
    if (err) {
      console.error('Failed to write html to file', err);
    } else {
      console.log('Written html to tmp/package.html')
    }
  });
});
