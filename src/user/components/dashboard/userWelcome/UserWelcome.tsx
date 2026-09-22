
import { useNavigate } from "react-router-dom";
import { getPhrase } from "../../../../components/phrases/phrases";
import { useAuth } from "../../../../store/useAuth.store";
import './UserWelcome.css'

export function UserWelcome() {

    const user = useAuth(state => state.user)
    const isLoading = useAuth(state => state.isLoading)
    const navigate = useNavigate()

    if (isLoading){
        return <p>Cargando perfil...</p>
    }

    const phrase = getPhrase()
    return(
        <section className="user-welcome-section">
            <h1 className="welcome-title">Bienvenido, <span className="username-span"> {user?.username}</span></h1>

            <p className="frase-motivadora">{phrase}</p>
            
            <div  className="information-container">
                <article onClick={() => navigate('/update-profile?focus=weight')} className="peso-card card">
                    {user?.profile && (
                        <>
                            <h3>Actual weight</h3>
                            <h4>{user.profile.weight} Kg</h4>
                        </>
                    )}
                </article>
                <article onClick={() => navigate('/update-profile?focus=calories')} className="calorias-card card">
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