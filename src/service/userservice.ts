import { userModel, IUser } from "@/models/userModel";
import bcrypt from "bcrypt";

export const createUserService = async (data: {
  name: string;
  email: string;
  password: string;
  phone?: string;
  role?: string; // optional
}) => {
  const existingUser = await userModel.findOne({
    $or: [{ email: data.email }, { phone: data.phone }],
  });
  if (existingUser) throw new Error("Email or phone already exists");

  const hashedPassword = await bcrypt.hash(data.password, 10);

  const user = await userModel.create({
    ...data,
    password: hashedPassword,
    // roles is optional → Mongoose default "farmer" will apply
  });

  return user;
};

export const getAllUsersService = async () => {
  return userModel.find();
};

export const getUserByIdService = async (id: string) => {
  const user = await userModel.findById(id);
  if (!user) throw new Error("User not found");
  return user;
};

export const updateUserService = async (id: string, data: Partial<IUser>) => {
  if (data.password) {
    data.password = await bcrypt.hash(data.password, 10);
  }
  const user = await userModel.findByIdAndUpdate(id, data, { new: true });
  if (!user) throw new Error("User not found");
  return user;
};

export const deleteUserService = async (id: string) => {
  const user = await userModel.findByIdAndDelete(id);
  if (!user) throw new Error("User not found");
  return true;
};
