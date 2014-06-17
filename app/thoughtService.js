angular.module("myApp").factory('thoughtService', function ($http) {
  return {
    getThoughts: function () {
      return $http({
        url: '/api',
        method: 'GET'
      });
    },

    postThought: function (newThought) {
      return $http({
        url: '/api/thought',
        method: 'POST',
        data: {
          thought: newThought
        }
      });
    }
  }
});