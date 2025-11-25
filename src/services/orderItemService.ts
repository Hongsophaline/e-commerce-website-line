import { OrderItem, IOrderItem } from "@/models/orderItemModel";

export const createOrderItem = async (data: Partial<IOrderItem>) => {
  const orderItem = new OrderItem(data);
  return await orderItem.save();
};

export const getOrderItems = async () => {
  return await OrderItem.find().populate("orderId").populate("productId");
};

export const getOrderItemById = async (id: string) => {
  return await OrderItem.findById(id).populate("orderId").populate("productId");
};

export const updateOrderItem = async (
  id: string,
  data: Partial<IOrderItem>
) => {
  return await OrderItem.findByIdAndUpdate(id, data, { new: true });
};

export const deleteOrderItem = async (id: string) => {
  return await OrderItem.findByIdAndDelete(id);
};
