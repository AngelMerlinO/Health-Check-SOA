import { db } from "../database/connection";

interface Order {
  id: number;
  userId: number;
  productId: number;
  quantity: number;
}

export class OrderRepository {
  async getAll(): Promise<Order[]> {
    const [rows] = await db.query("SELECT * FROM orders");
    return rows as Order[];
  }

  async create(order: Order): Promise<Order | string> {
    try {
      await db.query(
        "INSERT INTO orders (id, user_id, product_id, quantity) VALUES (?, ?, ?, ?)",
        [order.id, order.userId, order.productId, order.quantity]
      );
      return order;
    } catch (err: any) {
      // Manejo del error de clave foránea
      if (err.code === "ER_NO_REFERENCED_ROW_2") {
        console.error("Error: Foreign key constraint failed:", err.sqlMessage);
        return "Error: Cannot add or update a child row due to foreign key constraint.";
      }
      // Re-lanzar otros errores si no es de clave foránea
      throw err;
    }
  }

  async findById(id: number): Promise<Order | null> {
    const [rows] = await db.query("SELECT * FROM orders WHERE id = ?", [id]);
    const orders = rows as Order[];
    return orders.length > 0 ? orders[0] : null;
  }
}