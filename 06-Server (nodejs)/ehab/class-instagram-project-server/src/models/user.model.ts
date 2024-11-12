import { Schema, model } from "mongoose";

const userSchema = new Schema({
  userId: { type: String },
  username: { type: String },
  email: { type: String },
  password: { type: String },
  firstName: { type: String },
  lastName: { type: String },
  birthdate: { type: Date },
  createdDate: { type: Date },
  profilePicUrl: { type: String },
  country: { type: String },
  city: { type: String },
});

export const UserModel = model('userModel', userSchema);
