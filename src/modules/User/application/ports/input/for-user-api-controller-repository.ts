import { User } from "@/modules/user/domain";

export interface IForUserApiControllerRepository {
  getAllUser(req: any, res: any): Promise<User[]>;
  getUserById(req: any, res: any): Promise<User>;
  createUser(req: any, res: any): Promise<User>;
  updateUser(req: any, res: any): Promise<User>;
  deleteUser(req: any, res: any): Promise<User>;
  getUserByEmail(req: any, res: any): Promise<User>;
}
