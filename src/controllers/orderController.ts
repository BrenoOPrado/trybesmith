import { Request, Response } from 'express';
import OrderService from '../services/orderService';

export default class OrderController {
  constructor(private service = new OrderService()) {}

  getAll = async (_req: Request, res: Response): Promise<void> => {
    const result = await this.service.getAll();
    
    res.status(200).json(result);
  };
}
