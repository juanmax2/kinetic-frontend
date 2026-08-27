import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { registerSchema, type FormValues } from "./registerForm/schema/registerSchema";
import { InputForm } from "../../components/InputForm";
import { userService } from "../service/User.service";
import { Button } from "../../components/Button";


export function RegisterForm() {

    const { control, handleSubmit, reset } = useForm({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            username: "",
            email: "",
            password: "",
            confirmPassword: ""
        }
    })

    const onSubmit = async (data: FormValues) => {
        const newData = structuredClone({
            username: data.username,
            email: data.email,
            password: data.password
        })

        try {
            const response = await userService.registerUser(newData);
            console.log("Usuario registrado con éxito!", response.data)
            reset()
            //Futuramente redirigir al login
        } catch (error) {
            console.error("Register user error: ", error)
        }
    
    }

    return (
        <section className="register-form-container">
            <form onSubmit={handleSubmit(onSubmit)} method="POST">
                <InputForm 
                    name="username"
                    label="Username"
                    id="username"
                    control={control}
                />
                <InputForm 
                    name="email"
                    label="Email"
                    id="email"
                    control={control}
                />
                <InputForm 
                    name="password"
                    label="Password"
                    id="password"
                    type="password"
                    control={control}
                />
                <InputForm 
                    name="confirmPassword"
                    label="Confirm Password"
                    id="confirmPassword"
                    type="password"
                    control={control}
                />
                <button type="submit">Register</button>
            </form>
        </section>
    )
}