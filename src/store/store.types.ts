export interface BurgerMenuState {
    isOpened: boolean;
    changeState: () => void;
}

export interface ModalState {
    isOpened: boolean;
    open: () => void;
    close: () => void;
}