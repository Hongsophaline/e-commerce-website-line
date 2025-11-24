import { Request } from "express";
import { userModel } from "../models/userModel";
import { generateToken } from "@/utils/jwt";
import { tokenPayload } from "@/types/auth";

export const registerService = async (req: Request) => {
  const { firstName, lastName, email, password, phone } = req.body;

  // Validate required fields
  if (!firstName || !lastName || !email || !password || !phone) {
    throw new Error("Missing required fields");
  }

  // Check if email already exists
  const userExists = await userModel.findOne({ email });
  if (userExists) {
    throw new Error("User already exists");
  }

  // Create user
  const user = await userModel.create({
    firstName,
    lastName,
    email,
    password,
    phone,
  });

  // Token payload
  const payload: tokenPayload = {
    _id: user._id.toString(),
    email: user.email,
  };

  // Generate JWT
  const token = generateToken(payload);

  return { user, token };
};

export const loginService = async (req: Request) => {
  const { email, password } = req.body;

  // Find user by email
  const user = await userModel.findOne({ email });
  if (!user || user.password !== password) {
    throw new Error("Invalid email or password");
  }

  // Token payload
  const payload: tokenPayload = {
    _id: user._id.toString(),
    email: user.email,
  };

  // Generate JWT
  const token = generateToken(payload);

  return { user, token };
};
