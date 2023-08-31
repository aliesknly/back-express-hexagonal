import { RestApi, MongoService } from "./service";
import dotenv from "dotenv";
import { UserRoutes, ProductRoutes } from "./modules";

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: "a long, randomly-generated string stored in env",
  baseURL: "http://localhost:5000",
  clientID: "IykBOBIzri80g6Hernagfnubt9bjwPhp",
  issuerBaseURL: "https://dev-dajtvfkpsuov3z6s.us.auth0.com",
};

dotenv.config();

//DATABASE
MongoService();

//EXPRESS
const api = new RestApi();

//MIDDLEWARES

//ROUTES
api.addRoute("/user", UserRoutes);
api.addRoute("/product", ProductRoutes);

//START
api.start(5000);
