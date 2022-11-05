import express from 'express';
import OrderController from '../controllers/orderController';

const orderRouter = express.Router();

const controller = new OrderController();

orderRouter.get('/', controller.getAll);

export default orderRouter;