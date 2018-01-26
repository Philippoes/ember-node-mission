import Mirage from 'ember-cli-mirage';
import faker from 'faker';

export default Mirage.Factory.extend({
  title() {
    return faker.company.catchPhrase();
  },
  content() {
    return faker.lorem.paragraphs(4);
  }
});
