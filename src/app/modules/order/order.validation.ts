import { z } from 'zod';

//creating schema for order validation

const orderZodSchema = {
  email: z.string().min(1, 'email is required'),
  car: z.string().min(1, 'car id is required'),
  quantity: z.string().min(1, 'order quantity is required'),
  totalPrice: z.number().min(1, 'total Prive is required'),
};

export default orderZodSchema;
