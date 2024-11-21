import axios from "axios";
import axiosRetry from "axios-retry";

// Crear una instancia de axios
const axiosInstance = axios.create();

// Configurar reintentos automáticos
axiosRetry(axiosInstance, {
  retries: 3, // Número de reintentos
  retryDelay: (retryCount) => {
    console.log(`Retrying request... Attempt ${retryCount}`);
    return retryCount * 1000; // Retraso en milisegundos
  },
  retryCondition: (error) => {
    // Reintentar sólo en errores de red o respuestas 5xx
    return error.code === "ECONNABORTED" || (error.response?.status ?? 0) >= 500;
  },
});

export default axiosInstance;