import { UpdateUserDTO, User, CreateUserDTO } from "..";

export interface IUserRepository {
  //Get all users from datas
  getAllUser(): Promise<User[] | null>;

  //Get user by id
  getUserById(id: string): Promise<User | null>;

  //Create user
  createUser(user: CreateUserDTO): Promise<User | null>;

  //Update user
  updateUser(id: string, user: UpdateUserDTO): Promise<User | null>;

  //Delete user
  deleteUser(id: string): Promise<User | null>;

  //Get user by email
  getUserByEmail(email: string): Promise<User | null>;
}
