type Image = string | null

export interface Exercise {
    id: number;
    name: string;
    muscle_group: string;
    muscle_group_display: string;
    image: Image;
}

export const MUSCLE_GROUPS = [
    {value: 'chest', label: 'Chest'},
    {value: 'back', label: 'Back'},
    {value: 'legs', label: 'Legs'},
    {value: 'shoulders', label: 'Shoulders'},
    {value: 'arms', label: 'Arms'},
    {value: 'core', label: 'Core'},
]