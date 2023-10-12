import { SlidesList } from "@/components/AboutUs/SlidesList/SlidesList";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Список слайдов - King Code",
}

export default async function AboutUsPage() {
    return (
        <SlidesList />
    )
}