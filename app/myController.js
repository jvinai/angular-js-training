angular.module("myApp").controller('myCtrl', function($scope, $http) {
	$http({
        url: '/api',
        method: 'GET'
      }).then(
		function success(xhr) {
			$scope.thoughts = xhr.data;
		}
	);

	this.doSubmit = function() {
		$http({
		    url: '/api/thought',
		    method: 'POST',
		    data: {
		      thought: $scope.newThought
		    }
	  	}).then(
			function success(xhr) {
				$scope.thoughts = xhr.data;
				$scope.newThought = "";
			}
		);
	}
});