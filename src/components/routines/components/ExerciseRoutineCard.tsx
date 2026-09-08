import type { RoutineExercise } from "../models/Routine.model";
import { Button } from "../../button/Button";
import { useSortable } from '@dnd-kit/sortable'

interface Props {
    exercise: RoutineExercise;
    handleChangeValue: (exerciseId: number, field: 'target_sets' | 'target_reps', value: string | number) => void;
    handleRemoveExercise: (id: number) => void;
}

export function ExerciseRoutineCard({exercise, handleChangeValue, handleRemoveExercise}: Props) {

    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition
    } = useSortable({ id: String(exercise.exercise) })

    const style = transform 
        ? {
            transform: `translate(${transform.x}px)`,
            transition

        }
        : undefined

    return (
        <li 
            ref={setNodeRef} 
            style={style} 
            {...attributes}
            {...listeners}
            className={`exercise-routine-${exercise.exercise_detail}`}
        >
            <strong>
                {exercise.exercise_detail}
            </strong>
            <div className="container-numbers">
                <div className="exercise-sets">
                    <label>Sets:</label>
                    <input 
                        onChange={(e) => handleChangeValue(exercise.exercise, 'target_sets', Number(e.target.value))} 
                        type="number" 
                        value={exercise.target_sets} 
                    />        
                </div>
                <div className="exercise-reps">
                    <label>Reps:</label>
                    <input 
                        onChange={(e) => handleChangeValue(exercise.exercise, 'target_reps', e.target.value)} 
                        type="text" 
                        value={exercise.target_reps ?? ''} 
                    />
                </div>
            </div>
            <Button onClick={() => handleRemoveExercise(exercise.exercise)}>
                X
            </Button>  
        </li>
    )
}