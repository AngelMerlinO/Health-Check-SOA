import express from "express";
import axiosInstance from "../utils/axiosInstance"; // Instancia de axios con reintentos

const router = express.Router();

// Obtener todos los productos
router.get("/", async (req, res) => {
  try {
    const response = await axiosInstance.get("http://localhost:3002/products");
    res.status(response.status).json(response.data);
  } catch (err: any) {
    console.error("Error fetching products from ProductService:", err.message);
    res.status(503).json({
      error: "ProductService is currently unavailable",
      details: err.message,
    });
  }
});

// Crear un nuevo producto
router.post("/", async (req, res) => {
  try {
    const response = await axiosInstance.post("http://localhost:3002/products", req.body);
    res.status(response.status).json(response.data);
  } catch (err: any) {
    console.error("Error creating product in ProductService:", err.message);
    res.status(503).json({
      error: "ProductService is currently unavailable",
      details: err.message,
    });
  }
});

export default router;