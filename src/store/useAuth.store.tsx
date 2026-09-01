import { create } from "zustand";
import type { GenderType, GoalType, User } from "../user/models/User.model";
import api from "../api/index";


interface LoginCredentials {
    username: string;
    email?: string;
    password: string;
}
interface LoginResponse {
    access: string;
    user: User;
}

interface ProfileUpdater {
    username?: string;
    email?: string;
    age?: number | null;
    weight?: number | null;
    height?: number | null;
    goal?: GoalType;
    gender?: GenderType;
}

interface AuthStoreType {
    user: User | null;
    isLoggedIn: boolean;
    isLoading: boolean;
    login: (credentials: LoginCredentials) => Promise<void>;
    logout: () => Promise<void>;
    checkAuth: () => Promise<void>;
    updateProfile: (updaters: ProfileUpdater) => Promise<void>;
}


export const useAuth = create<AuthStoreType>()(
    (set) => ({
        user: null,
        isLoggedIn: false,
        isLoading: true,

        login: async (credentials) => {
            set({ isLoading: true })
            try {
                const response = await api.post<LoginResponse>('/auth/login/', credentials)

                set({
                    user: response.data.user,
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
                const response = await api.post('/auth/logout/')
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

        updateProfile: async (updatedData) => {
            set({ isLoading: true })

            try {
                const response = await api.put('/users/me/', updatedData);

                set({
                    user: response.data
                })
                console.log("Update Profile Succes")

            }catch(err) {
                console.error(err)
            }finally {
                set({ isLoading: false })
            }
        },

        checkAuth: async () => {
            set({ isLoading: true })
            console.log(useAuth.getState().isLoading)
            try {

                const response = await api.get<User>('/users/me/');
                console.log("CHECKAUTH EXITOSO:", response.data)

                set({
                    user: response.data,
                    isLoggedIn: true,
                    isLoading: false,
                })
                console.log(useAuth.getState().isLoading)
                console.log("ISLOGGEDIN", useAuth.getState().isLoggedIn)
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