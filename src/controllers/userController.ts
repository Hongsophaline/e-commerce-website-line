import { Request, Response } from "express";
import * as userService from "@/services/userservice";

export const createUser = async (req: Request, res: Response) => {
  try {
    const user = await userService.createUserService(req.body);
    res.status(201).json({ success: true, user });
  } catch (err: any) {
    res.status(400).json({ success: false, message: err.message });
  }
};

export const getUsers = async (_req: Request, res: Response) => {
  try {
    const users = await userService.getAllUsersService();
    res.status(200).json({ success: true, users });
  } catch (err: any) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const getUserById = async (req: Request, res: Response) => {
  try {
    const user = await userService.getUserByIdService(req.params.id);
    res.status(200).json({ success: true, user });
  } catch (err: any) {
    res.status(404).json({ success: false, message: err.message });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const user = await userService.updateUserService(req.params.id, req.body);
    res.status(200).json({ success: true, user });
  } catch (err: any) {
    res.status(400).json({ success: false, message: err.message });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    await userService.deleteUserService(req.params.id);
    res.status(200).json({ success: true, message: "User deleted" });
  } catch (err: any) {
    res.status(404).json({ success: false, message: err.message });
  }
};
