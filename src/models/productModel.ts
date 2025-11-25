import mongoose, { Schema, Document } from "mongoose";

export interface IProduct extends Document {
  name: string;
  category: string;
  price: number;
  stock: number;
  available: boolean;
  image?: string;
}

const productSchema = new Schema<IProduct>(
  {
    name: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, required: true },
    available: { type: Boolean, required: true },
    image: { type: String, default: null },
  },
  { timestamps: true }
);

export const Product = mongoose.model<IProduct>("Product", productSchema);
