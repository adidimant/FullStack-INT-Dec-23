import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
  authorName: {
    type: String,
    required: true
  },
  isAnonymous: {
    type: Boolean,
    default: false
  },
  state: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true,
    maxlength: 1000
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5
  },
  photoUrl: {
    type: String
  },
  likes: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('Review', reviewSchema);