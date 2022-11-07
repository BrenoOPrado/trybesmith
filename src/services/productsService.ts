import Joi from 'joi';
import { IProduct } from '../interfaces';
import validateBody from '../middlewares/validateBody';
import ProductsModel from '../models/productsModel';

export default class ProductsService {
  constructor(private model = new ProductsModel()) {}

  async insert(body:IProduct): Promise<IProduct> {
    console.log('entrou no service');
    
    const schema = Joi.object<IProduct>({
      name: Joi.string().required(),
      amount: Joi.string().required(),
    });
    validateBody(body, schema);
    console.log('insert do service');
    
    const result:IProduct = await this.model.insert(body);
  
    return result;
  }

  async getAll(): Promise<IProduct[]> {
    const result:IProduct[] = await this.model.getAll();
  
    return result;
  }
} 