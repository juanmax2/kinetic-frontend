import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { type FormProfileValues, profileSchema } from "./schema/profileSchema"
import { InputForm } from "../../../components/inputForm/InputForm"
import { SelectForm } from "../../../components/selectForm/SelectForm"
import { Button } from "../../../components/button/Button"
import { useAuth } from "../../../store/useAuth.store"
import { useNavigate } from "react-router-dom"
import './ProfileForm.css'

export function ProfileForm(){
    
    const updateProfile = useAuth(state => state.updateProfile)
    const user = useAuth(state => state.user)
    const isLoading = useAuth(state => state.isLoading)

    const navigate = useNavigate()

    const { control, handleSubmit, reset } = useForm<FormProfileValues>({
        resolver: zodResolver(profileSchema), defaultValues: {
            username: user?.username || "",
            email: user?.email || "",
            age: user?.profile?.age || "",
            gender: user?.profile?.gender || "",
            weight: user?.profile?.weight || "",
            height: user?.profile?.height || "",
            goal: user?.profile?.goal || "maintenance"
        }
    })

    if (isLoading) {
        return <p>Cargando perfil...</p>
    }

    async function onSubmit(data: FormProfileValues) {

        const formattedData = {
            ...data,
            age: data.age !== "" && data.age !== null && data.age !== undefined ? Number(data.age) : null,
            weight: data.weight !== "" && data.weight !== null && data.weight !== undefined ? Number(data.weight) : null,
            height: data.height !== "" && data.height !== null && data.height !== undefined ? Number(data.height) : null,
            gender: data.gender === "" ? null : data.gender,
        }

        console.log("¡onSubmit ejecutándose con datos:", formattedData);
        try{
            await updateProfile(formattedData)
            reset()
            navigate('/dashboard', { replace: true})
        }catch (err) {
            console.error(err)
        }
    }

    return (
        <section className="profile-form-container">

            <form onSubmit={handleSubmit(onSubmit)}>

                <InputForm 
                    name="username"
                    label="Username"
                    id="username-update-profile"
                    control={control}
                />
                
                <InputForm 
                    name="email"
                    label="Email"
                    id="email-update-profile"
                    control={control}
                />

                <InputForm 
                    name="age"
                    label="Age"
                    id="age-update-profile"
                    type="number"
                    control={control}
                />
                <SelectForm
                    name="gender"
                    label="Gender"
                    id="gender-update-profile"
                    control={control}
                >
                    <option value="">-</option>
                    <option value="M">Masculine</option>
                    <option value="F">Femenine</option>
                </SelectForm>

                <InputForm 
                    name="weight"
                    label="Weight"
                    id="weight-update-profile"
                    type="number"
                    control={control}
                />
                <InputForm 
                    name="height"
                    label="Height"
                    id="height-update-profile"
                    type="number"
                    control={control}
                />
                
                <SelectForm
                    name="goal"
                    label="Goal"
                    id="goal-update-profile"
                    control={control}
                >
                    <option value="maintenance">Maintenance</option>
                    <option value="cut">Cut</option>
                    <option value="bulk">Bulk</option>
                </SelectForm>

                <Button type="submit">Update</Button>

            </form>

        </section>
    )
}