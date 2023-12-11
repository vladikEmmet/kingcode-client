import { MainScreen } from "@/components/MainScreen/MainScreen"
import mainImg from "@/assets/math/mainScreen.png"
import { WhatWeDo } from "@/components/Math/WhatWeDo/WhatWeDo"
import { Examples } from "@/components/Math/Examples/Examples"
import { FormSection } from "@/components/FormSection/FormSection"
import { Prices } from "@/components/Prices/Prices"
import { WhatToKnow } from "@/components/Math/WhatToKnow/WhatToKnow"
import { AgeGroups } from "@/components/Math/AgeGroups/AgeGroups"
import { Classes } from "@/components/Math/Classes/Classes"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Олимпиадная математика, онлайн-уроки для детей от 5 лет",
    description: `Ваш ребёнок сможет не только решать задачи повышенной сложности, но и научится смотреть на них "сверху" и подбирать нужный алгоритм решения.`,
    keywords: ["IT-школа", "Онлайн курсы", "Олимпиадная математика", "Математика", "Логика", "Алгоритмы"],
    twitter: {
        title: "Олимпиадная математика в школе King Code. Онлайн-занятия для детей 5-14 лет",
        description: `В KingCode ваш ребёнок научится не только решать нетривиальные, логические задачи повышенной сложности, но и получит способность смотреть на любую задачу "сверху" и подбирать необходимый алгоритм решения.`,
    },
    alternates: {
        canonical: "https://kingcodeschool.com/math",
    },
    openGraph: {
        title: `Лучшие онлайн курсы для детей и подростков. IT-школа "King Code"`,
        description: `"King Code" - онлайн-школа для детей в возрасте от 5 до 15 лет. У нас Вы легко сможете изучить математику, программирование и 3D-моделирование с опытными преподавателями. 0% скуки, 100% драйва.`,
        url: `${process.env.NEXT_PUBLIC_URL}/math`,
        siteName: "King Code School",
        type: "website",
        locale: "ru_KZ",
        alternateLocale: ["ru_RU", "ru_US"],
    },
}

const Math = () => {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Course",
        "name": "Олимпиадная математика",
        "description": "Олимпиадная математика в онлайн-школе Кинг Код",
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
            <MainScreen img={mainImg} ageRange="0-7 КЛАСС" scrollTarget="what-we-do" buttonText="Пробный урок бесплатно">
                ОЛИМПИАДНАЯ МАТЕМАТИКА
            </MainScreen>
            <WhatWeDo />
            <Examples />
            <Classes />
            <WhatToKnow />
            <AgeGroups />
            <Prices courseName="Math"/>
            <FormSection courseName="Математика"/>
        </>
    )
}

export default Math