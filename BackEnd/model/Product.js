const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  category: String,
  price: Number,
  images: [String],
  sizes: [String],
  stock: {
    type: Map,
    of: Number
  },
  rating: Number,
  reviews: Array
});

module.exports = mongoose.model('Product', productSchema);
