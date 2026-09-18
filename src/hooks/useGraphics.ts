import { useQuery } from "@tanstack/react-query";
import { getExerciseGraph } from "../graphics/service/Graphics.service";

interface Props {
    exerciseId: number | null; 
}

export function useGraphics({exerciseId}: Props) {

    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['exercise-progress', exerciseId],
        queryFn: () => getExerciseGraph({exerciseId}),
        enabled: !!exerciseId,
    })

    return {
        data,
        isLoading,
        isError,
        error
    }
}