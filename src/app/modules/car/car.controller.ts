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

//get a specific car from db controller
const getSpecificCar = async (req: Request, res: Response) => {
  try {
    const carId = req.params.carId;
    const result = await CarServices.getSpecificCarFromDB(carId);
    res.status(200).json({
      success: true,
      message: 'Specific car found',
      data: result,
    });
  } catch (err) {
    res.json({
      success: false,
      message: 'somethings went wrong in getSpecific car controller',
      error: err,
    });
  }
};

//get update a specific car from db controller
const updateCar = async (req: Request, res: Response) => {
  try {
    const carId = req.params.carId;
    const carData = req.body.cars;
    const result = await CarServices.UpdateCarFromDB(carId, carData);
    res.status(200).json({
      success: true,
      message: 'update successful',
      result: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'something went wrong in updatecar controller',
      error: err,
    });
  }
};

export const CarControllers = {
  createCar,
  getAllCar,
  getSpecificCar,
  updateCar,
};
