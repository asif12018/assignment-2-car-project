import { model, Schema } from 'mongoose';
import { TOder } from './order.interface';

//order schema
const orderSchema = new Schema<TOder>(
  {
    email: String,
    car: String,
    quantity: Number,
    totalPrice: Number,
  },
  {
    timestamps: true,
  },
);

export const OderModel = model<TOder>('Order', orderSchema);
