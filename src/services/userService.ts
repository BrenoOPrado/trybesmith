import Joi from 'joi';
import { IToken, IUser } from '../interfaces';
import validateBody from '../middlewares/validateBody';
import UserModel from '../models/userModel';
import AuthMiddleware from '../middlewares/authMiddleware';

export default class UserService {
  private auth;
  private model;

  constructor() {
    this.auth = new AuthMiddleware();
    this.model = new UserModel();
  }

  insert = async (body:IUser): Promise<IToken> => {
    const schema = Joi.object<IUser>({
      username: Joi.string().required(),
      classe: Joi.string().required(),
      level: Joi.number().required(),
      password: Joi.string().required(),
    });
    validateBody(body, schema);
    
    await this.model.insert(body);

    const { password, ...data } = body;
    const token: IToken = this.auth.generateToken(data);
  
    return token;
  }
} 