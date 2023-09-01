import { IForPersistenceDBRepository } from "../../../../application/ports/output/for-persistence-db-repository";
import { CreateUserDTO, User } from "../../../../domain";

import { UserModel } from "./schema/user-mongo-schema";
import { mapModelToUser, mapUserToModel } from "./user-map-adapters";

export class UserPersistenceDBMongo implements IForPersistenceDBRepository {
  private readonly userModel;

  constructor() {
    this.userModel = UserModel;
  }

  async getAllUser(): Promise<User[]> {
    const listOfUsers = (await this.userModel.find()).map(mapUserToModel);
    return listOfUsers;
  }
  getUserById(id: string): Promise<User> {
    throw new Error("Method not implemented.");
  }
  async createUser(user: CreateUserDTO): Promise<User> {
    const newUser = new this.userModel(user);
    return await newUser.save();
  }
  updateUser(id: string, user: User): Promise<User> {
    throw new Error("Method not implemented.");
  }
  deleteUser(id: string): Promise<User> {
    throw new Error("Method not implemented.");
  }
  async getUserByEmail(email: string): Promise<User | null> {
    return await this.userModel.findOne({ email });
  }
}
