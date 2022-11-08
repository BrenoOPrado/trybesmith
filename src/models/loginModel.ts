import { RowDataPacket } from 'mysql2';
import { ILogin, IUser } from '../interfaces';
import connection from './connection';

export default class LoginModel {
  conn = connection;

  findByUser = async (body:ILogin):Promise<IUser[]> => {
    const [result] = await this.conn
      .execute <IUser[] & RowDataPacket[]>(
      `SELECT * FROM Trybesmith.Users AS users
      WHERE users.username=? AND users.password=?`,
      [body.username, body.password],
    );
  
    return result;
  };
}
