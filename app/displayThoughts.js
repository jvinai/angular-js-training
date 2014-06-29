angular.module("myApp")
.directive('displayThoughts', function() {
	return {
		scope: {
			thoughts: '=displayThoughts'
		},
		templateUrl: 'displayThoughts.html',
		controller: 'displayThoughtsController as c'
	};
});