import { db } from "../database/connection";
import { RowDataPacket } from "mysql2"; // Importa RowDataPacket

interface User {
  id: number;
  name: string;
  email: string;
}

export class UserRepository {
  async getAll(): Promise<User[]> {
    const [rows] = await db.query<RowDataPacket[]>("SELECT * FROM users");
    return rows as User[];
  }

  async create(user: User): Promise<User | null> {
    try {
      await db.query("INSERT INTO users (id, name, email) VALUES (?, ?, ?)", [
        user.id,
        user.name,
        user.email,
      ]);
      return user;
    } catch (error: any) {
      if (error.code === "ER_DUP_ENTRY") {
        console.error(`Duplicate email: ${user.email}`);
        return null; // Devuelve null si el email ya existe
      }
      throw error; // Lanza cualquier otro error
    }
  }
}