const mongoose = require('mongoose');

const GuitarSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  categories: [{ type: String }], // Array of strings for categories
  image: { type: String }, // URL or path to the image
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
});

const Guitar = mongoose.model('Guitar', GuitarSchema);

module.exports = Guitar;
