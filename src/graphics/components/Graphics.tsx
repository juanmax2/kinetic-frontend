import { useState, type ChangeEvent } from "react"
import { useExercises } from "../../hooks/useExercises"
import { useGraphics } from "../../hooks/useGraphics"
import type { Exercise } from "../../exercises/models/Exercice.model"
import { ExerciseGraphic } from "./ExerciseGraphics"
import './Graphics.css'

export function Graphics() {
        const [selectedExerciseId, setSelectedExerciseId] = useState<number | null>(null)

    const { exercises, isLoading: loadingExercises } = useExercises()

    const { data, isLoading, isError, error } = useGraphics({exerciseId: selectedExerciseId})
    
    const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value

        setSelectedExerciseId( value === "" ? null : Number(value))
    }

    return (

        <section className="graphics-container-component">
            <h1 className="graphics-title-component">Graphics</h1>

            {loadingExercises ? (
                <p>Loading exercises...</p>
            ) : (
                <div className="graphics-select-container">
                    <select
                        id="graphics"
                        name="graphics"
                        className="graphics-select-component"
                        onChange={handleChange}
                    >   <option value="">Exercises</option>
                        {exercises.map((exercise: Exercise) => (
                            <option key={exercise.id} value={exercise.id}>{exercise.name}</option>
                        ))}
                    </select>
                </div>
            )}

            {isLoading && <p>Loading...</p>}
            {isError && <p>{error?.message}</p>}
            {(data && data.length === 0) && (
                <h3 className="no-results-title">No results for this exercise</h3>
            )}
            {(data && data.length > 0) && (
                <ExerciseGraphic data={data} />
            )}
            
        </section>
    )
}