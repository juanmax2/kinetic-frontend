import { useQuery } from "@tanstack/react-query";
import { getWorkoutSession } from "../workouts/service/WorkoutSession.service";

interface WorkoutSessionProps {
    id: number;
}

export function useWorkoutSession({id}: WorkoutSessionProps) {

    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['workout-session', id],
        queryFn: ({ signal }) => getWorkoutSession({ id, signal })
    })

    return {
        data,
        isLoading,
        isError,
        error
    }
}