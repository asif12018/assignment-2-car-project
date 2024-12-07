import { model, Schema } from 'mongoose';
import { TCar } from './car.interface';

//car schema
const carSchema = new Schema<TCar>(
  {
    brand: { type: String, required: true, trim: true },
    model: { type: String, required: true, trim: true },
    year: { type: Number, required: true },
    price: { type: Number, required: true, min: 0 },
    category: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    quantity: { type: Number, required: true, min: 0 },
    inStock: { type: Boolean, required: true },
  },
  {
    timestamps: true,
  },
);

//middle ware
carSchema.pre('find', function (next) {
  this.find({ inStock: { $ne: false } });
  next();
});

export const CarModel = model<TCar>('Car', carSchema);
