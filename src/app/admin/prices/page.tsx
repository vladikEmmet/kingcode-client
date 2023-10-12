import { CourseList } from "@/components/CourseList/CourseList";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Изменение цены - King Code",
}

export default async function PricesPage() {
    return (
        <CourseList />
    )
}