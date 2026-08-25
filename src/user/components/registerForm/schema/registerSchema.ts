import z from "zod";


export const registerSchema = z.object({
    username: z.string().min(1, "Username is required"),
    email: z.email("Invalid email format"),
    password: z.string().min(8, "Password must have 8 characters minimum"),
    confirmPassword: z.string().min(8, "Password must have 8 characters minimum"),
}).refine(data => data.password === data.confirmPassword, {
    message: "The passwords must match",
    path: ['confirmPassword']
})

export type FormValues = z.infer<typeof registerSchema>