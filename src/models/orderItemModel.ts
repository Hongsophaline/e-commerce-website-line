import { Schema, model, Document, Types } from "mongoose";

export interface IOrderItem extends Document {
  orderId: Types.ObjectId;
  productId: Types.ObjectId;
  quantity: number;
  subtotal: number;
}

const orderItemSchema = new Schema<IOrderItem>(
  {
    orderId: { type: Schema.Types.ObjectId, ref: "Order", required: true },
    productId: { type: Schema.Types.ObjectId, ref: "Product", required: true },
    quantity: { type: Number, required: true },
    subtotal: { type: Number, required: true },
  },
  { timestamps: true }
);

export const OrderItem = model<IOrderItem>("OrderItem", orderItemSchema);
