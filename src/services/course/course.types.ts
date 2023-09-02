import { PriceProps } from "@/types/price.type";

export type PriceData = PriceProps & {
    id: number;
};

export type CourseData = {
    id: number;
    name: string;
    prices: PriceData[];
}

export type CoursePriceToUpdate = PriceData & {
    priceId: number;
}