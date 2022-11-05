import OrderModel from '../models/orderModel';

export default class OrderService {
  model = new OrderModel();

  async getAll() {
    const result = await this.model.getAll();
  
    return result;
  }
} 