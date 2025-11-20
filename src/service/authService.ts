import { Request } from "express";
import { userModel } from "../models/userModel";
import { generateToken } from "@/utils/jwt";
import { tokenPayload } from "@/types/auth";

export const registerService = async (req: Request) => {
  const { name, email, password, phone } = req.body;

  if (!name || !email || !password || !phone) {
    throw new Error("Missing required fields");
  }

  const userExists = await userModel.findOne({ email });
  if (userExists) {
    throw new Error("User already exists");
  }

  const user = await userModel.create({ name, email, password, phone });

  const payload: tokenPayload = {
    _id: user._id.toString(),
    email: user.email,
  };

  const token = generateToken(payload);

  return { user, token };
};

export const loginService = async (req: Request) => {
  const { email, password } = req.body;

  const user = await userModel.findOne({ email });
  if (!user || user.password !== password) {
    throw new Error("Invalid email or password");
  }

  const payload: tokenPayload = {
    _id: user._id.toString(),
    email: user.email, // wrap single role as array
  };

  const token = generateToken(payload);

  return { user, token };
};
