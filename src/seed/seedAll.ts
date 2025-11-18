import mongoose from "mongoose";
import dotenv from "dotenv";
import { seedAdmin } from "./seedAdmin";
// import { seedProducts } from "./seedProducts";
// import { seedUsers } from "./seedUsers";

dotenv.config();

export const seedAll = async () => {
  try {
    console.log(" Start seeding all...");

    await seedAdmin(); // Seed admin first
    // await seedUsers(); // optional sample users
    // await seedProducts(); // optional sample products

    console.log(" All seeding completed!");
    process.exit(0);
  } catch (err) {
    console.error(" Seed all failed:", err);
    process.exit(1);
  }
};

// Optional: run directly
if (require.main === module) seedAll();
