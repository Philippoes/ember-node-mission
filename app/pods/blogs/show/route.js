import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    refreshRoute: function() {
      this.refresh();
    }
  },

  setupController(controller) {
  this._super(...arguments);
  controller.set('comment', {});
}
});
