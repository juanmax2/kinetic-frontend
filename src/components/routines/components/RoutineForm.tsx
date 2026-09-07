import { ExerciseSelector } from "../../../exercises/components/ExerciseSelector"
import type { Routine, RoutineExercise } from "../models/Routine.model"
import { ExerciseRoutineCard } from "./ExerciseRoutineCard"
import { useState } from "react"
import type { Exercise } from "../../../exercises/models/Exercice.model"

export interface RoutineDataProps {
    name: string;
    description: string | null | undefined;
    routine_exercises: RoutineExercise[];
}

interface RoutineFormProps {
    initialData?: Routine;
    onSubmit: (routineData: RoutineDataProps) => void;
    isPending: boolean;
    formTitle: string;
    submitButtonText: string;
}

export function RoutineForm({
    initialData,
    onSubmit,
    isPending,
    formTitle,
    submitButtonText
}: RoutineFormProps) {

    const [routineExercises, setRoutineExercises] = useState<RoutineExercise[]>(
        initialData ? initialData.routine_exercises : []
    )
    const [name, setName] = useState(
        initialData ? initialData.name : ""
    )
    const [description, setDescription] = useState(
        initialData ? initialData.description : ""
    )



    const handleAddExercise = (exercise: Exercise) => {
        if (routineExercises.some((ex) => ex.exercise === exercise.id)) return;
        
        const exerciseForRoutine: RoutineExercise = {
                exercise: exercise.id,
                exercise_detail: exercise.name,
                order: routineExercises.length,
                target_sets: 3,
                target_reps: '10',
        }

        setRoutineExercises([...routineExercises, exerciseForRoutine])

    }

    const handleChangeValue = (exerciseId: number, field: 'target_sets' | 'target_reps', value: string | number) => {
        setRoutineExercises(prev => prev.map(ex => ex.exercise === exerciseId ? {...ex, [field]: value} : ex))
    }

    const handleRemoveExercise = (id: number) => {
        setRoutineExercises(prev => prev.filter(ex => ex.exercise !== id))
    }

    
    const handleSubmit = async (event: React.SubmitEvent<HTMLFormElement>) => {
        event.preventDefault()

        const newRoutine = {
                name: name,
                description: description,
                routine_exercises: routineExercises,
        }

        onSubmit(newRoutine)


    }

    return (

        <form onSubmit={(e) => handleSubmit(e)} className="new-routine-form">
            <h1 className="new-routine-title">{formTitle}</h1>

            <div className="information-container-routine">
                <input 
                    id="name-routine"
                    className="name-routine-input"
                    type="text" 
                    placeholder="Routine name..."
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />

                <textarea
                    id="description-routine"
                    className="description-rountine" 
                    placeholder="Routine description..."
                    value={description || ""}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>

            <ExerciseSelector handleAddExercise={handleAddExercise} />

            <div className="exercises-change-container">
                
                {routineExercises.length === 0 ? (
                        <p>Not exercises yet...</p>
                ) : (
                        <>
                            <h3>Routine</h3>
                            <ul className="list-exercises-change">
                                {routineExercises.map((exercise) => (

                                        <ExerciseRoutineCard 
                                            key={exercise.exercise}
                                            exercise={exercise}
                                            handleChangeValue={handleChangeValue}
                                            handleRemoveExercise={handleRemoveExercise}
                                        />
                                ))}
                            </ul>
                        </>
                    )}
            </div>

            <button disabled={isPending} type="submit">
                {isPending ? "saving..." : submitButtonText}
            </button>
        </form>
    )
}