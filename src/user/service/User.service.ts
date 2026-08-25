import api from "../../api/index";
import type { FormValues } from "../components/registerForm/schema/registerSchema";



export const userService = {

    registerUser: (data: Omit<FormValues, 'confirmPassword'>) => {
        return api.post<FormValues>('/users/', data)
    }
}
