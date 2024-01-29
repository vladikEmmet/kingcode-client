export interface BurgerMenuState {
    isOpened: boolean;
    changeState: () => void;
}

export interface ModalState {
    children: React.ReactNode | null;
    append: (child: React.ReactNode | null, style?: {}, xStyle?: "white" | "black", notification?: boolean) => void;
    style: {};
    xStyle: "white" | "black";
    scrollPosition: number;
    notification: boolean;
}
