import dotenv from "dotenv";
import { seedAdmin } from "./seedAdmin";
import { seedCategory } from "./seedCategory";

dotenv.config();

export const seedAll = async () => {
  try {
    console.log("🚀 Start seeding all...");

    await seedAdmin(); // Seed admin
    await seedCategory(); // Seed categories

    console.log("🎉 All seeding completed!");
    process.exit(0);
  } catch (err) {
    console.error("❌ Seed all failed:", err);
    process.exit(1);
  }
};

if (require.main === module) seedAll();
