import type { RoutineExercise } from "../../../models/Routine.model";
import './CardExerciseDetail.css'

interface Props {
    exercise: RoutineExercise;
}


export function CardExerciseDetail({exercise}: Props) {

    return (

        <li className="exercise-detail-routine-container">
            <strong className="exercise-detail-routine-name">
                {exercise.exercise_detail}
            </strong>

            <div className="exercise-detail-routine-info">
                <div className="exercise-detail-routine-sets">
                    <p>Sets</p>
                    <span>{exercise.target_sets}</span>
                </div>
                <div className="exercise-detail-routine-reps">
                    <p>Reps</p>
                    <span>{exercise.target_reps}</span>
                </div>
            </div>
        </li>
    )
}