angular.module("myApp").controller('myCtrl', function($scope) {

	$scope.thoughts = [
		{text: 'Being a dog is like living in a house with giants who always want to give you massages.'},
		{text: 'What if I have a mental illness but my family has never told me?'}
	];

	this.doSubmit = function() {
		console.log("new thought: ", $scope.newThought);
	}
});