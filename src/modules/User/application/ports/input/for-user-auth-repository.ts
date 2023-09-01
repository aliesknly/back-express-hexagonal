import { CreateUserDTO } from "@/modules/User/domain";

export interface IForUserAuthRepository {
  login(email: string, password: string): Promise<string>;
  logout(token: string): Promise<void>;
  register(user: CreateUserDTO): Promise<string>;
  refreshToken(token: string): Promise<string>;
}
