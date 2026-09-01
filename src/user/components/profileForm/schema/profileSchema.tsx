import z from "zod";


const genderKeys = ['M','F', ""] as const
const goalKeys = ['cut', 'bulk', 'maintenance'] as const


export const profileSchema = z.object({
    username: z.string(),
    email: z.email("Invalid email"),
    age: z.union([z.string(), z.number()]).nullable().optional(),
    gender: z.enum(genderKeys).nullable().optional(),
    weight: z.union([z.string(), z.number()]).nullable().optional(),
    height: z.union([z.string(), z.number()]).nullable().optional(),
    goal: z.enum(goalKeys),
})


export type FormProfileValues = z.infer<typeof profileSchema>