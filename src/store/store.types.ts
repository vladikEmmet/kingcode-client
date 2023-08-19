export interface BurgerMenuState {
    isOpened: boolean;
    changeState: () => void;
}

// export interface ModalState {
//     isOpened: boolean;
//     open: () => void;
//     close: () => void;
// }


export interface ModalState {
    children: React.ReactNode | null;
    append: (child: React.ReactNode | null, style?: {}, xStyle?: "white" | "black") => void;
    scrollPosition: number;
    style: {};
    xStyle: "white" | "black";
}
