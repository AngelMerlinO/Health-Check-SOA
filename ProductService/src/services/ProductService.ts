import { ProductRepository } from "../repositories/ProductRepository";

export class ProductService {
  constructor(private repository: ProductRepository) {}

  getAllProducts() {
    return this.repository.getAll();
  }

  createProduct(name: string, price: number) {
    const id = Date.now();
    return this.repository.create({ id, name, price });
  }
}