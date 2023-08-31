import express, { Express } from "express";

export class RestApi {
  public app: Express;

  constructor() {
    this.app = express();
    this.app.use(express.json());

  }

  addMidelware(middleware: any) {
    this.app.use(middleware);
  }

  addRoute(route: string, module: any) {
    this.app.use(route, module);
  }

  async start(port: number) {
    this.app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  }
}
