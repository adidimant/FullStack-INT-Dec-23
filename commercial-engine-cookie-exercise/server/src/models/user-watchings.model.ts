import { Schema, model } from "mongoose";

const userWatchingSchema = new Schema({
  commercialId: { type: String },
  userId: { type: String },
  watchedDate: { type: Date },
});

export const UserWatchingModel = model('userWatchingModel', userWatchingSchema);
