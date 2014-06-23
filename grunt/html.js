module.exports = function () {
  return {
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
  };
};
