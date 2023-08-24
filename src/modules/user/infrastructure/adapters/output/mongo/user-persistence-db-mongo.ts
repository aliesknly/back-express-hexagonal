import { IForPersistenceDBRepository } from "../../../../application/ports/output/for-persistence-db-repository";
import { CreateUserDTO, User } from "../../../../domain";

const user = new User("name", "lastName", "email", "password");

export class UserPersistenceDBMongo implements IForPersistenceDBRepository {
  getAllUser(): Promise<User[]> {
    return new Promise((resolve) => {
      resolve([user]);
    });
  }
  getUserById(id: string): Promise<User> {
    throw new Error("Method not implemented.");
  }
  createUser(user: CreateUserDTO): Promise<User> {
    throw new Error("Method not implemented.");
  }
  updateUser(id: string, user: User): Promise<User> {
    throw new Error("Method not implemented.");
  }
  deleteUser(id: string): Promise<User> {
    throw new Error("Method not implemented.");
  }
  getUserByEmail(email: string): Promise<User> {
    throw new Error("Method not implemented.");
  }
}
