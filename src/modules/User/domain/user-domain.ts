import { IUser } from ".";

export class User implements IUser {
  constructor(
    name: string,
    lastName: string,
    email: string,
    password: string,
    code: string
  ) {
    this.name = name;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.code = code;
  }
  name: string;
  lastName: string;
  email: string;
  password: string;
  code: string;
}
