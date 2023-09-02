import { axiosJson } from "@/app/api/helper"
import { URL } from "@/types/url";
import { CourseData, PriceData } from "./course.types"

export const CourseService = {
    async get(name: string) {
        const {data} = await axiosJson<CourseData>({
            method: "GET",
            url: `course/${name}`,
        })

        return data;
    },

    async getAll() {
        const {data} = await axiosJson<CourseData[]>({
            method: "GET",
            url: "course",
        });

        return data;
    },

    async update(id: number, newData: PriceData) {
        const {data} = await axiosJson<PriceData>({
            method: "PATCH",
            url: `${URL.course}/${id}`,
            data: newData,
        });

        return data;
    }
}