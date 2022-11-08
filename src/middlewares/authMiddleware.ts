import jwt, { Secret, SignOptions } from 'jsonwebtoken';
import { IToken, IUser } from '../interfaces';
import Exeption from './exception';

const TOKEN_SECRET_KEY: Secret = 'secret';

type Login = {
  username: string,
};

export default class AuthMiddleware {
  generateToken = (data: IUser | Login): IToken => {
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
       
  authenticateToken = async (token: IToken): Promise<void> => {
    if (!token) {
      const status = 401;
      const message = 'Token not found';
      throw new Exeption(status, message);
    }

    try {
      // const validateToken = jwt.verify(token.token, TOKEN_SECRET_KEY);
      return;
    } catch (error) {
      const status = 401;
      const message = 'Expired or invalid token';
      throw new Exeption(status, message);
    }
  };
}
