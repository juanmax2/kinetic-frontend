import { useParams } from "react-router-dom"
import { useWorkoutSession } from "../../hooks/useWorkoutSession"
import type { WorkoutSet } from "../models/WorkoutSession.model"
import { WorkoutExerciseCard } from "./WorkoutExerciseCard"
import './WorkoutSession.css'
import { useState } from "react"
import { useUpdateWorkout } from "../../hooks/useUpdateWorkout"
import { Button } from "../../components/button/Button"

export function WorkoutSession() {

    const { id } = useParams<{ id: string }>() 
    const numberId = Number(id)
    const { data, isLoading, isError, error } = useWorkoutSession({ id: numberId })
    const { mutate: updateWorkout, isPending} = useUpdateWorkout()
    const [sessionSets, setSessionsSets] = useState<WorkoutSet[]>([])
    const [currentDataId, setCurrentDataId] = useState<number | null>(null)


    if (data && data.id !== currentDataId) {
        setCurrentDataId(data.id)
        setSessionsSets(data.sets)
    }

    const handleWeightChange = (id: number, weight: number) => {

        setSessionsSets(prev => 
            prev.map(set => 
                set.id === id ? {...set, weight: weight} : set
            )
        )
    }

    const handleFinishSession = async () => {
        updateWorkout({ id: numberId, sets: sessionSets})
    }

    if (isLoading) return <p>Loading...</p>
    if (isError) return <p>{error?.message}</p>
    if (!data) return <p>Not found session...</p>

    return (
        <section className="workout-session-container">
            <h1 className="workout-session-title">{data.routine_name}</h1>
            <ul className="workout-session-list">
                {data && (
                    sessionSets.map((ex: WorkoutSet) => (
                        <WorkoutExerciseCard key={ex.id} exercise={ex} handleWeightChange={handleWeightChange} />
                    ))
                )}
            </ul>

            <Button className="workout-session-button" disabled={isPending} onClick={handleFinishSession}>Save</Button>
        </section>
    )
}