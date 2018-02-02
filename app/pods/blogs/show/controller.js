import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    addComment(author_id) {
      let comment = this.store.createRecord('comment', this.get('comment'));
      comment.set('author', this.store.findRecord('user', 1));
      comment.set('blog', this.get('model'));
      comment.save().then(() => {
        console.log("comment created")
        self.send('refreshRoute');
      }, () => {
        comment.deleteRecord();
      })
    }
  }
})
