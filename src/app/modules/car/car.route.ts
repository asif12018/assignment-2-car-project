import express from 'express';
import { CarControllers } from './car.controller';
const router = express.Router();

router.post('/cars', CarControllers.createCar);
router.get('/cars', CarControllers.getAllCar);

export const CarRoutes = router;
