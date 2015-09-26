import Api from '../util/api.js';

export default {

  getAll: () => {
  	Api.getAll();
  },

  createSlide: (position) => {
  	Api.post(position);
  },

  updateSlide: (slide) => {
    slide = [slide];
    Api.put(slide, 1);
  },
  updateAll: (slides) => {
    length = slides.length;
    Api.put(slides, length);
  },


  deleteSlide: (id) => {
    Api.delete(id);
  },

  deleteAll: () => {
  	Api.reset();
  }
}