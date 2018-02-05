import Ember from "ember";

const {
  Controller
} = Ember;

export default Controller.extend({
  actions: {
    goToBlog(blogId) {
      this.transitionToRoute('blogs.show', blogId);
    }
  }
})
