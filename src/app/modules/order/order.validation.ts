import { z } from 'zod';

// Creating schema for order validation
const orderZodSchema = z.object({
  email: z.string().email('Invalid email format').min(1, 'Email is required'),
  car: z.string().min(1, 'Car ID is required'),
  quantity: z.number().min(1, 'Order quantity is required'),
  totalPrice: z.number().min(1, 'Total price is required'),
});

export default orderZodSchema;
