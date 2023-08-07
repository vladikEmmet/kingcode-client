import { create } from "zustand"
import { BurgerMenuState, ModalState } from "./store.types";

export const useBurgerMenu = create<BurgerMenuState>()(set => ({
    isOpened: false,
    changeState: () => set(state => ({ isOpened: !state.isOpened }))
}));

export const useModal = create<ModalState>()(set => ({
    isOpened: false,
    open: () => set(state => ({ isOpened: true })),
    close: () => set(state => ({ isOpened: false })),
}))
