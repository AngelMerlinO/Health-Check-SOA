import { Request, Response } from "express";
import { UserService } from "../services/UserService";

export class UserController {
  constructor(private service: UserService) {}

  async getAllUsers(req: Request, res: Response) {
    const users = await this.service.getAllUsers();
    res.json(users);
  }

  async createUser(req: Request, res: Response) {
    const { name, email } = req.body;
    try {
      const user = await this.service.createUser(name, email);
      res.status(201).json(user);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
}