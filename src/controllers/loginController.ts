import { Request, Response } from 'express';
import LoginService from '../services/loginService';

export default class LoginController {
  constructor(private service = new LoginService()) {}

  insert = async (req: Request, res: Response): Promise<void> => {
    const result = await this.service.insert(req.body);
    const { message, status } = result;

    if (result.type === null) {
      res.status(status).json(result.message);
    }
    res.status(status).json({ message });
  };
}
