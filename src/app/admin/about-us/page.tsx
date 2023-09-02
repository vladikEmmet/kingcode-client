import { errorCatch } from "@/app/api/helper";
import { SlidesList } from "@/components/AboutUs/SlidesList/SlidesList";
import { AboutUsService } from "@/services/aboutUs/aboutUs.service"
import { Metadata } from "next";
import { notFound } from "next/navigation";

const getSlides = async() => {
    try {
        const data = await AboutUsService.getAll();
        return data;
    } catch(err) {
        throw new Error(errorCatch(err));
    }
}

export const metadata: Metadata = {
    title: "Список слайдов - King Code",
}

export default async function AboutUs() {
    const slides = await getSlides();

    return (
        <SlidesList slides={slides}/>
    )
}