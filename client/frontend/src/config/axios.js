import axios from "axios";

export const authFetch = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    Accept: "application/json",
  },
});

