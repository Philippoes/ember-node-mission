import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    addComment() {
      let comment = this.store.createRecord('comment', this.get('comment'));
      comment.set('blog', this.get('model.blog'));
      comment.save().then(() => {
      }, () => {
        comment.deleteRecord();
      })
    }
  }
})
