angular.module("myApp").filter('shoutyFilter', function() {
	return function(input) {
		return input.toUpperCase() + " !!!";
	}
});