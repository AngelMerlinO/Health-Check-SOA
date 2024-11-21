import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import healthRoutes from "./routes/healthRoutes";
import userRoutes from "./routes/userRoutes";
import productRoutes from "./routes/productRoutes";
import orderRoutes from "./routes/orderRoutes";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

// Rutas de Health Checks
app.use("/health", healthRoutes);

// Rutas para microservicios
app.use("/users", userRoutes);
app.use("/products", productRoutes);
app.use("/orders", orderRoutes);

app.listen(PORT, () => {
  console.log(`API Gateway running on port ${PORT}`);
});