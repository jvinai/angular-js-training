angular.module("myApp").factory("myInterceptor", function($q, $rootScope) {
return {
	responseError: function(promise) {
		$rootScope.$broadcast("server-error");
		return $q.reject(promise);
	}
}
});