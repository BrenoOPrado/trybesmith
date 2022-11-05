import { Request, Response } from 'express';
import { IProduct } from '../interfaces';
import ProductsService from '../services/productsService';

export default class ProductsController {
  service = new ProductsService();

  async insert(req: Request, res: Response): Promise<void> {
    const result: IProduct = await this.service.insert(req.body);
  
    res.status(201).json(result);
  }

  async getAll(req: Request, res: Response): Promise<void> {
    const result: IProduct[] = await this.service.getAll();
    
    res.status(200).json(result);
  }
}