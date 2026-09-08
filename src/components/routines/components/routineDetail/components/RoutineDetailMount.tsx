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
            <div className="routine-button-container">
                <Link className="routine-btn" to={`/routines/${routine.id}/edit`}>Edit</Link>
                <Link className="routine-btn" to={`/dashboard`}>Routines</Link>
            </div>
        </section>
    )
}