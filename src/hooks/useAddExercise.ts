import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addExercise } from "../exercises/service/Exercise.service";


interface Props {
    name: string;
    muscle_group: string;
}

export function useAddExercise(){

    const queryClient = useQueryClient()

    const createExerciseMutation = useMutation({
        mutationFn: (newExerciseData: Props) => addExercise(newExerciseData),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['exercises'] })

        },
        onError: (err: Error) => {
            console.error(err)
        }
    })
    return createExerciseMutation
}