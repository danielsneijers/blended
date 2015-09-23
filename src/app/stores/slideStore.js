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
        _slides = payload.data;

        _slideStore.emitChange();
        break;

      case SlideConstants.CREATE_SLIDE:
        _slides.push(payload.data);
        _slideStore.emitChange();
        break;

      case SlideConstants.DELETE_SLIDE:
        for(let i = 0; i < _slides.length; i++){
          if(payload.data == _slides[i].id) _slides.splice(i, 1);
        }
        _slideStore.emitChange();
        break;

      case SlideConstants.RESET:
        _slides = [];
        _slideStore.emitChange();
        break;
    
      default:
        break;
    }
});

