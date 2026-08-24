import { useExercises } from "../../hooks/useExercises";


export function ExercisesList() {

    const { exercises, isLoading, isError, error } = useExercises()

    if (isLoading) {
        return <p>Loading...</p>
    }

    if (isError) {
        return <p>Error: {error?.message}</p>
    }

    return (
        <section>
            <h2>Exercises List</h2>
            {exercises.length === 0 ? (
                <p>There are no saved exercises yet.</p>
            ) : (
                <ul>
                    {exercises.map((exercise) => (
                        <li key={exercise.id}>
                            <strong>{exercise.name}</strong>
                        </li>
                    ))}
                </ul>
            )}
        </section>
    )

}