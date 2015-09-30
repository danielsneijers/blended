jest.mock('react-router');
jest.dontMock('../components/slide-types/titleSlide');

var React = require('react/addons');
var TestUtils = React.addons.TestUtils;
var TitleSlide = require('../components/slide-types/titleSlide');

describe('Title Slide ', function() {

	var slideContent = {
		"type":"title",
		"position":3,
		"title":"I'm not defined by my title",
		"body":"Slide contents",
		"textAlign":"left",
		"backgroundColor":"#FFFFFF",
		"backgroundUrl":"https://images.unsplash.com/photo-1434873740857-1bc5653afda8?q=80&fm=jpg&s=88fd0a78d5885eb60be6af77d5f28ee2",
		"color":"#000000"
	};


	describe('Heading', function() {

		it('should render with the correct title', function() {
			var TitleSlideComponent = TestUtils.renderIntoDocument(<TitleSlide slideContent={slideContent} optionsActive={false} />),
	    		heading = TestUtils.findRenderedDOMComponentWithTag(TitleSlideComponent, 'h1');
	  	expect(heading).toBeDefined();
	    expect(heading.getDOMNode().textContent).toEqual("I'm not defined by my title");
		});

	});

	describe('Container', function() {

		it('should render with the correct styles', function() {
			var TitleSlideComponent = TestUtils.renderIntoDocument(<TitleSlide slideContent={slideContent} optionsActive={false} />),
	    		container = TestUtils.findRenderedDOMComponentWithClass(TitleSlideComponent, 'content');

	  	expect(container).toBeDefined();
	  	expect(container.getDOMNode().getAttribute('style')).toEqual("text-align:left;color:#000000;background-color:#FFFFFF;background-image:url(https://images.unsplash.com/photo-1434873740857-1bc5653afda8?q=80&fm=jpg&s=88fd0a78d5885eb60be6af77d5f28ee2);");
		});

	});
});