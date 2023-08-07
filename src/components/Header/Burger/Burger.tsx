"use client"

import { useBurgerMenu } from "@/store/store"

export const Burger = () => {
  const burgerMenu = useBurgerMenu();
  const handleClick = () => {
    burgerMenu.changeState();
    console.log(burgerMenu.isOpened);
  }

  return (
    <div className="burger-wrapper" onClick={handleClick}>
        <div className={`burger ${burgerMenu.isOpened ? "animated" : ""}`}/>
    </div>
  )
}