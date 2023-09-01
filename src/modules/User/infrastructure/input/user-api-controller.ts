import { Request, Response } from "express";
import {
  CreateUserDTO,
  IUserRepository,
  UpdateUserDTO,
  User,
} from "../../domain";
import {
  UserMapAdapter,
  mapModelToUser,
} from "../output/mongo/user-map-adapters";

export class UserApiController {
  constructor(private readonly userManagementUseCase: IUserRepository) {
    this.createUser = this.createUser.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
    this.getAllUser = this.getAllUser.bind(this);
    this.getUserByEmail = this.getUserByEmail.bind(this);
    this.getUserById = this.getUserById.bind(this);
    this.updateUser = this.updateUser.bind(this);
  }
  async createUser(req: Request, res: Response): Promise<void> {
    const { name, lastName, email, password } = req.body;

    const user: CreateUserDTO = { name, lastName, email, password };

    res.send(await this.userManagementUseCase.createUser(user));
  }
  async deleteUser(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    res.send(await this.userManagementUseCase.deleteUser(id));
  }
  async getAllUser(req: Request, res: Response): Promise<void> {
    const userList = await this.userManagementUseCase.getAllUser();
    res.send(userList?.map(UserMapAdapter.mapModelToUser));
  }
  async getUserByEmail(req: Request, res: Response): Promise<void> {
    const { email } = req.params;
    res.send(await this.userManagementUseCase.getUserByEmail(email));
  }
  async getUserById(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    res.send(await this.userManagementUseCase.getUserById(id));
  }
  async updateUser(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const { name, lastName, email, password } = req.body;
    const user: UpdateUserDTO = { name, lastName, email, password };
    res.send(await this.userManagementUseCase.updateUser(id, user));
  }
}
