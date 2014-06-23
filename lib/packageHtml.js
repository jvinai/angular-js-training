var prettyHtml = require('html');

module.exports = function(packageJSON) {
  function listItem(key, value) {
    return '<li><strong>' + key + ': </strong>' + value + '</li>';
  }
  var html = '<head>' +
    '<title>' + packageJSON.name + ' package information</title>' +
    '</head>' +
    '<body><ul>' +
    listItem('Name', packageJSON.name) +
    listItem('Version', packageJSON.version) +
    '</ul></body>';

  return prettyHtml.prettyPrint(html);
};
