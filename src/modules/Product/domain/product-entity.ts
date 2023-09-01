import { IProduct } from "./product-interface";

export class ProductEntity  implements IProduct{
    name: string;
    price: number;
    total: number;
}