import { ExercisesList } from "../../exercises/components/ExercisesList"
import { LoginPage } from "../../pages/loginPage/LoginPage"
import { PrivacyPage } from "../../pages/privacyPage/PrivacyPage"
import { RegisterPage } from "../../pages/registerPage/RegisterPage"
import { TermsPage } from "../../pages/termsPage/TermsPage"
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
    },
    {
        path: '/privacy-policy',
        element: <PrivacyPage />
    },
    {
        path: '/terms-of-use',
        element: <TermsPage />
    }
]