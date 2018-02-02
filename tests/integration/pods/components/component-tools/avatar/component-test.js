import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('component-tools/avatar', 'Integration | Component | component tools/avatar', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{component-tools/avatar}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#component-tools/avatar}}
      template block text
    {{/component-tools/avatar}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
