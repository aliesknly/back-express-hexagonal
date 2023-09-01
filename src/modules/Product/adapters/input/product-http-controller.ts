import { IForHttpProductInterface } from "../../application/ports/input/for-http-product-interface";
import { ProductUseCase } from "../../application/usecase/product-usecase";

export class ProductHttpController implements IForHttpProductInterface {
  constructor(private readonly productUseCase: ProductUseCase) {}
  async getAllProduct(req: any, res: any): Promise<void> {
    res.send(await this.productUseCase.getAllProduct());
  }
}
