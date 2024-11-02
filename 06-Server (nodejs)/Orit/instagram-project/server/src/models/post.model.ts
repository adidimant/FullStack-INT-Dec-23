import { Schema, model } from "mongoose";

const postSchema = new Schema({
  id: { type: String },
  userId: { type: String },
  created_date: { type: Date },
  title: { type: String },
  description: { type: String },
  imgUrl: { type: String },
  location: { type: String },
});

export const PostModel = model('postModel', postSchema);

const post1 = new PostModel({
  id: 'asdas',
  userId: 'asda',
  created_date: new Date(),
});

// link to mongoose documentation - https://mongoosejs.com/docs/

/*
// create post:
await post1.save();
// get all user specific posts:
const userPosts = await PostModel.find({ userId: 'asdas' })

*/