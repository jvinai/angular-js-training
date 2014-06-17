angular.module("myApp").factory('fartService', function ($http) {
  return {
    getFarts: function () {
      return $http({
        url: '/api',
        method: 'GET'
      });
    },

    postFart: function (newFart) {
      return $http({
        url: '/api/fart',
        method: 'POST',
        data: {
          fart: newFart
        }
      });
    }
  }
});