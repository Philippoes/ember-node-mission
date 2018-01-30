import DS from 'ember-data';
import { computed }  from '@ember/object';

export default DS.Model.extend({
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  profilePicture: DS.attr('string'),
  title: DS.attr('string'),
  age: DS.attr('number'),
  description: DS.attr('string'),
  blogs: DS.hasMany('blog'),
  blogsCount: computed('blogs.[]', function() {
   let count = this.hasMany('blogs').ids().length;
   return count ? count : 0;
 })
});
