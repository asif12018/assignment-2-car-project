import { model, Schema } from 'mongoose';
import { TCar, TOder } from './car.interface';

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

//order schema
const orderSchema = new Schema<TOder>({
  email: String,
  car: String,
  quantity: Number,
  totalPrice: Number,
});

export const CarModel = model<TCar>('Car', carSchema);

export const OderModel = model<TOder>('Order', orderSchema);
