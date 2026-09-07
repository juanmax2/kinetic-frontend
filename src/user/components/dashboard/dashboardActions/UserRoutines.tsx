import { Link } from "react-router-dom"
import { RoutineCard } from "./RoutineCard"
import './UserRoutines.css'
import { useRoutines } from "../../../../hooks/useRoutines"


export function UserRoutines() {

    const { data, isLoading, isError, error } = useRoutines()

    if (isLoading) {
        return <p>Loading...</p>
    }

    if (isError) {
        return <p>{error?.message}</p>
    }

    return (
        <>
            <div className="routine-list-container">
                <h2 className="routine-list-title">Mis Rutinas</h2>
                <Link className="new-routine-btn" to="/routines/new">New Routine</Link>                
                <ul className="routine-list">
                    {data?.map(routine => (
                        <RoutineCard key={routine.id} routine={routine} />
                    ))}
                </ul>
            </div>
        </>
    )
}