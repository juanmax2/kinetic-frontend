
export interface WorkoutSet {
    id: number;
    exercise: number;
    exercise_name: string;
    set_number: number;
    weight: number;
    reps: number;
}


export interface WorkoutSession {
    id: number;
    user: string;
    date: string;
    notes: string;
    sets: WorkoutSet[];
    routine_name: string;
}