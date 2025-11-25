import { Schema, model, Document } from "mongoose";

export interface IOrder extends Document {
  customerName: string;
  phone: string;
  address: string;
  total: number;
  status: string; // 'Pending', 'Completed', etc.
}

const orderSchema = new Schema<IOrder>(
  {
    customerName: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    total: { type: Number, required: true },
    status: { type: String, required: true, default: "Pending" },
  },
  { timestamps: true }
);

export const Order = model<IOrder>("Order", orderSchema);
