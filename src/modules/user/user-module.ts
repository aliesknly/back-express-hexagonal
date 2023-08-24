import { Request, Response, Router } from "express";
import { UserPersistenceDBMongo } from "./infrastructure/adapters/output/mongo/user-persistence-db-mongo";
import { UserApiController } from "./infrastructure/adapters/input/user-api-controller";
import { UserMangagementUseCase } from "./application/use-case/user-management-usecase";

async function call(req: Request, res: Response): Promise<void> {
  res.send(await Promise.resolve("call"));
  console.log("call");
}

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
    this.router.get(
      "/",
      this.userApiController.getAllUser.bind(this.userApiController)
    );
    //get by id
    this.router.get(
      "/:id",
      this.userApiController.getUserById.bind(this.userApiController)
    );
    //create
    this.router.post(
      "/",
      this.userApiController.createUser.bind(this.userApiController)
    );
    //delete
    this.router.delete(
      "/:id",
      this.userApiController.deleteUser.bind(this.userApiController)
    );
    //update
    this.router.put(
      "/:id",
      this.userApiController.updateUser.bind(this.userApiController)
    );
    //find id
    this.router.get(
      "/:email",
      this.userApiController.getUserByEmail.bind(this.userApiController)
    );

    return this.router;
  }
}

export default new UserModule().routerMount();
