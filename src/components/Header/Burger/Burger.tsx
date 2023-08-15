"use client"

import { useBurgerMenu } from "@/store/store"

export const Burger = () => {
  const burgerMenu = useBurgerMenu();
  const handleClick = () => {
    burgerMenu.changeState();
    if(!burgerMenu.isOpened) {
        document?.body?.classList.add("no-scroll");
        return;
    }

    document?.body?.classList.remove("no-scroll");
  }

  return (
    <div className="burger-wrapper" onClick={handleClick}>
        <div className="burger-container">
            <div className={`burger ${burgerMenu.isOpened ? "animated" : ""}`}/>
        </div>
    </div>
  )
}