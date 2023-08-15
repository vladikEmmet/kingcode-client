import { axiosJson } from "@/app/api/helper"
import { CourseData } from "./course.types"

export const CourseService = {
    async get(name: string) {
        const {data} = await axiosJson<CourseData>({
            method: "GET",
            url: `course/${name}`,
        })

        return data;
    }
}