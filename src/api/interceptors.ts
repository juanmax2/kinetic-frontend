import type { AxiosInstance } from "axios";


export const setupInterceptors = (instance: AxiosInstance) => {
    instance.interceptors.request.use(
        (config) => {
            //Añadir token authentication
            return config
        },
        (error) => Promise.reject(error)
    );

    instance.interceptors.response.use(
        (response) => response,
        (error) => {
            console.error("Global API error:", error.response?.data || error.message);
            return Promise.reject(error)
        }
    );
};