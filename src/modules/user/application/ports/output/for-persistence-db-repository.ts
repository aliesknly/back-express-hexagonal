import { CreateUserDTO, UpdateUserDTO, User } from "../../../domain";

export interface IForPersistenceDBRepository {
  getAllUser(): Promise<User[] | null>;
  getUserById(id: string): Promise<User | null>;
  createUser(user: CreateUserDTO): Promise<User | null>;
  updateUser(id: string, user: UpdateUserDTO): Promise<User | null>;
  deleteUser(id: string): Promise<User | null>;
  getUserByEmail(email: string): Promise<User | null>;
}
