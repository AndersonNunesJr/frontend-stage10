/* eslint-disable prettier/prettier */
import axios from "axios";

export const api = axios.create({
  baseURL: "https://rocketnotes-api-b08d.onrender.com",
});
