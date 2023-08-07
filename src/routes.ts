import programming from "@/assets/programming.png"
import math from "@/assets/math.png"
import modeling from "@/assets/modeling.png"
import { StaticImageData } from "next/image";

interface RouteProps {
    title: string;
    img: StaticImageData;
    link?: string;
    subEl?: RouteProps[];
}

type RoutesType = RouteProps[];

export const routes: RoutesType = [
    {
        title: "Программирование",
        img: programming,
        subEl: [
            {
                title: "Unity",
                img: programming,
                link: "/pogramming/unity",
            },
            {
                title: "Scratch",
                img: programming,
                link: "/pogramming/scratch",
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