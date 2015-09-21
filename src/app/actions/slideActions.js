import AppDispatcher from '../dispatcher/appDispatcher.js';
import Api from '../util/api.js';
//import CommitConstants from '../constants/commitConstants.js';

export default {
  
  fetchAll: () => {
  	Api.get();

  // 	/***
		//  * Create database snippet
		//  * */
		// var request = indexedDB.open('presentation');
		 
		// request.onupgradeneeded = function(e)
		// {
		//     // e is an instance of IDBVersionChangeEvent
		//     var idb = e.target.result;
		 
		//     if (idb.objectStoreNames.contains('todo'))
		//     {
		//         idb.deleteObjectStore('todo');
		//     }
		 
		//     var store = idb.createObjectStore('todo', {keyPath: 'text', autoIncrement: true});
		//     // createIndex operations possible to be pefromed on store.createIndex
		//     store.createIndex('by_todo', 'todo', {unique: true, multiEntry: false});
		// };
		 
		// request.onsuccess = function(e) {    /* add, update, delete, ... */ };
		// request.onerror = function(e) { /* handle error */ };
		 
		// /***
		//  * Remove database snippet
		//  * */
		// var dropDatabase = function(name)
		// {
		//     var request = indexedDB.deleteDatabase(name);
		//     request.onsuccess = function() { /* drop succeeded */ };
		//     request.onerror = function() { /* drop failed */ };
		// };

  },
  deleteAll: () => {
  	console.log('%c SlideActions / deleteAll ', 'background-color: #29BB9C; color: white;');
  	Api.reset();
  }
}