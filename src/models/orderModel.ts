import connection from './connection';

export default class ProductsModel {
  conn = connection;

  async getAll() {
    const [result] = await this.conn
      .execute(
        `SELECT ord,
        JSON_ARRAYAGG(prod.orderId) AS productsIds
        FROM Trybesmith.Products AS prod
        INNER JOIN Trybesmith.Orders AS ord
        ON prod.orderId === ord.id`,
      );

    return result;
  }
}