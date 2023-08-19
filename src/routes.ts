import programming from "@/assets/programming.png";
import math from "@/assets/math.png";
import modeling from "@/assets/modeling.png";
import unity from "@/assets/unity.png";
import scratch from "@/assets/scratch.png";
import { RoutesType } from "./types/route.type";

export const routes: RoutesType = [
    {
        title: "Программирование",
        img: programming,
        subEl: [
            {
                title: "Unity",
                img: unity,
                link: "/programming/unity",
            },
            {
                title: "Scratch",
                img: scratch,
                link: "/programming/scratch",
            }
        ],
    },
    {
        title: "Олимпиадная математика",
        img: math,
        link: "/math",
    },
    {
        title: "3D-Моделирование",
        img: modeling,
        link: "/modeling",
    }
]