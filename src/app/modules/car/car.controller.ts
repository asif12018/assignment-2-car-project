import { Request, Response } from 'express';
import carZodSchema from './car.validation';
import { CarServices } from './car.service';

//car data creation controller funciton
const createCar = async (req: Request, res: Response) => {
  try {
    const { cars: carData } = req.body;
    const zodparsedData = carZodSchema.parse(carData);
    const result = await CarServices.createCarIntoDB(zodparsedData);
    //sent response
    res.status(200).json({
      success: true,
      message: 'Car data is created on database',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong in car creating controller',
      error: err,
    });
  }
};

//get all car from db controller
const getAllCar = async (req: Request, res: Response) => {
  try {
    const result = await CarServices.getAllCarFromDB();
    res.status(200).json({
      success: true,
      message: 'Car data is provided',
      data: result,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: 'Something wents wrong in get all car data controller',
      error: err,
    });
  }
};

export const CarControllers = {
  createCar,
  getAllCar,
};
