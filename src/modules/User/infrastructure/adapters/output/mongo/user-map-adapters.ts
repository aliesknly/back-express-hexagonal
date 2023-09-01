import { User } from "@/modules/User/domain";
import { IUserModel } from "./schema/user-model-interface";

export const mapUserToModel = (user: User): IUserModel => ({
  name: user.name,
  lastName: user.lastName,
  email: user.email,
  code: user.code,
  password: user.password,
});

export const mapModelToUser = (model: IUserModel): User => ({
  name: model.name,
  lastName: model.lastName,
  email: model.email,
  code: model.code,
  password: model.password,
});

export class UserMapAdapter {
  static mapUserToModel(user: User): IUserModel {
    return mapUserToModel(user);
  }
  static mapModelToUser(model: IUserModel): User {
    return mapModelToUser(model);
  }
}