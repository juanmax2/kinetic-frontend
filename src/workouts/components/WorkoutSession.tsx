import { useParams } from "react-router-dom"
import { useWorkoutSession } from "../../hooks/useWorkoutSession"
import type { WorkoutSet } from "../models/WorkoutSession.model"
import { WorkoutExerciseCard } from "./WorkoutExerciseCard"
import './WorkoutSession.css'

export function WorkoutSession() {

    const { id } = useParams<{ id: string }>() 
    const numberId = Number(id)
    const { data, isLoading, isError, error } = useWorkoutSession({ id: numberId })

    if (isLoading) return <p>Loading...</p>
    if (isError) return <p>{error?.message}</p>
    if (!data) return <p>Not found session...</p>

    return (
        <section className="workout-session-container">
            <h1 className="workout-session-title">{data.routine_name}</h1>
            <ul className="workout-session-list">
                {data && (
                    data.sets.map((ex: WorkoutSet) => (
                        <WorkoutExerciseCard key={ex.id} exercise={ex} />
                    ))
                )}
            </ul>
        </section>
    )
}