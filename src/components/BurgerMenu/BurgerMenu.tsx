"use client"

import { useBurgerMenu } from "@/store/store";
import { FC } from "react";
import styles from "./BurgerMenu.module.scss"

interface BurgerMenuProps {
    isOpened?: boolean;
}

export const BurgerMenu: FC<BurgerMenuProps> = ({isOpened}) => {
  const burgerMenu = useBurgerMenu();
  const handleClick = () => {
    burgerMenu.changeState();
    document?.body?.classList.remove('no-scroll');
  };
    
  return (
    <div className={`menu ${burgerMenu.isOpened ? "active" : ""}`}>
        <div className={styles.blur}/>
        <nav className={styles.list}>
            <ul>
                <li><a href="#courses" rel="noreferer" rev="Page navigation" onClick={handleClick}>Направления</a></li>
                <li><a href="#about-us" rel="noreferer" rev="Page navigation" onClick={handleClick}>О нас</a></li>
                <li><a href="#reviews" rel="noreferer" rev="Page navigation" onClick={handleClick}>Отзывы</a></li>
                <li><a href="#prices" rel="noreferer" rev="Page navigation" onClick={handleClick}>Цены</a></li>
            </ul>
        </nav>
    </div>
  )
}