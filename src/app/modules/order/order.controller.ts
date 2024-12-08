import { Request, Response } from 'express';
import { OrderService } from './order.service';

//order data creation controller function

const createOrder = async (req: Request, res: Response) => {
  try {
    const { order: orderData } = req.body;
    const result = await OrderService.createOrderIntoDB(orderData);
    res.status(200).json({
      success: true,
      message: 'order has successfully placed',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'somethings went wrong in the order controller',
      error: err,
    });
  }
};

export const OrderController = {
  createOrder,
};
