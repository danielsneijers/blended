jest.mock('react-router');
jest.dontMock('../components/overview');

// Jest doesn't like 'imports' while testing component
// methods for some reason, hence the ES5 syntax in tests
var React = require('react/addons');
var TestUtils = React.addons.TestUtils;
var Overview = require('../components/overview');

describe('Overviewcontainer ', function() {

	var overviewInstance = new Overview();
	var slidesData = [
			{"title":"hey","position":1,"type":"title","id":4},
			{"title":"slide 2","position":2,"type":"title","id":1},
			{"title":"Title","position":3,"type":"title","id":3},
			{"title":"cool","position":4,"type":"title","id":2,"body":"Hey vette copy!"}];

	it('should sort slides when an array of slides and indexes is provided to helper', () => {
		var indexes = [4, 1, 2, 3];
		var newSlidesData = [
			{"title":"hey","position":1,"type":"title","id":4},
			{"title":"slide 2","position":2,"type":"title","id":1},
			{"title":"Title","position":4,"type":"title","id":3},
			{"title":"cool","position":3,"type":"title","id":2,"body":"Hey vette copy!"}];
		expect(overviewInstance.sortSlides(slidesData, indexes)).toEqual(newSlidesData);
	});

	it('should render with correct number of slides', function() {
    var OverviewComponent = TestUtils.renderIntoDocument(<Overview allSlides={slidesData} />);
    var itemCount = TestUtils.scryRenderedDOMComponentsWithClass(OverviewComponent, 'overview-item').length;
    expect(itemCount).toBe(4);
	});

});