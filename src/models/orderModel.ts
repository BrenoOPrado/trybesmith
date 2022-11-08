import connection from './connection';

export default class OrderModel {
  conn = connection;

  getAll = async () => {
    const [result] = await this.conn
      .execute(
        `SELECT ord.id, ord.userId,
        json_arrayagg(prod.id) AS productsIds
        FROM Trybesmith.Orders AS ord
        INNER JOIN Trybesmith.Products AS prod
        ON prod.orderId = ord.id
        GROUP BY ord.id`,
      );

    return result;
  }
}