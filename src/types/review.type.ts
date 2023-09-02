import { StaticImageData } from "next/image";

export type ReviewType = {
    authorName: string;
    authorImg?: string;
    text: string;
}

export type ReviewsType = {
    reviews: ReviewType[];
}