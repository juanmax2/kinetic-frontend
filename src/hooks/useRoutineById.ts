import { useQuery } from "@tanstack/react-query"
import { getRoutineById } from "../components/routines/service/Routine.service"

interface Props {
    id: string | number | undefined
}

export function useRoutineById({id}: Props) {

    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['routine', id],
        queryFn: ({ signal }) => getRoutineById({ id, signal}),
        enabled: !!id
    })

    return {
        data,
        isLoading,
        isError,
        error
    }
}