import { PricesProps } from "@/types/price.type";

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
    append: (child: React.ReactNode | null) => void;
    scrollPosition: number;
}

export interface PricesState extends PricesProps {
    error: string | null;
    isLoading: boolean;
}