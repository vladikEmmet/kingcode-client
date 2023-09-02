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
    title: "Олимпиадная математика, онлайн-занятия для детей 5-14 лет",
    description: `В KingCode ваш ребёнок научится не только решать нетривиальные, логические задачи повышенной сложности, но и получит способность смотреть на любую задачу "сверху" и подбирать необходимый алгоритм решения.`,
    keywords: ["IT-школа", "Онлайн курсы", "Олимпиадная математика", "Математика", "Логика", "Алгоритмы"],
    twitter: {
        title: "Олимпиадная математика в школе King Code. Онлайн-занятия для детей 5-14 лет",
        description: `В KingCode ваш ребёнок научится не только решать нетривиальные, логические задачи повышенной сложности, но и получит способность смотреть на любую задачу "сверху" и подбирать необходимый алгоритм решения.`,
    }
}

const Math = () => {
    return (
        <>
            <MainScreen img={mainImg} ageRange="0-7 КЛАСС" scrollTarget="what-we-do" buttonText="Пробный урок бесплатно">
                ОЛИМПИАДНАЯ МАТЕМАТИКА
            </MainScreen>
            <WhatWeDo />
            <Examples />
            <Classes />
            <WhatToKnow />
            <AgeGroups />
            <Prices courseName="Математика"/>
            <FormSection courseName="Математика"/>
        </>
    )
}

export default Math