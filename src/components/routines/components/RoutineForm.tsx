import {
    DndContext,
    closestCenter,
    KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors,
    type DragEndEvent,
    DragOverlay,
    type DragStartEvent
} from '@dnd-kit/core'

import {
    arrayMove,
    SortableContext,
    sortableKeyboardCoordinates,
    verticalListSortingStrategy
} from '@dnd-kit/sortable'

import { ExerciseSelector } from "../../../exercises/components/ExerciseSelector"
import type { Routine, RoutineExercise } from "../models/Routine.model"
import { ExerciseRoutineCard } from "./ExerciseRoutineCard"
import { useEffect, useState } from "react"
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

    const [routineExercises, setRoutineExercises] = useState<RoutineExercise[]>(() => {
        if (initialData) return initialData.routine_exercises;
        const saved = localStorage.getItem("routine_exercises")
        return saved ? JSON.parse(saved) : [];
    }
    )
    const [name, setName] = useState(() => {
        if (initialData) return initialData.name;
        return localStorage.getItem("routine_name") || "";
    }
     )
    const [description, setDescription] = useState(() => {
        if (initialData) return initialData.description;
        return localStorage.getItem("routine_description") || "";
    }
    )
    const [activeExercise, setActiveExercise] = useState<RoutineExercise | null>(null)


    const sensors = useSensors(
        useSensor(PointerSensor, {
            activationConstraint: {
                distance: 3,
            },
        }),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    )


    const mountLocalStorage = () => {
        localStorage.setItem("routine_exercises", JSON.stringify(routineExercises));
        localStorage.setItem("routine_name", name);
        localStorage.setItem("routine_description", description || "");
    }

    useEffect(() => {
        if (!initialData) {
            mountLocalStorage()
        }
    }, [routineExercises, name, description, initialData])

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

    const cleanLocalStorage = () => {
        localStorage.removeItem("routine_exercises")
        localStorage.removeItem("routine_name")
        localStorage.removeItem("routine_description")
    }


    const handleSubmit = async (event: React.SubmitEvent<HTMLFormElement>) => {
        event.preventDefault()

        const newRoutine = {
                name: name,
                description: description,
                routine_exercises: routineExercises,
        }

        onSubmit(newRoutine)
        if (!initialData) {
            cleanLocalStorage()
        }
        
    }
    const handleDragStart = (event: DragStartEvent) => {
        const { active } = event
        const foundExercise = routineExercises.find(ex => String(ex.exercise) === active.id);
        if (foundExercise) {
            setActiveExercise(foundExercise)
        }
    }

    const handleDragEnd = (event: DragEndEvent) => {
        const { active, over } = event;

        if (over && active.id !== over.id) {
            setRoutineExercises((items) => {
                const oldIndex = items.findIndex((item) => String(item.exercise) === active.id);
                const newIndex = items.findIndex((item) => String(item.exercise) === over.id)
                return arrayMove(items, oldIndex, newIndex)
            })
        }
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

            <ExerciseSelector handleAddExercise={handleAddExercise} routineExercises={routineExercises}/>

            <div className="exercises-change-container">
                <h3 className='create-routine-title'>Routine</h3>
                {routineExercises.length === 0 ? (

                        <p>Not exercises yet...</p>
                ) : (
                        <>
                            
                            <DndContext
                                sensors={sensors}
                                collisionDetection={closestCenter}
                                onDragStart={handleDragStart}
                                onDragEnd={handleDragEnd}
                            >
                                <SortableContext
                                    items={routineExercises.map(ex => String(ex.exercise))}
                                    strategy={verticalListSortingStrategy}
                                >
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
                                </SortableContext>

                                <DragOverlay>
                                    {activeExercise ? (
                                        <div className="exercise-routine-card dragging-overlay">
                                            <span className="drag-handle" style={{ cursor: 'grabbing', marginRight: '10px' }}>                      
                                            </span>
                                            <strong className='exercise-name'>{activeExercise.exercise_detail}</strong>
                                            <div className="exercise-inputs">
                                                <span>Sets: {activeExercise.target_sets}</span>
                                                <span>Reps: {activeExercise.target_reps}</span>
                                            </div>
                                        </div>
                                    ): null}
                                </DragOverlay>
                            </DndContext>
                        </>
                    )}
            </div>

            <button className='add-routine-btn' disabled={isPending} type="submit">
                {isPending ? "saving..." : submitButtonText}
            </button>
        </form>
    )
}