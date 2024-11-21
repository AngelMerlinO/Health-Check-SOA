import express from "express";
import bodyParser from "body-parser";
import userRoutes from "./routes/OrderRoutes";

const app = express();
const PORT = 3003;

app.use(bodyParser.json()); // Middleware para interpretar JSON
app.use("/orders", userRoutes); // Montar el router en el endpoint '/orderS'

app.listen(PORT, () => {
  console.log(`orderService running on port ${PORT}`);
});