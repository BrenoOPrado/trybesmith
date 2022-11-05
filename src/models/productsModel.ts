import { RowDataPacket } from 'mysql2';
import IProduct from '../interfaces';
import connection from './connection';

export default class ProductsModel {
  conn = connection;

  async insert(body:IProduct):Promise<IProduct> {
    console.log('antes de inserir');
    
    const [[result]] = await this.conn
      .execute <IProduct[] & RowDataPacket[]>(
      'INSERT INTO products (name, amount) VALUES (?, ?)',
      [body.name, body.amount],
    );
  
    console.log(result);
  
    return result;
  }
}