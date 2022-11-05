import Joi from 'joi';
import { IProduct, IUser } from '../interfaces';

function validateBody(
  body:IProduct | IUser, schema:Joi.ObjectSchema<IProduct | IUser>,
  ): void {
  const { error } = schema.validate(body);
  const status: number = 400;

  if (error) {
    throw {status, message: error};
  }
}

export default validateBody;