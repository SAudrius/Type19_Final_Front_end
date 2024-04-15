import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3003/api/v1",
});

export const authApi = (jwtToken: string) =>
  axios.create({
    baseURL: "http://localhost:3003/api/v1",
    headers: {
      Authorization: `Bearer ${jwtToken}`,
    },
  });
