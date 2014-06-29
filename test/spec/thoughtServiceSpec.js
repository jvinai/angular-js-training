describe('The Thought Service', function () {

  beforeEach(module('myApp'));

  var $httpBackend, thoughtService, myThoughts = [
    "Centaurs have two rib cages",
    "Once you have a PhD, every meeting you go to becomes a doctor's appointment"
  ];

  beforeEach(inject(function (_$httpBackend_, _thoughtService_) {
    $httpBackend = _$httpBackend_;
    thoughtService = _thoughtService_;

    $httpBackend.when('GET', '/api').respond(myThoughts);
  }));

  describe('the getThoughts function', function () {
    it('should call api with a HTTP GET', function () {
      var thoughts = thoughtService.getThoughts();
      $httpBackend.flush();
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    });
  })
  
});