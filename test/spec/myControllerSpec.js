'use strict';

describe('My Controller', function () {

	var scope, 
		myCtrl, 
		thoughtService, 
		getThoughtsDefered,
		postThoughtDefered;

  beforeEach(module('myApp'));

  beforeEach(inject(function ($controller, $rootScope, _thoughtService_, $q) {
    scope = $rootScope.$new();
    thoughtService = _thoughtService_;

    getThoughtsDefered = $q.defer();
    spyOn(thoughtService, 'getThoughts').andReturn(getThoughtsDefered.promise);

    postThoughtDefered = $q.defer();
    spyOn(thoughtService, 'postThought').andReturn(postThoughtDefered.promise);

    myCtrl = $controller('myCtrl', {
    	'$scope': scope,
    	'thoughtService': thoughtService
    });
  }));

  describe('On initialization', function () {
  	it('should requests thoughts from the thoughtService', function () {
  		expect(thoughtService.getThoughts).toHaveBeenCalled();
  	});
  	it('should place thoughts on the scope when these return from the thoughtService', function () {
  		var thought = 'The word "Fat" just looks like someone took a bite out of the first letter of the word "Eat"';
  	 	getThoughtsDefered.resolve({data: thought});
  		scope.$digest();	
  		expect(scope.thoughts).toEqual(thought);
   	});
  });

  describe('When submitting thoughts', function () {
  	beforeEach(function () {
  		myCtrl.doSubmit('"Go to bed, you\'ll feel better in the morning" is the human version of "Did you turn it off and turn it back on again?"');
  	})
  	it('should trigger a post on the thoughtService', function (){
  		expect(thoughtService.postThought).toHaveBeenCalled();
  	})
  	it('should set this new thought on the scope one the posting is complete', function () {
  		var thought = 'When you drink alcohol you are just borrowing happiness from tomorrow';
  		postThoughtDefered.resolve({data: [thought]});
  		scope.$digest();
  		scope.$apply();
  		expect(scope.thoughts).toEqual([thought]);
  	})
  })
});
