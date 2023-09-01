import { CreateUserDTO, IUserRepository, User } from "../../domain";
import { IForPersistenceDBRepository } from "../ports/output/for-persistence-db-repository";

export class UserMangagementUseCase implements IUserRepository {

    
  constructor(private userSchema: IForPersistenceDBRepository) {}
  async createUser(user: CreateUserDTO): Promise<User | null> {
      return await this.userSchema.createUser(user)
  }

  async getAllUser(): Promise<User[] | null> {
      return await this.userSchema.getAllUser()
  }

  async getUserById(id: string): Promise<User | null> {
      return await this.userSchema.getUserById(id)
  }

  async getUserByEmail(email: string): Promise<User | null> {
      return await this.userSchema.getUserByEmail(email)
  }

  async updateUser(id: string, user: User): Promise<User | null> {
      return await this.userSchema.updateUser(id, user)
  }

  async deleteUser(id: string): Promise<User | null> {
      return await this.userSchema.deleteUser(id)
  }
}
