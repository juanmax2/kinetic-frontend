import { useNavigate, useParams } from "react-router-dom";
import { useRoutineById } from "../../../hooks/useRoutineById";
import { RoutineForm, type RoutineDataProps } from "./RoutineForm";
import { useUpdateRoutine } from "../../../hooks/useUpdateRoutine";


export function EditRoutine() {
    const { id } = useParams<{id: string}>()
    const { data, isLoading, isError, error } = useRoutineById({ id: id })
    const { mutate, isPending } = useUpdateRoutine()
    
    const navigate = useNavigate()

    
    const handleModifySubmit = async (formData: RoutineDataProps) => {
        if (!id) return

        const payload = {
            name: formData.name,
            description: formData.description,
            routine_exercises: formData.routine_exercises
        }

        mutate(
            { id, routineData: payload },
            {
                onSuccess: () => {
                    navigate('/dashboard')
                }
            }
        )
    }

    
    if (isLoading) return <p>Loading...</p>
    
    if (isError) return <p>{error?.message}</p>
    
    if (!data) return <p>No found routine...</p>

    return (
        <RoutineForm 
            initialData={data}
            formTitle="Edit routine"
            submitButtonText="Edit"
            isPending={isPending}
            onSubmit={handleModifySubmit}
        />
    )
}