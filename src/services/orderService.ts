import OrderModel from '../models/orderModel';

export default class OrderService {
  constructor(private model = new OrderModel()) {}

  getAll = async () => {
    const result = await this.model.getAll();
  
    return result;
  }
} 