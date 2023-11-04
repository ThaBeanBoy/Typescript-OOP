import { expect, test } from 'vitest';
import UserClass, { UserClassConstructorProps } from '../src/challenge_1';

const testValues: UserClassConstructorProps = {
  firstName: 'Naruto',
  lastName: 'Uzumaki',
  email: 'n_uzumaki@konoha.vill',
};

test('UserClass constructor working', () => {
  const user = new UserClass(testValues);

  expect(user.firstName).toBe(testValues.firstName);
});
