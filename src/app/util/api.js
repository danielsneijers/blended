import AppDispatcher from '../dispatcher/appDispatcher.js';
import SlideConstants from '../constants/slideConstants.js';

let db;

let databaseConnect = (callback) => {
  let req = window.indexedDB.open("presentation", 1);
  req.onerror = (e) => {
    // TODO: create errorstore and put error
    console.log("Error opening DB", e);
  };
  req.onupgradeneeded = (e) => {
    console.log("Upgrading");
    db = e.target.result;
    let objectStore = db.createObjectStore("slides", { keyPath : "id", autoIncrement: true });
    // let _objectStore = db.transaction(["slides"],"readwrite")
    //                     .objectStore("slides");
    // callback(_objectStore);
  };
  req.onsuccess  = (e) => {
    db = e.target.result;
    let _objectStore = db.transaction(["slides"],"readwrite")
                        .objectStore("slides");
    callback(_objectStore);
  }
};

const Api = {

  getAll: () => {
    databaseConnect(objectStore => {
      let slides = [];
      let transaction = objectStore.openCursor();
      transaction.onsuccess = function(e) {
        let cursor = e.target.result;
        if (cursor) {
          slides.push(cursor.value);
          cursor.continue();
        } else {
          AppDispatcher.dispatch({
            actionType: SlideConstants.GET_ALL_SLIDES,
            data: slides
          });
          db.close();
        }
      };
    });
  },

  post: (position) => {
    let slide = {title: 'Title', position: position};
    databaseConnect( objectStore => {
      let transaction = objectStore.add(slide);
      transaction.onerror = (e) => {
          // TODO: create errorstore and put error
          console.log("Error");
      };
      transaction.onsuccess = (e) => {
        // TODO: create errorstore and put error
        console.log(e);
        AppDispatcher.dispatch({
          actionType: SlideConstants.CREATE_SLIDE,
          data: slide
        });
        db.close();
      };
    });
  },

  put: (slides, length) => {
    console.log(slides);
    databaseConnect( objectStore => {
      let i = 0;
      for(let slide of slides){
        let transaction = objectStore.put(slide);
        transaction.onerror = (e) => {
          // TODO: create errorstore and put error
          console.log("Error");
        };
        transaction.onsuccess = (e) => {
          // TODO: create errorstore and put error
          i++;
          if(i == length){
            console.info('dispatch');
            AppDispatcher.dispatch({
              actionType: SlideConstants.UPDATE_SLIDE,
              data: slide
            });
            db.close();
          }
        }
      }
    });
  },

  delete: (id) => {
    databaseConnect( objectStore => {
      let transaction = objectStore.delete(id);
      transaction.onsuccess = (e) => {
        AppDispatcher.dispatch({
          actionType: SlideConstants.DELETE_SLIDE,
          data: id
        });
        db.close();
      };
    });
  },

  reset: () => {
    let transaction = indexedDB.deleteDatabase('presentation');
    transaction.onsuccess = () => {
      console.log("Deleted database successfully");
      AppDispatcher.dispatch({
        actionType: SlideConstants.RESET,
        data: ''
      });
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

export default Api