import { ProductEntity } from "./product-entity";

export interface IProductRepository {
  getAllProduct(): Promise<ProductEntity[] | null>;
}
