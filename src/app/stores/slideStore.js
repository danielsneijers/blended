import Store from './store';
import AppDispatcher from '../dispatcher/appDispatcher';
import SlideActions from '../actions/slideActions';
import SlideConstants from '../constants/slideConstants';

let _slides = [];

class SlideStore extends Store {
  getAllSlides() {
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
        SlideActions.getAll();
        break;

      case SlideConstants.UPDATE_SLIDE:
        console.log(payload.data);
        // for(let i = 0; i < _slides.length; i++){
        //   if(payload.data == _slides[i].id) _slides[i] ;
        // }
        _slideStore.emitChange();
        break;

      case SlideConstants.DELETE_SLIDE:
        _slides.forEach((slide, index) => {
          if(payload.data == slide.id) _slides.splice(index, 1);
        });
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

