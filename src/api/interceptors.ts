import type { AxiosInstance, InternalAxiosRequestConfig } from "axios";

interface CustomAxiosRequestConfig extends InternalAxiosRequestConfig {
    _retry?: boolean;
}

let isRefreshing = false;
let failedQueue: Array<{
    resolve: (token?: string) => void;
    reject: (error: unknown) => void;
}> = [];

const processQueue = (error: unknown) => {
    failedQueue.forEach(prom => {
        if (error) {
            prom.reject(error)
        } else {
            prom.resolve()
        }
    })
    failedQueue = []
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
                
                if (originalRequest.url?.includes("auth/refresh/")) {
                    window.location.href = '/login';
                    return Promise.reject(error)
                }
                
                if (isRefreshing) {
                    return new Promise((resolve, reject) => {
                        failedQueue.push({ resolve, reject })
                    })
                        .then(() => {
                            return instance(originalRequest)
                        })
                        .catch(err => {
                            return Promise.reject(err)
                        })
                }

                originalRequest._retry = true
                isRefreshing = true

                try {
                    await instance.post("auth/refresh/")

                    isRefreshing = false;
                    processQueue(null)

                    return instance(originalRequest)
                }catch (refreshError) {
                    isRefreshing = false;
                    processQueue(refreshError)
                    console.error("Session expired, please log in again.")
                    window.location.href = '/login';
                    return Promise.reject(refreshError)
                }
            }

            return Promise.reject(error)
        }
    );
};