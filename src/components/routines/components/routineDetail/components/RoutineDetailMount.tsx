import { Link, useNavigate, useParams } from "react-router-dom";
import type { Routine } from "../../../models/Routine.model";
import { CardExerciseDetail } from "./CardExerciseDetail";
import './RoutineDetailMount.css'
import { useState } from "react";
import api from "../../../../../api";
import { Button } from "../../../../button/Button";

interface Props {
    routine: Routine;
}


export function RoutineDetailMount({routine}: Props) {

    const { id } = useParams<{ id: string }>()
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)

    const handleStartWorkout = async () => {
        if (!id) return
        setIsLoading(true)
        try {
            const response = await api.post(`workouts/${id}/start-routine/`);
            const activeSession = response.data
            navigate(`/workouts/session/${activeSession.id}`)
        }catch (err: unknown) {
            if (err instanceof Error && err.name !== 'AbortError'){
                console.error("Error petition", err)
            }
        }finally {
            setIsLoading(false)
        }
    }

    return (
        <section className="routine-detail-container">
            <h1>{routine.name.charAt(0).toUpperCase() + routine.name.slice(1)}</h1>
            <ul>
                {routine.routine_exercises.map(exercise => (
                    <CardExerciseDetail key={exercise.exercise} exercise={exercise} />
                ))}
            </ul>
            <div className="routine-button-container">
                <Link className="routine-btn" to={`/routines/${routine.id}/edit`}>Edit</Link>
                <Button
                    className="routine-btn"
                    disabled={isLoading}
                    onClick={handleStartWorkout}
                >Start Session</Button>
                <Link className="routine-btn" to={`/dashboard`}>Routines</Link>
            </div>
        </section>
    )
}