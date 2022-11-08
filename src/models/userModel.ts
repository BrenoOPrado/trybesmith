import { RowDataPacket } from 'mysql2';
import { IUser } from '../interfaces';
import connection from './connection';

export default class UserModel {
  conn = connection;

  insert = async (body:IUser):Promise<IUser> => {
    const [[result]] = await this.conn
      .execute <IUser[] & RowDataPacket[]>(
      `INSERT INTO Trybesmith.Users (username, classe, level, password)
      VALUE (?, ?, ?, ?)`,
      [body.username, body.classe, body.level, body.password],
    );
  
    return result;
  }
}