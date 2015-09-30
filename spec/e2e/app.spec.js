// Homepage
describe('\nBlended app', function(){

	var startButton = element(by.css('.start-button')),
			seedButton = element(by.css('.seed-button')),
			slideContainer = element(by.css('#slide-container')),
			newSlideButton = element.all(by.css('.crud-buttons button')).get(0),
			resetButton = element.all(by.css('.crud-buttons button')).get(1);

	describe('\nthe start screen', function(){
	  it('should have a title', function(){
	    browser.get('/');
	    expect(browser.getTitle()).toEqual('Blended');
	  });

	  it('should have a create button', function(){
	    expect(startButton.isDisplayed()).toBeTruthy();
	  });

	  it('should have an "Awesome Presentation" button', function(){
	    expect(seedButton.isDisplayed()).toBeTruthy();
	  });

	  it('should create the first slide', function(){
			startButton.click();
			browser.sleep(100).then(function(){
				expect(browser.getCurrentUrl()).toEqual('http://localhost:8080/slide/1');
				expect(slideContainer.isDisplayed()).toBeTruthy();
			});
	  });
	});

	describe('\nthe main view', function(){
		it('should be able to create a new slide', function(){
			browser.sleep(100).then(function(){
				var slidePreview = element.all(by.css('.slide-preview'));
				expect(slidePreview.count()).toBe(1);
				newSlideButton.click();
				browser.sleep(100).then(function(){
					expect(slidePreview.count()).toBe(2);
				});
			});
		});

		it('shoud have an editable header', function(){
			var header = element(by.css('#slide-container h1'));
			header.click();
			header.clear().then(function() {
		    header.sendKeys('new title');
				expect(header.getText()).toEqual('new title');
			});
		});

		it('shoud be navigatable', function(){
			var slidePreview = element.all(by.css('.slide-preview')).get(1);
			slidePreview.click();
			browser.sleep(100).then(function(){
				expect(browser.getCurrentUrl()).toEqual('http://localhost:8080/slide/2');

				var firstButton = element.all(by.css('.transport-buttons .button')).get(0);
				firstButton.click();
				browser.sleep(100).then(function(){
					expect(browser.getCurrentUrl()).toEqual('http://localhost:8080/slide/1');
				});
			});
		});

		it('should reset to its original state', function(){
			resetButton.click();
			browser.sleep(100).then(function(){
				expect(browser.getCurrentUrl()).toEqual('http://localhost:8080/start');
			});
		});
	});


});