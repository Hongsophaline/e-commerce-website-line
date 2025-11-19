import { Request, Response } from "express";
import * as userRoleService from "@/service/userRoleservice";

export const assignRole = async (req: Request, res: Response) => {
  try {
    const result = await userRoleService.assignRoleService(
      req.params.userId,
      req.body.roleId
    );
    res.status(201).json({ success: true, data: result });
  } catch (err: any) {
    res.status(400).json({ success: false, message: err.message });
  }
};

export const removeRole = async (req: Request, res: Response) => {
  try {
    const result = await userRoleService.removeRoleService(
      req.params.userId,
      req.body.roleId
    );
    res.status(200).json({ success: true, data: result });
  } catch (err: any) {
    res.status(400).json({ success: false, message: err.message });
  }
};

export const getUserRoles = async (req: Request, res: Response) => {
  try {
    const roles = await userRoleService.getUserRolesService(req.params.userId);
    res.status(200).json({ success: true, data: roles });
  } catch (err: any) {
    res.status(400).json({ success: false, message: err.message });
  }
};
