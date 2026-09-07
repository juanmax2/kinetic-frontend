import type { ChangeEvent } from "react";

interface Props {
    onTextChange: (event: ChangeEvent<HTMLInputElement>) => void;
    onMuscleChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

export function ExerciseSelectorFilters({onTextChange, onMuscleChange}: Props) {


    return (

        <section className="exercise-selector-form">

                <div className="form-exercise-container">
                    
                    <input
                        className="input-search-muscle"
                        type="text"
                        name="muscleSearch"
                        id="muscleSearch"
                        onChange={onTextChange}
                        placeholder="Press banca..."
                    />

                    <div className="select-container">

                        <label htmlFor="muscle-group">Muscle Group</label>
                        <select 
                            onChange={onMuscleChange}
                            name="muscle-group" 
                            id="muscle-group"
                        >
                            <option value="">All</option>
                            <option value="chest">Chest</option>
                            <option value="back">Back</option>
                            <option value="legs">Legs</option>
                            <option value="shoulders">Shoulders</option>
                            <option value="arms">Arms</option>
                            <option value="core">Core</option>

                        </select>

                    </div>

                </div>

            </section>
    )
}