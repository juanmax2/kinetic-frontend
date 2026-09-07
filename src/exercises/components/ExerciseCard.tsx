import type { Exercise } from "../models/Exercice.model";

interface Props {
    exercise: Exercise
}

export function ExerciseCard({exercise}: Props) {

    return (
        <div className="exercise-card">
            <strong>{exercise.name}</strong>
            <span>{exercise.muscle_group}</span>
        </div>
    )
}