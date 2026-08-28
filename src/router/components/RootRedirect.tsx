import { Navigate } from "react-router-dom";
import { useAuth } from "../../store/useAuth.store";


export function RootRedirect() {
    const isLoggedIn = useAuth(state => state.isLoggedIn)

    return isLoggedIn ? <Navigate to='/dashboard' replace /> : <Navigate to='/login' replace />
}