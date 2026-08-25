import { Controller, type Control, type FieldValues, type Path } from "react-hook-form";

interface InputProps<T extends FieldValues>{
    name: Path<T>;
    label: string;
    control: Control<T>;
    type?: string;
    id: string;
}


export function InputForm<T extends FieldValues>({
    name,
    label,
    control,
    type="text",
    id
}: InputProps<T>) {

    return (
        <Controller 
            name={name}
            control={control}
            render={({ field, fieldState: {error} }) => (
                <div className={`input-${name}-container`}>
                    <label htmlFor={id}>{label}</label>
                    <input 
                        {...field}
                        type={type}
                        id={id}
                    />
                    {error && <p className={`error-input-container`}>{error.message}</p>}
                </div>
            )}
        />
    )
}