import { StaticImageData } from "next/image";

interface RouteProps {
    title: string;
    img: StaticImageData;
    link?: string;
    subEl?: RouteProps[];
    mobileImg?: StaticImageData;
}

export type RoutesType = RouteProps[];