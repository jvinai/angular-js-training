angular.module('myApp').factory('myInterceptor', function ($q, $rootScope) {
	return {
		responseError: function(promise) { 
			$rootScope.$broadcast('server-error', promise.data);
			return $q.reject(promise);
		}
	};
});


