import { TCar } from './car.interface';
import { CarModel } from './car.model';

//create car service function

const createCarIntoDB = async (carData: TCar) => {
  const result = await CarModel.create(carData);
  return result;
};

//get all car
const getAllCarFromDB = async () => {
  const result = await CarModel.find();
  return result;
};

export const CarServices = {
  createCarIntoDB,
  getAllCarFromDB,
};
