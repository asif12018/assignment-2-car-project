import { Request, Response } from 'express';
import carZodSchema from './car.validation';
import { CarServices } from './car.service';

//car data creation controller funciton
const createCar = async (req: Request, res: Response) => {
  try {
    const carData = req.body;
    const zodparsedData = carZodSchema.parse(carData);
    const result = await CarServices.createCarIntoDB(zodparsedData);
    //sent response
    res.status(200).json({
      success: true,
      message: 'Car created successfully',
      data: result,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong in getSpecificCar controller',
      error: err,
      stack: err.stack,
    });
  }
};

const getAllCar = async (req: Request, res: Response) => {
  try {
    const result = await CarServices.getAllCarFromDB();
    res.status(200).json({
      success: true,
      message: 'Cars retrieved successfully',
      data: result,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    res.status(400).json({
      success: false,
      message: 'Something wents wrong in get all car data controller',
      error: err,
      stack: err.stack,
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
      message: 'Cars retrieved successfully',
      data: result,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any | unknown) {
    res.status(500).json({
      success: false,
      message: 'somethings went wrong in getSpecific car controller',
      error: err.message,
      stack: err.stack,
    });
  }
};

//get update a specific car from db controller
const updateCar = async (req: Request, res: Response) => {
  try {
    const carId = req.params.carId;
    const carData = req.body;
    const result = await CarServices.UpdateCarFromDB(carId, carData);
    res.status(200).json({
      success: true,
      message: 'Car updated successfully',
      data: result,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: 'something went wrong in updatecar controller',
      error: err.message,
      stack: err.stack,
    });
  }
};

//delete a specific car from database
const deleteCar = async (req: Request, res: Response) => {
  try {
    const carId = req.params.carId;
    const result = await CarServices.DeleteCarFromDB(carId);
    res.status(200).json({
      success: true,
      message: 'Car deleted successfully',
      data: result,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong in the delete car controller',
      error: err.message,
      stack: err.stack,
    });
  }
};

export const CarControllers = {
  createCar,
  getAllCar,
  getSpecificCar,
  updateCar,
  deleteCar,
};
