import { Schema, model, Document, Types } from "mongoose";

export interface IUserRole extends Document {
  userId: Types.ObjectId;
  roleId: Types.ObjectId;
}

const userRoleSchema = new Schema<IUserRole>(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    roleId: { type: Schema.Types.ObjectId, ref: "Role", required: true },
  },
  { timestamps: true }
);

// Prevent duplicate role assignments for the same user
userRoleSchema.index({ userId: 1, roleId: 1 }, { unique: true });

export const userRoleModel = model<IUserRole>("UserRole", userRoleSchema);
