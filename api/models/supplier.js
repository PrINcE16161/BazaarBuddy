import mongoose from "mongoose";
const Schema = mongoose.Schema;

const supplierSchema = new Schema(
  {
    id: { type: String, required: true },
    type: { type: String, enum: ["supplier", "vendor"], default: "supplier" },
    name: { type: String },
    owner: { type: String, required: true },
    category: { type: String },
    location: { type: String },
    fullAddress: { type: String },
    phone: { type: String },
    email: { type: String },
    whatsapp: { type: String },
    verified: { type: Boolean, default: false },

    rating: { type: Number, default: 0 },
    reviews: { type: Number, default: 0 },
    established: { type: String },
    employees: { type: String },
    description: { type: String },
    avatar: { type: String },
    coverImage: { type: String },
    specialties: [{ type: String }],

    businessHours: {
      monday: { type: String },
      tuesday: { type: String },
      wednesday: { type: String },
      thursday: { type: String },
      friday: { type: String },
      saturday: { type: String },
      sunday: { type: String },
    },

    deliveryHours: [{ type: String }],
    deliveryAreas: [{ type: String }],
    paymentMethods: [{ type: String }],
    minimumOrder: { type: String },
    deliveryTime: { type: String },

    totalProducts: { type: Number, default: 0 },
    activeOrders: { type: Number, default: 0 },
    completedOrders: { type: Number, default: 0 },
    responseTime: { type: String },

    certifications: [{ type: String }],
  },
  { timestamps: true, toJSON: { getters: true }, id: false }
);

export default mongoose.model("Supplier", supplierSchema, "suppliers");
