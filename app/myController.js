angular.module("myApp").controller('myCtrl', function($scope, thoughtService) {
	thoughtService.getThoughts().then(
		function success(newThoughtList) {
			$scope.thoughts = newThoughtList.data;
		}
	);

	this.doSubmit = function() {
		thoughtService.postThought($scope.newThought).then(
			function success(newThoughtList) {
				$scope.thoughts = newThoughtList.data;
				$scope.newThought = "";
			}
		);
	}
});