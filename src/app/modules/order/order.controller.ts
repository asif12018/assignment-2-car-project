import { Request, Response } from 'express';
import { OrderServices } from './order.service';
import orderZodSchema from './order.validation';

//create order controller

const createOrder = async (req: Request, res: Response) => {
  try {
    const { order: orderData } = req.body;
    const OrderParseData = orderZodSchema.parse(orderData);
    const result = await OrderServices.createOrderIntoDB(OrderParseData);
    res.status(200).json({
      success: true,
      message: 'Order placed successfully',
      data: result,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any | unknown) {
    res.status(500).json({
      success: false,
      message: 'Somethings went wrong in the order create controller',
      error: err.message,
    });
  }
};

export const OrderControllers = {
  createOrder,
};
