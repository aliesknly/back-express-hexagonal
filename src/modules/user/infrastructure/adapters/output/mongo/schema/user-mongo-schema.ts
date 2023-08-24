import { User } from "@/modules/user/domain";
import { Schema, model } from "mongoose";

const userSchema = new Schema<User>({
  name: String,
  lastName: String,
  email: String,
  password: String,
});

const UserModel = model("User", userSchema);

export { UserModel, userSchema };
