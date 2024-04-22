import axios from "axios";
import { useStateContext } from "./context/ContextProvider.jsx";

const axiosClient = axios.create({
    baseURL: 'http://localhost:8000/api'
});

axiosClient.interceptors.request.use((config) => {
    const token = localStorage.getItem('ACCESS_TOKEN');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

axiosClient.interceptors.response.use(
    (response) => response,
    (error) => {
        const { response } = error;
        if (response && response.status === 401) {
            localStorage.removeItem('ACCESS_TOKEN');
        } else if (response && response.status === 404) {
            // Handle 404 error
        }
        throw error;
    }
);

export default axiosClient;
