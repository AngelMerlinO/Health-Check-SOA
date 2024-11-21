import { Request, Response } from "express";
import { OrderService } from "../services/OrderService";

export class OrderController {
  private service: OrderService;

  constructor(service: OrderService) {
    this.service = service;
  }

  async getAllOrders(req: Request, res: Response) {
    try {
      const orders = await this.service.getAllOrders();
      res.json(orders);
    } catch (err) {
      console.error("Error fetching orders:", err);
      res.status(500).json({ error: "Failed to fetch orders" });
    }
  }

  async createOrder(req: Request, res: Response) {
    try {
      const { id, userId, productId, quantity } = req.body;
      const result = await this.service.createOrder({ id, userId, productId, quantity });

      if (typeof result === "string") {
        // Caso de error manejado en el repositorio
        res.status(400).json({ error: result });
      } else {
        res.json(result);
      }
    } catch (err) {
      console.error("Error creating order:", err);
      res.status(500).json({ error: "Failed to create order" });
    }
  }
}