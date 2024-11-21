import express from "express";
import { UserRepository } from "../repositories/UserRepository";
import { UserService } from "../services/UserService";
import { UserController } from "../controllers/UserController";

const userRouter = express.Router();
const repository = new UserRepository();
const service = new UserService(repository);
const controller = new UserController(service);

userRouter.get("/", (req, res) => controller.getAllUsers(req, res));
userRouter.post("/", (req, res) => controller.createUser(req, res));
userRouter.get("/health", (req, res) => {
    res.status(200).json({ status: "healthy", service: "UserService" });
  });

export default userRouter;