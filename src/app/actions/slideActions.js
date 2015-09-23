import AppDispatcher from '../dispatcher/appDispatcher.js';
import Api from '../util/api.js';
//import CommitConstants from '../constants/commitConstants.js';

export default {
  
  fetchAll: () => {
  	Api.getAll();
  },

  createSlide: () => {
  	console.log('%c SlideActions / createSlide ', 'background-color: #29BB9C; color: white;');
  	Api.post('title van slide vette shit');
  },

  deleteAll: () => {
  	console.log('%c SlideActions / deleteAll ', 'background-color: #29BB9C; color: white;');
  	Api.reset();
  }
}