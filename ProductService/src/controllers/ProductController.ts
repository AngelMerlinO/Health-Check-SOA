import { Request, Response } from "express";
import { ProductRepository } from "../repositories/ProductRepository";

const repository = new ProductRepository();

export class ProductController {
  async getAllProducts(req: Request, res: Response) {
    try {
      const products = await repository.getAll();
      res.json(products);
    } catch (err) {
      res.status(500).json({ error: "Failed to fetch products" });
    }
  }

  async createProduct(req: Request, res: Response) {
    try {
      const { id, name, price } = req.body;
      const product = await repository.create({ id, name, price });
      res.json(product);
    } catch (err) {
      res.status(500).json({ error: "Failed to create product" });
    }
  }
}