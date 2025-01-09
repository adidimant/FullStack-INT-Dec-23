import { Schema, model } from "mongoose";

const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  userId: { type: String },
  fullname: { type: String },
  password: { type: String }, 
  companyname: { type: String }, 
  companynumber: { type: Number },
  address: { type: String },
  city: { type: String },
  createdate: { type: Date, default: Date.now }, 
  profilePicUrl: { type: String }, 
});

export const UserModel = model('userModel', userSchema);

