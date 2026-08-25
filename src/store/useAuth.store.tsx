import { create } from "zustand";
import type { User } from "../user/models/User.model";
import api from "../api/index";

interface LoginCredentials {
    username: string;
    email?: string;
    password: string;
}

interface AuthStoreType {
    user: User | null;
    isLoggedIn: boolean;
    isLoading: boolean;
    login: (credentials: LoginCredentials) => Promise<void>;
    logout: () => Promise<void>;
    checkAuth: () => Promise<void>;
}


export const useAuth = create<AuthStoreType>()(
    (set) => ({
        user: null,
        isLoggedIn: false,
        isLoading: false,

        login: async (credentials) => {
            set({ isLoading: true })
            try {
                const response = await api.post<User>('/auth/login/', credentials)

                set({
                    user: response.data,
                    isLoggedIn: true,
                    isLoading: false,
                })
            } catch (error) {
                set({ isLoading: false });
                console.error("Login error:", error)
                throw error;
            }
        },

        logout: async () => {
            set({ isLoading: true })
            try {
                const response = await api.post('/auth/logout')
                console.log(response)
                set({
                    user: null,
                    isLoggedIn: false,
                    isLoading: false,
                })
            } catch(error) {
                set({ isLoading: false });
                console.error("Logout error:", error)
                throw error;
            }
        },

        checkAuth: async () => {
            set({ isLoading: true })
            try {

                const response = await api.get<User>('/users/me/');
                set({
                    user: response.data,
                    isLoggedIn: true,
                    isLoading: false,
                })
            } catch (error) {
                set({
                    user: null,
                    isLoggedIn: false,
                    isLoading: false,
                })
                console.log(error)
            }
        },
 
    })
)