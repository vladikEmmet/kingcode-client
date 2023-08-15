import { ReviewsType, ReviewType } from "@/types/review.type";
import { StaticImageData } from "next/image";


export type ReviewData = {
    id: number;
    authorName: string;
    authorImg?: StaticImageData;
    text: string;
};

export type ReviewsData = ReviewData[];