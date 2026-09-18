
import { api } from '../../api/index'
import type { Exercise } from "../models/Exercice.model";

interface Props {
    signal: AbortSignal;
}

interface AddExerciseProps {
    name: string; 
    muscle_group: string;
}

export const exerciseService = {
    getAll: async ({signal}: Props): Promise<Exercise[]> => {
        const response = await api.get<Exercise[]>('exercises/', {
            signal: signal
        });
        return response.data
    },
};


export const addExercise = async ({name, muscle_group}: AddExerciseProps) => {

    const newExercise = {
        name,
        muscle_group,
    }

    const response = await api.post<Exercise>(`/exercises/`, newExercise)

    return response.data
}

