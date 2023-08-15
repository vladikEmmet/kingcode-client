import { StaticImageData } from "next/image";

interface RouteProps {
    title: string;
    img: StaticImageData;
    link?: string;
    subEl?: RouteProps[];
}

export type RoutesType = RouteProps[];