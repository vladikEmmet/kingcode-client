import { CreateSlideForm } from "@/components/CreateSlideForm/CreateSlideForm";
import { AboutUsService } from "@/services/aboutUs/aboutUs.service";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Создание слайда - King Code"
}

export default async function Create() {
    return (
        <div className="full-height-container">
            <h1>Создание слайда</h1>
            <CreateSlideForm/>
        </div>
    )
}