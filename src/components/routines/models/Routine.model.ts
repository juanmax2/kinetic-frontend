export interface RoutineExercise {
    id?: number;
    exercise: number;
    exercise_detail?: string;
    order: number;
    target_sets: number;
    target_reps: string | null;
}

export interface Routine {
    id?: number;
    user?: number;
    name: string;
    description?: string | null;
    created_at?: string;
    routine_exercises: RoutineExercise[];
}