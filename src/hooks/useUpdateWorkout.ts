import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateWorkoutSession } from "../workouts/service/WorkoutSession.service";
import type { WorkoutSession, WorkoutSet } from "../workouts/models/WorkoutSession.model";
import { useNavigate } from "react-router-dom";


interface MutationProps {
    id: number;
    sets: WorkoutSet[];
}


export function useUpdateWorkout() {

    const queryClient = useQueryClient()
    const navigate = useNavigate()
    
    const mutation = useMutation({
        mutationFn:  async ({id, sets}: MutationProps) => {
            return updateWorkoutSession({ id, sets })
        },
        onSuccess: (updatedSession: WorkoutSession) => {
            queryClient.invalidateQueries({ queryKey: ['workout-session', updatedSession.id]})

            queryClient.invalidateQueries({ queryKey: ['workout-sessions']})

            console.log("Successful Workout Session update")
            navigate('/dashboard')
        },

        onError: (err: Error) => {
            console.error("Update Workout Session error:", err)
        }

    })

    return mutation
}