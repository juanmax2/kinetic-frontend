import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteRoutine } from "../components/routines/service/Routine.service";


interface DeleteRoutineProps {
    id: number | string;
}

export function useDeleteRoutine() {
    const queryClient = useQueryClient()

    const mutation = useMutation({
        mutationFn: ({id}: DeleteRoutineProps) => deleteRoutine({id}),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['routines']})

        },
        onError: (err: unknown) => {
            if (err instanceof Error) {
                console.error(err)
            }
        }

    })

    return mutation
}