import DS from 'ember-data';

export default DS.Model.extend({
  text: DS.attr('string'),
  blog: DS.belongsTo('blog'),
  author: DS.belongsTo('user')
});
