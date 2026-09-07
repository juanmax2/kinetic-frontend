import { Button } from "../../components/button/Button";
import { useExercises } from "../../hooks/useExercises";
import { useFilters } from "../../hooks/useFilters";
import type { Exercise } from "../models/Exercice.model";
import { ExerciseCard } from "./ExerciseCard";
import { ExerciseSelectorFilters } from "./ExerciseSelectorFilters";


interface Props {
    handleAddExercise: (exercise: Exercise) => void
}


export function ExerciseSelector({handleAddExercise}: Props) {

    const { exercises } = useExercises()
    const { textFilter, muscleFilter, onTextChange, onMuscleChange } = useFilters()

    const filteredExercises = exercises.filter((exercise) => {
        const matchText = textFilter 
            ? exercise.name.toLowerCase().includes(textFilter.toLowerCase())
            : true
        const matchMuscle = muscleFilter
            ? exercise.muscle_group === muscleFilter
            : true
        
            return matchText && matchMuscle
    })

    return (
        <>
            <ExerciseSelectorFilters onTextChange={onTextChange} onMuscleChange={onMuscleChange} />
            
            <section className="exercise-selector-add">
                {filteredExercises.length === 0 ? (
                    <p className="exercises-selector-notfound">Have not been found exercises...</p>
                ) : (
                    <div className="exercise-add-container">
                        <ul className="exercises-selector-list">
                            {filteredExercises.map((exercise) => (
                                <li className="exercise-selector-container" key={exercise.id}> 
                                    <ExerciseCard exercise={exercise} />
                                    <Button onClick={() => handleAddExercise(exercise)}>Add</Button>

                                </li>
                            ))}
                        </ul>
                    </div>
                )
                
                }

            </section>
        </>
    )
}