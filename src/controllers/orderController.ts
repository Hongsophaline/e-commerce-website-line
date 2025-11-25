import { Request, Response } from "express";
import * as orderService from "@/services/orderService";

// Create new order
export const createOrderController = async (req: Request, res: Response) => {
  try {
    const { customerName, phone, address, total, status } = req.body;

    if (!customerName || !phone || !address || total === undefined) {
      return res
        .status(400)
        .json({ success: false, message: "Missing required fields" });
    }

    const order = await orderService.createOrder({
      customerName,
      phone,
      address,
      total,
      status: status || "Pending",
    });

    return res.status(201).json({ success: true, order });
  } catch (err: any) {
    return res.status(500).json({ success: false, message: err.message });
  }
};

// Get all orders
export const getOrdersController = async (_req: Request, res: Response) => {
  try {
    const orders = await orderService.getOrders();
    return res.status(200).json({ success: true, orders });
  } catch (err: any) {
    return res.status(500).json({ success: false, message: err.message });
  }
};

// Get order by ID
export const getOrderByIdController = async (req: Request, res: Response) => {
  try {
    const order = await orderService.getOrderById(req.params.id);
    if (!order)
      return res
        .status(404)
        .json({ success: false, message: "Order not found" });
    return res.status(200).json({ success: true, order });
  } catch (err: any) {
    return res.status(500).json({ success: false, message: err.message });
  }
};

// Update order
export const updateOrderController = async (req: Request, res: Response) => {
  try {
    const order = await orderService.updateOrder(req.params.id, req.body);
    if (!order)
      return res
        .status(404)
        .json({ success: false, message: "Order not found" });
    return res.status(200).json({ success: true, order });
  } catch (err: any) {
    return res.status(500).json({ success: false, message: err.message });
  }
};

// Delete order
export const deleteOrderController = async (req: Request, res: Response) => {
  try {
    const order = await orderService.deleteOrder(req.params.id);
    if (!order)
      return res
        .status(404)
        .json({ success: false, message: "Order not found" });
    return res
      .status(200)
      .json({ success: true, message: "Order deleted successfully" });
  } catch (err: any) {
    return res.status(500).json({ success: false, message: err.message });
  }
};
