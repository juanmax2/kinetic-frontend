import type { ReactNode } from "react";
import './MainContent.css'

interface MainProps {
    children: ReactNode;
}

export function MainContent({children}: MainProps) {

    return (
        <main className="main-content">
            {children}
        </main>
    )
}