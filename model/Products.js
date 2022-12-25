const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: String,
  price: Number,
  images: [String],
  categories: [String],
  featured: Boolean,
});

module.exports = mongoose.model("Product", ProductSchema);
