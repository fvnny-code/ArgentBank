import axios from "axios";


export const clientHTTP = axios.create({
  baseURL: import.meta.env.VITE_API_URI,
  headers: {
    "Content-Type": "application/json",
  },
});

export const authenticate = async (email, password) => {
  return await clientHTTP
    .post("/user/login", { email, password })
    .then((response) => response.data.body);
};

export const getUserInfos = async () => {
  return await clientHTTP
    .post("/user/profile")
    .then((response) => response.data.body);
};
