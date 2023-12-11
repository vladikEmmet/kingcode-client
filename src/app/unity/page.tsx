import mainImg from "@/assets/unity/mainScreen.png";
import { FormSection } from "@/components/FormSection/FormSection";
import { MainScreen } from "@/components/MainScreen/MainScreen";
import { Prices } from "@/components/Prices/Prices";
import { Desert } from "@/components/Unity/Desert/Desert";
import { OurProjects } from "@/components/Unity/OurProjects/OurProjects";
import { Prospects } from "@/components/Unity/Prospects/Prospects";
import { WhatToExplore } from "@/components/Unity/WhatToExplore/WhatToExplore";
import { WhatWeDo } from "@/components/Unity/WhatWeDo/WhatWeDo";
import { WhyImportant } from "@/components/Unity/WhyImportant/WhyImportant";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Разработка игр на Unity. Изучи C# и создай игру своей мечты",
    description: "Unity - популярный игровой движкок. Мы создадим несколько крутых игр на нём, изучая основы C#. Весело, а главное полезно проведём время.",
    keywords: ["IT-школа", "Онлайн курсы", "Unity", "Изучить Unity", "изучить C#", "Разработка игр"],
    twitter: {
        title: "Разработка игр на Unity в школе King Code. Изучи C# и создай игру своей мечты",
        description: "Unity - один из самых популярных игровых движков в мире. В основе его работы лежит объектно-ориентированное программирование языка C# и серьезные игровые механики. На данном курсе KingCode мы создадим несколько крутых игр, параллельно изучив основы этого языка программирования.",
    },
    alternates: {
        canonical: "https://kingcodeschool.com/unity",
    },
    openGraph: {
        title: `Лучшие онлайн курсы для детей и подростков. IT-школа "King Code"`,
        description: `"King Code" - онлайн-школа для детей в возрасте от 5 до 15 лет. У нас Вы легко сможете изучить математику, программирование и 3D-моделирование с опытными преподавателями. 0% скуки, 100% драйва.`,
        url: `${process.env.NEXT_PUBLIC_URL}/unity`,
        siteName: "King Code School",
        type: "website",
        locale: "ru_KZ",
        alternateLocale: ["ru_RU", "ru_US"],
    },
}

export default function Unity() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Course",
        "name": "Unity",
        "description": "Курс по разработке игр в онлайн-школе Кинг Код",
        "provider": {
            "@type": "Organization",
            "name": "Онлайн-школа King Code",
            "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+77066565738",
                "contactType": "Консультация"
            },
            "sameAs": [
                "https://www.instagram.com/kingcode_school",
            ]
        }
    }
    
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <MainScreen scrollTarget="what-we-do" img={mainImg} ageRange="5 - 7 КЛАСС" buttonText="Пробный урок бесплатно">
                РАЗРАБОТКА ИГР НА <span className="highlighted">UNITY</span>
            </MainScreen>
            <WhatWeDo />
            <WhatToExplore />
            <OurProjects />
            <WhyImportant />
            <Prospects />
            <Desert />
            <Prices courseName="Unity"/>
            <FormSection courseName="Unity"/>
        </>
    )
}