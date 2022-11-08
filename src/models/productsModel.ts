import { ResultSetHeader } from 'mysql2';
import { IProduct } from '../interfaces';
import connection from './connection';

export default class ProductsModel {
  public conn = connection;

  insert = async (body:IProduct):Promise<IProduct> => {    
    const { name, amount } = body;
    const insertId = await this.conn.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount) VALUE (?,?)',
      [name, amount],
    );
  
    return { id: insertId, ...body } as IProduct;
  };

  getAll = async ():Promise<IProduct[]> => {
    const [result] = await this.conn
      .execute <IProduct[] & ResultSetHeader>(
      'SELECT * FROM Trybesmith.Products',
    );

    return result;
  };
}