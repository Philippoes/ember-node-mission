import Mirage from 'ember-cli-mirage';
import faker from 'faker';

export default Mirage.Factory.extend({
  firstName() {
    return faker.name.firstName();
  },
  lastName() {
    return faker.name.lastName();
  },
  profilePicture() {
    return faker.image.avatar()
  },
  title() {
    return faker.name.jobTitle()
  },
  age() {
    return faker.random.number({
      min: 18,
      max: 70
    })
  },
  description() {
    return faker.lorem.paragraph()
  }
});
