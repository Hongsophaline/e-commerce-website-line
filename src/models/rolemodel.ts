import { Schema, model, Document, Types } from "mongoose";

export interface IRole extends Document {
  _id: Types.ObjectId;
  name: string; // e.g., "Admin", "Farmer", "Customer"
  description?: string;
}

const roleSchema = new Schema<IRole>(
  {
    name: { type: String, required: true, unique: true },
    description: { type: String, default: "" },
  },
  { timestamps: true }
);

export const roleModel = model<IRole>("Role", roleSchema);
