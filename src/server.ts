import dotenv from "dotenv";
dotenv.config();

import express from "express";
import connectDB from "./config/database";
import Router from "./routes/index";
import { setupSwagger } from "./config/swagger";

const app = express();
const PORT = process.env.PORT;

// Middlewares
app.use(express.json());

// Connect DB
connectDB()
  .then(() => console.log("✅ Database connected"))
  .catch((err) => console.error("❌ Database connection failed:", err));

// Routes
app.use("/api", Router);

// Swagger
setupSwagger(app, Number(PORT));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
