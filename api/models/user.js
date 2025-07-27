import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    contactType: {
      type: String,
      enum: ["email", "phone"],
      required: true,
    },
    contactValue: {
      type: String,
      required: true,
      unique: true,
    },
    password: { type: String, required: true },
    userType: {
      type: String,
      enum: ["vendor", "supplier"],
      required: true,
    },
    businessName: { type: String },
    category: { type: String },
    area: { type: String },
    city: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema, "users");
