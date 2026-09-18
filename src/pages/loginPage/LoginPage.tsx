import { Link } from "react-router-dom";
import { LoginForm } from "../../user/components/loginForm/LoginForm";
import './LoginPage.css'
export function LoginPage() {

    return (
        <>
            <picture className="img-logo-container">
                <img className="logo-image" src="/kinetic-logo.webp" alt="Kinetic logo"/>
            </picture>
            <LoginForm />
            <div className="register-link-container">
                <small className="register-link">
                If you are not registered,
                <Link to={`/register/`}>
                    click here
                </Link>
            </small>
            </div>
        </>
    )
}