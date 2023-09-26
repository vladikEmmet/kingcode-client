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
    title: "Разработка игр на Unity, изучи C# и создай игру своей мечты",
    description: "Unity - один из самых популярных игровых движков в мире. В основе его работы лежит объектно-ориентированное программирование языка C# и серьезные игровые механики. На данном курсе KingCode мы создадим несколько крутых игр, параллельно изучив основы этого языка программирования.",
    keywords: ["IT-школа", "Онлайн курсы", "Unity", "Изучить Unity", "изучить C#", "Разработка игр"],
    twitter: {
        title: "Разработка игр на Unity в школе King Code. Изучи C# и создай игру своей мечты",
        description: "Unity - один из самых популярных игровых движков в мире. В основе его работы лежит объектно-ориентированное программирование языка C# и серьезные игровые механики. На данном курсе KingCode мы создадим несколько крутых игр, параллельно изучив основы этого языка программирования.",
    }
}

export default function Unity() {
    return (
        <>
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