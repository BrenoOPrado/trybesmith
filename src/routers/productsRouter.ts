import express from 'express';
import ProductsController from '../controllers/productsController';

const productsRouter = express.Router();

const controller = new ProductsController();

productsRouter.post('/', controller.insert);

export default productsRouter;