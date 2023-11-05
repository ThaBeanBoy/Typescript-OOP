/* 
1. Use the user class
2. Create an Admin class that extends User
3. Create a Guest class that implements User
4. Have both classes below pass firstname, lastname & email into their constructor
*/

import User, { UserClassConstructorProps } from './challenge_1';

export class Admin extends User {
  constructor({ ...base }: UserClassConstructorProps) {
    super(base);
  }
}

// export class Guest implements User {
//     private _firstName: string;
//     private _lastName: string;
//     private _email: string;

//     constructor({ firstName, lastName, email }: UserClassConstructorProps) {
//     this._firstName = firstName;
//     this._lastName = lastName;
//     this._email = email;
//   }
//   get fullName(): string {
//     return `user ${this._firstName} ${this._lastName}`;
//   }

//   get firstName(): string {
//     return this._firstName;
//   }

//   set firstName(value: string) {
//     this._firstName = value;
//   }

//   get lastName(): string {
//     return this._lastName;
//   }

//   set lastName(value: string) {
//     this._lastName = value;
//   }

//   get email(): string {
//     return this._email;
//   }

//   set email(value: string) {
//     this._email = value;
//   }

//   // Utility method
//   checkEmail(emailToBeChecked: string): boolean {
//     return this._email === emailToBeChecked;
//   }
// }
