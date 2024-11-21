import { UserRepository } from "../repositories/UserRepository";

export class UserService {
  constructor(private repository: UserRepository) {}

  async getAllUsers() {
    return await this.repository.getAll();
  }

  async createUser(name: string, email: string) {
    const id = Date.now();
    const user = await this.repository.create({ id, name, email });
    if (!user) {
      throw new Error(`Email ${email} is already in use.`);
    }
    return user;
  }
}