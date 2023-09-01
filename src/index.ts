import { RestApi, MongoService } from "./service";
import dotenv from "dotenv";
import { UserRoutes, ProductRoutes, AuthRoutes } from "./modules";

dotenv.config();

//DATABASE
MongoService();

//EXPRESS
const api = new RestApi();

//MIDDLEWARES

//ROUTES
api.addRoute("/user", UserRoutes);
api.addRoute("/product", ProductRoutes);
api.addRoute("/auth", AuthRoutes);

//START
api.start(5000);
