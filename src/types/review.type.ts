import { StaticImageData } from "next/image";

export type ReviewType = {
    authorName: string;
    authorImg?: StaticImageData;
    text: string;
}

export type ReviewsType = {
    reviews: ReviewType[];
}