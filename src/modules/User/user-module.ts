/* eslint-disable hexagonal-architecture/enforce */
import { Router } from "express";
import { UserMangagementUseCase } from "./application/use-case/user-management-usecase";
import { UserPersistenceDBMongo } from "./infrastructure/output/mongo";
import { UserApiController } from "./infrastructure/input/user-api-controller";
import { authMiddleware } from "@/common/middleware";

class UserModule {
  private router: Router;
  private userDB: UserPersistenceDBMongo;
  private userUseCase: UserMangagementUseCase;
  private userApiController: UserApiController;

  constructor() {
    this.router = Router();
    this.userDB = new UserPersistenceDBMongo();
    this.userUseCase = new UserMangagementUseCase(this.userDB);
    this.userApiController = new UserApiController(this.userUseCase);
  }

  routerMount() {
    //get all
    this.router.get("/", authMiddleware, this.userApiController.getAllUser);
    //get by id
    this.router.get("/:id", authMiddleware, this.userApiController.getUserById);
    //create
    this.router.post("/", authMiddleware, this.userApiController.createUser);
    //delete
    this.router.delete(
      "/:id",
      authMiddleware,
      this.userApiController.deleteUser
    );
    //update
    this.router.put("/:id", authMiddleware, this.userApiController.updateUser);
    //find id
    this.router.get(
      "/:email",
      authMiddleware,
      this.userApiController.getUserByEmail
    );

    return this.router;
  }
}

export default new UserModule().routerMount();
