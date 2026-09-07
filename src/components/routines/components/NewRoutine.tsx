
import './NewRoutine.css'
import { useNavigate } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query"
import api from '../../../api';
import { RoutineForm, type RoutineDataProps } from './RoutineForm';


export function NewRoutine() {

    const queryClient = useQueryClient()
    const navigate = useNavigate()

    const handleCreateSubmit = async (routineData: RoutineDataProps) => {
        try {
            const response = await api.post(`/routines/`, routineData)
            console.log("Create routine successful", response.data)

            await queryClient.invalidateQueries({ queryKey: ['routines'] })
            navigate('/dashboard')
        } catch (err) {
            console.error("Create routine error", err)
        }
    }


    return (
        <RoutineForm 
            onSubmit={handleCreateSubmit}
            isPending={false}
            formTitle='Add new routine'
            submitButtonText='Add routine'
        />
    )

}