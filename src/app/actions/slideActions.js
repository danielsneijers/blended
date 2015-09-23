import Api from '../util/api.js';

export default {
  
  getAll: () => {
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