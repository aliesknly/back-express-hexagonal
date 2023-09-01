export interface IForAuthControllerRepository {
  login<T, U>(req: T, res: U): Promise<void>;
  logout<T, U>(req: T, res: U): Promise<void>;
  refreshToken<T, U>(req: T, res: U): Promise<void>;
  register<T, U>(req: T, res: U): Promise<void>;
}
