import mongoose from "mongoose";
const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    id: { type: String, required: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    company: { type: String, required: true },
    colors: { type: Array, required: true },
    stock: { type: String, required: true },
    image: {
      type: Array,
      required: true,
    },
    description: { type: String, required: true },
    category: { type: String, required: true },
    featured: { type: Boolean, default: true },
    shipping: { type: Boolean, default: true },
    reviews: { type: String, required: true },
    stars: { type: String, required: true },
  },
  { timestamps: true, toJSON: { getters: true }, id: false }
);

export default mongoose.model("Product", productSchema, "products");
