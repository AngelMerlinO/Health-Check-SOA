import { db } from "../database/connection";
import { RowDataPacket } from "mysql2";

interface Product {
  id: number;
  name: string;
  price: number;
}

export class ProductRepository {
  async getAll(): Promise<Product[]> {
    try {
      const [rows] = await db.query<RowDataPacket[]>("SELECT * FROM products");
      return rows as Product[];
    } catch (err) {
      console.error("Error fetching products:", err);
      throw err;
    }
  }

  async create(product: Product): Promise<Product> {
    try {
      await db.query(
        "INSERT INTO products (id, name, price) VALUES (?, ?, ?)",
        [product.id, product.name, product.price]
      );
      return product;
    } catch (err) {
      console.error("Error creating product:", err);
      throw err;
    }
  }

  async findById(id: number): Promise<Product | null> {
    try {
      const [rows] = await db.query<RowDataPacket[]>(
        "SELECT * FROM products WHERE id = ?",
        [id]
      );
      const products = rows as Product[];
      return products.length > 0 ? products[0] : null;
    } catch (err) {
      console.error("Error finding product:", err);
      throw err;
    }
  }
}