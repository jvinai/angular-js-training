angular.module("myApp").factory('statsService', function ($http, $scope) {
  return {
    getStats: function () {
      return $http({
        url: '/api/stats',
        method: 'GET'
      });
    }
  }
});