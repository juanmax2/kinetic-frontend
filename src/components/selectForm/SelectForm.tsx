import type { ReactNode } from "react";
import { Controller, type Control, type FieldValues, type Path } from "react-hook-form";


interface SelectProps<T extends FieldValues> {
    name: Path<T>;
    label: string;
    control: Control<T>;
    children: ReactNode;
    id: string;
}

export function SelectForm<T extends FieldValues>({
    name,
    label,
    control,
    children,
    id
}: SelectProps<T>){

    return (
        <Controller 
            name={name}
            control={control}
            render={({ field, fieldState: {error} }) => (
                <div className={`select-${name}-container`}>
                    <label htmlFor={id}>{label}</label>
                    <select 
                        {...field}
                        id={id}
                    >
                        {children}
                    </select>

                    {error && <p className="error-select-container">{error.message}</p>}
                </div>
            )}
        />
    )
}