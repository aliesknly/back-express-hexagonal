import { compare, compareSync, genSalt, hash } from "bcrypt";
import { NotFoundException, UnauthorizedException } from "@/common/exceptions";
import {
  IForPersistenceDBRepository,
  IForUserAuthRepository,
} from "@/modules/User/application/ports";
import { sign } from "jsonwebtoken";
import { CreateUserDTO } from "@/modules/User/domain";
import { enviroments } from "@/common/utilities";

export class UserAuthAdapter implements IForUserAuthRepository {
  constructor(private readonly userModel: IForPersistenceDBRepository) {}

  async login(email: string, password: string): Promise<string> {
    const user = await this.userModel.getUserByEmail(email);
    if (!user) {
      throw new NotFoundException(`User whit ${email} not found`);
    }
    console.log(user);
    const isValidPassword = await compare(password, user.password);

    if (!isValidPassword) {
      throw new UnauthorizedException(`Invalid email or password`);
    }
    const token = sign({ id: user.code }, `${enviroments.JWT_SECRET}`);

    return token;
  }
  logout(token: string): Promise<any> {
    throw new Error("Method not implemented.");
  }
  async register(user: CreateUserDTO): Promise<string> {
    const userExists = await this.userModel.getUserByEmail(user.email);
    if (userExists) {
      throw new Error("User already exists");
    }
    let newUser = user;

    const salt = await genSalt(10);
    const passwordHashed = await hash(newUser.password, salt);
    newUser = { ...newUser, password: passwordHashed };
    const createdUser = await this.userModel.createUser(newUser);

    if (!createdUser) {
      throw new Error("User not created");
    }
    return `${createdUser.code}`;
  }
  refreshToken(token: string): Promise<any> {
    throw new Error("Method not implemented.");
  }
}
