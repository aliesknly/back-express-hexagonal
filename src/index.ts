import { RestApi } from "./service/express/RestApi";

const resApi = new RestApi();

resApi.start(5000);