import { useQuery } from "@tanstack/react-query";
import { exerciseService } from "../exercises/service/Exercise.service";


export function useExercises() {

    const {data, isLoading, isError, error} = useQuery({
        queryKey: ['exercises'],
        queryFn: ({ signal }) => exerciseService.getAll({ signal: signal })
    })

    return { 
        exercises: data || [],
        isLoading, 
        isError, 
        error }
}