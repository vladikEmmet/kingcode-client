import { errorCatch } from "@/app/api/helper";
import { CourseList } from "@/components/CourseList/CourseList";
import { CourseService } from "@/services/course/course.service";
import { Metadata } from "next";

const getCourses = async() => {
    try { 
        const data = await CourseService.getAll();
        return data;
    } catch(err) {
        throw new Error(errorCatch(err));
    }
}

export const metadata: Metadata = {
    title: "Изменение цены - King Code",
}

export default async function PricesPage() {
    const courses = await getCourses();

    return (
        <CourseList courses={courses || []}/>
    )
}