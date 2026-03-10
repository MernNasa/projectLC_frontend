import axios from "axios";
export const axiosInstance = axios.create({
    baseURL: "https://projectlc-0ft2.onrender.com",
    withCredentials: true,
});