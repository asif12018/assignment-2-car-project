import { TOder } from './order.interface';
import { OderModel } from './order.model';
//order creating function
const createOrderIntoDB = async (orderData: TOder) => {
  const result = await OderModel.create(orderData);
  return result;
};

export const OrderServices = {
  createOrderIntoDB,
};
