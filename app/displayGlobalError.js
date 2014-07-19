angular.module("myApp")
.directive('displayGlobalError', function() {
	return {
		scope: true,
		template: '<div ng-if="hasError" class="alert alert-danger text-center"> <b>Server reported error: </b> {{error}}</div>',
		link: function(scope, element) {
			scope.$on('server-error', function(event, message) {
				scope.error = message;
				scope.hasError = true;
			});
		}
	};
});