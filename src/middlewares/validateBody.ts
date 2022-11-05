import Joi from 'joi';
import { IProduct, IUser } from '../interfaces';
import Exception from './exception';

function validateBody(body:IProduct | IUser, schema:Joi.ObjectSchema<IProduct | IUser>): void {
  const { error } = schema.validate(body);

  if (error) {
    throw new Exception(400, error.message);
  }
}

export default validateBody;