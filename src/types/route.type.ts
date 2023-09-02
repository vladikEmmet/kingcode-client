import { StaticImageData } from "next/image";

interface RouteProps {
    title: string;
    img: StaticImageData;
    link?: string;
    subEl?: RouteProps[];
    isRightText?: boolean;
    mobileImg?: StaticImageData;
}

export type RoutesType = RouteProps[];