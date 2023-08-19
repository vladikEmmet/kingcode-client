import { EducationVariantEnum } from "@/components/UI/Tab/Tab";
import { create } from "zustand"
import { BurgerMenuState, ModalState } from "./store.types";
import { persist } from "zustand/middleware";

export const useBurgerMenu = create<BurgerMenuState>()(set => ({
    isOpened: false,
    changeState: () => set(state => ({ isOpened: !state.isOpened }))
}));

// export const useModal = create<ModalState>()(set => ({
//     isOpened: false,
//     open: () => set(state => ({ isOpened: true })),
//     close: () => set(state => ({ isOpened: false })),
// }));

export const useModal = create<ModalState>()(set => ({
    children: null,
    scrollPosition: 0,
    style: {},
    xStyle: "black",
    append: (child, style={}, xStyle="black") => set(state => {
        const curPosition = window.pageYOffset || document.documentElement.scrollTop;
        return {children: child, scrollPosition: curPosition, style, xStyle};
    }),
}));