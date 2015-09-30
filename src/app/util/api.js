import AppDispatcher from '../dispatcher/appDispatcher';
import SlideConstants from '../constants/slideConstants';

let db;

let databaseConnect = (callback) => {
  let req = window.indexedDB.open("presentation", 1);
  req.onerror = e => handleDatabaseError(e);
  req.onupgradeneeded = e => {
    db = e.target.result;
    let objectStore = db.createObjectStore("slides", { keyPath : "id", autoIncrement: true });
  };
  req.onsuccess = e => {
    db = e.target.result;
    let _objectStore = db.transaction(["slides"],"readwrite").objectStore("slides");
    callback(_objectStore);
  }
};

let dispatchAndClose = (actionType, data) => {
  AppDispatcher.dispatch({
    actionType: SlideConstants[actionType],
    data: data
  });
  db.close();
};
// TODO: create errorstore and put error
let handleDatabaseError = (e) => {
  console.log("Error", e);
};

const Api = {

  getAll: () => {
    databaseConnect(objectStore => {
      let slides = [];
      let transaction = objectStore.openCursor();

      transaction.onerror = e => handleDatabaseError(e);
      transaction.onsuccess = e => {
        let cursor = e.target.result;
        if (cursor) {
          slides.push(cursor.value);
          cursor.continue();
        } else {
          dispatchAndClose('GET_ALL_SLIDES', slides);
        }
      };
    });
  },

  post: (slide) => {
    databaseConnect( objectStore => {
      let transaction = objectStore.add(slide);
      transaction.onerror = e => handleDatabaseError(e);
      transaction.onsuccess = dispatchAndClose('CREATE_SLIDE', slide);
    });
  },

  put: (slides, length, seed = false) => {
    console.log('%c' + length, 'background-color: #FFDD00;');
    databaseConnect( objectStore => {
      let i = 0;
      for(let slide of slides){
        let transaction = objectStore.put(slide);
        transaction.onerror = e => handleDatabaseError(e);
        transaction.onsuccess = () => {
          i++;
          i == length && !seed ? dispatchAndClose('UPDATE_SLIDE', slides) : dispatchAndClose('SEED_DB', slides);
        }
      }
    });
  },

  delete: (id) => {
    databaseConnect( objectStore => {
      let transaction = objectStore.delete(id);
      transaction.onerror = e => handleDatabaseError(e);
      transaction.onsuccess = dispatchAndClose('DELETE_SLIDE', id);
    });
  },

  reset: () => {
    let transaction = indexedDB.deleteDatabase('presentation');
    transaction.onerror = e => handleDatabaseError(e);
    transaction.onblocked = e => handleDatabaseError(e);
    transaction.onsuccess = dispatchAndClose('RESET', '');
  }
}

export default Api