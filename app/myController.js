angular.module("myApp").controller('myCtrl', function($scope, fartService) {
	console.log("hello from controller!");

	fartService.getFarts().then(
		function success(newFartList) {
			$scope.farts = newFartList.data;
		}
	);

	this.doSubmit = function() {
		console.log("thing " , $scope.newFart);
		fartService.postFart($scope.newFart).then(
			function success(newFartList) {
				$scope.farts = newFartList.data;
				$scope.newFart = "";
			}
		);
	}
});