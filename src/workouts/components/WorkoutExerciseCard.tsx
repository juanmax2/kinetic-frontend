import type { WorkoutSet } from "../models/WorkoutSession.model";
import './WorkoutExerciseCard.css'

interface WorkoutExerciseCardProps {
    exercise: WorkoutSet;
}

export function WorkoutExerciseCard({exercise}: WorkoutExerciseCardProps) {

    return (
        <li className="workout-exercise-container">
            <strong className="workout-exercise-name">{exercise.exercise_name}</strong>
            <div className="workout-exercise-information sets">
                <p>Set</p>
                <p>{exercise.set_number}</p>
            </div>
            <div className="workout-exercise-information reps">
                <p>Reps</p>
                <p>{exercise.reps}</p>
            </div>
            <div className="workout-exercise-information weight">
                <label>Weight</label>
                <input defaultValue={exercise.weight} />
            </div>
        </li>
    )
}