import Joi from 'joi';
import { IToken, ILogin } from '../interfaces';
import validateBody from '../middlewares/validateBody';
import AuthMiddleware from '../middlewares/authMiddleware';
import ValidateLogin from '../middlewares/validateLogin';

export default class LoginService {
  auth = new AuthMiddleware();
  
  login = new ValidateLogin();

  async insert(body:ILogin): Promise<IToken> {
    const schema = Joi.object<ILogin>({
      username: Joi.string().required(),
      password: Joi.string().required(),
    });
    validateBody(body, schema);

    this.login.verifyLogin(body);

    const { password, ...data } = body;
    const token: IToken = this.auth.generateToken(data);
  
    return token;
  }
}