import { useState, type ChangeEvent } from "react";
import { Button } from "../../button/Button";

interface Props {
    onSubmitExercise: (data: { name: string; muscle_group: string }) => void
}


export function ModalForm({onSubmitExercise}: Props) {

    const [name, setName] = useState("")
    const [muscleGroup, setMuscleGroup] = useState("chest")


    const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value

        setName(value)
    }

    const handleMuscleChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value

        setMuscleGroup(value)
    }

    const handleSubmit = (event: SubmitEvent) => {
        event.preventDefault()

        if(!name.trim()) return

        onSubmitExercise({
            name: name,
            muscle_group: muscleGroup
        })

    }

    return (

        <form className="modal-form" onSubmit={() => handleSubmit}>

            <input onChange={handleNameChange} type="text" className="input-name-modal" placeholder="Press banca" />

            <div className="modal-form-select-container">
                <label htmlFor="muscle-group-modal">Muscle</label>
                <select onChange={handleMuscleChange} name="muscle-group-modal" id="muscle-group-modal">
                    <option value="chest">Chest</option>
                    <option value="back">Back</option>
                    <option value="legs">Legs</option>
                    <option value="shoulders">Shoulders</option>
                    <option value="arms">Arms</option>
                    <option value="core">Core</option>
                </select>
            </div>

            <Button className="submit-modal" type="submit">Add exercise</Button>
        </form>
    )
}