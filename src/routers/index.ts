import express from 'express';
import productsRouter from './productsRouter';

const routers = express.Router();

routers.use('/products', productsRouter);

export default routers;