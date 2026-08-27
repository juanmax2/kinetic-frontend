import type { ComponentProps, ReactNode } from "react";

interface ButtonProps extends ComponentProps<"button"> {
    children: ReactNode;
}

export function Button({type="button", children, className="", ...rest}: ButtonProps) {

    return (
        <button
            type={type}
            className={className}
            {...rest}
        >
            {children}
        </button>
    )
}