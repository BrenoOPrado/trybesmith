import express from 'express';
import productsRouter from './productsRouter';
import usersRouter from './usersRouter';
import orderRouter from './orderRouter';

const routers = express.Router();

routers.use('/products', productsRouter);
routers.use('/users', usersRouter);
routers.use('/orders', orderRouter);

export default routers;