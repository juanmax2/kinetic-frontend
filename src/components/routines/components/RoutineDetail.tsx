import { useParams } from "react-router-dom";
import { useRoutineById } from "../../../hooks/useRoutineById";
import { RoutineDetailMount } from "./routineDetail/components/RoutineDetailMount";


export function RoutineDetail() {
    const { id } = useParams<{id: string }>()
    const { data, isLoading, isError, error } = useRoutineById({id: id})

    if (isLoading) {
        return <p>Loading...</p>
    }

    if (isError) {
        return <p>{error?.message}</p>
    }

    if (!data) return <p>Not found routine...</p>

    return <RoutineDetailMount routine={data} />
}