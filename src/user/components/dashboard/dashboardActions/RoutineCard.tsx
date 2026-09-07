import { Link } from 'react-router-dom'
import type { Routine } from '../../../../components/routines/models/Routine.model'
import './RoutineCard.css'

interface RoutineProps {
    routine: Routine
}

export function RoutineCard({routine}: RoutineProps) {


    return (
        <li className="routine-container">
            <Link to={`/routines/${routine.id}`}>
                <h2>{routine.name}</h2>
            </Link>
        </li>
    )
}   