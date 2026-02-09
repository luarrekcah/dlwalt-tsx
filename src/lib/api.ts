import axios from "axios";
import Cookies from "js-cookie";

const api = axios.create({
    baseURL:
        process.env.NODE_ENV === "development"
            ? "https://api.dwalt.net/api"
            : "https://api.dwalt.net/api",
    headers: {
        "Content-Type": "application/json",
    },
});

// Interceptor para adicionar token automaticamente
api.interceptors.request.use(
    (config) => {
        // Check if running on client side before accessing cookies
        if (typeof window !== "undefined") {
            const token = Cookies.get("token"); // token saved in cookies

            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
        }

        return config;
    },
    (error) => Promise.reject(error)
);

export default api;
