import mongoose from "mongoose";
import dotenv from "dotenv";
import { categoryModel } from "../models/categoryModel"; // adjust relative path if needed

dotenv.config();

export const seedCategory = async () => {
  try {
    // Connect to MongoDB
    const mongoUri = process.env.MONGODB_URI;
    if (!mongoUri) throw new Error("MONGODB_URI missing in .env");

    await mongoose.connect(mongoUri);
    console.log("✔ MongoDB connected");

    // Categories to add
    const categories = [
      { name: "Electronics", description: "Phones, laptops, gadgets" },
      { name: "Clothing", description: "Men & Women Fashion" },
      { name: "Food", description: "Groceries, snacks, drinks" },
      { name: "Furniture", description: "Home and office furniture" },
    ];

    // Insert categories if not exist
    for (const cat of categories) {
      const exists = await categoryModel.findOne({ name: cat.name });
      if (exists) {
        console.log(`⚠ Category "${cat.name}" already exists`);
      } else {
        await categoryModel.create(cat);
        console.log(`✔ Category "${cat.name}" created`);
      }
    }

    console.log("🎉 Category seeding completed!");
    process.exit(0);
  } catch (err) {
    console.error("❌ Seed category failed:", err);
    process.exit(1);
  }
};

// Run directly
if (require.main === module) seedCategory();
