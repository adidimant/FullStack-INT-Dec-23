import { Schema, model } from "mongoose";

const postSchema = new Schema({
  id: { type: String },
  userId: { type: String },
  createdDate: { type: Date },
  description: { type: String },
  imgUrl: { type: String },
  location: { type: String },
});

export const PostModel = model('postModel', postSchema);

// link to mongoose documentation - https://mongoosejs.com/docs/

/*
// create post:
await post1.save();
// get all user specific posts:
const userPosts = await PostModel.find({ userId: 'asdas' })

*/