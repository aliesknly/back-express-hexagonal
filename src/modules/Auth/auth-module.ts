import { Router } from "express";
import { AuthApiController } from "./infrastructure";
import { UserAuthAdapter } from "../User/infrastructure/adapters/input/user-auth-adapter";
import { UserPersistenceDBMongo } from "../User/infrastructure/adapters/output/mongo";

class AuthModule {
  private router: Router;
  private authController: AuthApiController;
  private userAuthAdapter: UserAuthAdapter;
  private userModel: UserPersistenceDBMongo;

  constructor() {
    this.router = Router();
    this.userModel = new UserPersistenceDBMongo();
    this.userAuthAdapter = new UserAuthAdapter(this.userModel);
    this.authController = new AuthApiController(this.userAuthAdapter);
  }

  routerMount() {
    this.router.post("/login", this.authController.login);
    this.router.post("/register", this.authController.register);
    this.router.get("/logout", this.authController.logout);
    this.router.post("/refresh-token", this.authController.refreshToken);
    return this.router;
  }
}

export default new AuthModule().routerMount();