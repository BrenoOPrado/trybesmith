import Joi from 'joi';
import { IToken, ILogin } from '../interfaces';
import validateBody from '../middlewares/validateBody';
import AuthMiddleware from '../middlewares/authMiddleware';
import LoginModel from '../models/loginModel';

export default class LoginService {
  private auth;
  private model;

  constructor() {
    this.auth = new AuthMiddleware();
    this.model = new LoginModel();
  }

  insert = async (body:ILogin) => {
    const schema = Joi.object<ILogin>({
      username: Joi.string().required(),
      password: Joi.string().required(),
    });
    const { error } = schema.validate(body);
    if (error) {
      return { type: 'error', status: 400, message: error.message }
    }

    const users = await this.model.findByUser(body);
    
    if (users.length < 1) {
      return { type: 'error', status: 401, message: 'Username or password invalid' }
    }

    const { password, ...data } = body;
    const token: IToken = this.auth.generateToken(data);
  
    return { type: null, status: 200, message: token };
  }
}