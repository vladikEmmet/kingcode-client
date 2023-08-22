"use client"

import { useBurgerMenu } from "@/store/store"
import styles from "./Curtain.module.scss"

export const Curtain = () => {
  const {isOpened} = useBurgerMenu();

  return (
    <div className={styles.curtain}
        style={{visibility: isOpened ? "visible" : "hidden", opacity: isOpened ? 1 : 0}}
    />
  )
}
