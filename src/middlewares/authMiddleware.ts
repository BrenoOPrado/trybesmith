import dotenv from 'dotenv';
import jwt, { Secret, SignOptions } from 'jsonwebtoken';
import { IToken, IUser } from "../interfaces";

dotenv.config();

const TOKEN_SECRET_KEY: Secret = process.env.JWT_SECRET || 'secret';

export default class authMiddleware {
  public generateToken(data: IUser): IToken {
      const payload = {
      ...data,
    };

    const jwtConfig: SignOptions = {
      expiresIn: '50m',
      algorithm: 'HS256',
    };
       
    const token: string = jwt.sign(payload, TOKEN_SECRET_KEY, jwtConfig);
       
    return { token };
  };
       
  async authenticateToken(token: IToken): Promise<void> {
    if (!token) {
      const status:number = 401;
      const message:string = 'Token not found';
      throw { status, message };
    }

    try {
      const validateToken = jwt.verify(token.token, TOKEN_SECRET_KEY);
      console.log(validateToken);
      return;
    } catch (error) {
      const status:number = 401;
      const message:string = 'Expired or invalid token';
      throw { status, message };
    }
  };
}