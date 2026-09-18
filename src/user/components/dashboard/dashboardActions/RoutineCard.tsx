import { useNavigate } from 'react-router-dom'
import type { Routine } from '../../../../components/routines/models/Routine.model'
import './RoutineCard.css'
import { Button } from '../../../../components/button/Button'
import { useDeleteRoutine } from '../../../../hooks/useDeleteRoutine'

interface RoutineProps {
    routine: Routine
}

export function RoutineCard({routine}: RoutineProps) {

    const { mutate: deleteRoutine, isPending } = useDeleteRoutine()
    const navigate = useNavigate()

    const handleDelete = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation()
        if (!routine.id) return 
        
        deleteRoutine({id: routine.id})
    }

    return (
        <li className="routine-container">
            <div 
                onClick={() => navigate(`/routines/${routine.id}`)} 
                className="routine-sub-container"
            >
                <h2>{routine.name.charAt(0).toUpperCase().concat(routine.name.slice(1))}</h2>
                <Button 
                    onClick={handleDelete}
                    disabled={isPending}
                >
                    X
                </Button>
            </div>
        </li>
    )
}   