import express from "express";
import bodyParser from "body-parser";
import userRoutes from "./routes/UserRoutes";

const app = express();
const PORT = 3001;

app.use(bodyParser.json()); // Middleware para interpretar JSON
app.use("/users", userRoutes); // Montar el router en el endpoint '/users'

app.listen(PORT, () => {
  console.log(`UserService running on port ${PORT}`);
});