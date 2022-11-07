import { Request, Response } from 'express';
import { IToken } from '../interfaces';
import LoginService from '../services/loginService';

export default class LoginController {
  constructor(private service = new LoginService()) {}

  async insert(req: Request, res: Response): Promise<void> {
    const result: IToken = await this.service.insert(req.body);
  
    res.status(200).json(result);
  }
}