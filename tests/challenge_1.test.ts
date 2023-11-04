import { expect, test } from 'vitest';
import UserClass, { UserClassConstructorProps } from '../src/challenge_1';

const testValues: UserClassConstructorProps = {
  firstName: 'Naruto',
  lastName: 'Uzumaki',
  email: 'n_uzumaki@konoha.vill',
};

const testUser = new UserClass(testValues);

test('UserClass constructor & getters working', () => {
  expect(testUser.firstName).toBe(testValues.firstName);
  expect(testUser.lastName).toBe(testValues.lastName);
  expect(testUser.email).toBe(testValues.email);
});

test('Getting Full name from user', () => {
  expect(testUser.fullName).toBe(`${testUser.firstName} ${testUser.lastName}`);
});

test('Email checking', () => {
  // checking invalid email
  expect(testUser.checkEmail('wrong_email@wrong.com')).toBe(false);

  // checking valid email
  expect(testUser.checkEmail(testValues.email)).toBe(true);
});

test('Setters working', () => {
  const newTestValues: UserClassConstructorProps = {
    firstName: 'sasuke',
    lastName: 'uchiha',
    email: 'sasuke@akatsuki.org',
  };

  // testing first name value change
  testUser.firstName = newTestValues.firstName;
  expect(testUser.firstName).toBe(newTestValues.firstName);

  // testing last name value change
  testUser.lastName = newTestValues.lastName;
  expect(testUser.lastName).toBe(newTestValues.lastName);

  // testing email value change
  testUser.email = newTestValues.email;
  expect(testUser.email).toBe(newTestValues.email);
});
