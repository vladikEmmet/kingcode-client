"use client"

import { useModal } from "@/store/store";
import styles from "./Modal.module.scss";
import { HiXMark } from 'react-icons/hi2';
import { useEffect, useRef } from "react";

export const Modal = () => { 
    const modal = useModal();

    const onClose = () => {
        document?.body?.classList.remove("no-scroll");
        document.documentElement.classList.add('fast-scroll');
        document.body.classList.add("fast-scroll");
        window.scrollTo(0, modal.scrollPosition);
        document.documentElement.classList.remove('fast-scroll');
        document.body.classList.remove("fast-scroll");
        modal.append(null);
    }

    useEffect(() => {
        if(!modal.children) return;
        window.scrollTo(0, modal.scrollPosition);
    }, [modal.children])

    useEffect(() => {
        const handleEscapePress = (e: KeyboardEvent) => {
            if(e.key === "Escape") onClose();
        }
        window.addEventListener("keydown", handleEscapePress);

        return () => {
            window.removeEventListener("keydown", handleEscapePress);
        }
    }, [])
    
    if(!modal.children) return null;
  
    return (
        <div className={styles.curtain} onClick={(e) => {
            e.stopPropagation();
            onClose()
        }}>
            <div className={styles.container}>
                <div className={styles.button}>
                    <button onClick={onClose}>
                        <HiXMark />
                    </button>
                </div>
                <div className={styles.content}>
                    {modal.children}
                </div>
            </div>
        </div>
    );
    
}