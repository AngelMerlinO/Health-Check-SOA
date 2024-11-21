import mysql from "mysql2/promise";

export const db = mysql.createPool({
  host: "localhost",       // Cambia según tu entorno
  user: "root",            // Cambia según tu configuración
  password: "porterojoaom78",    // Cambia según tu configuración
  database: "microservice_users", // Cambia para cada microservicio
});