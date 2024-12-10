import { TCar } from './car.interface';
import { CarModel } from './car.model';
import { Types } from 'mongoose';
const ObjectId = Types.ObjectId;

//create car service function

const createCarIntoDB = async (carData: TCar) => {
  const result = await CarModel.create(carData);
  return result;
};

//get all car
const getAllCarFromDB = async () => {
  const result = await CarModel.find().select('-isDeleted');
  return result;
};
//get a specific car
const getSpecificCarFromDB = async (id: string) => {
  const result = await CarModel.findOne({ _id: new ObjectId(`${id}`) });
  if (!result) {
    throw new Error('Car not found');
  }

  return result;
};

//update a specific car
const UpdateCarFromDB = async (id: string, carData: object) => {
  const filter = { _id: new ObjectId(`${id}`) };
  const options = { new: true };
  const result = await CarModel.findOneAndUpdate(filter, carData, options);
  if (!result) {
    throw new Error('Invalid id or car not found');
  }
  return result;
};

//delete a car
const DeleteCarFromDB = async (id: string) => {
  const filter = { _id: new ObjectId(`${id}`) };
  const result = await CarModel.findOneAndUpdate(filter, { isDeleted: true });
  if (!result) {
    throw new Error('Invalid id or car not found');
  }
  return {};
};

export const CarServices = {
  createCarIntoDB,
  getAllCarFromDB,
  getSpecificCarFromDB,
  UpdateCarFromDB,
  DeleteCarFromDB,
};
