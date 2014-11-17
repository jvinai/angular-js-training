angular.module("myApp").controller("errorCtrl", function($scope, $timeout) {
	$scope.$on('server-error', function(error) {
		$scope.error = "something went wrong, please try again later";
		$timeout(function() { $scope.error = ""}, 5000);
	});
});