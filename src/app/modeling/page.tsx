import { MainScreen } from "@/components/MainScreen/MainScreen";
import imgMain from "@/assets/mainScreen-modeling.png";
import { WhatWeDo } from "@/components/Blender/WhatWeDo/WhatWeDo";
import { WhyBlender } from "@/components/Blender/WhyBlender/WhyBlender";
import { WhatToLearn } from "@/components/Blender/WhatToLearn/WhatToLearn";
import { FormSection } from "@/components/FormSection/FormSection";
import { WhatToDo } from "@/components/Blender/WhatToDo/WhatToDo";
import { Prospects } from "@/components/Blender/Prospects/Prospects";
import { Prices } from "@/components/Prices/Prices";

export default function Modeling() {
    return (
        <>
            <MainScreen img={imgMain} ageRange="1-9 класс" scrollTarget="what-we-do">
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
            <Prices variant="orange"/>
            <FormSection courseName="3D-Моделирование" className="form-section"/>
        </>
    )
}