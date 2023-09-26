"use client"

import { useModal } from "@/store/store";
import styles from "./Modal.module.scss";
import { HiXMark } from 'react-icons/hi2';
import { useCallback, useEffect } from "react";
import cn from 'clsx';

export const Modal = () => { 
    const modal = useModal();

    const onClose = useCallback(() => {
        document?.body?.classList.remove("no-scroll");
        document.documentElement.classList.remove("no-scroll");
        document.documentElement.classList.add('fast-scroll');
        document.body.classList.add("fast-scroll");
        window.scrollTo(0, modal.scrollPosition);
        document.documentElement.classList.remove('fast-scroll');
        document.body.classList.remove("fast-scroll");
        modal.append(null, {}, "black");
    }, [modal.children, modal.scrollPosition, modal.style, modal.xStyle, modal.notification, modal.append]);

    useEffect(() => {
        if(!modal.children) return;
        window.scrollTo(0, modal.scrollPosition);
        document.documentElement.classList.add("no-scroll");
        document.body.classList.add("no-scroll");
    }, [modal.children, modal.scrollPosition])

    useEffect(() => {
        const handleEscapePress = (e: KeyboardEvent) => {
            if(e.key === "Escape") onClose();
        }
        window.addEventListener("keydown", handleEscapePress);

        return () => {
            window.removeEventListener("keydown", handleEscapePress);
        }
    }, [onClose])
    
    if(!modal.children) return null;
  
    return (
        <div className={styles.curtain}>
            <div className={cn(styles.container, {
                [styles.notification]: modal.notification,
            })} style={modal.style}>
                <div className={styles.button}>
                    <button onClick={onClose} className={modal.xStyle === "white" ? styles.light : styles.dark}>
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