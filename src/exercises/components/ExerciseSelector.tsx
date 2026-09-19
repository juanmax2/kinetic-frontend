import { useState } from "react";
import { Button } from "../../components/button/Button";
import { useExercises } from "../../hooks/useExercises";
import { useFilters } from "../../hooks/useFilters";
import type { Exercise } from "../models/Exercice.model";
import { ExerciseCard } from "./ExerciseCard";
import { ExerciseSelectorFilters } from "./ExerciseSelectorFilters";
import { AddExerciseModal } from "../../components/modal/Modal";
import type { RoutineExercise } from "../../components/routines/models/Routine.model";

interface Props {
    handleAddExercise: (exercise: Exercise) => void;
    routineExercises?: RoutineExercise[];
}


export function ExerciseSelector({handleAddExercise, routineExercises = []}: Props) {

    const { exercises } = useExercises()
    const { textFilter, muscleFilter, onTextChange, onMuscleChange } = useFilters()

    const [visibleCount, setVisibleCount] = useState(10)
    const PAGE_SIZE = 10;

    const filteredExercises = exercises.filter((exercise) => {
        const matchText = textFilter 
            ? exercise.name.toLowerCase().includes(textFilter.toLowerCase())
            : true
        const matchMuscle = muscleFilter
            ? exercise.muscle_group === muscleFilter
            : true
        
            return matchText && matchMuscle
    })

    const visibleExercises = filteredExercises.slice(0, visibleCount)

    const handleLoadMore = () => {
        setVisibleCount(prev => prev + PAGE_SIZE)
    }


    return (
        <>
            <ExerciseSelectorFilters onTextChange={onTextChange} onMuscleChange={onMuscleChange} />
            <AddExerciseModal handleAddExercise={handleAddExercise}/>
            <section className="exercise-selector-add">
                {visibleExercises.length === 0 ? (
                    <p className="exercises-selector-notfound">Have not been found exercises...</p>
                ) : (
                    <div className="exercise-add-container">
                        <ul className="exercises-selector-list">
                            {visibleExercises.map((exercise) => {
                                    const isAdded = routineExercises?.some(ex => ex.exercise === exercise.id)
                                    return (<li className="exercise-selector-container" key={exercise.id}> 
                                        <ExerciseCard exercise={exercise} />
                                        <Button 
                                            disabled={isAdded}
                                            className={`exercise-selector-add-btn ${isAdded ? "added" : ""}`} onClick={() => handleAddExercise(exercise)}>{isAdded ? "Added" : "Add"}</Button>
                                    </li>
                                )
                            })}
                        </ul>
                        <Button className="exercises-load-more-button" onClick={() => handleLoadMore()}>Load more</Button>
                    </div>
                )
                
                }

            </section>
        </>
    )
}