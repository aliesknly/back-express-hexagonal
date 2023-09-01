import { User } from "@/modules/User/domain";

export interface IForUserApiControllerRepository {
  getAllUser<T,U>(req: T, res: U): Promise<User[]>;
  getUserById<T,U>(req: T, res: U): Promise<User>;
  createUser<T,U>(req: T, res: U): Promise<User>;
  updateUser<T,U>(req: T, res: U): Promise<User>;
  deleteUser<T,U>(req: T, res: U): Promise<User>;
  getUserByEmail<T,U>(req: T, res: U): Promise<User>;
}
