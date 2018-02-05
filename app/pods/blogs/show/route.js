import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash({
      author: this.store.findRecord('user', 1),
      authors: this.store.findAll('user'),
      blog: this.store.findRecord('blog', params.blog_id)
    })
  },
  setupController(controller, model) {
    this._super(...arguments);
    controller.set('comment', {
      author: model.author
    });
  }
});
