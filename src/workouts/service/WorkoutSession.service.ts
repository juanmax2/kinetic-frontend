import api from "../../api"
import type { WorkoutSession } from "../models/WorkoutSession.model";

interface WorkSessionProps {
    id: number;
    signal: AbortSignal;
}

export const getWorkoutSession = async ({id, signal}: WorkSessionProps): Promise<WorkoutSession> => {
    const response = await api.get(`workouts/${id}/`, {
        signal: signal
    })
    return response.data
}