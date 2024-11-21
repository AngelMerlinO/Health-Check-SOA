import express from "express";
import axios from "axios";

const router = express.Router();

const services = [
  { name: "UserService", url: "http://localhost:3001/users/health" },
  { name: "ProductService", url: "http://localhost:3002/products/health" },
  { name: "OrderService", url: "http://localhost:3003/orders/health" },
];

router.get("/", async (req, res) => {
  const results = await Promise.all(
    services.map(async (service) => {
      try {
        const response = await axios.get(service.url);
        return { name: service.name, status: "healthy", details: response.data };
      } catch (err: any) {
        return { name: service.name, status: "unhealthy", error: err.message };
      }
    })
  );
  res.json(results);
});

export default router;