import { useState } from "react";
import { ModalForm } from "./components/ModalForm";
import { CreateModal } from "./CreateModal";
import { Button } from "../button/Button";
import { useAddExercise } from "../../hooks/useAddExercise";
import type { Exercise } from "../../exercises/models/Exercice.model";


interface Props {
    handleAddExercise: (exercise: Exercise) => void
}

export function AddExerciseModal({handleAddExercise}: Props) {

    const [isOpen, setIsOpen] = useState(false)

    const { mutate: createExercise }= useAddExercise()

    const closeModal = () => {
        setIsOpen(false)
    }

    const openModal = () => {
        setIsOpen(true)
    }

    const handleFormSubmit = (data: { name: string; muscle_group: string }) => {
        createExercise(data, {
            onSuccess: (newExercise) => {
                setIsOpen(false)
                handleAddExercise(newExercise)
            }
        })
    }
    return (
        
        <div className="modal-add-exercise-container">

            <Button className="modal-add-exercise-btn" onClick={openModal}>New exercise</Button>


            <CreateModal isOpen={isOpen} onClose={closeModal}>
                <ModalForm onSubmitExercise={handleFormSubmit} />
            </CreateModal>
        </div>
    )
}