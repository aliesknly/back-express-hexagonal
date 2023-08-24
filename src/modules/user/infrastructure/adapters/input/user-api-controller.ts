import { Request, Response } from "express";
import { CreateUserDTO, IUserRepository, UpdateUserDTO, User } from "../../../domain";

export class UserApiController {
  constructor(private readonly userManagementUseCase: IUserRepository) {}
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
    res.send(await this.userManagementUseCase.getAllUser());
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
