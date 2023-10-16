import { MainScreen } from "@/components/MainScreen/MainScreen";
import mainImg from "@/assets/scratch/mainScreen.png";
import { WhatWeDo } from "@/components/Scratch/WhatWeDo/WhatWeDo";
import { WhatToLearn } from "@/components/Scratch/WhatToLearn/WhatToLearn";
import { OurProjects } from "@/components/Scratch/OurProjects/OurProjects";
import { WhyImportant } from "@/components/Scratch/WhyImportant/WhyImportant";
import { Prices } from "@/components/Prices/Prices";
import { FormSection } from "@/components/FormSection/FormSection";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Scratch для младших классов, программирование без кода",
    description: "Scratch даёт возможность создавать мультфильмы, игры и приложения без знания языков программирования, что делает его идеальным первым шагом для детей и подростков. Давайте сделаем этот первый, но самый важный шаг с KingCode.",
    keywords: ["IT-школа", "Онлайн курсы", "Scratch", "Программирование для детей", "Программирование"],
    twitter: {
        title: "Scratch для младших классов в школе King Code. Программирование без кода",
        description: "Scratch даёт возможность создавать мультфильмы, игры и приложения без знания языков программирования, что делает его идеальным первым шагом для детей и подростков. Давайте сделаем этот первый, но самый важный шаг с KingCode."
    }
}

export default function Scratch() {
    return (
        <>
            <MainScreen scrollTarget="what-we-do" img={mainImg} ageRange="1 - 4 КЛАСС" buttonText="Пробный урок бесплатно">
                ПРОГРАММИРОВАНИЕ В <span className="highlighted">SCRATCH</span>
            </MainScreen>
            <WhatWeDo />
            <WhatToLearn />
            <OurProjects />
            <WhyImportant />
            <Prices courseName="Scratch"/>
            <FormSection courseName="Scratch"/>
        </>
    )
}