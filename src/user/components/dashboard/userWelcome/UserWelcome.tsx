import { useAuth } from "../../../../store/useAuth.store";
import './UserWelcome.css'

export function UserWelcome() {

    const user = useAuth(state => state.user)

    return(
        <section className="user-welcome-section">
            <h1 className="welcome-title">Bienvenido, {" "}<span className="username-span"> {user?.username}</span></h1>

            <p className="frase-motivadora">"El esfuerzo de hoy es el resultado de mañana</p>
            
            <div className="information-container">
                <article className="peso-card">
                    {user?.profile ? (
                        <h3>Peso actual</h3>

                    ) : <p>Link para personalizar el perfil</p>}
                </article>
                <article className="calorias-card">
                    {user?.profile ? (
                        <h3>Calorías</h3>

                    ): <p>Link para personalizar el perfil</p>}
                </article>
            </div>


        </section>
    )
}