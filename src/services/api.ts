import axios from "axios";

const api = axios.create({
  baseURL: "https://frontendproject.b2bit.company",
});

export default api;
