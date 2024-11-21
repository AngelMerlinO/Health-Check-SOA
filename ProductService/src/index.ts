import express from "express";
import bodyParser from "body-parser";
import userRoutes from "./routes/ProductRoutes";

const app = express();
const PORT = 3002;

app.use(bodyParser.json()); // Middleware para interpretar JSON
app.use("/products", userRoutes); // Montar el router en el endpoint '/orderS'

app.listen(PORT, () => {
  console.log(`productsService running on port ${PORT}`);
});