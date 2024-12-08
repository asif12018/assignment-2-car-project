import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { CarRoutes } from './app/modules/car/car.route';
import { OrderRoutes } from './app/modules/order/order.route';
const app: Application = express();

app.use(express.json());
app.use(cors());

app.use('/api/v1', CarRoutes);
app.use('/api/v1', OrderRoutes);

app.get('/,', (req: Request, res: Response) => {
  res.send('server started');
});

export default app;
