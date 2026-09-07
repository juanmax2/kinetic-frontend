import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { Routine } from "../components/routines/models/Routine.model";
import { updateRoutine } from "../components/routines/service/Routine.service";

interface Props {
    id: string | number;
    routineData: Partial<Routine>
}

export function useUpdateRoutine() {
    const queryClient = useQueryClient()

    const mutation = useMutation({
        mutationFn: ({ id, routineData }: Props) => {
            return updateRoutine({ id, routineData })
        },
        onSuccess: (updatedRoutine: Routine) => {
            queryClient.invalidateQueries({ queryKey: ['routine', updatedRoutine.id]})

            queryClient.invalidateQueries({ queryKey: ['routines']})

            console.log("Routine updated successfull")
        },

        onError: (error: Error) => {
            console.error("Update routine error", error.message)
        }
    })

    return mutation
}