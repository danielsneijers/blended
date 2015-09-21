import AppDispatcher from '../dispatcher/appDispatcher.js';
//import CommitConstants from '../constants/commitConstants.js';

export default {
  
  get: () => {
  	console.log('api get');
  },

  post: () => {

  },

  put: () => {

  },

  delete: () => {
  	console.log('%c Api / delete ', 'background-color: #3498DB; color: white;');
  },

  reset: () => {
  	console.log('%c Api / reset ', 'background-color: #3498DB; color: white;');  	
  }
}