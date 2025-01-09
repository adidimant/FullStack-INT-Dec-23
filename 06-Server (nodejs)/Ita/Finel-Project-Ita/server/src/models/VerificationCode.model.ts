import { Schema, model } from "mongoose";

const VerificationCodeSchema = new Schema({
    email: { type: String, required: true, unique: true },
    code: { type: String, required: true },
    createdate: { type: Date, default: Date.now, expires: '10m' }, // פג לאחר 10 דקות
  });
  
  export const VerificationCodeModel = model('VerificationCodeModel', VerificationCodeSchema);