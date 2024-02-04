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
    description: "В Scratch можно создавать мультфильмы, игры и приложения без знания языков программирования. Идеальный первый шаг в IT с King Code.",
    keywords: ["IT-школа", "Онлайн курсы", "Scratch", "Программирование для детей", "Программирование"],
    twitter: {
        title: "Scratch для младших классов в школе King Code. Программирование без кода",
        description: "Scratch даёт возможность создавать мультфильмы, игры и приложения без знания языков программирования, что делает его идеальным первым шагом для детей и подростков. Давайте сделаем этот первый, но самый важный шаг с KingCode."
    },
    alternates: {
        canonical: "https://kingcodeschool.com/scratch",
    },
    openGraph: {
        title: `Лучшие онлайн курсы для детей и подростков. IT-школа "King Code"`,
        description: `"King Code" - онлайн-школа для детей в возрасте от 5 до 15 лет. У нас Вы легко сможете изучить математику, программирование и 3D-моделирование с опытными преподавателями. 0% скуки, 100% драйва.`,
        url: `${process.env.NEXT_PUBLIC_URL}/scratch`,
        siteName: "King Code School",
        type: "website",
        locale: "ru_KZ",
        alternateLocale: ["ru_RU", "ru_US"],
        images: [
            {
                url: `${process.env.NEXT_PUBLIC_URL}/opengraph-image.png`,
                alt: "King Code",
            }
        ]
    },
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