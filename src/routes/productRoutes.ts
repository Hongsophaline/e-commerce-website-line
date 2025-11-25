import { Router } from "express";
import {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} from "@/controllers/productController";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Products
 *   description: API for managing products
 */

/**
 * @swagger
 * /api/products:
 *   post:
 *     summary: Create a new product
 *     tags: [Products]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - category
 *               - price
 *               - stock
 *               - available
 *             properties:
 *               name:
 *                 type: string
 *                 example: "iPhone 15"
 *               category:
 *                 type: string
 *                 example: "Electronics"
 *               price:
 *                 type: number
 *                 example: 1200
 *               stock:
 *                 type: number
 *                 example: 25
 *               available:
 *                 type: boolean
 *                 example: true
 *               image:
 *                 type: string
 *                 example: "iphone15.jpg"
 *     responses:
 *       201:
 *         description: Product created successfully
 *       400:
 *         description: Bad request (invalid input)
 *       500:
 *         description: Server error
 */
router.post("/", createProduct);

/**
 * @swagger
 * /api/products:
 *   get:
 *     summary: Get all products
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: List of all products
 *       500:
 *         description: Server error
 */
router.get("/", getProducts);

/**
 * @swagger
 * /api/products/{id}:
 *   get:
 *     summary: Get a product by ID
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: MongoDB ObjectId of the product
 *         schema:
 *           type: string
 *           example: "650c0f7e4f1a2568d4c8e121"
 *     responses:
 *       200:
 *         description: Product found
 *       400:
 *         description: Invalid product ID
 *       404:
 *         description: Product not found
 *       500:
 *         description: Server error
 */
router.get("/:id", getProductById);

/**
 * @swagger
 * /api/products/{id}:
 *   put:
 *     summary: Update a product
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: MongoDB ObjectId of the product
 *         schema:
 *           type: string
 *           example: "650c0f7e4f1a2568d4c8e121"
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "iPhone 15 Pro"
 *               category:
 *                 type: string
 *                 example: "Electronics"
 *               price:
 *                 type: number
 *                 example: 1300
 *               stock:
 *                 type: number
 *                 example: 30
 *               available:
 *                 type: boolean
 *                 example: true
 *               image:
 *                 type: string
 *                 example: "iphone15pro.jpg"
 *     responses:
 *       200:
 *         description: Product updated successfully
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Product not found
 *       500:
 *         description: Server error
 */
router.put("/:id", updateProduct);

/**
 * @swagger
 * /api/products/{id}:
 *   delete:
 *     summary: Delete a product
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: MongoDB ObjectId of the product
 *         schema:
 *           type: string
 *           example: "650c0f7e4f1a2568d4c8e121"
 *     responses:
 *       200:
 *         description: Product deleted successfully
 *       400:
 *         description: Invalid product ID
 *       404:
 *         description: Product not found
 *       500:
 *         description: Server error
 */
router.delete("/:id", deleteProduct);

export default router;
