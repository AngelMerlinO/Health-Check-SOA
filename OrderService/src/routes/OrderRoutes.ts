import express from "express";
import { OrderRepository } from "../repositories/OrderRepository";
import { OrderService } from "../services/OrderService";
import { OrderController } from "../controllers/OrderController";

const orderRouter = express.Router();
const repository = new OrderRepository();
const service = new OrderService(repository);
const controller = new OrderController(service);

orderRouter.get("/", (req, res) => controller.getAllOrders(req, res));
orderRouter.post("/", (req, res) => controller.createOrder(req, res));
orderRouter.get("/health", (req, res) => {
    res.status(200).json({ status: "healthy", service: "OrderService" });
  });


export default orderRouter;