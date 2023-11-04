export type UserClassConstructorProps = {
  firstName: string;
  lastName: string;
  email: string;
};

export default class UserClass {
  // Properties
  private _firstName: string;
  private _lastName: string;
  private _email: string;

  // Constructor
  constructor({ firstName, lastName, email }: UserClassConstructorProps) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._email = email;
  }

  // Getters & Setters
  get fullName(): string {
    return `${this._firstName} ${this._lastName}`;
  }

  get firstName(): string {
    return this._firstName;
  }

  set firstName(value: string) {
    this._firstName = value;
  }

  get lastName(): string {
    return this._lastName;
  }

  set lastName(value: string) {
    this._lastName = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  // Utility method
  checkEmail(emailToBeChecked: string): boolean {
    return this._email === emailToBeChecked;
  }
}
