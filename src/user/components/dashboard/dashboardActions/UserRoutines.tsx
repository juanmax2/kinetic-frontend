import { Link } from "react-router-dom"
import { RoutineCard } from "./RoutineCard"
import './UserRoutines.css'

export function UserRoutines() {


    const ROUTINES = [
        {id: 1, name: "Piernas"},
        {id:2, name: "Pecho-Laterales"},
        {id: 3, name: "Dorsal-Posterior"},
        {id: 4, name: "Brazos"}
    ]
    return (
        <>
            <div className="routine-list-container">
                <h2 className="routine-list-title">Mis Rutinas</h2>
                <Link className="new-routine-btn" to="/routines">New Routine</Link>                
                <ul className="routine-list">
                    {ROUTINES.map(routine => (
                        <RoutineCard key={routine.id} routine={routine} />
                    ))}
                </ul>
            </div>
        </>
    )
}