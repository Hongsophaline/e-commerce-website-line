import { userRoleModel } from "@/models/userRole.model";
import { Types } from "mongoose";

// Assign a role to a user
export const assignRoleService = async (userId: string, roleId: string) => {
  return await userRoleModel.create({
    userId: new Types.ObjectId(userId),
    roleId: new Types.ObjectId(roleId),
  });
};

// Remove a role from a user
export const removeRoleService = async (userId: string, roleId: string) => {
  return await userRoleModel.findOneAndDelete({ userId, roleId });
};

// Get all roles of a user
export const getUserRolesService = async (userId: string) => {
  return await userRoleModel.find({ userId }).populate("roleId");
};
