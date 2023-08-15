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
    append: (child) => set(state => {
        const curPosition = window.pageYOffset || document.documentElement.scrollTop;
        return {children: child, scrollPosition: curPosition}
    }),
}));

export const useCarousel = create<{index: number}>()(set => ({
    index: 0,
    setIndex: (idx: number) => set(state => ({index: idx})),
}));