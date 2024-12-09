import { z } from 'zod';

//creating a schema for cars

const carZodSchema = z.object({
  brand: z.string().trim().min(1, 'car bran is required'),
  model: z.string().trim().min(1, 'car model is required'),
  year: z.number().min(1, 'car year is required'),
  price: z.number().min(1, 'car price must be positive number'),
  category: z.string().trim().min(1, 'car description is required'),
  description: z.string().trim().min(1, 'Description is required'),
  quantity: z.number().min(1, 'car quantity is required'),
  inStock: z.boolean(),
  isDeleted: z.boolean().default(false),
});

export default carZodSchema;
