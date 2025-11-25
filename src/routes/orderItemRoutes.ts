import { Router } from "express";
import {
  createOrderItemController,
  getOrderItemsController,
  getOrderItemByIdController,
  updateOrderItemController,
  deleteOrderItemController,
} from "@/controllers/orderItemController";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: OrderItems
 *   description: API for managing order items
 */

/**
 * @swagger
 * /api/order-items:
 *   post:
 *     summary: Create a new order item
 *     tags: [OrderItems]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - orderId
 *               - productId
 *               - quantity
 *               - subtotal
 *             properties:
 *               orderId:
 *                 type: string
 *                 description: MongoDB ObjectId of the order
 *                 example: "650c0f7e4f1a2568d4c8e999"
 *               productId:
 *                 type: string
 *                 description: MongoDB ObjectId of the product
 *                 example: "650c0f7e4f1a2568d4c8e888"
 *               quantity:
 *                 type: number
 *                 example: 2
 *               subtotal:
 *                 type: number
 *                 example: 120
 *     responses:
 *       201:
 *         description: Order item created successfully
 *       400:
 *         description: Missing required fields
 *       500:
 *         description: Internal server error
 */
router.post("/", createOrderItemController);

/**
 * @swagger
 * /api/order-items:
 *   get:
 *     summary: Get all order items
 *     tags: [OrderItems]
 *     responses:
 *       200:
 *         description: List of all order items
 *       500:
 *         description: Internal server error
 */
router.get("/", getOrderItemsController);

/**
 * @swagger
 * /api/order-items/{id}:
 *   get:
 *     summary: Get an order item by ID
 *     tags: [OrderItems]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: MongoDB ObjectId of the order item
 *         schema:
 *           type: string
 *           example: "650c0f7e4f1a2568d4c8e777"
 *     responses:
 *       200:
 *         description: Order item found
 *       400:
 *         description: Invalid order item ID
 *       404:
 *         description: Order item not found
 *       500:
 *         description: Internal server error
 */
router.get("/:id", getOrderItemByIdController);

/**
 * @swagger
 * /api/order-items/{id}:
 *   put:
 *     summary: Update an order item
 *     tags: [OrderItems]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: MongoDB ObjectId of the order item
 *         schema:
 *           type: string
 *           example: "650c0f7e4f1a2568d4c8e777"
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               orderId:
 *                 type: string
 *                 example: "650c0f7e4f1a2568d4c8e999"
 *               productId:
 *                 type: string
 *                 example: "650c0f7e4f1a2568d4c8e888"
 *               quantity:
 *                 type: number
 *                 example: 3
 *               subtotal:
 *                 type: number
 *                 example: 180
 *     responses:
 *       200:
 *         description: Order item updated successfully
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Order item not found
 *       500:
 *         description: Internal server error
 */
router.put("/:id", updateOrderItemController);

/**
 * @swagger
 * /api/order-items/{id}:
 *   delete:
 *     summary: Delete an order item
 *     tags: [OrderItems]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: MongoDB ObjectId of the order item
 *         schema:
 *           type: string
 *           example: "650c0f7e4f1a2568d4c8e777"
 *     responses:
 *       200:
 *         description: Order item deleted successfully
 *       400:
 *         description: Invalid order item ID
 *       404:
 *         description: Order item not found
 *       500:
 *         description: Internal server error
 */
router.delete("/:id", deleteOrderItemController);

export default router;
