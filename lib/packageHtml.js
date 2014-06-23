module.exports = function(packageJSON) {
  function listItem(key, value) {
    return '<li><strong>' + key + ': </strong>' + value + '</li>';
  }
  var html = '<ul>' +
    listItem('Name', packageJSON.name) +
    listItem('Version', packageJSON.version) +
    '</ul>';

  return html;
};
