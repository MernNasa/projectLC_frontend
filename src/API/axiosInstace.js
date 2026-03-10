import axios from "axios";
export const axiosInstance = axios.create({
    baseURL: "https://project-lc.vercel.app",
    withCredentials: true,
});