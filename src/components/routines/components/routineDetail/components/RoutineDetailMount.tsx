import { Link } from "react-router-dom";
import type { Routine } from "../../../models/Routine.model";
import { CardExerciseDetail } from "./CardExerciseDetail";
import './RoutineDetailMount.css'

interface Props {
    routine: Routine;
}


export function RoutineDetailMount({routine}: Props) {

    return (
        <section className="routine-detail-container">
            <h1>{routine.name.split("").map((word, index )=> {
                if(index === 0) {
                    return word.toUpperCase()
                }else{
                    return word
                }
            })}</h1>
            <ul>
                {routine.routine_exercises.map(exercise => (
                    <CardExerciseDetail key={exercise.exercise} exercise={exercise} />
                ))}
            </ul>
            <Link className="edit-routine-btn" to={`/routines/${routine.id}/edit`}>Edit</Link>
        </section>
    )
}