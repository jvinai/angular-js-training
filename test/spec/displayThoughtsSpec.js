describe('The display-thoughts directive', function () {

  beforeEach(module('myApp'));

  var element, scope, thoughts = [ {
  	text: '"Strap-on" spelled backwards is "no parts"'
  }, {
  	text: 'The first person who copied someone was in fact very original.'
  }]

  beforeEach(inject(function($compile, _$rootScope_, $templateCache) {
    scope = _$rootScope_.$new();
    scope.thoughts = thoughts;
    element = $compile('<div display-thoughts="thoughts"></div>')(scope);
    scope.$digest();
  }));

  it('should list as many thoughts as are on the scope', function () {
    expect(element.find('div').length).toBe(2);
  });

  it('should display the thought\'s text', function () {
  	expect(element.find('div')[0].textContent).toBe(thoughts[0].text);
  });

  it('should update the html based on the two-way data binding', function () {
  	scope.thoughts = [ scope.thoughts[1] ];
  	scope.$digest();
  	expect(element.find('div').length).toBe(1);
  });

});