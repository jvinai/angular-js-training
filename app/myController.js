angular.module("myApp", [])
.controller("myController", function($q, $scope) {

	var messageSender = function(message) {
		var deferred = $q.defer();

		setTimeout(function() {
			deferred.notify('sending message..');
		}, 200);

		setTimeout(function() {
			deferred.notify('almost there..');
		}, 2000);
	
		setTimeout(function() {
			deferred.resolve('message send properly!');			
		}, 5000);


		return deferred.promise;
	};

	this.sendMessage = function() {
		// call messageSender and handle it's promise here
	}

});