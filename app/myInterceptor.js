angular.module("myApp").factory("myInterceptor", function($rootScope) {
return {
	responseError: function(promise) {
		$rootScope.$broadcast("server-error");
	}
}
});