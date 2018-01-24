import Mirage from 'ember-cli-mirage';
import faker from 'faker';

export default Mirage.Factory.extend({
  firstName: faker.name.firstName();
  lastName: faker.name.lastName();,
  profilePicture: faker.image.avatar()
  age: faker.random.number({min: 18, max: 70})
  description: faker.lorem.paragraph()
});
