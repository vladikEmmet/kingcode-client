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
    }
}

export default function Modeling() {
    return (
        <>
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
            <Prices variant="orange" courseName="3D-Моделирование"/>
            <FormSection courseName="3D-Моделирование" className="form-section"/>
        </>
    )
}