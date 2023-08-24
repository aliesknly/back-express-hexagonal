import { IForPersistenceProductRepository } from "../../application/ports/output/for-persistence-product-interface";
import { ProductEntity } from "../../domain/product-entity";
import { IProduct } from "../../domain/product-interface";

const product: IProduct = { name: "product", price: 100, total: 100 };

export class ProductPersistenceMongoDB
  implements IForPersistenceProductRepository
{
  // constructor(private productSchema: IProductRepository) {}
  async getAllProduct(): Promise<ProductEntity[] | null> {
    return Promise.resolve([product]);
  }
}
