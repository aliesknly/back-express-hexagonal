import { IUser } from ".";

export class User implements IUser {
  constructor(name: string, lastName: string, email: string, password: string) {
    this.name = name;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.createdAt = new Date().toDateString();
    this.updatedAt = new Date().toDateString();
  }
  name: string;
  lastName: string;
  email: string;
  password: string;
  createdAt: string;
  updatedAt: string;
}
