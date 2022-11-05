import { NextFunction, Request, Response } from 'express';

const errorMiddleware = (err: Error, req: Request, res: Response, _next: NextFunction) => {
  console.log('deu o erro:----------------------');
  console.log(err);
  console.log('---------------------------------');
  
  res.status(500).json(err);
};

export default errorMiddleware;
