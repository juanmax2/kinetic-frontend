import { ExercisesList } from "../../exercises/components/ExercisesList"
import { LoginPage } from "../../pages/loginPage/LoginPage"
import { RegisterPage } from "../../pages/registerPage/RegisterPage"
import { RootRedirect } from "../components/RootRedirect"

export const publicRouter = [
    {
        path: '/',
        element: <RootRedirect />
    },
    {
        path: '/register',
        element: <RegisterPage />,
    },
    {
        path: '/login',
        element: <LoginPage />
    },
    {
        path: '/exercises',
        element: <ExercisesList />
    }
]