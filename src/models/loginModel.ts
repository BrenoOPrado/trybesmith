import { RowDataPacket } from 'mysql2';
import { IUser } from '../interfaces';
import connection from './connection';

export default class LoginModel {
  conn = connection;

  async findByUser(name:string):Promise<IUser[]> {
    const [result] = await this.conn
      .execute <IUser[] & RowDataPacket[]>(
      `SELECT * FROM Trybesmith.Users AS users
      WHERE users.username === ?`,
      [name],
    );
  
    return result;
  }
}