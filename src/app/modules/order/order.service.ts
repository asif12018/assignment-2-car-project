import { CarServices } from '../car/car.service';
import { TOder } from './order.interface';
import { OderModel } from './order.model';
//order creating function
const createOrderIntoDB = async (orderData: TOder) => {
  //finding car data
  const carData = await CarServices.getSpecificCarFromDB(orderData.car);
  if (!carData) {
    throw new Error('Car not found');
  }
  if (carData.quantity === 0) {
    throw new Error('car is out of stock');
  }
  if (carData.quantity < orderData.quantity) {
    throw new Error('order amount is higher then stock');
  }
  if (carData?.quantity > 0 && carData.quantity >= orderData.quantity) {
    const result = await OderModel.create(orderData);
    //decreasing quantity from car database
    const newQuantity = carData.quantity - orderData.quantity;
    const updateCarObject = {
      quantity: newQuantity,
    };
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const updatedCar = await CarServices.UpdateCarFromDB(
      orderData.car,
      updateCarObject,
    );
    //setting the inStock to false when the stock reach to 0;
    if (newQuantity == 0) {
      const updateStock = {
        inStock: false,
      };
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const updateTheStockAmount = await CarServices.UpdateCarFromDB(
        orderData.car,
        updateStock,
      );
    }
    return result;
  }
};

//get all the revenue from the order
const getRevenueFromDB = async () => {
  const result = await OderModel.aggregate([
    {
      $group: {
        _id: null,
        totalSum: { $sum: '$totalPrice' },
      },
    },
  ]);
  const revenue = {
    totalRevenue: result[0].totalSum,
  };
  // console.log('total revenue is', revenue);
  return revenue;
};

export const OrderServices = {
  createOrderIntoDB,
  getRevenueFromDB,
};
