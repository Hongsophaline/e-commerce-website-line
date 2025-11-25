import { Request, Response } from "express";
import * as orderItemService from "@/services/orderItemService";

// Create Order Item
export const createOrderItemController = async (
  req: Request,
  res: Response
) => {
  try {
    const { orderId, productId, quantity, subtotal } = req.body;

    if (
      !orderId ||
      !productId ||
      quantity === undefined ||
      subtotal === undefined
    ) {
      return res
        .status(400)
        .json({ success: false, message: "Missing required fields" });
    }

    const orderItem = await orderItemService.createOrderItem({
      orderId,
      productId,
      quantity,
      subtotal,
    });

    return res.status(201).json({ success: true, orderItem });
  } catch (err: any) {
    return res.status(500).json({ success: false, message: err.message });
  }
};

// Get all order items
export const getOrderItemsController = async (_req: Request, res: Response) => {
  try {
    const orderItems = await orderItemService.getOrderItems();
    return res.status(200).json({ success: true, orderItems });
  } catch (err: any) {
    return res.status(500).json({ success: false, message: err.message });
  }
};

// Get order item by ID
export const getOrderItemByIdController = async (
  req: Request,
  res: Response
) => {
  try {
    const orderItem = await orderItemService.getOrderItemById(req.params.id);
    if (!orderItem)
      return res
        .status(404)
        .json({ success: false, message: "Order item not found" });
    return res.status(200).json({ success: true, orderItem });
  } catch (err: any) {
    return res.status(500).json({ success: false, message: err.message });
  }
};

// Update order item
export const updateOrderItemController = async (
  req: Request,
  res: Response
) => {
  try {
    const orderItem = await orderItemService.updateOrderItem(
      req.params.id,
      req.body
    );
    if (!orderItem)
      return res
        .status(404)
        .json({ success: false, message: "Order item not found" });
    return res.status(200).json({ success: true, orderItem });
  } catch (err: any) {
    return res.status(500).json({ success: false, message: err.message });
  }
};

// Delete order item
export const deleteOrderItemController = async (
  req: Request,
  res: Response
) => {
  try {
    const orderItem = await orderItemService.deleteOrderItem(req.params.id);
    if (!orderItem)
      return res
        .status(404)
        .json({ success: false, message: "Order item not found" });
    return res
      .status(200)
      .json({ success: true, message: "Order item deleted successfully" });
  } catch (err: any) {
    return res.status(500).json({ success: false, message: err.message });
  }
};
