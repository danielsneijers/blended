jest.mock('react-router');
jest.dontMock('../../util/api');

const React = require('react/addons');
const TestUtils = React.addons.TestUtils;
const Api = require('../../util/api');


describe('Api ', function() {

	// const overviewInstance = new Overview();
	// const slidesData = [
	// 		{"title":"hey","position":1,"type":"title","id":4},
	// 		{"title":"slide 2","position":2,"type":"title","id":1},
	// 		{"title":"Title","position":3,"type":"title","id":3},
	// 		{"title":"cool","position":4,"type":"title","id":2,"body":"Hey vette copy!"}];

	// it('should sort slides when an array of slides and indexes is provided to helper', () => {
	// 	let indexes = [4, 1, 2, 3];
	// 	let newSlidesData = [
	// 		{"title":"hey","position":1,"type":"title","id":4},
	// 		{"title":"slide 2","position":2,"type":"title","id":1},
	// 		{"title":"Title","position":4,"type":"title","id":3},
	// 		{"title":"cool","position":3,"type":"title","id":2,"body":"Hey vette copy!"}];
	// 	expect(overviewInstance.sortSlides(slidesData, indexes)).toEqual(newSlidesData);
	// });

	it('should be awesome', function() {

    expect(true).toBe(true);
	});

});