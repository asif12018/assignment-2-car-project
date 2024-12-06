import { TCar } from './car.interface';
import { CarModel } from './car.model';

//create car service function

const createCarIntoDB = async (carData: TCar) => {
  const result = await CarModel.create(carData);
  return result;
};

export const CarServices = {
  createCarIntoDB,
};
