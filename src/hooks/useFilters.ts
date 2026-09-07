import { useRef, useState, type ChangeEvent } from "react";


export function useFilters() {

    const [textFilter, setTextFilter] = useState("")
    const [muscleFilter, setMuscleFilter] = useState("")

    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

    function onTextChange(event: ChangeEvent<HTMLInputElement>) {
        const value = event.target.value

        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
        }

        timeoutRef.current = setTimeout(() => {
            setTextFilter(value)
        }, 300)
    }

    function onMuscleChange(event: ChangeEvent<HTMLSelectElement>) {
        const value = event.target.value

        setMuscleFilter(value)
    }


    return { textFilter, muscleFilter, onTextChange, onMuscleChange}

}