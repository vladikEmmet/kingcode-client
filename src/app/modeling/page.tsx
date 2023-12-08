import { MainScreen } from "@/components/MainScreen/MainScreen";
import imgMain from "@/assets/mainScreen-modeling.png";
import { WhatWeDo } from "@/components/Blender/WhatWeDo/WhatWeDo";
import { WhyBlender } from "@/components/Blender/WhyBlender/WhyBlender";
import { WhatToLearn } from "@/components/Blender/WhatToLearn/WhatToLearn";
import { FormSection } from "@/components/FormSection/FormSection";
import { WhatToDo } from "@/components/Blender/WhatToDo/WhatToDo";
import { Prospects } from "@/components/Blender/Prospects/Prospects";
import { Prices } from "@/components/Prices/Prices";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "3D-моделирование в Blender, онлайн-курс для начинающих",
    description: "Все самые смелые идеи вашего ребёнка можно воплотить на нашем курсе по 3D-моделированию в Blender. На наших занятиях под чутким руководством преподавателей KingCode Вы изучите основы: инструменты анимирования, modeling, shading, Blender - UV Editing, режимы рендера и многое другое.",
    keywords: ["IT-школа", "3D-моделирование", "Blender", "Изучить blender", "Онлайн курсы", "Tinkercad"],
    twitter: {
        title: "3D-моделирование в Blender в школе King Code. Онлайн-курс для начинающих",
        description: "Все самые смелые идеи вашего ребёнка можно воплотить на нашем курсе по 3D-моделированию в Blender. На наших занятиях под чутким руководством преподавателей KingCode Вы изучите основы: инструменты анимирования, modeling, shading, Blender - UV Editing, режимы рендера и многое другое.",
    },
    alternates: {
        canonical: "https://kingcodeschool.com/modeling",
    },
    openGraph: {
        title: `Лучшие онлайн курсы для детей и подростков. IT-школа "King Code"`,
        description: `"King Code" - онлайн-школа для детей в возрасте от 5 до 15 лет. У нас Вы легко сможете изучить математику, программирование и 3D-моделирование с опытными преподавателями. 0% скуки, 100% драйва.`,
        url: `${process.env.NEXT_PUBLIC_URL}/modeling`,
        siteName: "King Code School",
        type: "website",
        locale: "ru_KZ",
        alternateLocale: ["ru_RU", "ru_US"],
    },
}

export default function Modeling() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Course",
        "name": "3D-моделирование",
        "description": "Курс по 3D-моделированию в онлайн-школе Кинг Код",
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
            <MainScreen img={imgMain} ageRange="1-9 класс" scrollTarget="what-we-do" buttonText="Пробный урок бесплатно">
                3D-МОДЕЛИРОВАНИЕ В <span className="highlighted">BLENDER</span>
            </MainScreen>
            <WhatWeDo />
            <WhyBlender />
            <section className="gather-section">
                <div className="container">
                    <WhatToLearn />
                    <WhatToDo />
                </div>
            </section>
            <Prospects />
            <Prices variant="orange" courseName="Modeling"/>
            <FormSection courseName="3D-Моделирование" className="form-section"/>
        </>
    )
}