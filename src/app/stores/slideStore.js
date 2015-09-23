import Store from './store';
import AppDispatcher from '../dispatcher/appDispatcher';
import SlideConstants from '../constants/slideConstants';

let _slides = [];

class SlideStore extends Store {
  getSlides() {
    return _slides;
  }
}

let _slideStore = new SlideStore();

export default _slideStore;

AppDispatcher.register((payload) => {

    switch(payload.actionType) {
      case SlideConstants.GET_ALL_SLIDES:
        console.log('store!');
        _slides = payload.data;
        _slideStore.emitChange();
        break;
    
      default:
        console.log('store!');
        break;
    }
});

