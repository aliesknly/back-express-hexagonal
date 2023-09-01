import express, { Express, RequestHandler ,} from "express";

declare global {
  namespace Express {
    interface Request {
      userId?: string;
    }
  }
}

export class RestApi {
  public app: Express;

  constructor() {
    this.app = express();
    this.app.use(express.json());

  }

  addRoute(route: string, module: RequestHandler) {
    this.app.use(route, module);
  }

  async start(port: number) {
    this.app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  }
}
