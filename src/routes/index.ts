import { Router } from "express";
import {
  registerController,
  loginController,
} from "@/controller/authController";

const router = Router();

router.post("/auth/register", registerController);
router.post("/auth/login", loginController);

export default router;
