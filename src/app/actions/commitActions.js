import AppDispatcher from '../dispatcher/appDispatcher.js';
import CommitConstants from '../constants/commitConstants.js';

export default {
  
  fetch: (repository) => {
  	// Axios.get(`https://api.github.com/repos/${repository}/commits?per_page=5`)
		 //  .then((response) => {
		 //    AppDispatcher.dispatch({
   //        actionType: CommitConstants.GET_COMMITS,
   //        data: response
   //      });
		 //  })
		 //  .catch((response) => {
		 //    console.log('error', response);
		 //  });
  }
}