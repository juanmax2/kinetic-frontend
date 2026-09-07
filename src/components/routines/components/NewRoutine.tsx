import { useState } from "react";
import { type Exercise } from '../../../exercises/models/Exercice.model'
import type { RoutineExercise } from "../models/Routine.model";
import { ExerciseSelector } from "../../../exercises/components/ExerciseSelector";
import api from "../../../api";
import { ExerciseRoutineCard } from "./ExerciseRoutineCard";
import './NewRoutine.css'



export function NewRoutine() {

    const [routineExercises, setRoutineExercises] = useState<RoutineExercise[]>([])
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")

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

        try {
            const response = await api.post('/routines/', newRoutine);
            console.log("Create routine successfull", response.data)
        }catch (err) {
            console.error("Create routine error", err)
        }
    }

    return (

        <form onSubmit={(e) => handleSubmit(e)} className="new-routine-form">
            <h1 className="new-routine-title">Add new routine</h1>

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
                    value={description}
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

            <button type="submit">Add routine</button>
        </form>
    )
}