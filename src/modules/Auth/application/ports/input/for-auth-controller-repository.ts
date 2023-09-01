export interface IForAuthControllerRepository {
  login(req: any, res: any): Promise<void>;
  logout(req: any, res: any): Promise<void>;
  refreshToken(req: any, res: any): Promise<void>;
  register(req: any, res: any): Promise<void>;
}
