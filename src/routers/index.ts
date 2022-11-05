import express from 'express';
import productsRouter from './productsRouter';
import usersRouter from './usersRouter';

const routers = express.Router();

routers.use('/products', productsRouter);
routers.use('/users', usersRouter);

export default routers;