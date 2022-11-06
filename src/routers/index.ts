import express from 'express';
import productsRouter from './productsRouter';
import usersRouter from './usersRouter';
import orderRouter from './orderRouter';
import loginRouter from './loginRouter';

const routers = express.Router();

routers.use('/login', loginRouter);
routers.use('/users', usersRouter);
routers.use('/products', productsRouter);
routers.use('/orders', orderRouter);

export default routers;