import type { AxiosInstance, InternalAxiosRequestConfig } from "axios";

interface CustomAxiosRequestConfig extends InternalAxiosRequestConfig {
    _retry?: boolean;
}

export const setupInterceptors = (instance: AxiosInstance) => {
    instance.interceptors.request.use(
        (config) => config,
        (error) => Promise.reject(error)
    );

    instance.interceptors.response.use(
        (response) => response,
        async (error) => {
            const originalRequest = error.config as CustomAxiosRequestConfig

            if (error.response?.status === 401 && !originalRequest._retry) {
                originalRequest._retry = true

                try {

                    await instance.post("auth/refresh/")

                    return instance(originalRequest)
                }catch (refreshError) {
                    console.error("Session expired, please log in again.")
                    window.location.href = '/login';
                    return Promise.reject(refreshError)
                }
            }

            return Promise.reject(error)
        }
    );
};