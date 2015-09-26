const React = require("react/addons");
const TestUtils = React.addons.TestUtils;
const ReactRouterContext = require('../../src/app/util/reactRouterContext.js');

let Main = require("../../src/app/components/main"),
    main,
    dom;
  
describe("Main component", () => {
  
  Main = ReactRouterContext(Main, {someProp: 'foo' });

  beforeEach(() => {
    main = TestUtils.renderIntoDocument(<Main />);
    //spyOn(Main, 'switchToFullScreen').and.callThrough();
  });

  it("works", () => {
    let fullScreenButton = TestUtils.findRenderedDOMComponentWithClass(main, 'button');
    //main.switchToFullScreen = jest.genMockFunction();
    
    TestUtils.Simulate.click(fullScreenButton);
    expect(main.switchToFullScreen).toHaveBeenCalled();
    //expect(main.switchToFullScreen.mock.calls.length).toBe(1);
    
    expect(true).toBe(true);
  });
});