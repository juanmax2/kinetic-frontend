import api from "../../api"
import type { WorkoutSession, WorkoutSet } from "../models/WorkoutSession.model";

interface WorkSessionProps {
    id: number;
    signal: AbortSignal;
}

interface PostWorkSessionProps {
    id: number;
    sets: WorkoutSet[];
}

export const getWorkoutSession = async ({id, signal}: WorkSessionProps): Promise<WorkoutSession> => {
    const response = await api.get(`workouts/${id}/`, {
        signal: signal
    })
    return response.data
}

export const updateWorkoutSession = async ({id, sets}: PostWorkSessionProps) => {
    const response = await api.put(`workouts/${id}/update-weights/`, { sets })

    return response.data
}