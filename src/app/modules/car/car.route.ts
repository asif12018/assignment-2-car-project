import express from 'express';
import { CarControllers } from './car.controller';
const router = express.Router();

router.post('/cars', CarControllers.createCar);
router.get('/cars', CarControllers.getAllCar);
router.get('/:carId', CarControllers.getSpecificCar);
router.put('/:carId', CarControllers.updateCar);

export const CarRoutes = router;
