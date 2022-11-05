import Joi from 'joi';
import IProduct from '../interfaces';
import validateBody from './helpers/validateBody';
import ProductsModel from '../models/productsModel';

export default class ProductsService {
  model = new ProductsModel();

  async insert(body:IProduct): Promise<IProduct> {
    const schema = Joi.object<IProduct>({
      name: Joi.string().required(),
      amount: Joi.string().required(),
    });
    const validBody:IProduct = validateBody(body, schema);
  
    const result:IProduct = await this.model.insert(validBody);
  
    return result;
  }

  async getAll(): Promise<IProduct[]> {
    const result:IProduct[] = await this.model.getAll();
  
    return result;
  }
} 