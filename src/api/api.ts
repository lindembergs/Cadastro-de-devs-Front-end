import axios from "axios";

export const api = axios.create({
  baseURL: "https://cadastro-de-devs.onrender.com/",
});
