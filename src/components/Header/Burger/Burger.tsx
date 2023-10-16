import { useBurgerMenu } from "@/store/store"

export const Burger = () => {
  const burgerMenu = useBurgerMenu();

  const handleClick = () => {
    console.log("click");
    burgerMenu.changeState();
    if(!burgerMenu.isOpened) {
        document?.body?.classList.add("no-scroll");
        return;
    }

    document?.body?.classList.remove("no-scroll");
  }

  return (
    <div className="burger-wrapper">
        <div className="burger-container" onClick={handleClick}>
            <div className={`burger ${burgerMenu.isOpened ? "animated" : ""}`}/>
        </div>
    </div>
  )
}