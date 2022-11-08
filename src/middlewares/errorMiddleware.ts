import { NextFunction, Request, Response } from 'express';
import Exception from './exception';

const errorMiddleware = (err: Error, _req: Request, res: Response, _next: NextFunction) => {
  console.log('deu o erro:----------------------');
  console.log(err);
  console.log('---------------------------------');

  const { status, message } = err as Exception;
  
  res.status(status || 500).json({ message });
};

export default errorMiddleware;
