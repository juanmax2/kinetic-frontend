import './RoutineCard.css'

interface Routine {
    id: number;
    name: string;
}

interface RoutineProps {
    routine: Routine
}

export function RoutineCard({routine}: RoutineProps) {


    return (
        <li className="routine-container">
            <h2>{routine.name}</h2>
        </li>
    )
}   