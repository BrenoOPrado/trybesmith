import Joi from 'joi';
import IProduct from '../../interfaces';

function validateBody(body:IProduct, schema:Joi.ObjectSchema<IProduct>): IProduct {
  const { error } = schema.validate(body);

  if (error) {
    throw error;
  }
  
  return body;
}

export default validateBody;