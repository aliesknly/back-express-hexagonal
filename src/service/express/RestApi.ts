import express, { Express } from "express";
import { UserRoutes } from "../../modules/user";
import { ProductModule } from "../../modules/product/product-module";

export class RestApi {
  private app: Express;

  constructor() {
    this.app = express();
    this.app.use(express.json());

    //routes
    this.app.get("/", (req, res) => {
      res.send("hello world");
    });
    this.app.use("/user", UserRoutes);
    this.app.use("/product", new ProductModule().routerMount());
  }

  start(port: number) {
    this.app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  }
}
