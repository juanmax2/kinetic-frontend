import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { loginSchema, type FormValuesLogin } from "./schema/loginSchema";
import { InputForm } from "../../../components/InputForm";
import { Button } from "../../../components/Button";
import { useAuth } from "../../../store/useAuth.store";
import './LoginForm.css'

export function LoginForm() {

    const { control, handleSubmit, reset } = useForm<FormValuesLogin>({
        resolver: zodResolver(loginSchema), defaultValues: {
            username: "",
            password: ""
        }
    })

    const login = useAuth(state => state.login)
    async function onSubmit(data: FormValuesLogin) {
        try {
            await login(data)
            console.log("Login successfull")
            reset()
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <section className="login-form-container">

            <form onSubmit={handleSubmit(onSubmit)} method="POST">
                <InputForm 
                    name="username"
                    label="Username"
                    control={control}
                    id="username"
                />
                <InputForm 
                    name="password"
                    label="password"
                    control={control}
                    id="password"
                    type="password"
                />

                <Button type="submit">Loggin</Button>
            </form>

        </section>
    )
}