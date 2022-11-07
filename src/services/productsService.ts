import Joi from 'joi';
import { IProduct } from '../interfaces';
import validateBody from '../middlewares/validateBody';
import ProductsModel from '../models/productsModel';

export default class ProductsService {
  constructor(private model = new ProductsModel()) {}

  insert = async (body:IProduct): Promise<IProduct> => {    
    const schema = Joi.object<IProduct>({
      name: Joi.string().required(),
      amount: Joi.string().required(),
    });
    validateBody(body, schema);
    
    const result:IProduct = await this.model.insert(body);
  
    return result;
  }

  getAll = async (): Promise<IProduct[]> => {
    const result:IProduct[] = await this.model.getAll();
  
    return result;
  }
} 