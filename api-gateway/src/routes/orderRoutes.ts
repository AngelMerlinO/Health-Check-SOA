import express from "express";
import axiosInstance from "../utils/axiosInstance"; // Instancia de Axios con reintentos

const router = express.Router();

// Obtener todas las órdenes
router.get("/", async (req, res) => {
  try {
    const response = await axiosInstance.get("http://localhost:3003/orders");
    res.status(response.status).json(response.data);
  } catch (err: any) {
    console.error("Error fetching orders from OrderService:", err.message);
    res.status(503).json({
      error: "OrderService is currently unavailable",
      details: err.message,
    });
  }
});

// Crear una nueva orden
router.post("/", async (req, res) => {
  try {
    const response = await axiosInstance.post("http://localhost:3003/orders", req.body);
    res.status(response.status).json(response.data);
  } catch (err: any) {
    console.error("Error creating order in OrderService:", err.message);
    res.status(503).json({
      error: "OrderService is currently unavailable",
      details: err.message,
    });
  }
});

export default router;