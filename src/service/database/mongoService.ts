import mongoose from "mongoose";

export const MongoService = () => {
 /*  const mongo = mongoose.connect(
    `mongodb://${process.env["DATA_BASE_USER"]}:${process.env["DATA_BASE_PASSWORD"]}@${process.env["DATA_BASE_URL"]}/${process.env["DATA_BASE_NAME"]}`
  ); */
  const mongo = mongoose.connect(
    `mongodb://${process.env["DATA_BASE_URL"]}/${process.env["DATA_BASE_NAME"]}`
  );
  mongo.then(() => {
    console.log("Database MONGO connected...");
  }).catch((err) => {
    console.group("Database MONGO ERROR");
    console.log(err);
    console.groupEnd();
  })
};
