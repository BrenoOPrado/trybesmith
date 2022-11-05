import { Request, Response } from 'express';
import OrderService from '../services/orderService';

export default class OrderController {
  service = new OrderService();

  async getAll(req: Request, res: Response): Promise<void> {
    const result = await this.service.getAll();
    
    res.status(200).json(result);
  }
}