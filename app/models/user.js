import DS from 'ember-data';

export default DS.Model.extend({
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  profilePicture: DS.attr('string'),
  age: DS.attr('number'),
  description: DS.attr('string')
});
