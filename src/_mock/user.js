import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

// ----------------------------------------------------------------------

const users = [...Array(24)].map((_, index) => ({
  id: faker.datatype.uuid(),
  srno:index,
  avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
  name: faker.name.fullName(),
  company: faker.company.name(),
  isVerified: faker.datatype.boolean(),
  totalenquiry:sample([24,32,40,56]),
  status: sample(['active', 'banned']),
  role: sample([
    'Leader',
    'Hr Manager',
    'UI Designer',
    'UX Designer',
    'UI/UX Designer',
    'Project Manager',
    'Backend Developer',
    'Full Stack Designer',
    'Front End Developer',
    'Full Stack Developer',
  ]),
}));

export default users;
