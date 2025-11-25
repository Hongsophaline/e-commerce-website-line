import mongoose from "mongoose";
import { Request, Response } from "express";
import * as productService from "@/services/productService";
import { userModel as User } from "@/models/userModel";

// ===================== Helper =====================
const isValidObjectId = (id: string) => mongoose.Types.ObjectId.isValid(id);

const validateId = (id: string, entity: string, res: Response) => {
  if (!isValidObjectId(id)) {
    res.status(400).json({ success: false, message: `Invalid ${entity} ID.` });
    return false;
  }
  return true;
};

// ===================== Controller =====================
export const createProduct = async (req: Request, res: Response) => {
  try {
    const { name, category, price, stock, available, image } = req.body;

    //create product
    const productData = {
      name,
      category,
      price,
      stock,
      available: available ?? true,
      image,
    };

    // Save product
    const product = await productService.createProduct(productData);

    return res.status(201).json({ success: true, product });
  } catch (err: any) {
    return res.status(500).json({ success: false, message: err.message });
  }
};

export const getProducts = async (_req: Request, res: Response) => {
  try {
    const products = await productService.getAllProducts();
    return res.status(200).json({ success: true, products });
  } catch (err: any) {
    return res.status(500).json({ success: false, message: err.message });
  }
};

export const getProductById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (!validateId(id, "product", res)) return;

    const product = await productService.getProductById(id);
    if (!product)
      return res
        .status(404)
        .json({ success: false, message: "Product not found." });

    return res.status(200).json({ success: true, product });
  } catch (err: any) {
    return res.status(500).json({ success: false, message: err.message });
  }
};

export const updateProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (!validateId(id, "product", res)) return;

    const product = await productService.updateProduct(id, req.body);
    if (!product)
      return res
        .status(404)
        .json({ success: false, message: "Product not found." });

    return res.status(200).json({ success: true, product });
  } catch (err: any) {
    return res.status(500).json({ success: false, message: err.message });
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (!validateId(id, "product", res)) return;

    const product = await productService.deleteProduct(id);
    if (!product)
      return res
        .status(404)
        .json({ success: false, message: "Product not found." });

    return res
      .status(200)
      .json({ success: true, message: "Product deleted successfully." });
  } catch (err: any) {
    return res.status(500).json({ success: false, message: err.message });
  }
};
