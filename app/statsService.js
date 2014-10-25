angular.module("myApp").factory('statsService', function ($http) {
  return {
    getStats: function () {
      return $http({
        url: '/api/stats',
        method: 'GET'
      });
    }
  }
});
