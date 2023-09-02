import { EducationVariantEnum } from "@/components/UI/Tab/Tab";
import { create } from "zustand"
import { BurgerMenuState, ModalState } from "./store.types";
import { persist } from "zustand/middleware";

export const useBurgerMenu = create<BurgerMenuState>()(set => ({
    isOpened: false,
    changeState: () => set(state => ({ isOpened: !state.isOpened }))
}));

export const useModal = create<ModalState>()(set => ({
    children: null,
    scrollPosition: 0,
    style: {},
    xStyle: "black",
    notification: false,
    append: (child, style={}, xStyle="black", notification = false) => set(state => {
        const curPosition = window.pageYOffset || document.documentElement.scrollTop;
        return {children: child, scrollPosition: curPosition, style, xStyle, notification};
    }),
}));