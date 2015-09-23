import AppDispatcher from '../dispatcher/appDispatcher.js';
//import CommitConstants from '../constants/commitConstants.js';

let db;

(() => {
  let req = window.indexedDB.open("presentation", 1);
  req.onerror = (e) => {
    // TODO: create errorstore and put error
    console.log("Error opening DB", e);
  };
  req.onupgradeneeded = (e) => {
    console.log("Upgrading");
    db = e.target.result;
    let objectStore = db.createObjectStore("slides", { keyPath : "id", autoIncrement: true });
    //objectStore.createIndex("title", "title", { unique: false });
    // objectStore.createIndex("minutes", "minutes", { unique: false });
    // objectStore.createIndex("day", "day", { unique: false });
    // objectStore.createIndex("month", "month", { unique: false });
    // objectStore.createIndex("year", "year", { unique: false });
    // objectStore.createIndex("notified", "notified", { unique: false });
  };
  req.onsuccess  = (e) => {
    db = e.target.result;
    console.log("Success opening DB");
  }
})();

export default {
  
  get: (id) => {
  	console.log('%c Api / get ', 'background-color: #3498DB; color: white;');
    if(!db) init();
    let transaction = db.transaction(["slides"],"readonly")
                        .objectStore("slides")
                        .get(id);
    transaction.onerror = (e) => {
        // TODO: create errorstore and put error
        console.log("Error");
    };
  },

  getAll: () => {
    let slides = [];
    let transaction = db.transaction(["slides"],"readonly")
                        .objectStore("slides")
                        .openCursor();
    transaction.onsuccess = function(e) {
      let cursor = e.target.result;
      if (cursor) {
        slides.push(cursor.value);
        cursor.continue();
      }
      else {
        console.log(slides);
      }
    };
  },

  post: (slide) => {
    slide = {title: 'testslide'};
  	console.log('%c Api / post ', 'background-color: #3498DB; color: white;');
    let transaction = db.transaction(["slides"],"readwrite")
                        .objectStore("slides")
                        .add(slide);
    transaction.onerror = (e) => {
        // TODO: create errorstore and put error
        console.log("Error");
    };
  },

  put: (slide) => {
    if(!db) init();
    let transaction = db.transaction(["slides"],"readwrite")
                        .objectStore("slides")
                        .put(slide);
    transaction.onerror = (e) => {
        // TODO: create errorstore and put error      
        console.log("Error");
    };
  },

  delete: (id) => {
  	console.log('%c Api / delete ', 'background-color: #3498DB; color: white;');
    let transaction = db.transaction(["slides"],"readwrite")
                        .objectStore("slides")
                        .delete(slide);
    transaction.onerror = (e) => {
        // TODO: create errorstore and put error      
        console.log("Error");
    };
  },

  reset: () => {
  	console.log('%c Api / reset ', 'background-color: #3498DB; color: white;');
    db.close();
    let transaction = indexedDB.deleteDatabase('presentation');
    transaction.onsuccess = () => {
      console.log("Deleted database successfully");
    };
    transaction.onerror = () => {
      // TODO: create errorstore and put error
      console.log("Couldn't delete database");
    };
    transaction.onblocked = () => {
      console.log("Couldn't delete database due to the operation being blocked");
    };
  }

}