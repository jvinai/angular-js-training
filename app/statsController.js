angular.module("myApp").controller('statsCtrl', function($scope, statsService) {
	statsService.getStats().then(
		function success(xhr) {
			$scope.nrOfThoughts = xhr.data.nrOfThoughts;
		}
	);
});