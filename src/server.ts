import dotenv from "dotenv";
dotenv.config();

import express from "express";
import connectDB from "./config/database";
import { setupSwagger } from "./config/swagger";

import roleRoutes from "./routes/roleRoutes";
import userRoleRoutes from "./routes/userRoleroutes";
import userRoutes from "./routes/userRoutes";
import authRoutes from "@/routes/authRoutes";
const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(express.json());

// Connect DB
connectDB()
  .then(() => console.log("✅ Database connected"))
  .catch((err) => console.error("❌ Database connection failed:", err));

// Routes
app.use("/api/roles", roleRoutes);
app.use("/api/user-roles", userRoleRoutes);
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
// Swagger
setupSwagger(app, Number(PORT));

// Root
app.get("/", (req, res) => {
  res.send("API is running...");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
