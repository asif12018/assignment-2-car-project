// create order service function

// import { Types } from 'mongoose';
// import { CarModel } from '../car/car.model';
import { OderModel } from './order.model';
// const ObjectId = Types.ObjectId;

const createOrderIntoDB = async (orderData: object) => {
  //finding the car info from database
  // const carInfo: object | null = await CarModel.findOne({
  //   _id: new ObjectId(`${carId}`),
  // });
  //sending data to the database
  const result = await OderModel.create(orderData);
  return result;
};

export const OrderService = {
  createOrderIntoDB,
};
