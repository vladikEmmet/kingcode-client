import { axiosFormData, axiosJson } from "@/app/api/helper";
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

    async create(data: FormData, token?: string) {
        return await axiosFormData<FormData>({
            url: URL.review,
            method: "POST",
            data,
            headers: {
                authorization: `Bearer ${token}`,
            }
        })
    },

    async delete(id: number | string, token?: string) {
        return await axiosJson<ReviewData>({
            url: `${URL.review}/${id}`,
            method: "DELETE",
            headers: {
                authorization: `Bearer ${token}`,
            }
        })
    },

};