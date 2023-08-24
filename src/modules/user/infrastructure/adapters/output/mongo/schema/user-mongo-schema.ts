import { Schema, model } from "mongoose";
import { User } from "../../../../../domain";

const userSchema = new Schema<User>({
  name: String,
  lastName: String,
  email: String,
  password: String,
});

const UserModel = model("User", userSchema);

export { UserModel, userSchema };
