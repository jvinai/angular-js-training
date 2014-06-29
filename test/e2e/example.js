describe('the index page', function () {

	var initialNumberOfThoughts;

	it('should navigate to the index page', function () {
		browser.get('');
	});

	it('should initially have a number of thoughts on the page', function () {
		var thoughts = element.all(by.repeater("thought in thoughts"));
		var promiseToCount = thoughts.count();

		promiseToCount.then(function (n) {
			initialNumberOfThoughts = n;
		});

		expect(promiseToCount).toBeGreaterThan(0);
	});

	it('should allow the posting of a thought', function () {
		var inputField = element(by.model('newThought'));
		inputField.sendKeys('Who is this Rorschach guy and why does he paint so many pictures of my parents fighting?');
		element(by.css('.btn-primary')).click();
	});

	it('should then display this thought, after submitting', function () {
		expect(element.all(by.repeater("thought in thoughts")).count()).toBe(initialNumberOfThoughts + 1);
		expect(element.all(by.repeater("thought in thoughts")).get(0).getText()).toEqual('Who is this Rorschach guy and why does he paint so many pictures of my parents fighting?');
	});

	describe('when navigating to the stats page', function () {

		it('should be possible to navigate to the stats page', function () {
			element(by.css('[href="#/stats"]')).click();
			expect(browser.getCurrentUrl()).toMatch(/stats/);
		});

		it('should display the correct number of thoughts', function () {
			expect(element(by.binding('nrOfThoughts')).getText()).toMatch(new RegExp(initialNumberOfThoughts + 1));
		});

	});
})