import { IForUserAuthRepository } from "@/modules/User/application/ports";
import { IForAuthControllerRepository } from "../../application/ports/input/for-auth-controller-repository";
import { Request, Response } from "express";

export class AuthApiController implements IForAuthControllerRepository {
  constructor(private readonly userAuthAdapter: IForUserAuthRepository) {
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.refreshToken = this.refreshToken.bind(this);
    this.register = this.register.bind(this);
  }
  async login(req: Request, res: Response): Promise<void> {
    const { email, password } = req.body;

    res.send(await this.userAuthAdapter.login(email, password));
  }
  async logout(req: Request, res: Response): Promise<void> {
    throw new Error("Method not implemented.");
  }
  async refreshToken(req: Request, res: Response): Promise<void> {
    throw new Error("Method not implemented.");
  }
  async register(req: Request, res: Response): Promise<void> {
    const { name, lastName, email, password } = req.body;
    res.send(
      await this.userAuthAdapter.register({ name, lastName, email, password })
    );
  }
}
