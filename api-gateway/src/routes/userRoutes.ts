import express from "express";
import axiosInstance from "../utils/axiosInstance"; // Instancia de Axios con reintentos

const router = express.Router();

// Obtener todos los usuarios
router.get("/", async (req, res) => {
  try {
    const response = await axiosInstance.get("http://localhost:3001/users");
    res.status(response.status).json(response.data);
  } catch (err: any) {
    console.error("Error fetching users from UserService:", err.message);
    res.status(503).json({
      error: "UserService is currently unavailable",
      details: err.message,
    });
  }
});

// Crear un nuevo usuario
router.post("/", async (req, res) => {
  try {
    const response = await axiosInstance.post("http://localhost:3001/users", req.body);
    res.status(response.status).json(response.data);
  } catch (err: any) {
    console.error("Error creating user in UserService:", err.message);
    res.status(503).json({
      error: "UserService is currently unavailable",
      details: err.message,
    });
  }
});

export default router;