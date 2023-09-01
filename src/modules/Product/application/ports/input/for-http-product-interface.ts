export interface IForHttpProductInterface {
  getAllProduct<T, U>(req: T, res: U): Promise<void>;
}
