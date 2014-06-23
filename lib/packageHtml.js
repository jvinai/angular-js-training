var prettyHtml = require('html');

module.exports = function(name, version) {
  function listItem(key, value) {
    return '<li><strong>' + key + ': </strong>' + value + '</li>';
  }
  var html = '<head>' +
    '<title>' + name + ' package information</title>' +
    '</head>' +
    '<body><ul>' +
    listItem('Name', name) +
    listItem('Version', version) +
    '</ul></body>';

  return prettyHtml.prettyPrint(html);
};
