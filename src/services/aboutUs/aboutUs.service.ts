import { axiosFormData, axiosJson } from "@/app/api/helper"
import { URL } from "@/types/url";
import { AboutUsData, AboutUsSendedData } from "./aboutUs.types"

export const AboutUsService = {
    async getAll() {
        const {data} = await axiosJson<AboutUsData[]>({
            url: URL.aboutUs,
            method: "GET",
        });
        return data;
    },

    async delete(id: number) {
        const {data} = await axiosJson<AboutUsData>({
            url: `${URL.aboutUs}/${id}`,
            method: "DELETE"
        });

        return data;
    },

    async create(dto: FormData) {
        const {data} = await axiosFormData<FormData>({
            url: `${URL.aboutUs}`,
            method: "POST",
            data: dto
        });

        return data;
    }
}