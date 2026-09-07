import { Link } from "react-router-dom"
import { useAuth } from "../../../../store/useAuth.store"
import './Header.css'

export function Header() {

    const logout = useAuth(state => state.logout)

    const isLoggedIn = useAuth(state => state.isLoggedIn)
    // const user = useAuth(state => state.user)


    return(
        <header className="header">
            <img className="logo-header" src="/kinetic-logo.webp" alt="Kinetic logo" />
            <nav className="nav-bar">
                <ul className="nav-list">
                    {isLoggedIn ? (
                        <>
                            <li><Link to={'/update-profile'} replace>Update Profile</Link></li>
                            <li className="logout" onClick={logout}>Logout</li>
                        </>
                    ) : (
                        <>
                            <li>
                                Login
                            </li>
                            <li>
                                Registrarse
                            </li>
                        </>
                    )}
                </ul>
            </nav>
        </header>
    )
}