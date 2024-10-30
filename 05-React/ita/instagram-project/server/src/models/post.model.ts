import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    postId: { type: String, required: true, unique: true },
    textContent: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
  });
  
  export const Post = mongoose.model('Post', postSchema);