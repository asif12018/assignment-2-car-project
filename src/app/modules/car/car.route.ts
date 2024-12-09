import express from 'express';
import { CarControllers } from './car.controller';
const router = express.Router();

router.post('/cars', CarControllers.createCar);
router.get('/cars', CarControllers.getAllCar);
router.get('/cars/:carId', CarControllers.getSpecificCar);
router.put('/cars/:carId', CarControllers.updateCar);
router.delete('/cars/:carId', CarControllers.deleteCar);

export const CarRoutes = router;
