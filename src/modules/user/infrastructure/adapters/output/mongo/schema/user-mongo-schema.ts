import mongoose, { Document, Schema } from "mongoose";
import { IUserModel } from "./user-model-interface";
import { randomStringId } from "@/utilities";
import { v4 as uuid } from "uuid";

interface UserDocument extends IUserModel, Document {
  name: string;
  lastName: string;
  email: string;
  password: string;
  code: string;
}

const userSchema = new Schema<UserDocument>({
  name: String,
  lastName: String,
  email: String,
  password: { type: String, select: false },
  code: {
    type: String,
    default: () => uuid(),
  },
});

userSchema.set("toJSON", {
  transform: (_document, returnedObject) => {
    delete returnedObject["_id"];
    delete returnedObject["__v"];
    delete returnedObject["password"];
  },
});

const UserModel = mongoose.model<UserDocument>("User", userSchema, "users");

export { UserModel, userSchema };
