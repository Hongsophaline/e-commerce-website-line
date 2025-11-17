// src/config/environment.ts

import dotenv from "dotenv";
dotenv.config();
export const environment = {
  MONGODB_URI: process.env.MONGODB_URI || "mongodb://localhost:27017",
  JWT_SECRET: process.env.JWT_SECRET || "your_secret_key",
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN || "1d",
  PORT: process.env.PORT || 5000,
};
