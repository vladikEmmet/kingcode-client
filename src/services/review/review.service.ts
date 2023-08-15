import { axiosJson } from "@/app/api/helper";
import { ReviewsType } from "@/types/review.type";
import { URL } from "@/types/url";
import { ReviewData, ReviewsData } from "./review.types";

export const ReviewService = {
    async getAll() {
        const {data} = await axiosJson<ReviewData[]>({
            url: URL.review,
            method: "GET",
        });
        return data;
    },

    async create(data: ReviewData) {
        return await axiosJson<ReviewData>({
            url: URL.review,
            method: "POST",
            data,
        })
    },

    async delete(id: number | string) {
        return await axiosJson<ReviewData>({
            url: `${URL.review}/${id}`,
            method: "DELETE",
        })
    },

};