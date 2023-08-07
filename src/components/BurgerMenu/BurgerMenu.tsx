"use client"

import { useBurgerMenu } from "@/store/store";
import { FC } from "react";
import styles from "./BurgerMenu.module.scss"

interface BurgerMenuProps {
    isOpened?: boolean;
}

export const BurgerMenu: FC<BurgerMenuProps> = ({isOpened}) => {
  const burgerMenu = useBurgerMenu();
  const handleClick = () => burgerMenu.changeState();
    
  return (
    <div className={`menu ${burgerMenu.isOpened ? "active" : ""}`}>
        <div className={styles.blur}/>
        <div className={styles.list}>
            <ul>
                <li><a href="*" rel="noreferer" rev="Page navigation">Направления</a></li>
                <li><a href="*" rel="noreferer" rev="Page navigation">О нас</a></li>
                <li><a href="*" rel="noreferer" rev="Page navigation">Преподаватели</a></li>
                <li><a href="*" rel="noreferer" rev="Page navigation">Отзывы</a></li>
                <li><a href="*" rel="noreferer" rev="Page navigation">Цены</a></li>
            </ul>
        </div>
    </div>
  )
}