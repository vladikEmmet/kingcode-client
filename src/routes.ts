import programming from "@/assets/programming.png";
import programmingMobile from "@/assets/programming-mobile.png";
import math from "@/assets/math.png";
import mathMobile from "@/assets/math-mobile.png";
import modeling from "@/assets/modeling.png";
import modelingMobile from "@/assets/modeling-mobile.png";
import unity from "@/assets/unity.png";
import scratch from "@/assets/scratch.png";
import { RoutesType } from "./types/route.type";

export const routes: RoutesType = [
    {
        title: "Программирование",
        img: programming,
        mobileImg: programmingMobile,
        subEl: [
            {
                title: "Scratch",
                img: scratch,
                link: "/programming/scratch",
            },
            {
                title: "Unity",
                img: unity,
                link: "/programming/unity",
            },
        ],
    },
    {
        title: "Олимпиадная математика",
        img: math,
        mobileImg: mathMobile,
        link: "/math",
    },
    {
        title: "3D-Моделирование",
        img: modeling,
        mobileImg: modelingMobile,
        link: "/modeling",
    }
]