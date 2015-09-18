import Store from './store';
import AppDispatcher from '../dispatcher/appDispatcher';
import CommitConstants from '../constants/commitConstants';

let commitsList = [];

class CommitStore extends Store {
  getCommits() {
    return commitsList;
  }
}

let _commitStore = new CommitStore();

export default _commitStore;

AppDispatcher.register((payload) => {

    switch(payload.actionType) {
      case CommitConstants.GET_COMMITS:
        commitsList = payload.data.data;
        _commitStore.emitChange();
        break;
    
      default:
        break;
    }
});

