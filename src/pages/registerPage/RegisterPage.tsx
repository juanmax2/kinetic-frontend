import { Link } from "react-router-dom";
import { RegisterForm } from "../../user/components/RegisterForm";
import './RegisterPage.css'

export function RegisterPage() {

    return (
        <>
            <picture className="img-logo-container">
                <img className="logo-image" src="/kinetic-logo.webp" alt="Kinetic logo"/>
            </picture>
            <RegisterForm />
            <div className="login-link-container">
                <small className="login-link">
                You're registered, sign in, 
                <Link to={`/login/`}>
                    here
                </Link>
                </small>
            </div>
        </>

    )
}