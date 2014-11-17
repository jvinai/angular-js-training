angular.module("myApp", ['ngRoute'])
.config(function($routeProvider) {
  $routeProvider
      .when('/stats', {
            templateUrl: 'stats.html'
      })
	.otherwise({
		templateUrl: 'thoughts.html'
	});
})
.config(function($httpProvider) {
	$httpProvider.interceptors.push('myInterceptor');
});
