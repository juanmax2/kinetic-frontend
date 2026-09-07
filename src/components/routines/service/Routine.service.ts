import api from "../../../api";
import { type Routine } from "../models/Routine.model";


interface Props {
    id?: number | string;
    signal?: AbortSignal;
}

interface UpdateRoutineProps {
    id: string | number;
    routineData: Partial<Routine>;
}

export const getUserRoutines = async ({signal}: Props) => {
    const response = await api.get<Routine[]>('/routines/', {
        signal: signal
    })

    return response.data
}


export const getRoutineById = async({id, signal}: Props) => {
    const response = await api.get<Routine>(`/routines/${id}`, {
        signal: signal
    })

    return response.data
}

export const updateRoutine = async ({id, routineData}: UpdateRoutineProps) => {
    const response = await api.put(`/routines/${id}/`, routineData)
    return response.data
}