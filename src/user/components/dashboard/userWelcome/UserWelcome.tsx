
import { useAuth } from "../../../../store/useAuth.store";
import './UserWelcome.css'

export function UserWelcome() {

    const user = useAuth(state => state.user)
    const isLoading = useAuth(state => state.isLoading)

    if (isLoading){
        return <p>Cargando perfil...</p>
    }

    return(
        <section className="user-welcome-section">
            <h1 className="welcome-title">Bienvenido, <span className="username-span"> {user?.username}</span></h1>

            <p className="frase-motivadora">"El esfuerzo de hoy es el resultado de mañana"</p>
            
            <div className="information-container">
                <article className="peso-card">
                    {user?.profile && (
                        <>
                            <h3>Actual weight</h3>
                            <h4>{user.profile.weight}</h4>
                        </>
                    )}
                </article>
                <article className="calorias-card">
                    {user?.profile && (
                        <>
                            <h3>Calories</h3>
                            <h4>{user.profile.daily_calories_target}</h4>
                        </>
                    )}
                </article>
            </div>
        </section>
    )
}