import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  PotholeId: Number,
  price: Number,
  visitors: Number,
  sales: Number,
  month: String,
}, {timestamps : true});

const Product =
  mongoose.models.Products || mongoose.model("Products", ProductSchema);

export default Product;
