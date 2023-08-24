import { ProductPersistenceMongoDB } from "../../adapters/output/product-persistence-mongodb";
import { ProductEntity } from "../../domain/product-entity";
import { IProductRepository } from "../../domain/product-interface-respository";

export class ProductUseCase implements IProductRepository {
  constructor(private readonly productSchema: ProductPersistenceMongoDB) {}
  async getAllProduct(): Promise<ProductEntity[] | null> {
    return await this.productSchema.getAllProduct();
  }
}
