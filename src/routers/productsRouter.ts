import express from 'express';
import ProductsController from '../controllers/productsController';

const productsRouter = express.Router();

const controller = new ProductsController();

productsRouter.post('/', controller.insert);

productsRouter.get('/', controller.getAll);

export default productsRouter;