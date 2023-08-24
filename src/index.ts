import { RestApi, MongoService } from "@/service";
import dotenv from "dotenv";

dotenv.config();
//DATABASE
MongoService();

//EXPRESS
const resApi = new RestApi();

resApi.start(5000)
