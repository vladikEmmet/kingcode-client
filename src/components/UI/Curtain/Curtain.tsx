"use client"

import { useBurgerMenu, useModal } from "@/store/store"
import styles from "./Curtain.module.scss"
import cn from 'clsx'

export const Curtain = () => {
  const {isOpened} = useBurgerMenu();
  const {children} = useModal();

  return (
    <div className={cn(styles.curtain)}
        style={{visibility: (isOpened || children) ? "visible" : "hidden", opacity: (isOpened || children) ? 1 : 0, display: "none"}}
    />
  )
}
