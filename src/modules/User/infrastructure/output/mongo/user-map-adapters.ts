import { User } from "@/modules/User/domain";
import { IUserModel } from "./schema/user-model-interface";

type UserShow = Omit<User, "password">;

export const mapUserToModel = (user: User): IUserModel => ({
  name: user.name,
  lastName: user.lastName,
  email: user.email,
  code: user.code,
  password: user.password,
});

export const mapModelToUser = (model: IUserModel): UserShow => ({
  name: model.name,
  lastName: model.lastName,
  email: model.email,
  code: model.code,
});

export class UserMapAdapter {
  static mapUserToModel(user: User): IUserModel {
    return mapUserToModel(user);
  }
  static mapModelToUser(model: IUserModel): UserShow {
    return mapModelToUser(model);
  }
}
