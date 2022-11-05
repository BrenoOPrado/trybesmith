import { RowDataPacket } from 'mysql2';
import { IProduct } from '../interfaces';
import connection from './connection';

export default class ProductsModel {
  conn = connection;

  async insert(body:IProduct):Promise<IProduct> {
    console.log('antes de inserir');
    
    const [[result]] = await this.conn
      .execute <IProduct[] & RowDataPacket[]>(
      'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
      [body.name, body.amount],
    );
  
    console.log(result);
  
    return result;
  }

  async getAll():Promise<IProduct[]> {
    const [result] = await this.conn
      .execute <IProduct[] & RowDataPacket[]>(
      'SELECT * FROM Trybesmith.Products',
    );

    return result;
  }
}