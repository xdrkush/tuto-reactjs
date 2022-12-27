import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3030/api",
  headers: { "X-Custom-Header": "Tuto-hsuk" },
});

export default api;
