// Homepage
describe('\nBlended app', function(){

  it('should have a title', function(){
    browser.get('/');
    expect(browser.getTitle()).toEqual('Blended');
  });

});