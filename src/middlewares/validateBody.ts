import Joi from 'joi';
import { ILogin, IProduct, IUser } from '../interfaces';
import Exception from './exception';

function validateBody(
  body:IProduct | IUser | ILogin,
  schema:Joi.ObjectSchema<IProduct | IUser | ILogin>,
): void {
  const { error } = schema.validate(body);
  
  if (error) {
    console.log('entrou');
    console.log(error.message);
    throw new Exception(400, error.message);
  }
}

export default validateBody;