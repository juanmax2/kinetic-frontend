type Image = string | null

export interface Exercise {
    id: number;
    name: string;
    muscle_group: string;
    muscle_group_display: string;
    image: Image;
}