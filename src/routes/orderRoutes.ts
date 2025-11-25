import { Router } from "express";
import {
  createOrderController,
  getOrdersController,
  getOrderByIdController,
  updateOrderController,
  deleteOrderController,
} from "@/controllers/orderController";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Orders
 *   description: API for managing orders
 */

/**
 * @swagger
 * /api/orders:
 *   post:
 *     summary: Create a new order
 *     tags: [Orders]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - customerName
 *               - phone
 *               - address
 *               - total
 *               - status
 *             properties:
 *               customerName:
 *                 type: string
 *                 example: "John Doe"
 *               phone:
 *                 type: string
 *                 example: "+85512345678"
 *               address:
 *                 type: string
 *                 example: "123 Street, Phnom Penh"
 *               total:
 *                 type: number
 *                 example: 150
 *               status:
 *                 type: string
 *                 example: "Pending"
 *     responses:
 *       201:
 *         description: Order created successfully
 *       400:
 *         description: Bad request (missing required fields)
 *       500:
 *         description: Internal server error
 */
router.post("/", createOrderController);

/**
 * @swagger
 * /api/orders:
 *   get:
 *     summary: Get all orders
 *     tags: [Orders]
 *     responses:
 *       200:
 *         description: List of all orders
 *       500:
 *         description: Internal server error
 */
router.get("/", getOrdersController);

/**
 * @swagger
 * /api/orders/{id}:
 *   get:
 *     summary: Get order by ID
 *     tags: [Orders]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: MongoDB ObjectId of the order
 *         schema:
 *           type: string
 *           example: "650c0f7e4f1a2568d4c8e999"
 *     responses:
 *       200:
 *         description: Order found
 *       400:
 *         description: Invalid order ID
 *       404:
 *         description: Order not found
 *       500:
 *         description: Internal server error
 */
router.get("/:id", getOrderByIdController);

/**
 * @swagger
 * /api/orders/{id}:
 *   put:
 *     summary: Update an order
 *     tags: [Orders]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: MongoDB ObjectId of the order
 *         schema:
 *           type: string
 *           example: "650c0f7e4f1a2568d4c8e999"
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               customerName:
 *                 type: string
 *                 example: "John Doe"
 *               phone:
 *                 type: string
 *                 example: "+85512345678"
 *               address:
 *                 type: string
 *                 example: "123 Street, Phnom Penh"
 *               total:
 *                 type: number
 *                 example: 200
 *               status:
 *                 type: string
 *                 example: "Completed"
 *     responses:
 *       200:
 *         description: Order updated successfully
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Order not found
 *       500:
 *         description: Internal server error
 */
router.put("/:id", updateOrderController);

/**
 * @swagger
 * /api/orders/{id}:
 *   delete:
 *     summary: Delete an order
 *     tags: [Orders]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: MongoDB ObjectId of the order
 *         schema:
 *           type: string
 *           example: "650c0f7e4f1a2568d4c8e999"
 *     responses:
 *       200:
 *         description: Order deleted successfully
 *       400:
 *         description: Invalid order ID
 *       404:
 *         description: Order not found
 *       500:
 *         description: Internal server error
 */
router.delete("/:id", deleteOrderController);

export default router;
