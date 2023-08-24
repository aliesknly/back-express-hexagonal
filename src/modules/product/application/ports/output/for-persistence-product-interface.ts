import { ProductEntity } from "../../../domain/product-entity";

export interface IForPersistenceProductRepository {
  getAllProduct(): Promise<ProductEntity[] | null>;
}
