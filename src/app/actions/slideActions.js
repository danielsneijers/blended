import Api from '../util/api.js';

export default {

  getAll: () => {
  	Api.getAll();
  },

  createSlide: () => {
  	Api.post();
  },

  updateSlide: (slide) => {
    console.log(slide);
    Api.put(slide);
  },

  deleteSlide: (id) => {
    Api.delete(id);
  },

  deleteAll: () => {
  	Api.reset();
  }
}