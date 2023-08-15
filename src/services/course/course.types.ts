import { PriceProps } from "@/types/price.type";

export type PriceData = PriceProps & {};

export type CourseData = {
    id: number;
    name: string;
    prices: PriceData[];
}