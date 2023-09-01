/* eslint-disable hexagonal-architecture/enforce */
import { Router } from "express";
import { ProductPersistenceMongoDB } from "./adapters/output/product-persistence-mongodb";
import { ProductUseCase } from "./application/usecase/product-usecase";
import { ProductHttpController } from "./adapters/input/product-http-controller";

class ProductModule {
  private router: Router;
  private productDB: ProductPersistenceMongoDB;
  private productUseCase: ProductUseCase;
  private productController: ProductHttpController;

  constructor() {
    this.router = Router();

    this.productDB = new ProductPersistenceMongoDB();

    this.productUseCase = new ProductUseCase(this.productDB);

    this.productController = new ProductHttpController(this.productUseCase);
  }

  routerMount() {
    this.router.get("/", async (req, res) => {
      await this.productController.getAllProduct(req, res);
    });
    return this.router;
  }
}


export default new ProductModule().routerMount();