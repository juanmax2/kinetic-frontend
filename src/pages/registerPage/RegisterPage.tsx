import { RegisterForm } from "../../user/components/RegisterForm";


export function RegisterPage() {

    return (
        <>
            <picture className="img-logo-container">
                <img className="logo-image" src="/kinetic-logo.webp" alt="Kinetic logo"/>
            </picture>
            <RegisterForm />
        </>

    )
}