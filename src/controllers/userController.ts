import { Request, Response } from 'express';
import { IToken } from '../interfaces';
import UserService from '../services/userService';

export default class UserController {
  service = new UserService();

  async insert(req: Request, res: Response): Promise<void> {
    const result: IToken = await this.service.insert(req.body);
  
    res.status(201).json(result);
  }
}