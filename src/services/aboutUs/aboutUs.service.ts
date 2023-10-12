import { axiosFormData, axiosJson } from "@/app/api/helper"
import { URL } from "@/types/url";
import { AboutUsData } from "./aboutUs.types"

export const AboutUsService = {
    async getAll() {
        const {data} = await axiosJson<AboutUsData[]>({
            url: URL.aboutUs,
            method: "GET",
        });
        return data;
    },

    async delete(id: number, token?: string) {
        const {data} = await axiosJson<AboutUsData>({
            url: `${URL.aboutUs}/${id}`,
            method: "DELETE",
            headers: {
                authorization: `Bearer ${token}`,
            }
        });

        return data;
    },

    async create(dto: FormData, token?: string) {
        const {data} = await axiosFormData<FormData>({
            url: `${URL.aboutUs}`,
            method: "POST",
            data: dto,
            headers: {
                authorization: `Bearer ${token}`,
            }
        });

        return data;
    }
}