import { type ReactNode } from "react";
import { createPortal } from "react-dom";
import { Button } from "../button/Button";
import './Modal.css'

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
}

export function CreateModal({isOpen, onClose, children}: ModalProps) {

    const modalRoot = document.getElementById("modal")

    if(!isOpen || !modalRoot) return null

    return createPortal(
        <div className="portal-container">
            <Button className="portal-close-btn" onClick={onClose}>X</Button>
            {children}
        </div>, modalRoot
    )
}