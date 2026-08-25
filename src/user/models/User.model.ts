
export const Gender = {
    M: 'Masculino',
    F: 'Femenino'
} as const

export const Goal = {
    cut: 'Definicion',
    bulk: 'Volumen',
    maintenance: 'Mantenimiento'
} as const

export type GenderType = keyof typeof Gender | null;
export type GoalType = keyof typeof Goal;

export interface UserProfile {
    gender?: GenderType; 
    weight?: number | null;
    height?: number | null;
    goal: GoalType;
    daily_calories_target: number;
}

export interface User {
    id: number;
    username: string;
    email: string;
    profile: UserProfile;
    
}
