import api from "../../api";

interface Props {
    exerciseId: number | null;
}

export async function getExerciseGraph({exerciseId}: Props) {
    const response = await api.get(`/workouts/exercise-progress/?exercise_id=${exerciseId}`)
    return response.data
}