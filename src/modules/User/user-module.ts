import { Request, Response, Router } from "express";
import { UserMangagementUseCase } from "./application/use-case/user-management-usecase";
import { UserPersistenceDBMongo } from "./infrastructure/output/mongo";
import { UserApiController } from "./infrastructure/input/user-api-controller";

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
    this.router.get("/", this.userApiController.getAllUser);
    //get by id
    this.router.get("/:id", this.userApiController.getUserById);
    //create
    this.router.post("/", this.userApiController.createUser);
    //delete
    this.router.delete("/:id", this.userApiController.deleteUser);
    //update
    this.router.put("/:id", this.userApiController.updateUser);
    //find id
    this.router.get("/:email", this.userApiController.getUserByEmail);

    return this.router;
  }
}

export default new UserModule().routerMount();
