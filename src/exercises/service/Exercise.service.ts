
import { api } from '../../api/index'
import type { Exercise } from "../models/Exercice.model";

interface Props {
    signal: AbortSignal;
}

export const exerciseService = {
    getAll: async ({signal}: Props): Promise<Exercise[]> => {
        const response = await api.get<Exercise[]>('exercises/', {
            signal: signal
        });
        return response.data
    }
};