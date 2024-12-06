import { model, Schema } from 'mongoose';
import { TCar } from './car.interface';

//car schema
const carSchema = new Schema<TCar>({
  brand: String,
  model: String,
  year: Number,
  price: Number,
  category: String,
  description: String,
  quantity: Number,
  inStock: Boolean,
});

export const CarModel = model<TCar>('Car', carSchema);
