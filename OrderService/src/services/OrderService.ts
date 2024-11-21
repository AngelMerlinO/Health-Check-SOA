import { OrderRepository } from "../repositories/OrderRepository";

interface Order {
  id: number;
  userId: number;
  productId: number;
  quantity: number;
}

export class OrderService {
  private repository: OrderRepository;

  constructor(repository: OrderRepository) {
    this.repository = repository;
  }

  async getAllOrders(): Promise<Order[]> {
    return this.repository.getAll();
  }

  async createOrder(order: Order): Promise<Order | string> {
    return this.repository.create(order);
  }
}