angular.module("myApp")
.controller('displayThoughtsController', function($scope, thoughtService) {
	this.repeatThought = function(thought) {
		thoughtService.postThought(thought.text).then(
			function success(newThoughtList) {
				$scope.thoughts = newThoughtList.data;
				$scope.newThought = "";
			}
		);
	};
});