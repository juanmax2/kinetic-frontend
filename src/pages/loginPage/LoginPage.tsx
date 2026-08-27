import { LoginForm } from "../../user/components/loginForm/LoginForm";
import './LoginPage.css'
export function LoginPage() {

    return (
        <>
            <picture className="img-logo-container">
                <img className="logo-image" src="/kinetic-logo.webp" alt="Kinetic logo"/>
            </picture>
            <LoginForm />
        </>
    )
}