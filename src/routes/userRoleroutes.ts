import { Router } from "express";
import {
  assignRole,
  removeRole,
  getUserRoles,
} from "@/controller/userRolecontroller";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: UserRoles
 *   description: Assign or remove roles from users
 */

/**
 * @swagger
 * /api/users/{userId}/assign-role:
 *   put:
 *     summary: Assign a role to a user
 *     tags: [UserRoles]
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *         example: "691c2e4c6ef57f92ed7116a5"
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - roleId
 *             properties:
 *               roleId:
 *                 type: string
 *                 example: "691c2f4c6ef57f92ed7116b0"
 *     responses:
 *       200:
 *         description: Role assigned successfully
 *       400:
 *         description: Role already assigned or user/role not found
 */
router.put("/users/:userId/assign-role", assignRole);

/**
 * @swagger
 * /api/users/{userId}/remove-role:
 *   put:
 *     summary: Remove a role from a user
 *     tags: [UserRoles]
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *         example: "691c2e4c6ef57f92ed7116a5"
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - roleId
 *             properties:
 *               roleId:
 *                 type: string
 *                 example: "691c2f4c6ef57f92ed7116b0"
 *     responses:
 *       200:
 *         description: Role removed successfully
 *       400:
 *         description: Role not assigned or user/role not found
 */
router.put("/users/:userId/remove-role", removeRole);

/**
 * @swagger
 * /api/users/{userId}/roles:
 *   get:
 *     summary: Get all roles of a user
 *     tags: [UserRoles]
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *         example: "691c2e4c6ef57f92ed7116a5"
 *     responses:
 *       200:
 *         description: List of roles for the user
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                   name:
 *                     type: string
 *                   description:
 *                     type: string
 *                   createdAt:
 *                     type: string
 *                   updatedAt:
 *                     type: string
 *       400:
 *         description: User not found
 */
router.get("/users/:userId/roles", getUserRoles);

export default router;
