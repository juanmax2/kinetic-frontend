import { Link } from "react-router-dom"
import { useAuth } from "../../../../store/useAuth.store"
import './Header.css'

export function Header() {

    const logout = useAuth(state => state.logout)

    const isLoggedIn = useAuth(state => state.isLoggedIn)

    return(
        <header className="header">
            <Link to='/dashboard'><img className="logo-header" src="/kinetic-logo.webp" alt="Kinetic logo" /></Link>
                        
            <label htmlFor="menu" className="menu-button">
                <img className="menu-img" src="/menu.svg" alt="Menu button" />
            </label>

            <input className="menu-check" id="menu" name="menu" type="checkbox" hidden />

            <nav className="nav-bar">
                <ul className="nav-list">
                    {isLoggedIn && (
                        <>
                            <li><Link to={'/update-profile'} replace>Update Profile</Link></li>
                            <li><Link to={'/workouts/graphics'} replace>My Graphics</Link></li>
                            <li className="logout" onClick={logout}>Logout</li>
                        </>
                    )}
                </ul>
            </nav>
        </header>
    )
}