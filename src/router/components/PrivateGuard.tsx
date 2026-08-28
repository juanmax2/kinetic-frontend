import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../store/useAuth.store";

export function PrivateGuard() {

    const isLoggedIn = useAuth(state => state.isLoggedIn)
    const isLoading = useAuth(state => state.isLoading)
    console.log("PRIVATEGUARDLOGGED", isLoggedIn)
    if (isLoading) {
        return <p>Cargando sesión...</p>
    }
    console.log("PRIVATEGUARDLOGGED", isLoggedIn)
    return isLoggedIn ? <Outlet /> : <Navigate to='/login' replace />
}