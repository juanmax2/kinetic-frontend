import { useQuery } from "@tanstack/react-query";
import { getUserRoutines } from "../components/routines/service/Routine.service";


export function useRoutines() {

    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['routines'],
        queryFn: ({signal}) => getUserRoutines({signal: signal}),
    })

    return {
        data,
        isLoading,
        isError,
        error
    }
}