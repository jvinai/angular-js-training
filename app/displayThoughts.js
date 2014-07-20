angular.module("myApp")
.directive('displayThoughts', function() {
	return {
		scope: {
			thoughts: '=displayThoughts'
		},
		template: '<div class="well well-sm" ng-repeat="thought in thoughts">{{thought.text}}</div>'
	};
});