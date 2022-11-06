import LoginModel from '../models/loginModel';
import { ILogin } from '../interfaces';
import Exception from './exception';

export default class ValidateLogin {
  model = new LoginModel();

  async verifyLogin(body:ILogin): Promise<void> {
    const users = await this.model.findByUser(body.username);
    if (!users || !users.some((user) => user.password === body.password)) {
      throw new Exception(401, 'Username or password invalid');
    }
  }
}