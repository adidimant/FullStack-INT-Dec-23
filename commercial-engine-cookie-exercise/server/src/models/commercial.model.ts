import { Schema, model } from "mongoose";

const commercialSchema = new Schema({
  id: { type: String },
  createdDate: { type: Date },
  title: { type: String },
  description: { type: String },
  imgUrl: { type: String },
});

export const CommercialModel = model('commercialModel', commercialSchema);
