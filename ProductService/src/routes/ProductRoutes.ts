import express from "express";
import { ProductRepository } from "../repositories/ProductRepository";
import { ProductService } from "../services/ProductService";
import { ProductController } from "../controllers/ProductController";

const productRouter = express.Router();

const repository = new ProductRepository();
const service = new ProductService(repository);
const controller = new ProductController();

productRouter.get("/", (req, res) => controller.getAllProducts(req, res));
productRouter.post("/", (req, res) => controller.createProduct(req, res));
productRouter.get("/health", (req, res) => {
    res.status(200).json({ status: "healthy", service: "ProductService" });
  });

export default productRouter;